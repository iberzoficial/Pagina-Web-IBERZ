"use client";

import { siteConfig } from "@/lib/site";
import {
  extractClassNumber,
  getSundayServiceKind,
  MEDIA_COLLECTIONS,
  sortVideosByPublishedAt,
  type MediaCollectionId,
  type YoutubeVideo,
} from "@/lib/youtube";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import {
  FaArrowUpRightFromSquare,
  FaBookOpen,
  FaChurch,
  FaHandsPraying,
  FaHeadphones,
  FaPlay,
  FaYoutube,
} from "react-icons/fa6";

type SundayFilter = "all" | "primer" | "segundo";

const TAB_QUERY_MAP: Record<string, MediaCollectionId> = {
  clases: "classes",
  classes: "classes",
  domingos: "sunday",
  sunday: "sunday",
  oracion: "prayer",
  prayer: "prayer",
};

const COLLECTION_QUERY: Record<MediaCollectionId, string> = {
  classes: "clases",
  sunday: "domingos",
  prayer: "oracion",
};

const fallbackClasses: YoutubeVideo[] = [
  {
    id: "bNaYe86MQkY",
    title: "Clase 2: Evangelio de Mateo",
    publishedAt: "2024-01-02T00:00:00.000Z",
    thumbnail: "",
    youtubeUrl: "https://www.youtube.com/watch?v=bNaYe86MQkY",
    youtubeMusicUrl: "https://music.youtube.com/watch?v=bNaYe86MQkY",
  },
  {
    id: "skbcYvzJqKc",
    title: "Clase 3: Evangelio de Mateo",
    publishedAt: "2024-01-03T00:00:00.000Z",
    thumbnail: "",
    youtubeUrl: "https://www.youtube.com/watch?v=skbcYvzJqKc",
    youtubeMusicUrl: "https://music.youtube.com/watch?v=skbcYvzJqKc",
  },
  {
    id: "EbUn2BW9XPw",
    title: "Clase 4: Evangelio de Mateo",
    publishedAt: "2024-01-04T00:00:00.000Z",
    thumbnail: "",
    youtubeUrl: "https://www.youtube.com/watch?v=EbUn2BW9XPw",
    youtubeMusicUrl: "https://music.youtube.com/watch?v=EbUn2BW9XPw",
  },
];

const fallbackByCollection: Record<MediaCollectionId, YoutubeVideo[]> = {
  classes: fallbackClasses,
  sunday: [],
  prayer: [],
};

function formatShortDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("es-SV", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

function formatRelativeDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";

  const diffMs = Date.now() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "Hoy";
  if (diffDays === 1) return "Ayer";
  if (diffDays < 7) return `Hace ${diffDays} días`;
  return formatShortDate(iso);
}

function listBadge(video: YoutubeVideo, collection: MediaCollectionId): string {
  if (collection === "classes") {
    const n = extractClassNumber(video.title);
    if (n > 0) return String(n).padStart(2, "0");
  }

  if (collection === "sunday") {
    const kind = getSundayServiceKind(video.title);
    if (kind === "primer") return "1°";
    if (kind === "segundo") return "2°";
  }

  const date = new Date(video.publishedAt);
  if (!Number.isNaN(date.getTime())) {
    return String(date.getDate()).padStart(2, "0");
  }

  return "•";
}

function readCollectionFromLocation(): MediaCollectionId {
  if (typeof window === "undefined") return "classes";

  const params = new URLSearchParams(window.location.search);
  let tab = params.get("tab")?.toLowerCase() ?? "";

  if (!tab && window.location.hash.includes("?")) {
    const hashQuery = window.location.hash.split("?")[1] ?? "";
    tab = new URLSearchParams(hashQuery).get("tab")?.toLowerCase() ?? "";
  }

  if (tab && TAB_QUERY_MAP[tab]) return TAB_QUERY_MAP[tab];

  return "classes";
}

function syncCollectionToUrl(collection: MediaCollectionId) {
  if (typeof window === "undefined") return;

  const url = new URL(window.location.href);
  url.hash = "medios";
  url.searchParams.set("tab", COLLECTION_QUERY[collection]);
  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  window.dispatchEvent(new Event("medios-tab-change"));
}

function subscribeMediaTab(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  window.addEventListener("hashchange", onStoreChange);
  window.addEventListener("medios-tab-change", onStoreChange);
  return () => {
    window.removeEventListener("popstate", onStoreChange);
    window.removeEventListener("hashchange", onStoreChange);
    window.removeEventListener("medios-tab-change", onStoreChange);
  };
}

function getMediaTabSnapshot(): MediaCollectionId {
  return readCollectionFromLocation();
}

function getMediaTabServerSnapshot(): MediaCollectionId {
  return "classes";
}

function CollectionIcon({ id }: { id: MediaCollectionId }) {
  if (id === "sunday") return <FaChurch className="text-sm" />;
  if (id === "prayer") return <FaHandsPraying className="text-sm" />;
  return <FaBookOpen className="text-sm" />;
}

