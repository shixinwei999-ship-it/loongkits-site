import type { Metadata } from "next";
import { getLearningPath } from "@/lib/learningPaths";
import { LearningPathPage } from "@/components/LearningPathPage";

const path = getLearningPath("ages-11-14")!;

export const metadata: Metadata = {
  title: `${path.hero.en.title} · Loong Kits`,
  description: path.hero.en.introduction,
  alternates: { canonical: `/learn/${path.slug}` },
  openGraph: {
    title: `${path.hero.en.title} · Loong Kits`,
    description: path.hero.en.introduction,
    url: `/learn/${path.slug}`,
    images: [path.image.src],
  },
};

export default function Page() {
  return <LearningPathPage path={path} />;
}
