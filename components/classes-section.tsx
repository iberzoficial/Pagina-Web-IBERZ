"use client";

import { useEffect, useMemo, useState } from "react";
import { FaArrowUpRightFromSquare, FaBookOpen, FaHeadphones, FaPlay } from "react-icons/fa6";

type ClaseVideo = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnail: string;
  youtubeUrl: string;
  youtubeMusicUrl: string;
};

const fallbackClases: ClaseVideo[] = [
  {
    id: "bNaYe86MQkY",
    title: "Clase 2: Evangelio de Mateo",
    publishedAt: new Date().toISOString(),
    thumbnail: "",
    youtubeUrl: "https://www.youtube.com/watch?v=bNaYe86MQkY",
    youtubeMusicUrl: "https://music.youtube.com/watch?v=bNaYe86MQkY&si=XgDbaRj5UmEBVWYG",
  },
  {
    id: "skbcYvzJqKc",
    title: "Clase 3: Evangelio de Mateo",
    publishedAt: new Date().toISOString(),
    thumbnail: "",
    youtubeUrl: "https://www.youtube.com/watch?v=skbcYvzJqKc",
    youtubeMusicUrl: "https://music.youtube.com/watch?v=skbcYvzJqKc&si=NPseiXBi6dpPrvS_",
  },
  {
    id: "EbUn2BW9XPw",
    title: "Clase 4: Evangelio de Mateo",
    publishedAt: new Date().toISOString(),
    thumbnail: "",
    youtubeUrl: "https://www.youtube.com/watch?v=EbUn2BW9XPw",
    youtubeMusicUrl: "https://music.youtube.com/watch?v=EbUn2BW9XPw&si=Cd9bedrt_A-NA2CB",
  },
  {
    id: "_w4LU6jxWTI",
    title: "Clase 5: Evangelio de Mateo",
    publishedAt: new Date().toISOString(),
    thumbnail: "",
    youtubeUrl: "https://www.youtube.com/watch?v=_w4LU6jxWTI",
    youtubeMusicUrl: "https://music.youtube.com/watch?v=_w4LU6jxWTI&si=OYMn8uJsjLzu82Vr",
  },
  {
    id: "LdIrevP7CAk",
    title: "Clase 6: Evangelio de Mateo",
    publishedAt: new Date().toISOString(),
    thumbnail: "",
    youtubeUrl: "https://www.youtube.com/watch?v=LdIrevP7CAk",
    youtubeMusicUrl: "https://music.youtube.com/watch?v=LdIrevP7CAk&si=xcUYeJ1HZI3UYosK",
  },
  {
    id: "NOoPyKfJbks",
    title: "Clase 7: Evangelio de Mateo",
    publishedAt: new Date().toISOString(),
    thumbnail: "",
    youtubeUrl: "https://www.youtube.com/watch?v=NOoPyKfJbks",
    youtubeMusicUrl: "https://music.youtube.com/watch?v=NOoPyKfJbks&si=eXyvf-J5sECmO-BB",
  },
  {
    id: "jgm2U7S-l8E",
    title: "Clase 8: Evangelio de Mateo",
    publishedAt: new Date().toISOString(),
    thumbnail: "",
    youtubeUrl: "https://www.youtube.com/watch?v=jgm2U7S-l8E",
    youtubeMusicUrl: "https://music.youtube.com/watch?v=jgm2U7S-l8E&si=RzS0yCut4NbHl3_h",
  },
  {
    id: "MB_i6IGx990",
    title: "Clase 9: Evangelio de Mateo",
    publishedAt: new Date().toISOString(),
    thumbnail: "",
    youtubeUrl: "https://www.youtube.com/watch?v=MB_i6IGx990",
    youtubeMusicUrl: "https://music.youtube.com/watch?v=MB_i6IGx990&si=Aqyi1EMbI9jQozKQ",
  },
  {
    id: "GYu_aAEsDjk",
    title: "Clase 10: Evangelio de Mateo",
    publishedAt: new Date().toISOString(),
    thumbnail: "",
    youtubeUrl: "https://www.youtube.com/watch?v=GYu_aAEsDjk",
    youtubeMusicUrl: "https://music.youtube.com/watch?v=GYu_aAEsDjk&si=gyTr7n6bx2hURlqs",
  },
  {
    id: "naQXuUBiENo",
    title: "Clase 11: Evangelio de Mateo",
    publishedAt: new Date().toISOString(),
    thumbnail: "",
    youtubeUrl: "https://www.youtube.com/watch?v=naQXuUBiENo",
    youtubeMusicUrl: "https://music.youtube.com/watch?v=naQXuUBiENo&si=XDA4uQTh_aSigKsJ",
  },
  {
    id: "oJlj3rs1rNs",
    title: "Clase 12: Evangelio de Mateo",
    publishedAt: new Date().toISOString(),
    thumbnail: "",
    youtubeUrl: "https://www.youtube.com/watch?v=oJlj3rs1rNs",
    youtubeMusicUrl: "https://music.youtube.com/watch?v=oJlj3rs1rNs&si=hxLCLZEWWVA07qQi",
  },
  {
    id: "z6zaeTe4cRY",
    title: "Clase 13: Evangelio de Mateo",
    publishedAt: new Date().toISOString(),
    thumbnail: "",
    youtubeUrl: "https://www.youtube.com/watch?v=z6zaeTe4cRY",
    youtubeMusicUrl: "https://music.youtube.com/watch?v=z6zaeTe4cRY&si=MDI_DY35DTC_qHbz",
  },
  {
    id: "RqLidAsosqw",
    title: "Clase 14: Evangelio de Mateo",
    publishedAt: new Date().toISOString(),
    thumbnail: "",
    youtubeUrl: "https://www.youtube.com/watch?v=RqLidAsosqw",
    youtubeMusicUrl: "https://music.youtube.com/watch?v=RqLidAsosqw&si=wOTSuG0DfjUxOMkv",
  },
];

