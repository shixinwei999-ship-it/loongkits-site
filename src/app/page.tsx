import type { Metadata } from "next";
import { HomeContent } from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "Learn to Speak Chinese · Bilingual Printable Kits | Loong Kits",
  description:
    "Start learning Chinese from zero — pinyin, the four tones, strokes and your first words, every one tap-to-hear — then take it home as printable bilingual kits for ages 3–18. Chinese culture is the place to practise.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Learn to Speak Chinese · Loong Kits",
    description:
      "Hear it, say it, print it. A beginner Chinese classroom plus printable bilingual kits, with culture as the practice ground.",
    url: "/",
    images: ["/hero/festive-hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn to Speak Chinese · Loong Kits",
    description: "Hear it, say it, print it — a level-based Chinese course and printable bilingual kits.",
    images: ["/hero/festive-hero.webp"],
  },
};

// 首页文案/元数据：英文为主利于索引，中文由客户端切换。
export default function Home() {
  return <HomeContent />;
}
