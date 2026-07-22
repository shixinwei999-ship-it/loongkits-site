import type { Metadata } from "next";
import { LevelSystem } from "@/components/LevelSystem";

export const metadata: Metadata = {
  title: "Chinese Levels 1–10 · A complete course | Loong Kits",
  description:
    "Learn Chinese by level, not by age. Ten levels across five stages — from your first tone to your own bilingual voice — each with real lessons, printable homework, tap-to-hear characters, and a three-thousand-year story of how the script evolved.",
  alternates: { canonical: "/learn/levels" },
  openGraph: {
    title: "Chinese Levels 1–10 · Loong Kits",
    description: "One ladder from zero to fluent. Ten levels, real lessons and homework, no age required.",
    url: "/learn/levels",
    images: ["/hero/festive-hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Levels 1–10 · Loong Kits",
    description: "One ladder from zero to fluent — ten levels, real lessons, printable homework.",
    images: ["/hero/festive-hero.webp"],
  },
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Chinese Levels 1–10: A Complete Course",
  description:
    "A level-based Chinese course for any age. Five stages and ten levels take a learner from the first tone through radicals, reading, history and translation to an independent bilingual voice, with lessons, homework and native-voice audio throughout.",
  inLanguage: ["en", "zh"],
  educationalLevel: "Beginner to Advanced",
  isAccessibleForFree: true,
  provider: { "@type": "Organization", name: "Loong Kits", url: "https://loongkits.com" },
  hasCourseInstance: { "@type": "CourseInstance", courseMode: "online" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
      <LevelSystem />
    </>
  );
}
