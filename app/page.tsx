import ClassesSection from "@/components/classes-section";
import MobileNav from "@/components/mobile-nav";
import SchedulesSection from "@/components/schedules-section";
import ThemeToggle from "@/components/theme-toggle";
import Image from "next/image";
import {
  FaBookBible,
  FaFacebookF,
  FaFacebookMessenger,
  FaInstagram,
  FaLocationArrow,
  FaMapLocationDot,
  FaYoutube,
} from "react-icons/fa6";

export default function Home() {
  return (
    <main className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/Logo.jpeg"
              alt="Logo IBERZ"
              width={44}
              height={44}
              className="h-10 w-10 shrink-0 rounded-xl object-cover border border-slate-200 dark:border-slate-700 sm:h-11 sm:w-11"
            />
            <div className="min-w-0">
              <p className="text-lg font-extrabold tracking-wider text-slate-900 dark:text-white leading-none sm:text-xl">
                IBERZ
              </p>
              <p className="truncate text-[10px] uppercase tracking-wider text-[var(--church-700)] font-bold sm:text-[11px]">
                El Redentor Zacamil
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#inicio" className="hover:text-[var(--church-700)]">
              Inicio
            </a>
            <a href="#redes" className="hover:text-[var(--church-700)]">
              Redes Sociales
            </a>
            <a href="#podcast" className="hover:text-[var(--church-700)]">
              Podcast
            </a>
            <a href="#horarios" className="hover:text-[var(--church-700)]">
              Horarios
            </a>
            <a href="#ubicacion" className="hover:text-[var(--church-700)]">
              Ubicacion
            </a>
            <a
              href="https://m.me/111972397092155"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[var(--church-700)] hover:bg-[var(--church-600)] transition-all shadow-md shadow-[color:var(--church-700)]/10"
            >
              <FaFacebookMessenger className="text-base" />
              Conectarse
            </a>
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>

      <header
        id="inicio"
        className="relative scroll-mt-24 bg-gradient-to-b from-[var(--church-50)] via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800"
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/Iglesia.png"
            alt="Fondo iglesia"
            fill
            className="object-cover opacity-15 dark:opacity-20"
            priority
            unoptimized
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="relative inline-flex rounded-full bg-[var(--church-100)] dark:bg-[var(--church-800)]/30 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--church-900)] dark:text-[var(--church-200)]">
            Bienvenidos a IBERZ
          </span>
          <h1 className="relative mt-5 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white">
            Una comunidad unida en la{" "}
            <span className="font-serif text-[var(--church-700)] italic">
              Gracia y la Verdad
            </span>
          </h1>
          <p className="relative mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
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
              Horarios de Cultos
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
              Portal de Conexion
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-serif">
              Redes Sociales Oficiales
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Acompananos en linea, sintoniza nuestras transmisiones, comparte
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
                  Repositorio de predicas completas, conferencias, ministerios
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
                  Nuestras historias cotidianas, versiculos ilustrados,
                  resumenes de actividades juveniles y boletines visuales.
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
                  Club Biblico
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Ministerio para prejovenes y jovenes los sabados. Actividades,
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
                Ver Club Biblico
              </a>
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
                  Encuentranos
                </h2>
                <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-serif">
                  Nuestra Ubicacion
                </p>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  Te esperamos con los brazos abiertos en la Coloni
                  Zacamil. Nuestras instalaciones estan abiertas y listas para
                  recibirte en cada una de nuestras reuniones y actividades.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--church-100)] text-[var(--church-700)] flex items-center justify-center shrink-0">
                  <FaMapLocationDot className="text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-950 text-base">
                    Direccion IBERZ
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
            <div className="md:col-span-2 space-y-6">
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
                Establecidos en la Colonia Zacamil, con el firme proposito
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
                  aria-label="Club Biblico en Instagram"
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
                    Cultos y Horarios
                  </a>
                </li>
                <li>
                  <a href="#ubicacion" className="hover:text-emerald-400">
                    Ubicacion
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">
                Declaracion de Fe
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sostenemos la Biblia como nuestra unica norma infalible de fe y
                conducta, inspirada por el Espiritu Santo para transformacion
                personal y colectiva.
              </p>
              <span className="inline-flex items-center text-xs text-emerald-400 font-semibold uppercase">
                Bautista
              </span>
            </div>
          </div>

          <div className="pt-8 flex flex-col items-center justify-between gap-3 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
            <p>
              © 2026 Iglesia Bautista el Redentor Zacamil (IBERZ). Todos los
              derechos reservados.
            </p>
            <p className="mt-2 sm:mt-0">Disenado con amor y fe en El Salvador</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
