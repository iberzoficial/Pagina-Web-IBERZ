"use client";

import ThemeToggle from "@/components/theme-toggle";
import { ministryLinks } from "@/lib/ministries";
import { mainNavLinks } from "@/lib/navigation";
import Link from "next/link";
import { FaChevronDown, FaFacebookMessenger } from "react-icons/fa6";

export default function SiteHeader() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-[var(--color-rule)] bg-[var(--color-paper)]/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95"
      style={{ borderTop: '3px solid var(--color-accent)' }}
    >
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/Logo.jpeg"
            alt="Logo IBERZ"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 rounded-lg border border-[var(--color-rule)] object-cover dark:border-slate-700 sm:h-10 sm:w-10"
          />
          <div className="min-w-0">
            <p className="text-base font-bold leading-none tracking-wider text-[var(--color-ink)] dark:text-white sm:text-lg">
              IBERZ
            </p>
            <p className="truncate text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)] sm:text-[11px]">
              El Redentor Zacamil
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-[var(--color-ink-2)] dark:text-slate-300 md:flex">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-150 hover:text-[var(--color-accent)] dark:hover:text-[var(--color-accent)]"
            >
              {link.label}
            </Link>
          ))}

          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 transition-colors duration-150 hover:text-[var(--color-accent)] dark:hover:text-[var(--color-accent)]"
              aria-haspopup="true"
            >
              Ministerios
              <FaChevronDown className="text-[10px] transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="min-w-[14rem] rounded-xl border border-[var(--color-rule)] bg-[var(--color-paper)] py-2 shadow-lg dark:border-slate-700 dark:bg-slate-900">
                {ministryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-[var(--color-ink-2)] transition-colors hover:bg-[var(--color-accent-pale)] hover:text-[var(--color-accent)] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-[var(--church-400)]"
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
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-accent)] transition-colors duration-150 hover:bg-[var(--color-accent)] hover:text-white"
          >
            <FaFacebookMessenger className="text-sm" />
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
