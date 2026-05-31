"use client";

import { useState } from "react";
import { FaBars, FaFacebookMessenger, FaXmark } from "react-icons/fa6";
import ThemeToggle from "@/components/theme-toggle";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#redes", label: "Redes Sociales" },
  { href: "#podcast", label: "Podcast" },
  { href: "#horarios", label: "Horarios" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="md:hidden">
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {open ? <FaXmark className="text-lg" /> : <FaBars className="text-lg" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-20 z-40 border-b border-slate-200 bg-white/98 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/98"
        >
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block rounded-xl px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[var(--church-700)] dark:text-slate-200 dark:hover:bg-slate-900"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://m.me/111972397092155"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--church-700)] px-4 py-3 text-sm font-semibold text-white hover:bg-[var(--church-600)]"
            >
              <FaFacebookMessenger />
              Conectarse
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
