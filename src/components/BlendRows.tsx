"use client";

import { blends } from "@/lib/chineseCurriculum";
import { WordChip } from "@/components/Speak";

export function BlendRows() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {blends.map((b) => (
        <div key={b.result.char} className="flex items-center gap-3 rounded-xl border border-teal/12 bg-white px-4 py-3">
          <span className="font-inter text-xl font-bold text-teal">{b.initial}</span>
          <span className="text-ink-light">+</span>
          <span className="font-inter text-xl font-bold text-teal">{b.final}</span>
          <span className="text-ink-light">=</span>
          <WordChip word={b.result} variant="inline" />
        </div>
      ))}
    </div>
  );
}