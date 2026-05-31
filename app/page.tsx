import ClassesSection from "@/components/classes-section";
import SchedulesSection from "@/components/schedules-section";
import { ministryLinks } from "@/lib/ministries";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaBookBible,
  FaFacebookF,
  FaInstagram,
  FaLocationArrow,
  FaMapLocationDot,
  FaYoutube,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: `${siteConfig.name} (${siteConfig.shortName})`,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} (${siteConfig.shortName})`,
    description: siteConfig.description,
    url: "/",
  },
};

export default function Home() {
  return (
    <main className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <header
        id="inicio"
        className="relative scroll-mt-24 overflow-hidden bg-white dark:bg-slate-950 py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800"
      >
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/assets/Iglesia.png"
            alt="Iglesia Bautista El Redentor Zacamil (IBERZ) en Mejicanos"
            fill
            className="object-cover opacity-45 sm:opacity-50 dark:opacity-55 dark:brightness-90"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--church-50)]/55 via-white/45 to-white/75 dark:from-slate-950/40 dark:via-slate-900/50 dark:to-slate-950/65" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex rounded-full border border-[var(--church-200)] bg-[var(--church-100)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--church-900)] dark:border-[var(--church-600)]/50 dark:bg-[var(--church-100)]/70 dark:text-[var(--church-900)]">
            Bienvenidos a IBERZ
          </span>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-[var(--church-800)] dark:text-[var(--church-300)] sm:text-base">
            Iglesia Bautista El Redentor Zacamil · Mejicanos, El Salvador
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white">
            Una comunidad unida en la{" "}
            <span className="font-serif text-[var(--church-700)] italic">
              Gracia y la Verdad
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Somos la <strong>Iglesia Bautista El Redentor Zacamil</strong>.
            Nuestro anhelo es adorar a Dios, instruir a los creyentes en las
            Escrituras y proclamar el glorioso mensaje del Evangelio en
            Mejicanos y el mundo entero.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#redes"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-[var(--church-700)] hover:bg-[var(--church-800)] transition-all shadow-lg shadow-[color:var(--church-700)]/25"
            >
              Conectar en Redes
            </a>
            <a
              href="#horarios"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-slate-700 dark:text-slate-100 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 hover:border-[var(--church-200)] hover:bg-[var(--church-50)] dark:hover:bg-slate-800 transition-all"
            >
              Horarios de cultos
            </a>
          </div>
        </div>
      </header>

      <section
        id="redes"
        className="scroll-mt-24 py-14 sm:py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-base font-semibold text-[var(--church-700)] tracking-wider uppercase">
              Portal de conexión
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-serif">
              Redes sociales oficiales
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Acompáñanos en línea, sintoniza nuestras transmisiones, comparte
              con nosotros y mantente actualizado con todas las actividades de
              IBERZ.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            <article className="bg-white dark:bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-6">
                  <FaFacebookF />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Facebook
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Transmisiones en vivo de nuestros cultos dominicales,
                  devocionales y anuncios comunitarios diarios.
                </p>
              </div>
              <a
                href="https://www.facebook.com/iberzoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Seguir en Facebook
              </a>
            </article>

            <article className="bg-white dark:bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-2xl mb-6">
                  <FaYoutube />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  YouTube
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Repositorio de prédicas completas, conferencias, ministerios
                  infantiles y alabanzas grabadas con alta calidad.
                </p>
              </div>
              <a
                href="https://youtube.com/@iglesiabautistaelredentorzacam?si=6YVpjUo7lGU77nQb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-colors"
              >
                Suscribirse
              </a>
            </article>

            <article className="bg-white dark:bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-2xl mb-6">
                  <FaInstagram />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Instagram
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Nuestras historias cotidianas, versículos ilustrados,
                  resúmenes de actividades juveniles y boletines visuales.
                </p>
              </div>
              <a
                href="https://www.instagram.com/iberzoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 transition-colors"
              >
                Seguir en Instagram
              </a>
            </article>

            <article className="bg-white dark:bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-[var(--church-700)] dark:text-[var(--church-400)] flex items-center justify-center text-2xl mb-6">
                  <FaBookBible />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Club Bíblico
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Ministerio para prejóvenes y jóvenes los sábados. Actividades,
                  devocionales y contenido del club en Instagram.
                </p>
              </div>
              <a
                href="https://www.instagram.com/cbiberz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 transition-colors"
              >
                <FaInstagram className="mr-2" />
                Ver Club Bíblico
              </a>
              <Link
                href="/ministerios/club-biblico"
                className="mt-3 inline-flex items-center justify-center w-full px-5 py-3 rounded-xl text-sm font-bold text-[var(--church-700)] border border-[var(--church-200)] hover:bg-[var(--church-50)] transition-colors dark:text-[var(--church-400)] dark:border-[var(--church-800)] dark:hover:bg-[var(--church-900)]/20"
              >
                Conocer el ministerio
              </Link>
            </article>
          </div>
        </div>
      </section>

      <ClassesSection />

      <SchedulesSection />

      <section
        id="ubicacion"
        className="scroll-mt-24 py-14 sm:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-base font-semibold text-[var(--church-700)] tracking-wider uppercase">
                  Encuéntranos
                </h2>
                <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-serif">
                  Nuestra ubicación
                </p>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  Te esperamos con los brazos abiertos en la Colonia
                  Zacamil. Nuestras instalaciones están abiertas y listas para
                  recibirte en cada una de nuestras reuniones y actividades.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--church-100)] text-[var(--church-700)] flex items-center justify-center shrink-0">
                  <FaMapLocationDot className="text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-950 text-base">
                    Dirección IBERZ
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                    Calle Principal, Colonia Zacamil, Mejicanos, San
                    Salvador, El Salvador.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden h-72 sm:h-96 shadow-lg border border-slate-200 dark:border-slate-700 group">
              <iframe
                src="https://maps.google.com/maps?q=Iglesia%20Bautista%20El%20Redentor%20Zacamil,%20Mejicanos,%20El%20Salvador&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale-[10%] contrast-[102%] group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa IBERZ"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-xs sm:truncate">
                    Iglesia Bautista El Redentor
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Colonia Zacamil, Mejicanos
                  </p>
                </div>
                <a
                  href="https://maps.app.goo.gl/KX4yKpJmiiVtTZuq5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-1 bg-[var(--church-700)] hover:bg-[var(--church-600)] text-white font-bold text-xs px-4 py-2.5 rounded-xl w-full sm:w-auto"
                >
                  Navegar <FaLocationArrow className="text-[10px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-12 sm:pt-16 pb-10 sm:pb-12 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 border-b border-slate-800 pb-12 sm:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-6 sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-3">
                <Image
                  src="/assets/Logo.jpeg"
                  alt="Logo IBERZ footer"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-lg object-cover"
                  unoptimized
                />
                <span className="text-lg font-extrabold tracking-wider text-white">
                  IBERZ
                </span>
              </div>
              <p className="text-sm text-slate-400 max-w-sm">
                Establecidos en la Colonia Zacamil, con el firme propósito
                de proclamar el evangelio de Cristo, capacitar a los creyentes y
                servir con amor a la comunidad de Mejicanos.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/iberzoficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://youtube.com/@iglesiabautistaelredentorzacam?si=6YVpjUo7lGU77nQb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.instagram.com/iberzoficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram IBERZ"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.instagram.com/cbiberz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Club Bíblico en Instagram"
                >
                  <FaBookBible />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">
                Secciones
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#inicio" className="hover:text-emerald-400">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#redes" className="hover:text-emerald-400">
                    Redes Sociales
                  </a>
                </li>
                <li>
                  <a href="#podcast" className="hover:text-emerald-400">
                    Podcast
                  </a>
                </li>
                <li>
                  <a href="#horarios" className="hover:text-emerald-400">
                    Cultos y horarios
                  </a>
                </li>
                <li>
                  <a href="#ubicacion" className="hover:text-emerald-400">
                    Ubicación
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">
                Ministerios
              </h4>
              <ul className="space-y-2.5 text-sm">
                {ministryLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-emerald-400">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">
                Declaración de fe
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sostenemos la Biblia como nuestra única norma infalible de fe y
                conducta, inspirada por el Espíritu Santo para transformación
                personal y colectiva.
              </p>
              <span className="inline-flex items-center text-xs text-emerald-400 font-semibold uppercase">
                Bautista
              </span>
            </div>
          </div>

          <div className="pt-8 flex flex-col items-center justify-between gap-3 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
            <p>
              © 2026 Iglesia Bautista El Redentor Zacamil (IBERZ). Todos los
              derechos reservados.
            </p>
            <p className="mt-2 sm:mt-0">Diseñado con amor y fe en El Salvador</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
