"use client";

import { tones } from "@/lib/chineseCurriculum";
import { SpeakButton, WordChip } from "@/components/Speak";
import { useLang } from "@/lib/i18n";

function ToneGraph({ curve }: { curve: number[] }) {
  const x = (i: number) => 12 + i * 19;
  const y = (h: number) => 92 - ((h - 1) / 4) * 76;
  const pts = curve.map((h, i) => `${x(i)},${y(h)}`).join(" ");
  return (
    <svg viewBox="0 0 100 100" className="h-16 w-16 shrink-0" aria-hidden>
      {[1, 2, 3, 4, 5].map((h) => (
        <line key={h} x1="8" y1={y(h)} x2="92" y2={y(h)} stroke="currentColor" strokeWidth="0.6" className="text-teal/15" />
      ))}
      <polyline points={pts} fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" className="text-orange" />
      <circle cx={x(0)} cy={y(curve[0])} r="3.4" className="fill-teal" />
      <circle cx={x(curve.length - 1)} cy={y(curve[curve.length - 1])} r="3.4" className="fill-orange" />
    </svg>
  );
}

export { ToneGraph };

export function ToneCards() {
  const { lang } = useLang();
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {tones.map((tone) => (
        <div key={tone.id} className="rounded-2xl border border-teal/12 bg-white p-5 transition-shadow duration-300 hover:shadow-[0_18px_40px_-28px_rgb(31_74_56/0.5)]">
          <div className="flex items-center gap-4">
            <ToneGraph curve={tone.curve} />
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-nunito text-2xl font-extrabold text-teal">{tone.id === "5" ? "·" : tone.id}</span>
                <span className="font-serif-sc text-xl text-ink">{tone.value}</span>
              </div>
              <p className="text-sm text-ink-light">{tone.approx[lang]}</p>
            </div>
          </div>
          <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-ink-light">
            <span className="mt-0.5 text-orange">✋</span>
            {tone.gesture[lang]}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tone.examples.map((w) => (
              <WordChip key={w.char} word={w} variant="inline" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}