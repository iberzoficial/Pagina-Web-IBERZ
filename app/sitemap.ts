import { ministries } from "@/lib/ministries";
import { absoluteUrl, siteConfig } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const ministryPages = ministries.map((ministry) => ({
    url: absoluteUrl(`/ministerios/${ministry.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...ministryPages,
  ];
}
