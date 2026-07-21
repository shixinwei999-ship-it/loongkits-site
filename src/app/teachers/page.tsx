import type { Metadata } from "next";
import { TeachersContent } from "@/components/pages/TeachersContent";

export const metadata: Metadata = {
  title: "For Teachers",
  description:
    "Classroom-ready Chinese culture resources for teachers and tutors. Print & go bilingual kits, standards-aligned content, and bulk pricing for classroom sets.",
};

export default function TeachersPage() {
  return <TeachersContent />;
}
