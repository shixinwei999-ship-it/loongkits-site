import type { Metadata } from "next";
import { ChineseClassroom } from "@/components/ChineseClassroom";

export const metadata: Metadata = {
  title: "Learn Chinese · Pinyin, tones, characters | Loong Kits",
  description:
    "Start learning Chinese from zero: the four tones with tone-shape graphs, 21 initials, 24 finals, blending, the eight strokes with write-on-hover animation, radicals, and your first characters and words — every one tap-to-hear in a native voice.",
  alternates: { canonical: "/learn/chinese" },
  openGraph: {
    title: "Learn Chinese · Loong Kits",
    description: "Pinyin, tones, strokes and your first words — tap any character to hear it. The teaching starts here.",
    url: "/learn/chinese",
  },
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Learn Chinese from Zero: Pinyin, Tones, Strokes and First Words",
  description:
    "A beginner Chinese course built around listening and speaking. Eight modules take a learner from the four tones through initials, finals, blending, stroke order, radicals, and a first set of characters and words, with native-voice audio on every item.",
  inLanguage: ["en", "zh"],
  educationalLevel: "Beginner",
  isAccessibleForFree: true,
  provider: { "@type": "Organization", name: "Loong Kits", url: "https://loongkits.com" },
  hasPart: [
    { "@type": "Course", name: "The four tones + neutral" },
    { "@type": "Course", name: "Initials (consonant onsets)" },
    { "@type": "Course", name: "Finals (vowel cores)" },
    { "@type": "Course", name: "Blending initials and finals" },
    { "@type": "Course", name: "Strokes and stroke order" },
    { "@type": "Course", name: "Radicals and meaning clues" },
    { "@type": "Course", name: "First characters" },
    { "@type": "Course", name: "First words" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
      <ChineseClassroom />
    </>
  );
}
