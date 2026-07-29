import type { Metadata } from "next";
import { MembersContent } from "@/components/MembersContent";

export const metadata: Metadata = {
  title: "Members · Textbooks by Grade & Level | Loong Kits",
  description: "Structured Chinese curriculum: kids by grade, self-study by HSK level, teachers with lesson plans, poems, and printable tests.",
  alternates: { canonical: "/members" },
};

export default function Page() {
  return <MembersContent />;
}
