import type { Metadata } from "next";
import { KitsContent } from "@/components/pages/KitsContent";

export const metadata: Metadata = {
  title: "Learning Kits — Chinese New Year, Zodiac & Panda",
  description:
    "12 printable bilingual learning kits across 3 themes (Chinese New Year, Zodiac Animals, Panda) and 4 age bands (PreK to G12). Instant download, print at home.",
};

export default function KitsPage() {
  return <KitsContent />;
}
