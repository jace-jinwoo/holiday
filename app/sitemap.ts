import type { MetadataRoute } from "next";
import { categories } from "@/data/keywords";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [{ url: baseUrl, changeFrequency: "weekly", priority: 1 }];
  for (const category of categories) {
    pages.push({ url: `${baseUrl}/${category.slug}`, changeFrequency: "weekly", priority: 0.8 });
    for (const keyword of category.keywords) {
      pages.push({ url: `${baseUrl}/${category.slug}/${keyword.slug}`, changeFrequency: "weekly", priority: 0.7 });
    }
  }
  return pages;
}
