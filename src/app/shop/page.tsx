import type { Metadata } from "next";
import { ShopContent } from "@/components/ShopContent";

export const metadata: Metadata = {
  title: "Shop · Test Packs & Workbooks | Loong Kits",
  description: "Printable PDF test packs by grade, stroke workbooks, poem flashcards, HSK mock exams, and culture readers.",
  alternates: { canonical: "/shop" },
};

export default function Page() {
  return <ShopContent />;
}
