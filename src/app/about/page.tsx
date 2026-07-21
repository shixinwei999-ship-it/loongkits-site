import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Loong Kits brings Chinese culture to life for kids everywhere. Our story, mission, and values — printable bilingual resources made with cultural pride.",
};

export default function AboutPage() {
  return <AboutContent />;
}
