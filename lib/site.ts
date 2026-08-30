export const siteConfig = {
  name: "Iglesia Bautista El Redentor Zacamil",
  shortName: "IBERZ",
  url: "https://iberz.vercel.app",
  description:
    "Sitio oficial de la Iglesia Bautista El Redentor Zacamil (IBERZ) en Mejicanos, El Salvador. Cultos, estudios bíblicos, ministerios y transmisiones en vivo.",
  locale: "es_SV",
  keywords: [
    "IBERZ",
    "Iglesia Bautista El Redentor Zacamil",
    "iglesia bautista Mejicanos",
    "iglesia Zacamil",
    "iglesia en Mejicanos San Salvador",
    "cultos dominicales Mejicanos",
    "estudio bíblico IBERZ",
    "Club Bíblico IBERZ",
  ],
  address: {
    streetAddress: "Calle Principal, Colonia Zacamil",
    addressLocality: "Mejicanos",
    addressRegion: "San Salvador",
    postalCode: "",
    addressCountry: "SV",
  },
  sameAs: [
    "https://www.facebook.com/iberzoficial/",
    "https://youtube.com/@iglesiabautistaelredentorzacam",
    "https://www.instagram.com/iberzoficial/",
    "https://www.instagram.com/cbiberz",
  ],
  ogImagePath: "/assets/Logo.jpeg",
  media: {
    classesPlaylistUrl:
      "https://music.youtube.com/playlist?list=PLoxl3jPkHFnS5gQ8EECpgOZErsfHu5TU0&si=wpOLKg_tFxX0RpeU",
    youtubeChannelUrl:
      "https://www.youtube.com/@IglesiaBautistaElRedentorZacam",
  },
} as const;

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}
