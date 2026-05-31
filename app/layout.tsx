import MobileBottomNav from "@/components/mobile-bottom-nav";
import SiteHeader from "@/components/site-header";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iglesia Bautista El Redentor Zacamil - IBERZ",
  description:
    "Sitio oficial de la Iglesia Bautista El Redentor Zacamil (IBERZ), con clases y contenido actualizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        {/* Script síncrono: aplica el tema ANTES de que React hidrate para
            evitar el parpadeo entre modo claro y oscuro */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:pb-0">
        <SiteHeader />
        {children}
        <MobileBottomNav />
      </body>
    </html>
  );
}
