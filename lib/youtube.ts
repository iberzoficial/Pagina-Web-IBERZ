import { siteConfig } from "@/lib/site";

export type YoutubeVideo = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnail: string;
  youtubeUrl: string;
  youtubeMusicUrl: string;
};

/** @deprecated Use YoutubeVideo */
export type ClaseVideo = YoutubeVideo;

export type MediaCollectionId = "classes" | "sunday" | "prayer";
export type MediaPlayMode = "music" | "video";

export type MediaCollectionConfig = {
  id: MediaCollectionId;
  label: string;
  playMode: MediaPlayMode;
  badge: string;
  heading: string;
  description: string;
  featuredLabel: string;
  listLabel: string;
  emptyLabel: string;
  playlistUrl?: string;
  queries: Array<{ q: string; titleRegex: RegExp }>;
};

type YoutubeSearchResponse = {
  items?: Array<{
    id?: { videoId?: string };
    snippet?: {
      title?: string;
      publishedAt?: string;
      thumbnails?: { medium?: { url?: string }; default?: { url?: string } };
    };
  }>;
};

type FetchYoutubeVideosOptions = {
  q: string;
  titleRegex: RegExp;
  maxResults?: number;
  order?: "date" | "relevance";
};

const YT_API_URL = "https://www.googleapis.com/youtube/v3/search";

export const MEDIA_COLLECTIONS: Record<MediaCollectionId, MediaCollectionConfig> =
  {
    classes: {
      id: "classes",
      label: "Clases",
      playMode: "music",
      badge: "Podcast y estudios",
      heading: "Edificación bíblica en audio",
      description:
        "Estudios expositivos versículo por versículo. Serie del Evangelio de Mateo disponible de forma gratuita en YouTube Music.",
      featuredLabel: "Última clase",
      listLabel: "Clases disponibles",
      emptyLabel: "clases",
      playlistUrl: siteConfig.media.classesPlaylistUrl,
      queries: [{ q: "Clase", titleRegex: /^clase\b/i }],
    },
    sunday: {
      id: "sunday",
      label: "Domingos",
      playMode: "video",
      badge: "Cultos dominicales",
      heading: "Transmisiones del domingo",
      description:
        "Primer y segundo culto dominical en video. Revive la adoración y la predicación cuando no pudiste estar presente.",
      featuredLabel: "Últimos cultos",
      listLabel: "Cultos disponibles",
      emptyLabel: "cultos",
      queries: [
        { q: "Primer Culto", titleRegex: /primer\s+culto/i },
        { q: "Segundo Culto", titleRegex: /segundo\s+culto/i },
      ],
    },
    prayer: {
      id: "prayer",
      label: "Oración",
      playMode: "music",
      badge: "Oración y milagros",
      heading: "Cultos de oración y milagros",
      description:
        "Tiempo de intercesión y búsqueda de la presencia de Dios. Escucha los cultos de oración en YouTube Music.",
      featuredLabel: "Último culto",
      listLabel: "Cultos disponibles",
      emptyLabel: "cultos",
      queries: [
        {
          q: "Oración",
          titleRegex: /oraci[oó]n|milagros/i,
        },
      ],
    },
  };

export function isMediaCollectionId(value: string): value is MediaCollectionId {
  return value === "classes" || value === "sunday" || value === "prayer";
}

export function extractClassNumber(title: string): number {
  const match = title.match(/clase\s+(\d+)/i);
  return match ? Number.parseInt(match[1], 10) : 0;
}

export function getSundayServiceKind(
  title: string,
): "primer" | "segundo" | null {
  if (/primer\s+culto/i.test(title)) return "primer";
  if (/segundo\s+culto/i.test(title)) return "segundo";
  return null;
}

export function sortVideosByPublishedAt(
  videos: YoutubeVideo[],
  direction: "desc" | "asc" = "desc",
): YoutubeVideo[] {
  return [...videos].sort((a, b) => {
    const dateDiff =
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    if (dateDiff !== 0) {
      return direction === "desc" ? dateDiff : -dateDiff;
    }

    const numberDiff = extractClassNumber(b.title) - extractClassNumber(a.title);
    return direction === "desc" ? numberDiff : -numberDiff;
  });
}

/** @deprecated Use sortVideosByPublishedAt */
export function sortClasesByPublishedAt(
  clases: YoutubeVideo[],
  direction: "desc" | "asc" = "desc",
): YoutubeVideo[] {
  return sortVideosByPublishedAt(clases, direction);
}

function dedupeVideos(videos: YoutubeVideo[]): YoutubeVideo[] {
  const seen = new Set<string>();
  return videos.filter((video) => {
    if (!video.id || seen.has(video.id)) return false;
    seen.add(video.id);
    return true;
  });
}

export async function fetchYoutubeVideos(
  options: FetchYoutubeVideosOptions,
): Promise<YoutubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return [];
  }

  const params = new URLSearchParams({
    key: apiKey,
    channelId,
    part: "snippet",
    order: options.order ?? "date",
    type: "video",
    maxResults: String(options.maxResults ?? 25),
    q: options.q,
  });

  const response = await fetch(`${YT_API_URL}?${params.toString()}`, {
    next: { revalidate: 900 },
  });

  if (!response.ok) {
    return [];
  }

  const data = (await response.json()) as YoutubeSearchResponse;
  const items = data.items ?? [];

  return items
    .filter((item) => {
      const title = item.snippet?.title?.trim() ?? "";
      return options.titleRegex.test(title);
    })
    .map((item) => {
      const videoId = item.id?.videoId ?? "";
      const title = item.snippet?.title ?? "Video";
      const publishedAt = item.snippet?.publishedAt ?? new Date().toISOString();
      const thumbnail =
        item.snippet?.thumbnails?.medium?.url ??
        item.snippet?.thumbnails?.default?.url ??
        "";

      return {
        id: videoId,
        title,
        publishedAt,
        thumbnail,
        youtubeUrl: `https://www.youtube.com/watch?v=${videoId}`,
        youtubeMusicUrl: `https://music.youtube.com/watch?v=${videoId}`,
      };
    })
    .filter((video) => Boolean(video.id));
}

export async function fetchMediaCollection(
  collectionId: MediaCollectionId,
): Promise<YoutubeVideo[]> {
  const config = MEDIA_COLLECTIONS[collectionId];
  const batches = await Promise.all(
    config.queries.map((query) =>
      fetchYoutubeVideos({
        q: query.q,
        titleRegex: query.titleRegex,
      }),
    ),
  );

  return sortVideosByPublishedAt(dedupeVideos(batches.flat()), "desc");
}

export async function fetchClaseVideosFromYoutube(): Promise<YoutubeVideo[]> {
  return fetchMediaCollection("classes");
}
