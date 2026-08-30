import MediaHubSection from "@/components/media-hub-section";
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
        className="relative scroll-mt-20 overflow-hidden flex items-center border-b border-[var(--color-rule)] dark:border-slate-800"
        style={{ minHeight: 'calc(100vh - 4rem)', background: 'var(--color-paper)' }}
      >
        {/* Imagen de fondo */}
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/assets/Iglesia.png"
            alt="Iglesia Bautista El Redentor Zacamil en Mejicanos, El Salvador"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-paper)] via-[var(--color-paper)]/85 to-[var(--color-paper)]/20 dark:from-slate-950 dark:via-slate-950/88 dark:to-slate-950/20" />
        </div>

        {/* Columna de texto izquierda */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-28">
          <div className="max-w-xl space-y-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-ink-2)] dark:text-slate-500">
              Mejicanos, El Salvador
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.07] tracking-tight text-[var(--color-ink)] dark:text-white">
              Una comunidad{" "}
              <br className="hidden sm:block" />
              unida en la{" "}
              <span className="text-[var(--color-accent)]">Gracia</span>
              {" "}y la{" "}
              <span className="text-[var(--color-accent)]">Verdad</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[var(--color-ink-2)] dark:text-slate-300">
              Somos la{" "}
              <strong className="font-semibold text-[var(--color-ink)] dark:text-white">
                Iglesia Bautista El Redentor Zacamil
              </strong>
              . Nuestro anhelo es adorar a Dios, instruir a los creyentes y proclamar el Evangelio en Mejicanos y el mundo entero.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#redes"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[var(--color-accent)] text-white font-semibold text-sm transition-colors hover:bg-[var(--color-accent-dim)]"
              >
                Conectar en Redes
              </a>
              <a
                href="#horarios"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-[var(--color-rule)] bg-[var(--color-paper)]/80 text-[var(--color-ink)] dark:text-slate-200 dark:border-slate-700 dark:bg-slate-950/50 font-semibold text-sm transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] dark:hover:border-[var(--color-accent)] dark:hover:text-[var(--color-accent)]"
              >
                Horarios de cultos
              </a>
            </div>
          </div>
        </div>
      </header>

      <section
        id="redes"
        className="scroll-mt-20 py-14 sm:py-20 border-t border-[var(--color-rule)] dark:border-slate-800"
        style={{ background: 'var(--color-paper-2)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-14 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-ink)] dark:text-white">
              Redes sociales
            </h2>
            <p className="mt-3 text-base text-[var(--color-ink-2)] dark:text-slate-300 max-w-xl mx-auto">
              Síguenos para transmisiones en vivo, prédicas completas, devocionales y actividades del ministerio juvenil.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {/* Facebook */}
            <article className="flex flex-col items-center text-center rounded-2xl border border-[var(--color-rule)] dark:border-slate-800 bg-white dark:bg-slate-950 p-6 gap-4 transition-[border-color] duration-[180ms] hover:border-[var(--color-accent)] dark:hover:border-[var(--color-accent)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 text-2xl">
                <FaFacebookF />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-ink-2)] dark:text-slate-400">Facebook</span>
              <a
                href="https://www.facebook.com/iberzoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-blue-600 text-white text-xs font-semibold transition-colors hover:bg-blue-700"
              >
                Seguir
              </a>
            </article>

            {/* YouTube */}
            <article className="flex flex-col items-center text-center rounded-2xl border border-[var(--color-rule)] dark:border-slate-800 bg-white dark:bg-slate-950 p-6 gap-4 transition-[border-color] duration-[180ms] hover:border-[var(--color-accent)] dark:hover:border-[var(--color-accent)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 text-2xl">
                <FaYoutube />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-ink-2)] dark:text-slate-400">YouTube</span>
              <a
                href="https://youtube.com/@iglesiabautistaelredentorzacam?si=6YVpjUo7lGU77nQb"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-red-600 text-white text-xs font-semibold transition-colors hover:bg-red-700"
              >
                Suscribirse
              </a>
            </article>

            {/* Instagram */}
            <article className="flex flex-col items-center text-center rounded-2xl border border-[var(--color-rule)] dark:border-slate-800 bg-white dark:bg-slate-950 p-6 gap-4 transition-[border-color] duration-[180ms] hover:border-[var(--color-accent)] dark:hover:border-[var(--color-accent)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-pink-600 text-2xl">
                <FaInstagram />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-ink-2)] dark:text-slate-400">Instagram</span>
              <a
                href="https://www.instagram.com/iberzoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-pink-600 to-rose-500 text-white text-xs font-semibold transition-colors hover:from-pink-700 hover:to-rose-600"
              >
                Seguir
              </a>
            </article>

            {/* Club Bíblico */}
            <article className="flex flex-col items-center text-center rounded-2xl border border-[var(--color-rule)] dark:border-slate-800 bg-white dark:bg-slate-950 p-6 gap-4 transition-[border-color] duration-[180ms] hover:border-[var(--color-accent)] dark:hover:border-[var(--color-accent)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[var(--color-accent)] text-2xl">
                <FaBookBible />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-ink-2)] dark:text-slate-400">Club Bíblico</span>
              <div className="mt-auto flex flex-col gap-2 w-full">
                <a
                  href="https://www.instagram.com/cbiberz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-pink-600 to-rose-500 text-white text-xs font-semibold transition-colors hover:from-pink-700 hover:to-rose-600"
                >
                  Instagram
                </a>
                <Link
                  href="/ministerios/club-biblico"
                  className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[var(--color-rule)] dark:border-slate-700 text-[var(--color-ink-2)] dark:text-slate-400 text-xs font-semibold transition-[border-color,color] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  Ministerio
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <MediaHubSection />

      <SchedulesSection />

      <section
        id="ubicacion"
        className="scroll-mt-24 py-14 sm:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-ink)] dark:text-white">
                  Nuestra ubicación
                </h2>
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

            <div className="relative bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden h-72 sm:h-96 border border-[var(--color-rule)] dark:border-slate-700 group">
              <iframe
                src="https://maps.google.com/maps?q=Iglesia%20Bautista%20El%20Redentor%20Zacamil,%20Mejicanos,%20El%20Salvador&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale-[10%] contrast-[102%] group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa IBERZ"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:truncate">
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

      <footer
        className="bg-slate-900 text-slate-300 dark:bg-black"
        style={{ borderTop: '3px solid var(--color-accent)' }}
      >
        {/* ── Letter close: declaración de misión ─── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-800">
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug max-w-4xl">
            Establecidos en la Colonia Zacamil para proclamar el evangelio de Cristo, edificar a los creyentes y servir a Mejicanos con amor y verdad.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#horarios"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[var(--color-accent)] text-white font-semibold text-sm transition-colors hover:bg-[var(--color-accent-dim)]"
            >
              Ver horarios
            </a>
            <a
              href="https://maps.app.goo.gl/KX4yKpJmiiVtTZuq5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-slate-700 text-slate-200 font-semibold text-sm transition-colors hover:border-slate-400 hover:text-white"
            >
              Cómo llegar
            </a>
          </div>
        </div>

        {/* ── Barra inferior: logo · ministerios · social ─── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3 shrink-0">
            <Image
              src="/assets/Logo.jpeg"
              alt="Logo IBERZ"
              width={32}
              height={32}
              className="w-8 h-8 rounded-lg object-cover"
              unoptimized
            />
            <div>
              <span className="font-bold text-white text-sm tracking-wide">IBERZ</span>
              <span className="text-slate-600 mx-2">·</span>
              <span className="text-slate-400 text-xs">Colonia Zacamil, Mejicanos</span>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-1.5">
            {ministryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors text-xs"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-slate-500">
            <a
              href="https://www.facebook.com/iberzoficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Facebook IBERZ"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://youtube.com/@iglesiabautistaelredentorzacam?si=6YVpjUo7lGU77nQb"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="YouTube IBERZ"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/iberzoficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram IBERZ"
            >
              <FaInstagram />
            </a>
            <span className="text-slate-700 text-xs ml-1">© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
