import type { Metadata } from "next";
import { FreeContent } from "@/components/pages/FreeContent";

export const metadata: Metadata = {
  title: "Free Resources",
  description:
    "Free printable Chinese culture resources for kids: zodiac animals coloring pages, Chinese character tracing worksheets, and weekly freebies for heritage families.",
};

export default function FreePage() {
  return <FreeContent />;
}
