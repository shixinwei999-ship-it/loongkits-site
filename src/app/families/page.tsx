import type { Metadata } from "next";
import { FamiliesContent } from "@/components/pages/FamiliesContent";

export const metadata: Metadata = {
  title: "For Families",
  description:
    "Screen-free printable Chinese culture activities for heritage families. Age-appropriate kits for kids 3-18, designed for quality family learning time.",
};

export default function FamiliesPage() {
  return <FamiliesContent />;
}
