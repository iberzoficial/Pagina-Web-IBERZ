"use client";

import { ministryLinks } from "@/lib/ministries";
import { mainNavLinks } from "@/lib/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaCalendarDays,
  FaFacebookMessenger,
  FaHeadphones,
  FaHouse,
  FaShareNodes,
  FaUsers,
  FaXmark,
} from "react-icons/fa6";

type SheetView = "ministerios" | "mas" | null;

const quickLinks = [
  { href: "/#inicio", label: "Inicio", icon: FaHouse },
  { href: "/#podcast", label: "Podcast", icon: FaHeadphones },
  { href: "/#horarios", label: "Horarios", icon: FaCalendarDays },
] as const;

const moreLinks = mainNavLinks.filter(
  (link) => !quickLinks.some((item) => item.href === link.href),
);

export default function MobileBottomNav() {
  const [sheet, setSheet] = useState<SheetView>(null);

  function closeSheet() {
    setSheet(null);
  }

  useEffect(() => {
    document.body.style.overflow = sheet ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheet]);

  return (
    <>
      <nav
        aria-label="Navegación principal móvil"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95 md:hidden"
      >
        <div className="mx-auto grid max-w-lg grid-cols-5 px-2 pt-1">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex flex-col items-center justify-center gap-1 rounded-xl px-1 py-2.5 text-[10px] font-semibold text-slate-600 transition-colors hover:text-[var(--church-700)] dark:text-slate-300 dark:hover:text-[var(--church-400)]"
              >
                <Icon className="text-base" />
                <span>{link.label}</span>
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() =>
              setSheet((current) => (current === "ministerios" ? null : "ministerios"))
            }
            aria-expanded={sheet === "ministerios"}
            className={`flex flex-col items-center justify-center gap-1 rounded-xl px-1 py-2.5 text-[10px] font-semibold transition-colors ${
              sheet === "ministerios"
                ? "text-[var(--church-700)] dark:text-[var(--church-400)]"
                : "text-slate-600 hover:text-[var(--church-700)] dark:text-slate-300 dark:hover:text-[var(--church-400)]"
            }`}
          >
            <FaUsers className="text-base" />
            <span>Ministerios</span>
          </button>

          <button
            type="button"
            onClick={() => setSheet((current) => (current === "mas" ? null : "mas"))}
            aria-expanded={sheet === "mas"}
            className={`flex flex-col items-center justify-center gap-1 rounded-xl px-1 py-2.5 text-[10px] font-semibold transition-colors ${
              sheet === "mas"
                ? "text-[var(--church-700)] dark:text-[var(--church-400)]"
                : "text-slate-600 hover:text-[var(--church-700)] dark:text-slate-300 dark:hover:text-[var(--church-400)]"
            }`}
          >
            <FaShareNodes className="text-base" />
            <span>Más</span>
          </button>
        </div>
      </nav>

      {sheet && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={closeSheet}
            className="absolute inset-0 bg-slate-950/45 backdrop-blur-[2px]"
          />

          <div className="absolute inset-x-0 bottom-0 max-h-[78vh] overflow-y-auto rounded-t-3xl border border-slate-200 bg-white pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-2xl dark:border-slate-700 dark:bg-slate-900">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/95">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {sheet === "ministerios" ? "Ministerios" : "Más opciones"}
              </h2>
              <button
                type="button"
                onClick={closeSheet}
                aria-label="Cerrar panel"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-200"
              >
                <FaXmark />
              </button>
            </div>

            <div className="space-y-1 px-4 py-3">
              {sheet === "ministerios" &&
                ministryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeSheet}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[var(--church-700)] dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    {link.label}
                  </Link>
                ))}

              {sheet === "mas" && (
                <>
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeSheet}
                      className="block rounded-xl px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[var(--church-700)] dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <a
                    href="https://m.me/111972397092155"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeSheet}
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--church-700)] px-4 py-3 text-sm font-semibold text-white hover:bg-[var(--church-600)]"
                  >
                    <FaFacebookMessenger />
                    Conectarse
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
