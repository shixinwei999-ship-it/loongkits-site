import type { Metadata } from "next";
import { FreeContent } from "@/components/pages/FreeContent";

export const metadata: Metadata = {
  title: "Free Resources",
  description:
    "Free bilingual printable Chinese culture resources for children, families, and classrooms. Start with our Zodiac Animals Starter Worksheet.",
  alternates: {
    canonical: "/free",
  },
};

export default function FreePage() {
  return <FreeContent />;
}
