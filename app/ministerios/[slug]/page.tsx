import MinistryPageContent from "@/components/ministry-page-content";
import { getMinistryBySlug } from "@/lib/ministries";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [
    { slug: "club-biblico" },
    { slug: "adulto-mayor" },
    { slug: "mujeres-virtuosas" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ministry = getMinistryBySlug(slug);

  if (!ministry) {
    return { title: "Ministerio no encontrado" };
  }

  const canonicalPath = `/ministerios/${slug}`;
  const title = ministry.title;
  const description = `${ministry.summary} ${siteConfig.shortName} · ${siteConfig.address.addressLocality}, El Salvador.`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${title} | ${siteConfig.shortName}`,
      description,
      url: canonicalPath,
      type: "website",
    },
  };
}

export default async function MinistryPage({ params }: PageProps) {
  const { slug } = await params;
  const ministry = getMinistryBySlug(slug);

  if (!ministry) {
    notFound();
  }

  return <MinistryPageContent ministry={ministry} />;
}
