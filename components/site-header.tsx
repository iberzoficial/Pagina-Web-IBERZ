"use client";

import ThemeToggle from "@/components/theme-toggle";
import { ministryLinks } from "@/lib/ministries";
import { mainNavLinks } from "@/lib/navigation";
import Link from "next/link";
import { FaChevronDown, FaFacebookMessenger } from "react-icons/fa6";

export default function SiteHeader() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/Logo.jpeg"
            alt="Logo IBERZ"
            width={44}
            height={44}
            className="h-10 w-10 shrink-0 rounded-xl border border-slate-200 object-cover dark:border-slate-700 sm:h-11 sm:w-11"
          />
          <div className="min-w-0">
            <p className="text-lg font-extrabold leading-none tracking-wider text-slate-900 dark:text-white sm:text-xl">
              IBERZ
            </p>
            <p className="truncate text-[10px] font-bold uppercase tracking-wider text-[var(--church-700)] sm:text-[11px]">
              El Redentor Zacamil
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[var(--church-700)]"
            >
              {link.label}
            </Link>
          ))}

          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 hover:text-[var(--church-700)]"
              aria-haspopup="true"
            >
              Ministerios
              <FaChevronDown className="text-[10px] transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="min-w-[14rem] rounded-xl border border-slate-200 bg-white py-2 shadow-lg dark:border-slate-700 dark:bg-slate-900">
                {ministryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-[var(--church-50)] hover:text-[var(--church-800)] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-[var(--church-400)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <a
            href="https://m.me/111972397092155"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--church-700)] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-[color:var(--church-700)]/10 transition-all hover:bg-[var(--church-600)]"
          >
            <FaFacebookMessenger className="text-base" />
            Conectarse
          </a>
          <ThemeToggle />
        </div>

        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
