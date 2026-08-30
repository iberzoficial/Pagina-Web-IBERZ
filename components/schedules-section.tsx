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
  FaMugHot,
  FaPersonDress,
  FaUsers,
  FaYoutube,
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
  secondaryAction?: {
    href: string;
    label: string;
    external?: boolean;
    className: string;
    icon: ReactNode;
  };
};

const scheduleEvents: ScheduleEvent[] = [
  {
    title: "Cultos dominicales",
    frequency: "Todos los domingos",
    timeSlots: [
      { label: "1° Culto", time: "8:00 AM" },
      { label: "2° Culto", time: "10:00 AM" },
    ],
    description:
      "Adoración congregacional, predicación y . Transmisión en vivo por Facebook.",
    icon: <FaChurch />,
    accent: "from-emerald-500/20 to-green-500/10",
    iconBg:
      "bg-[var(--church-100)] dark:bg-[var(--church-900)]/40 text-[var(--church-700)] dark:text-[var(--church-400)]",
    badge: "Día principal",
    action: {
      href: "https://www.facebook.com/iberzoficial/",
      label: "Ver transmisión",
      external: true,
      className:
        "bg-blue-600 hover:bg-blue-700 text-white",
      icon: <FaFacebookF />,
    },
    secondaryAction: {
      href: "https://www.youtube.com/@IglesiaBautistaElRedentorZacam",
      label: "Ver en YouTube",
      external: true,
      className: "bg-red-600 hover:bg-red-700 text-white",
      icon: <FaYoutube />,
    },
  },
  {
    title: "Culto de oración",
    frequency: "Cada martes",
    timeSlots: [{ time: "6:00 PM" }],
    description:
      "Tiempo de consagración, intercesión y búsqueda de la presencia de Dios en comunidad.",
    icon: <FaHandsPraying />,
    accent: "from-violet-500/20 to-purple-500/10",
    iconBg: "bg-violet-100 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400",
    badge: "Consagración",
    action: {
      href: "/?tab=oracion#medios",
      label: "Escuchar cultos",
      className:
        "bg-[var(--church-700)] hover:bg-[var(--church-600)] text-white",
      icon: <FaHeadphones />,
    },
  },
  {
    title: "Estudio bíblico",
    frequency: "Cada jueves",
    timeSlots: [{ time: "6:30 PM" }],
    description:
      "Instrucción bíblica expositiva para crecer en el conocimiento de las Escrituras.",
    icon: <FaBookOpen />,
    accent: "from-amber-500/20 to-yellow-500/10",
    iconBg: "bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400",
    badge: "Instrucción",
    action: {
      href: "/?tab=clases#medios",
      label: "Escuchar clases",
      className:
        "bg-[var(--church-700)] hover:bg-[var(--church-600)] text-white",
      icon: <FaHeadphones />,
    },
  },
  {
    title: "Club bíblico",
    frequency: "Cada sábado",
    timeSlots: [{ time: "2:30 PM" }],
    description:
      "Ministerio para prejóvenes y jóvenes con actividades, devocionales y enseñanza bíblica.",
    icon: <FaUsers />,
    accent: "from-pink-500/20 to-rose-500/10",
    iconBg: "bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400",
    badge: "Jóvenes",
    action: {
      href: "https://www.instagram.com/cbiberz",
      label: "Ver Club bíblico",
      external: true,
      className:
        "bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white shadow-sm",
      icon: <FaInstagram />,
    },
  },
  {
    title: "Reunión de mujeres",
    frequency: "Cada 2.º sábado del mes",
    timeSlots: [{ time: "3:00 PM" }],
    description:
      "Encuentro de edificación, oración y comunidad entre hermanas de la iglesia.",
    icon: <FaPersonDress />,
    accent: "from-rose-500/20 to-pink-500/10",
    iconBg: "bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400",
    badge: "Ministerio de mujeres",
  },
  {
    title: "Mañanas de Café",
    frequency: "Cada último sábado del mes",
    timeSlots: [{ time: "8:30 AM" }],
    description:
      "Desayuno de convivencia, alabanza y reflexión entre hermanas para iniciar el día en comunidad.",
    icon: <FaMugHot />,
    accent: "from-amber-500/20 to-orange-500/10",
    iconBg:
      "bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400",
    badge: "Ministerio de mujeres",
  },
];

function EventCard({ event }: { event: ScheduleEvent }) {
  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${event.accent} p-4 transition-[border-color] dark:border-slate-800 dark:from-slate-950 dark:to-slate-900 sm:p-5`}
    >
      {/* Cabecera */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div
          className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl sm:h-12 sm:w-12 sm:text-2xl ${event.iconBg}`}
        >
          {event.icon}
        </div>
        <span className="inline-flex max-w-[58%] items-start justify-end gap-1.5 rounded-xl bg-white/90 px-2.5 py-2 text-right text-[11px] font-semibold leading-snug text-slate-700 dark:bg-slate-900/90 dark:text-slate-200 sm:max-w-[12rem] sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm">
          <FaCalendarDays className="mt-0.5 shrink-0 text-[var(--church-700)] dark:text-[var(--church-400)]" />
          {event.frequency}
        </span>
      </div>

      {/* Contenido — crece para empujar los chips y botones al fondo */}
      <div className="min-w-0 flex-1">
        <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-600 dark:bg-slate-900/80 dark:text-slate-300">
          {event.badge}
        </span>
        <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
          {event.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {event.description}
        </p>
      </div>

      {/* Horarios en una sola línea */}
      {event.timeSlots.length > 0 && (
        <p className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-400">
          <FaClock className="shrink-0 text-[var(--church-700)] dark:text-[var(--church-400)]" />
          {event.timeSlots
            .map((slot) =>
              slot.label ? `${slot.label}: ${slot.time}` : slot.time,
            )
            .join(" · ")}
        </p>
      )}

      {/* Botones — siempre en fila, mismo alto */}
      {(event.action ?? event.secondaryAction) && (
        <div className="mt-3 flex gap-2">
          {event.action && (
            <a
              href={event.action.href}
              target={event.action.external ? "_blank" : undefined}
              rel={event.action.external ? "noopener noreferrer" : undefined}
              className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold transition-colors ${event.action.className}`}
            >
              {event.action.icon}
              {event.action.label}
            </a>
          )}
          {event.secondaryAction && (
            <a
              href={event.secondaryAction.href}
              target={event.secondaryAction.external ? "_blank" : undefined}
              rel={event.secondaryAction.external ? "noopener noreferrer" : undefined}
              className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold transition-colors ${event.secondaryAction.className}`}
            >
              {event.secondaryAction.icon}
              {event.secondaryAction.label}
            </a>
          )}
        </div>
      )}
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
          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            Horarios y actividades
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Cultos semanales, estudios bíblicos y encuentros especiales. Te
            esperamos en cada reunión.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {scheduleEvents.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
