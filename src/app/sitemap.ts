import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/learn/levels", priority: 0.95 },
    { path: "/learn/chinese", priority: 0.9 },
    { path: "/members", priority: 0.9 },
    { path: "/shop", priority: 0.85 },
    { path: "/free", priority: 0.8 },
    { path: "/free/zodiac-animals", priority: 0.75 },
    { path: "/about", priority: 0.5 },
  ];
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date("2026-07-22"),
    changeFrequency: "weekly",
    priority: r.priority,
  }));
}