function LoadingSkeleton({ videoMode }: { videoMode: boolean }) {
  return (
    <div className="space-y-3 animate-pulse" aria-hidden>
      {videoMode ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="h-44 rounded-2xl bg-slate-800/80" />
          <div className="h-44 rounded-2xl bg-slate-800/80" />
        </div>
      ) : (
        <div className="h-36 rounded-2xl bg-slate-800/80" />
      )}
      <div className="space-y-2">
        <div className="h-14 rounded-xl bg-slate-800/70" />
        <div className="h-14 rounded-xl bg-slate-800/70" />
        <div className="h-14 rounded-xl bg-slate-800/70" />
      </div>
    </div>
  );
}

export default function MediaHubSection() {
  const collection = useSyncExternalStore(
    subscribeMediaTab,
    getMediaTabSnapshot,
    getMediaTabServerSnapshot,
  );
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [sundayFilter, setSundayFilter] = useState<SundayFilter>("all");
  const cacheRef = useRef<Partial<Record<MediaCollectionId, YoutubeVideo[]>>>(
    {},
  );

  useEffect(() => {
    let active = true;

    async function load() {
      const cached = cacheRef.current[collection];
      if (cached) {
        setVideos(cached);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(`/api/media?collection=${collection}`);
        const data = (await response.json()) as { videos?: YoutubeVideo[] };
        if (!active) return;

        const next =
          Array.isArray(data.videos) && data.videos.length > 0
            ? data.videos
            : fallbackByCollection[collection];

        cacheRef.current[collection] = next;
        setVideos(next);
      } catch {
        if (!active) return;
        const next = fallbackByCollection[collection];
        cacheRef.current[collection] = next;
        setVideos(next);
      } finally {
        if (active) setLoading(false);
      }
    }

    load();
    return () => {
      active = false;
    };
  }, [collection]);

  const config = MEDIA_COLLECTIONS[collection];
  const isVideoMode = config.playMode === "video";

  const sortedDesc = useMemo(
    () => sortVideosByPublishedAt(videos, "desc"),
    [videos],
  );
  const sortedAsc = useMemo(
    () => sortVideosByPublishedAt(videos, "asc"),
    [videos],
  );

  const latest = sortedDesc[0];
  const latestPrimer = sortedDesc.find(
    (video) => getSundayServiceKind(video.title) === "primer",
  );
  const latestSegundo = sortedDesc.find(
    (video) => getSundayServiceKind(video.title) === "segundo",
  );

  const listVideos = useMemo(() => {
    if (collection !== "sunday" || sundayFilter === "all") return sortedAsc;
    return sortedAsc.filter(
      (video) => getSundayServiceKind(video.title) === sundayFilter,
    );
  }, [collection, sundayFilter, sortedAsc]);

  function selectCollection(next: MediaCollectionId) {
    setSundayFilter("all");
    syncCollectionToUrl(next);
  }

  return (
    <section
      id="medios"
      className="scroll-mt-24 border-t border-slate-800 bg-slate-950 py-14 text-white dark:bg-slate-950 sm:py-20"
    >
      <div id="podcast" className="sr-only" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <div className="mb-6 space-y-4 text-center">
            <span className="inline-flex rounded-full border border-church-500/25 bg-church-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-church-400">
              Medios
            </span>
          <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
            Edificación en audio y video
          </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Clases bíblicas, cultos dominicales y cultos de oración. Elige una
              colección para escuchar o ver el contenido más reciente.
            </p>
          </div>

          <div className="sticky top-16 z-20 -mx-4 overflow-x-auto bg-slate-950/95 px-4 py-2 backdrop-blur-md sm:static sm:mx-0 sm:overflow-visible sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none">
            <div className="flex flex-nowrap justify-center gap-2 sm:flex-wrap">
              {(Object.keys(MEDIA_COLLECTIONS) as MediaCollectionId[]).map(
                (id) => {
                  const item = MEDIA_COLLECTIONS[id];
                  const active = collection === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => selectCollection(id)}
                      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                        active
                          ? "bg-[var(--church-700)] text-white"
                          : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-[var(--church-700)] hover:text-white"
                      }`}
                    >
                      <CollectionIcon id={id} />
                      {item.label}
                    </button>
                  );
                },
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] xl:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
          <div className="order-2 space-y-6 lg:order-1">
            {loading ? (
              <LoadingSkeleton videoMode={isVideoMode} />
            ) : (
              <>
                {isVideoMode ? (
                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-church-400">
                      {config.featuredLabel}
                    </p>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {[
                        { label: "1° Culto", video: latestPrimer },
                        { label: "2° Culto", video: latestSegundo },
                      ].map(({ label, video }) => (
                        <div
                          key={label}
                          className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90"
                        >
                          {video?.thumbnail ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={video.thumbnail}
                              alt=""
                              className="aspect-video w-full object-cover"
                            />
                          ) : (
                            <div className="flex aspect-video items-center justify-center bg-slate-800 text-slate-500">
                              <FaYoutube className="text-3xl" />
                            </div>
                          )}
                          <div className="space-y-2 p-4">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-church-400">
                              {label}
                            </p>
                            <h3 className="text-sm font-bold leading-snug sm:text-base">
                              {video?.title ?? "Sin transmisiones recientes"}
                            </h3>
                            {video && (
                              <p className="text-xs text-slate-500">
                                {formatRelativeDate(video.publishedAt)}
                              </p>
                            )}
                            {video && (
                              <a
                                href={video.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--church-700)] px-4 py-2.5 text-sm font-bold transition-colors hover:bg-[var(--church-600)]"
                              >
                                <FaPlay className="mr-2 text-xs" />
                                Ver en YouTube
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <a
                      href={siteConfig.media.youtubeChannelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-bold transition-colors hover:border-[var(--church-700)] hover:text-[var(--church-400)] sm:w-auto"
                    >
                      <FaYoutube className="text-red-500" />
                      Ver todos los cultos en YouTube
                    </a>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 sm:p-6">
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-church-400">
                      {config.featuredLabel}
                    </p>
                    <div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--church-700)] text-white">
                        <CollectionIcon id={collection} />
                      </span>
                      <div className="min-w-0">
                        <h3 className="break-words text-lg font-bold sm:text-xl">
                          {latest?.title ?? `Sin ${config.emptyLabel} disponibles`}
                        </h3>
                        {latest && (
                          <p className="mt-1 text-xs text-slate-500">
                            {formatRelativeDate(latest.publishedAt)}
                          </p>
                        )}
                      </div>
                    </div>
                    {latest && (
                      <a
                        href={latest.youtubeMusicUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[var(--church-700)] px-4 py-2.5 text-sm font-bold transition-colors hover:bg-[var(--church-600)] sm:w-auto"
                      >
                        <FaPlay className="mr-2 text-xs" />
                        Escuchar en YouTube Music
                      </a>
                    )}
                  </div>
                )}

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-6">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      {config.listLabel}
                    </h4>
                    <span className="shrink-0 text-xs font-semibold text-church-400">
                      {listVideos.length} {config.emptyLabel}
                    </span>
                  </div>

                  {collection === "sunday" && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {(
                        [
                          ["all", "Todos"],
                          ["primer", "1° Culto"],
                          ["segundo", "2° Culto"],
                        ] as const
                      ).map(([value, label]) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setSundayFilter(value)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                            sundayFilter === value
                              ? "bg-white text-slate-900"
                              : "border border-slate-700 text-slate-400 hover:text-white"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="custom-scrollbar max-h-80 space-y-2 overflow-y-auto pr-2 sm:max-h-96">
                    {listVideos.length === 0 ? (
                      <p className="text-sm text-slate-400">
                        No hay {config.emptyLabel} para mostrar todavía.
                      </p>
                    ) : (
                      listVideos.map((video) => {
                        const href = isVideoMode
                          ? video.youtubeUrl
                          : video.youtubeMusicUrl;

                        return (
                          <a
                            key={video.id}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950 p-3.5 transition-colors hover:border-[var(--church-700)] hover:bg-[var(--church-900)]/20 sm:gap-4 sm:p-4"
                          >
                            {isVideoMode && video.thumbnail ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={video.thumbnail}
                                alt=""
                                className="h-12 w-20 shrink-0 rounded-lg object-cover"
                              />
                            ) : (
                              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-church-400">
                                {listBadge(video, collection)}
                              </span>
                            )}
                            <span className="min-w-0 flex-1">
                              <span className="block break-words text-sm font-semibold leading-snug text-slate-100">
                                {video.title}
                              </span>
                              <span className="mt-1 block text-xs text-slate-500">
                                {formatRelativeDate(video.publishedAt)}
                              </span>
                            </span>
                            <span className="mt-0.5 inline-flex shrink-0 items-center text-xs text-slate-500 transition-colors group-hover:text-church-400">
                              <FaArrowUpRightFromSquare className="text-[10px]" />
                            </span>
                          </a>
                        );
                      })
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="order-1 space-y-5 lg:order-2">
            <span className="inline-flex rounded-full border border-church-500/25 bg-church-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-church-400">
              {config.badge}
            </span>
            <h3 className="font-serif text-2xl font-bold leading-tight sm:text-3xl">
              {config.heading}
            </h3>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              {config.description}
            </p>
            {config.playlistUrl ? (
              <a
                href={config.playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-[var(--church-100)] sm:w-auto"
              >
                <FaHeadphones className="mr-2" />
                Abrir playlist
              </a>
            ) : isVideoMode ? (
              <a
                href={siteConfig.media.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-[var(--church-100)] sm:w-auto"
              >
                <FaYoutube className="mr-2" />
                Abrir canal
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
