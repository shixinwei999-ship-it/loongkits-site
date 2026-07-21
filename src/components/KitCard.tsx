"use client";

import { useLang } from "@/lib/i18n";
import { common } from "@/lib/content";
import {
  type Kit,
  themeIcons,
  themeDesc,
  ageLabels,
  kitTitle,
  formatPages,
} from "@/lib/kits";

export function KitCard({ kit }: { kit: Kit }) {
  const { lang } = useLang();
  const t = common[lang];

  return (
    <div className="card-kit flex flex-col">
      <div className="relative h-48 bg-teal/5 flex items-center justify-center">
        <span className="text-5xl" role="img" aria-label={kit.theme}>
          {themeIcons[kit.theme]}
        </span>
        {kit.tag && (
          <span className="absolute top-4 right-4 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
            {kit.tag[lang]}
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-ink mb-1 font-nunito">{kitTitle(kit, lang)}</h3>
        <p className="text-sm text-ink-light mb-1">{themeDesc[kit.theme][lang]}</p>
        <p className="text-sm text-ink-light mb-4">
          {ageLabels[kit.age][lang]} · {formatPages(kit.pages, lang)}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xl font-bold text-teal">${kit.priceUsd}</span>
          {kit.gumroadUrl ? (
            <a
              href={kit.gumroadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-4"
            >
              {t.buy}
            </a>
          ) : (
            <span className="btn-disabled text-sm py-2 px-4" title={t.comingSoonNote}>
              {t.comingSoon}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
