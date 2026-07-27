"use client";

import { useLang } from "@/lib/i18n";

export interface SceneLine {
  chars: string[];
  pinyin: string;
  en: { en: string; zh: string };
  speaker: "you" | "them" | "narrator";
}

export interface Scene {
  scenario: { en: string; zh: string };
  lines: { en: SceneLine[]; zh: SceneLine[] };
  hint?: { en: string; zh: string };
}

const speakerLabel: Record<SceneLine["speaker"], { en: string; zh: string; tone: string }> = {
  you: { en: "You", zh: "你", tone: "bg-teal text-white" },
  them: { en: "Them", zh: "对方", tone: "bg-[#b3121f] text-white" },
  narrator: { en: "Voice", zh: "旁白", tone: "bg-ink/60 text-white" },
};

function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "zh-CN";
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

export function SentenceScene({ scene }: { scene: Scene }) {
  const { lang } = useLang();
  const lineSet = lang === "en" ? scene.lines.en : scene.lines.zh;

  const playAll = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const fullText = lineSet.map((l) => l.chars.join("")).join("，");
    const u = new SpeechSynthesisUtterance(fullText);
    u.lang = "zh-CN";
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3 border-l-2 border-amber-400 pl-3">
        <p className="text-sm text-ink-light italic leading-relaxed">{scene.scenario[lang]}</p>
        <button
          type="button"
          onClick={playAll}
          className="shrink-0 inline-flex items-center gap-1 rounded-full bg-teal/10 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-teal transition-colors hover:bg-teal hover:text-white"
        >
          ▶ {lang === "en" ? "Play all" : "整段播放"}
        </button>
      </div>
      <div className="space-y-3">
        {lineSet.map((line, i) => {
          const sp = speakerLabel[line.speaker];
          return (
            <div key={i} className="flex items-start gap-3">
              <span
                className={`shrink-0 mt-0.5 inline-flex h-7 min-w-[3.5rem] items-center justify-center rounded-full px-2.5 text-[0.7rem] font-bold uppercase tracking-wider ${sp.tone}`}
              >
                {sp[lang]}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-0.5">
                  {line.chars.map((ch, ci) => (
                    <button
                      key={ci}
                      type="button"
                      onClick={() => speak(ch)}
                      className="font-serif-sc text-[1.7rem] leading-none text-ink px-1 py-0.5 rounded transition-all duration-150 hover:-translate-y-0.5 hover:bg-teal/10 hover:text-teal cursor-pointer"
                    >
                      {ch}
                    </button>
                  ))}
                </div>
                <p className="mt-1 font-mono text-[0.72rem] tracking-wide text-teal/70">{line.pinyin}</p>
                <p className="text-xs text-ink-light/80 italic">{line.en[lang]}</p>
              </div>
            </div>
          );
        })}
      </div>
      {scene.hint && (
        <p className="border-t border-teal/10 pt-2 text-xs text-ink-light/70 leading-relaxed">💡 {scene.hint[lang]}</p>
      )}
    </div>
  );
}
