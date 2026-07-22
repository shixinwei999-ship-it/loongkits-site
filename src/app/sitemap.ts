import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/kits", priority: 0.8 },
    { path: "/free", priority: 0.8 },
    { path: "/free/zodiac-animals", priority: 0.75 },
    { path: "/learn/ages-3-6", priority: 0.85 },
    { path: "/learn/ages-6-11", priority: 0.85 },
    { path: "/learn/ages-11-14", priority: 0.85 },
    { path: "/learn/ages-14-18", priority: 0.85 },
    { path: "/families", priority: 0.6 },
    { path: "/teachers", priority: 0.6 },
    { path: "/about", priority: 0.5 },
  ];
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date("2026-07-22"),
    changeFrequency: "weekly",
    priority: r.priority,
  }));
}