export default function ClassesSection() {
  const [clases, setClases] = useState<ClaseVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const response = await fetch("/api/classes");
        const data = (await response.json()) as { clases?: ClaseVideo[] };
        if (!active) return;
        if (Array.isArray(data.clases) && data.clases.length > 0) {
          setClases(data.clases);
        } else {
          setClases(fallbackClases);
        }
      } catch {
        if (active) setClases(fallbackClases);
      } finally {
        if (active) setLoading(false);
      }
    }

    load();
    return () => {
      active = false;
    };
  }, []);

  const latest = useMemo(() => clases[0], [clases]);

  return (
    <section
      id="podcast"
      className="scroll-mt-24 py-14 bg-slate-950 text-white dark:bg-slate-950 border-t border-slate-800 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 sm:p-5">
              <p className="text-xs uppercase tracking-widest text-church-400 font-bold mb-2">
                Ultima clase detectada
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center mb-2">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[var(--church-700)] to-emerald-500 text-white">
                  <FaBookOpen className="text-sm" />
                </span>
                <h3 className="text-lg sm:text-xl font-bold break-words">
                  {latest?.title ?? "Cargando clases..."}
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Estudio biblico expositivo secuencial
              </p>
              <p className="text-sm text-slate-400 mt-2">
                Esta tarjeta se actualiza automaticamente cuando suben un video
                cuyo titulo inicia con &quot;Clase&quot;.
              </p>
              {latest && (
                <a
                  href={latest.youtubeMusicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-4 w-full sm:w-auto items-center justify-center rounded-xl bg-[var(--church-700)] hover:bg-[var(--church-600)] px-4 py-2.5 text-sm font-bold transition-colors"
                >
                  <FaPlay className="mr-2 text-xs" />
                  Escuchar en YouTube Music
                </a>
              )}
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs uppercase tracking-widest text-slate-400 font-extrabold">
                  Clases disponibles
                </h4>
                <span className="text-xs text-church-400 font-semibold">
                  {clases.length} clases
                </span>
              </div>
              <div className="custom-scrollbar max-h-72 overflow-y-auto space-y-2 pr-2">
                {loading && (
                  <p className="text-sm text-slate-400">Cargando clases...</p>
                )}
                {!loading &&
                  clases.map((clase, index) => (
                    <a
                      key={clase.id}
                      href={clase.youtubeMusicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-2 rounded-xl border border-slate-800 bg-slate-950 p-3 hover:border-[var(--church-700)] hover:bg-[var(--church-900)]/20 transition-colors"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-church-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="truncate text-sm font-semibold text-slate-100">
                          {clase.title}
                        </span>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-1 text-xs text-slate-500">
                        <FaArrowUpRightFromSquare className="text-[10px]" />
                      </span>
                    </a>
                  ))}
              </div>
            </div>
          </div>

          <div className="space-y-5 order-1 lg:order-2">
            <span className="inline-flex rounded-full border border-church-500/25 bg-church-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-church-400">
              Podcast y estudios
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold leading-tight">
              Edificacion Biblica en Audio y Video
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              A traves de estudios expositivos profundos, analizamos versiculo
              por versiculo los libros sagrados. Ponemos a tu disposicion toda
              la serie interactiva del Evangelio de Mateo de forma gratuita en
              tu plataforma de audio favorita.
            </p>
            <a
              href="https://music.youtube.com/playlist?list=PLoxl3jPkHFnS5gQ8EECpgOZErsfHu5TU0&si=wpOLKg_tFxX0RpeU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 hover:bg-[var(--church-100)] transition-colors"
            >
              <FaHeadphones className="mr-2" />
              Abrir playlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
