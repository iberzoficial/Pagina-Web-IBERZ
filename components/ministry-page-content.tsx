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
    <main className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <section className="border-b border-slate-200 bg-slate-50 py-14 dark:border-slate-800 dark:bg-slate-900 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--church-700)] hover:text-[var(--church-600)]"
          >
            <FaArrowLeft className="text-xs" />
            Volver al inicio
          </Link>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-start">
            <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--church-100)] text-3xl text-[var(--church-700)] dark:bg-[var(--church-900)]/40 dark:text-[var(--church-400)]">
              <Icon />
            </span>
            <div>
              <span className="inline-flex rounded-full border border-[var(--church-200)] bg-[var(--church-50)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--church-800)] dark:border-[var(--church-800)]/50 dark:bg-[var(--church-900)]/30 dark:text-[var(--church-300)]">
                {ministry.badge}
              </span>
              <h1 className="mt-4 font-serif text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                {ministry.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                {ministry.summary}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-4xl gap-8 px-4 sm:px-6 lg:px-8">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Acerca del ministerio
            </h2>
            <p className="mt-4 text-justify text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              {ministry.description}
            </p>
          </article>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="mb-4 flex items-center gap-2 text-[var(--church-700)] dark:text-[var(--church-400)]">
                <FaCalendarDays />
                <h2 className="text-sm font-extrabold uppercase tracking-widest">
                  Horarios
                </h2>
              </div>
              <ul className="space-y-3">
                {ministry.schedules.map((schedule) => (
                  <li
                    key={`${schedule.label}-${schedule.time}`}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
                  >
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {schedule.label}
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {schedule.time}
                    </p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
              <h2 className="text-sm font-extrabold uppercase tracking-widest text-[var(--church-700)] dark:text-[var(--church-400)]">
                Enfoque
              </h2>
              <ul className="mt-4 space-y-3">
                {ministry.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--church-700)] dark:bg-[var(--church-400)]" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            {ministry.action && (
              <a
                href={ministry.action.href}
                target={ministry.action.external ? "_blank" : undefined}
                rel={ministry.action.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center rounded-xl bg-[var(--church-700)] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--church-600)]"
              >
                {ministry.action.label}
              </a>
            )}
            <Link
              href="/#horarios"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-[var(--church-200)] hover:bg-[var(--church-50)] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Ver todos los horarios
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
