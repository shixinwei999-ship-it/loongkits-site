import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { levels } from "@/lib/levels";
import { LessonPage } from "@/components/LessonPage";
import { ToneCards } from "@/components/ToneCards";
import { InitialGrid } from "@/components/InitialGrid";
import { FinalGrid } from "@/components/FinalGrid";
import { BlendRows } from "@/components/BlendRows";
import { WordChip } from "@/components/Speak";
import { firstWords } from "@/lib/chineseCurriculum";

const realLessons: Record<string, ReactNode> = {
  "1-1": <ToneCards />,
  "1-2": (
    <div className="space-y-8">
      <InitialGrid />
      <FinalGrid />
    </div>
  ),
  "1-3": (
    <div className="space-y-8">
      <BlendRows />
      <div>
        <p className="font-inter text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-3">Try saying</p>
        <div className="flex flex-wrap gap-2">
          {firstWords.slice(0, 6).map((w) => (
            <WordChip key={w.char} word={w} variant="inline" />
          ))}
        </div>
      </div>
    </div>
  ),
  "2-1": <p className="text-ink-light">Lesson in progress …</p>,
  "2-2": <p className="text-ink-light">Lesson in progress …</p>,
  "2-3": <p className="text-ink-light">Lesson in progress …</p>,
  "3-1": <p className="text-ink-light">Lesson in progress …</p>,
  "3-2": <p className="text-ink-light">Lesson in progress …</p>,
  "4-1": <p className="text-ink-light">Lesson in progress …</p>,
  "4-2": <p className="text-ink-light">Lesson in progress …</p>,
  "5-1": <p className="text-ink-light">Lesson in progress …</p>,
  "5-2": <p className="text-ink-light">Lesson in progress …</p>,
  "6-1": <p className="text-ink-light">Lesson in progress …</p>,
  "6-2": <p className="text-ink-light">Lesson in progress …</p>,
  "7-1": <p className="text-ink-light">Lesson in progress …</p>,
  "7-2": <p className="text-ink-light">Lesson in progress …</p>,
  "8-1": <p className="text-ink-light">Lesson in progress …</p>,
  "8-2": <p className="text-ink-light">Lesson in progress …</p>,
  "9-1": <p className="text-ink-light">Lesson in progress …</p>,
  "9-2": <p className="text-ink-light">Lesson in progress …</p>,
  "10-1": <p className="text-ink-light">Lesson in progress …</p>,
  "10-2": <p className="text-ink-light">Lesson in progress …</p>,
};

export default async function Page({ params }: { params: Promise<{ n: string; k: string }> }) {
  const { n, k } = await params;
  const nNum = parseInt(n, 10);
  const kNum = parseInt(k, 10);
  const lv = levels[nNum - 1];
  if (!lv || !lv.lessons[kNum - 1]) notFound();
  const lesson = lv.lessons[kNum - 1];
  const total = lv.lessons.length;
  const key = `${nNum}-${kNum}`;
  const interactive = realLessons[key] ?? null;
  const isReal = key === "1-1" || key === "1-2" || key === "1-3";
  const backHref = `/learn/levels#lvl-${nNum}`;
  const nextHref = kNum < total ? `/learn/level/${nNum}/lesson/${kNum + 1}` : null;

  return (
    <LessonPage
      level={lv}
      lesson={lesson}
      k={kNum}
      total={total}
      interactive={interactive}
      backHref={backHref}
      nextHref={nextHref}
      isReal={isReal}
    />
  );
}