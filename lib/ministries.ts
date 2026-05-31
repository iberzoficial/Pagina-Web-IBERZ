export type MinistrySchedule = {
  label: string;
  time: string;
};

export type MinistryAction = {
  href: string;
  label: string;
  external?: boolean;
};

export type Ministry = {
  slug: string;
  title: string;
  badge: string;
  summary: string;
  description: string;
  schedules: MinistrySchedule[];
  highlights: string[];
  action?: MinistryAction;
};

export const ministries: Ministry[] = [
  {
    slug: "club-biblico",
    title: "Club Bíblico",
    badge: "Prejóvenes y jóvenes",
    summary:
      "Espacio de formación bíblica, comunión y actividades para la nueva generación de la iglesia.",
    description:
      "El Club Bíblico de IBERZ reúne a prejóvenes y jóvenes cada semana para estudiar la Palabra, compartir en comunidad y crecer juntos en la fe. A través de devocionales, dinámicas y enseñanza bíblica, buscamos formar discípulos firmes que amen a Cristo y sirvan con integridad en su entorno.",
    schedules: [{ label: "Reunión semanal", time: "Sábados · 2:30 PM" }],
    highlights: [
      "Estudio bíblico adaptado a jóvenes",
      "Actividades de integración y servicio",
      "Contenido y avisos en Instagram",
    ],
    action: {
      href: "https://www.instagram.com/cbiberz",
      label: "Seguir en Instagram",
      external: true,
    },
  },
  {
    slug: "adulto-mayor",
    title: "Adulto Mayor",
    badge: "Cuidado y comunión",
    summary:
      "Ministerio dedicado a acompañar, edificar y honrar a nuestros hermanos de la tercera edad.",
    description:
      "En IBERZ valoramos la experiencia, la sabiduría y el testimonio de vida de nuestros adultos mayores. Este ministerio promueve encuentros de fraternidad, oración y edificación mutua, creando un ambiente de respeto, cuidado pastoral y participación activa dentro de la congregación.",
    schedules: [{ label: "Actividades", time: "Consultar en iglesia" }],
    highlights: [
      "Acompañamiento espiritual y pastoral",
      "Espacios de convivencia y oración",
      "Integración en la vida congregacional",
    ],
  },
  {
    slug: "mujeres-virtuosas",
    title: "Mujeres Virtuosas",
    badge: "Ministerio de mujeres",
    summary:
      "Encuentros de edificación, oración y comunión entre hermanas de la iglesia.",
    description:
      "Mujeres Virtuosas es el ministerio femenino de IBERZ, orientado a fortalecer la fe, el servicio y la unidad entre hermanas. A través de reuniones periódicas, desayunos de convivencia y tiempos de oración, buscamos edificar vidas conforme a la Palabra y animarnos mutuamente en el caminar cristiano.",
    schedules: [
      { label: "Reunión de mujeres", time: "2.º sábado del mes · 3:00 PM" },
      { label: "Desayuno de mujeres", time: "Último sábado del mes · 8:30 AM" },
    ],
    highlights: [
      "Edificación bíblica entre hermanas",
      "Tiempos de oración y testimonio",
      "Encuentros de convivencia y servicio",
    ],
  },
];

export const ministryLinks = ministries.map(({ slug, title }) => ({
  href: `/ministerios/${slug}`,
  label: title,
}));

export function getMinistryBySlug(slug: string): Ministry | undefined {
  return ministries.find((ministry) => ministry.slug === slug);
}
