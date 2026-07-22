import type { Metadata } from "next";
import { ZodiacAnimalsResourceContent } from "@/components/pages/ZodiacAnimalsResourceContent";
import { site } from "@/lib/site";

const title = "Zodiac Animals Starter Worksheet";
const description = "A free four-page bilingual printable introducing the 12 Chinese zodiac animals through vocabulary, tracing, matching, and a family or classroom guide.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/free/zodiac-animals",
  },
  openGraph: {
    title: `${title} | Loong Kits`,
    description,
    url: "/free/zodiac-animals",
    images: ["/resources/zodiac-animals/v1/preview-cover.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Loong Kits`,
    description,
    images: ["/resources/zodiac-animals/v1/preview-cover.webp"],
  },
};

export default function ZodiacAnimalsResourcePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: title,
    description,
    url: `${site.url}/free/zodiac-animals`,
    inLanguage: ["en", "zh"],
    educationalLevel: "Ages 4-8",
    learningResourceType: "Worksheet",
    isAccessibleForFree: true,
    datePublished: "2026-07-22",
    author: {
      "@type": "Organization",
      name: "Loong Kits",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ZodiacAnimalsResourceContent />
    </>
  );
}
