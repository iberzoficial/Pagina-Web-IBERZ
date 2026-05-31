import MinistryPageContent from "@/components/ministry-page-content";
import { getMinistryBySlug } from "@/lib/ministries";
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
    return { title: "Ministerio no encontrado | IBERZ" };
  }

  return {
    title: `${ministry.title} | IBERZ`,
    description: ministry.summary,
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
