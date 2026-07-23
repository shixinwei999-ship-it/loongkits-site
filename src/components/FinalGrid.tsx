"use client";

import { finals } from "@/lib/chineseCurriculum";
import { SpeakButton } from "@/components/Speak";

export function FinalGrid() {
  return (
    <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-6">
      {finals.map((w) => (
        <div key={w.pinyin} className="group/fi flex items-center justify-between gap-2 rounded-xl border border-teal/12 bg-white px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal/40">
          <div className="min-w-0">
            <span className="block font-inter text-lg font-bold leading-none text-ink">{w.pinyin}</span>
            <span className="mt-1 block font-serif-sc text-xs text-teal">{w.char}</span>
          </div>
          <SpeakButton text={w.char} size="sm" />
        </div>
      ))}
    </div>
  );
}