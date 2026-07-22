"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLang } from "@/lib/i18n";
import { kitsPage } from "@/lib/content";
import {
  kits,
  themeLabels,
  ageLabels,
  type ThemeId,
  type AgeId,
} from "@/lib/kits";
import { KitCard } from "@/components/KitCard";

const ageIds: AgeId[] = ["prek", "g15", "g68", "g912"];

function isAgeId(value: string | null): value is AgeId {
  return value !== null && ageIds.includes(value as AgeId);
}

export function KitsContent() {
  const { lang } = useLang();
  const searchParams = useSearchParams();
  const t = kitsPage[lang];
  const requestedAge = searchParams.get("age");
  const [themeFilter, setThemeFilter] = useState<ThemeId | "all">("all");
  const [ageFilter, setAgeFilter] = useState<AgeId | "all">(() => (isAgeId(requestedAge) ? requestedAge : "all"));

  useEffect(() => {
    setAgeFilter(isAgeId(requestedAge) ? requestedAge : "all");
  }, [requestedAge]);

  const filtered = kits.filter((kit) => {
    if (themeFilter !== "all" && kit.theme !== themeFilter) return false;
    if (ageFilter !== "all" && kit.age !== ageFilter) return false;
    return true;
  });

  const themeOptions: { key: ThemeId | "all"; label: string }[] = [
    { key: "all", label: t.filterAll },
    ...(Object.keys(themeLabels) as ThemeId[]).map((key) => ({
      key,
      label: themeLabels[key][lang],
    })),
  ];

  const ageOptions: { key: AgeId | "all"; label: string }[] = [
    { key: "all", label: t.ageAll },
    ...(Object.keys(ageLabels) as AgeId[]).map((key) => ({
      key,
      label: ageLabels[key][lang],
    })),
  ];

  return (
    <div className="pt-8 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ink mb-4 font-nunito">{t.title}</h1>
          <p className="text-xl text-ink-light">{t.subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <div className="flex flex-wrap gap-2 justify-center">
            {themeOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setThemeFilter(opt.key)}
                className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                  themeFilter === opt.key
                    ? "bg-teal text-white"
                    : "bg-white text-ink hover:bg-teal/10"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {ageOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setAgeFilter(opt.key)}
                className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                  ageFilter === opt.key
                    ? "bg-orange text-white"
                    : "bg-white text-ink hover:bg-orange/10"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((kit) => (
              <KitCard key={kit.id} kit={kit} />
            ))}
          </div>
        ) : (
          <p className="text-center text-ink-light py-16">{t.empty}</p>
        )}
      </div>
    </div>
  );
}
