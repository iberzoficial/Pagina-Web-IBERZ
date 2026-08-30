import type { Ministry } from "@/lib/ministries";
import Link from "next/link";
import {
  FaArrowLeft,
  FaBookBible,
  FaCalendarDays,
  FaHandsHoldingChild,
  FaPersonDress,
} from "react-icons/fa6";

const ministryIcons = {
  "club-biblico": FaBookBible,
  "adulto-mayor": FaHandsHoldingChild,
  "mujeres-virtuosas": FaPersonDress,
} as const;

type MinistryPageContentProps = {
  ministry: Ministry;
};

export default function MinistryPageContent({
  ministry,
}: MinistryPageContentProps) {
  const Icon = ministryIcons[ministry.slug as keyof typeof ministryIcons];

  return (
    <main
      className="text-[var(--color-ink)] dark:text-slate-100"
      style={{ background: "var(--color-paper)" }}
    >
      {/* ── Hero del ministerio ─────────────────────────────── */}
      <section
        className="border-b border-[var(--color-rule)] py-14 dark:border-slate-800 dark:bg-slate-900 sm:py-20"
        style={{ background: "var(--color-paper-2)" }}
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-dim)]"
          >
            <FaArrowLeft className="text-xs" />
            Volver al inicio
          </Link>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-start">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-pale)] text-2xl text-[var(--color-accent)] dark:bg-emerald-950/40 dark:text-[var(--church-400)]">
              <Icon />
            </span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                {ministry.badge}
              </p>
              <h1 className="mt-2 font-serif text-3xl font-bold leading-tight text-[var(--color-ink)] dark:text-white sm:text-4xl">
                {ministry.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-2)] dark:text-slate-300 sm:text-lg">
                {ministry.summary}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cuerpo ─────────────────────────────────────────── */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-4xl gap-6 px-4 sm:px-6 lg:px-8">

          {/* Descripción */}
          <article className="rounded-2xl border border-[var(--color-rule)] bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <h2 className="font-serif text-xl font-bold text-[var(--color-ink)] dark:text-white sm:text-2xl">
              Acerca del ministerio
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-2)] dark:text-slate-300 sm:text-base">
              {ministry.description}
            </p>
          </article>

          {/* Horarios y Enfoque */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <article className="rounded-2xl border border-[var(--color-rule)] bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex items-center gap-2 text-[var(--color-accent)] dark:text-[var(--church-400)]">
                <FaCalendarDays className="text-sm" />
                <h2 className="text-sm font-bold text-[var(--color-ink)] dark:text-white">
                  Horarios
                </h2>
              </div>
              <ul className="space-y-2.5">
                {ministry.schedules.map((schedule) => (
                  <li
                    key={`${schedule.label}-${schedule.time}`}
                    className="rounded-xl border border-[var(--color-rule)] bg-[var(--color-paper)] px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
                  >
                    <p className="text-sm font-semibold text-[var(--color-ink)] dark:text-white">
                      {schedule.label}
                    </p>
                    <p className="mt-0.5 text-sm text-[var(--color-ink-2)] dark:text-slate-300">
                      {schedule.time}
                    </p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-[var(--color-rule)] bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-4 text-sm font-bold text-[var(--color-ink)] dark:text-white">
                Enfoque
              </h2>
              <ul className="space-y-3">
                {ministry.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--color-ink-2)] dark:text-slate-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row">
            {ministry.action && (
              <a
                href={ministry.action.href}
                target={ministry.action.external ? "_blank" : undefined}
                rel={
                  ministry.action.external ? "noopener noreferrer" : undefined
                }
                className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-dim)]"
              >
                {ministry.action.label}
              </a>
            )}
            <Link
              href="/#horarios"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--color-rule)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-[var(--color-accent)] dark:hover:text-[var(--color-accent)]"
            >
              Ver todos los horarios
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
