export type ClaseVideo = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnail: string;
  youtubeUrl: string;
  youtubeMusicUrl: string;
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

const YT_API_URL = "https://www.googleapis.com/youtube/v3/search";

function extractClassNumber(title: string): number {
  const match = title.match(/clase\s+(\d+)/i);
  return match ? Number.parseInt(match[1], 10) : 0;
}

export function sortClasesByPublishedAt(
  clases: ClaseVideo[],
  direction: "desc" | "asc" = "desc",
): ClaseVideo[] {
  return [...clases].sort((a, b) => {
    const dateDiff =
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    if (dateDiff !== 0) {
      return direction === "desc" ? dateDiff : -dateDiff;
    }

    const numberDiff = extractClassNumber(b.title) - extractClassNumber(a.title);
    return direction === "desc" ? numberDiff : -numberDiff;
  });
}

export async function fetchClaseVideosFromYoutube(): Promise<ClaseVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return [];
  }

  const params = new URLSearchParams({
    key: apiKey,
    channelId,
    part: "snippet",
    order: "date",
    type: "video",
    maxResults: "25",
    q: "Clase",
  });

  const response = await fetch(`${YT_API_URL}?${params.toString()}`, {
    next: { revalidate: 900 },
  });

  if (!response.ok) {
    return [];
  }

  const data = (await response.json()) as YoutubeSearchResponse;
  const items = data.items ?? [];

  const clases = items
    .filter((item) => {
      const title = item.snippet?.title?.trim() ?? "";
      return /^clase\b/i.test(title);
    })
    .map((item) => {
      const videoId = item.id?.videoId ?? "";
      const title = item.snippet?.title ?? "Clase";
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

  return sortClasesByPublishedAt(clases, "desc");
}
