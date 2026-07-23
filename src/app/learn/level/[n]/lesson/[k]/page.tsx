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
import { radicals, strokes, firstChars } from "@/lib/chineseCurriculum";
import { SpeakButton } from "@/components/Speak";

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
  "2-1": (
    <div className="grid gap-4 sm:grid-cols-2">
      {radicals.map((r) => (
        <div key={r.char} className="flex gap-4 rounded-2xl border border-teal/12 bg-white p-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-teal/8 font-serif-sc text-3xl text-teal">{r.char}</div>
          <div className="min-w-0 flex-1">
            <p className="font-nunito text-base font-bold text-ink">{r.name.en}</p>
            <p className="text-xs text-ink-light">{r.meaning.en}</p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {r.examples.map((w) => (
                <WordChip key={w.char} word={w} variant="inline" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
  "2-2": (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {strokes.map((s) => (
        <div key={s.en} className="rounded-2xl border border-teal/12 bg-white p-4">
          <svg viewBox="0 0 100 100" className="mx-auto h-20 w-20" aria-hidden>
            <rect x="6" y="6" width="88" height="88" rx="6" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-teal/10" />
            <line x1="50" y1="6" x2="50" y2="94" stroke="currentColor" strokeWidth="0.6" className="text-teal/10" />
            <line x1="6" y1="50" x2="94" y2="50" stroke="currentColor" strokeWidth="0.6" className="text-teal/10" />
            <path d={s.path} pathLength={1} className="stroke-path" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="mt-2 flex items-center justify-between gap-2">
            <div>
              <p className="font-nunito text-base font-bold text-ink">{s.name.en}</p>
              <p className="text-xs text-teal">{s.pinyin}</p>
            </div>
            <SpeakButton text={s.example.char} size="sm" />
          </div>
          <p className="mt-2 text-xs leading-relaxed text-ink-light">{s.tip.en}</p>
          <p className="mt-2 font-serif-sc text-lg text-ink">{s.example.char} <span className="text-xs text-ink-light">{s.example.pinyin}</span></p>
        </div>
      ))}
    </div>
  ),
  "2-3": (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {firstChars.map((c) => (
        <div key={c.char} className="flex items-center justify-between gap-2 rounded-xl border border-teal/12 bg-white px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal/40">
          <div className="min-w-0">
            <span className="block font-serif-sc text-3xl leading-none text-ink">{c.char}</span>
            <span className="mt-1.5 block text-xs font-medium text-teal">{c.pinyin}</span>
            <span className="block text-[0.65rem] text-ink-light">{c.strokes} strokes</span>
          </div>
          <SpeakButton text={c.char} />
        </div>
      ))}
    </div>
  ),
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
  const isReal = ["1-1", "1-2", "1-3", "2-1", "2-2", "2-3"].includes(key);
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