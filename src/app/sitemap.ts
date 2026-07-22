import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/kits", priority: 0.9 },
    { path: "/free", priority: 0.8 },
    { path: "/free/zodiac-animals", priority: 0.75 },
    { path: "/families", priority: 0.7 },
    { path: "/teachers", priority: 0.7 },
    { path: "/about", priority: 0.5 },
  ];
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: r.priority,
  }));
}
