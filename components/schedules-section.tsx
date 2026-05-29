import type { ReactNode } from "react";
import {
  FaBookOpen,
  FaCalendarDays,
  FaChurch,
  FaClock,
  FaFacebookF,
  FaHandsPraying,
  FaHeadphones,
  FaInstagram,
  FaLocationDot,
  FaMugHot,
  FaPersonDress,
  FaUsers,
} from "react-icons/fa6";

type TimeSlot = {
  label?: string;
  time: string;
};

type ScheduleEvent = {
  title: string;
  frequency: string;
  timeSlots: TimeSlot[];
  description: string;
  icon: ReactNode;
  accent: string;
  iconBg: string;
  badge: string;
  action?: {
    href: string;
    label: string;
    external?: boolean;
    className: string;
    icon: ReactNode;
  };
};

const scheduleEvents: ScheduleEvent[] = [
  {
    title: "Cultos Dominicales",
    frequency: "Todos los domingos",
    timeSlots: [
      { label: "1° Culto", time: "8:00 AM" },
      { label: "2° Culto", time: "10:00 AM" },
    ],
    description:
      "Adoracion congregacional, predicacion y koinonia. Transmision en vivo por Facebook.",
    icon: <FaChurch />,
    accent: "from-emerald-500/20 to-green-500/10",
    iconBg:
      "bg-[var(--church-100)] dark:bg-[var(--church-900)]/40 text-[var(--church-700)] dark:text-[var(--church-400)]",
    badge: "Dia Principal",
    action: {
      href: "https://www.facebook.com/iberzoficial/",
      label: "Ver transmision",
      external: true,
      className:
        "bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-600/20",
      icon: <FaFacebookF />,
    },
  },
  {
    title: "Culto de Oracion",
    frequency: "Cada martes",
    timeSlots: [{ time: "6:00 PM" }],
    description:
      "Tiempo de consagracion, intercesion y busqueda de la presencia de Dios en comunidad.",
    icon: <FaHandsPraying />,
    accent: "from-violet-500/20 to-purple-500/10",
    iconBg: "bg-violet-100 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400",
    badge: "Consagracion",
    action: {
      href: "#ubicacion",
      label: "Asistir presencial",
      className:
        "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800",
      icon: <FaLocationDot />,
    },
  },
  {
    title: "Estudio Biblico",
    frequency: "Cada jueves",
    timeSlots: [{ time: "6:30 PM" }],
    description:
      "Instruccion biblica expositiva para crecer en el conocimiento de las Escrituras.",
    icon: <FaBookOpen />,
    accent: "from-amber-500/20 to-yellow-500/10",
    iconBg: "bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400",
    badge: "Instruccion",
    action: {
      href: "https://music.youtube.com/playlist?list=PLoxl3jPkHFnS5gQ8EECpgOZErsfHu5TU0&si=wpOLKg_tFxX0RpeU",
      label: "Escuchar podcast",
      external: true,
      className:
        "bg-[var(--church-700)] hover:bg-[var(--church-600)] text-white shadow-sm shadow-[color:var(--church-700)]/20",
      icon: <FaHeadphones />,
    },
  },
  {
    title: "Club Biblico",
    frequency: "Cada sabado",
    timeSlots: [{ time: "2:30 PM" }],
    description:
      "Ministerio para prejovenes y jovenes con actividades, devocionales y ensenanza biblica.",
    icon: <FaUsers />,
    accent: "from-pink-500/20 to-rose-500/10",
    iconBg: "bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400",
    badge: "Jovenes",
    action: {
      href: "https://www.instagram.com/cbiberz",
      label: "Ver Club Biblico",
      external: true,
      className:
        "bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white shadow-sm",
      icon: <FaInstagram />,
    },
  },
  {
    title: "Reunion de Mujeres",
    frequency: "Cada 2° sabado del mes",
    timeSlots: [{ time: "3:00 PM" }],
    description:
      "Encuentro de edificacion, oracion y comunidad entre hermanas de la iglesia.",
    icon: <FaPersonDress />,
    accent: "from-rose-500/20 to-pink-500/10",
    iconBg: "bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400",
    badge: "Ministerio de Mujeres",
  },
  {
    title: "Desayuno de Mujeres",
    frequency: "Cada ultimo sabado del mes",
    timeSlots: [{ time: "8:30 AM" }],
    description:
      "Desayuno de convivencia, alabanza y reflexion entre hermanas para iniciar el dia en comunidad.",
    icon: <FaMugHot />,
    accent: "from-amber-500/20 to-orange-500/10",
    iconBg:
      "bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400",
    badge: "Ministerio de Mujeres",
  },
];

function EventCard({ event }: { event: ScheduleEvent }) {
  return (
    <article
      className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br ${event.accent} p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:from-slate-950 dark:to-slate-900 sm:p-8`}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div
          className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl sm:h-16 sm:w-16 sm:text-3xl ${event.iconBg}`}
        >
          {event.icon}
        </div>
        <span className="inline-flex max-w-[58%] items-start justify-end gap-1.5 rounded-xl bg-white/90 px-2.5 py-2 text-right text-[11px] font-semibold leading-snug text-slate-700 shadow-sm dark:bg-slate-900/90 dark:text-slate-200 sm:max-w-[12rem] sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm">
          <FaCalendarDays className="mt-0.5 shrink-0 text-[var(--church-700)] dark:text-[var(--church-400)]" />
          {event.frequency}
        </span>
      </div>

      <div className="min-w-0">
        <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-600 dark:bg-slate-900/80 dark:text-slate-300">
          {event.badge}
        </span>
        <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
          {event.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {event.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
          {event.timeSlots.map((slot) => (
            <span
              key={`${event.title}-${slot.label ?? slot.time}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--church-700)] px-3 py-2 text-xs font-bold text-white shadow-md shadow-[color:var(--church-700)]/25 sm:px-4 sm:py-2.5 sm:text-sm"
            >
              <FaClock />
              {slot.label ? `${slot.label}: ${slot.time}` : slot.time}
            </span>
          ))}
        </div>
        {event.action && (
          <a
            href={event.action.href}
            target={event.action.external ? "_blank" : undefined}
            rel={event.action.external ? "noopener noreferrer" : undefined}
            className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-colors sm:w-auto ${event.action.className}`}
          >
            {event.action.icon}
            {event.action.label}
          </a>
        )}
      </div>
    </article>
  );
}

export default function SchedulesSection() {
  return (
    <section
      id="horarios"
      className="scroll-mt-24 relative overflow-hidden border-t border-slate-200 bg-white py-14 dark:border-slate-800 dark:bg-slate-900 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(21,128,61,0.08),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(74,222,128,0.06),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <span className="inline-flex rounded-full border border-[var(--church-200)] bg-[var(--church-50)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--church-800)] dark:border-[var(--church-800)]/50 dark:bg-[var(--church-900)]/30 dark:text-[var(--church-300)]">
            Reuniones
          </span>
          <h2 className="mt-4 font-serif text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            Horarios y Actividades
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Cultos semanales, estudios biblicos y encuentros especiales. Te
            esperamos en cada reunion.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {scheduleEvents.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
