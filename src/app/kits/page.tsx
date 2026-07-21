'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Lang = 'en' | 'zh';

const content = {
  en: {
    nav: {
      kits: 'Kits',
      free: 'Free Resources',
      families: 'For Families',
      teachers: 'For Teachers',
      about: 'About',
    },
    title: 'All Learning Kits',
    subtitle: 'Choose your adventure',
    filter: {
      all: 'All',
      cny: 'Chinese New Year',
      zodiac: 'Zodiac',
      panda: 'Panda',
    },
    age: {
      all: 'All Ages',
      prek: 'PreK-K (3-6)',
      g15: 'G1-5 (6-11)',
      g68: 'G6-8 (11-14)',
      g912: 'G9-12 (14-18)',
    },
    kits: [
      { id: 'cny-prek', theme: 'cny', age: 'prek', title: 'CNY Kit - PreK-K', price: '$7.99', pages: '20 pages' },
      { id: 'cny-g15', theme: 'cny', age: 'g15', title: 'CNY Kit - G1-5', price: '$9.99', pages: '28 pages' },
      { id: 'cny-g68', theme: 'cny', age: 'g68', title: 'CNY Kit - G6-8', price: '$12.99', pages: '32 pages' },
      { id: 'cny-g912', theme: 'cny', age: 'g912', title: 'CNY Kit - G9-12', price: '$14.99', pages: '36 pages' },
      { id: 'zodiac-prek', theme: 'zodiac', age: 'prek', title: 'Zodiac Kit - PreK-K', price: '$7.99', pages: '18 pages' },
      { id: 'zodiac-g15', theme: 'zodiac', age: 'g15', title: 'Zodiac Kit - G1-5', price: '$9.99', pages: '25 pages' },
      { id: 'zodiac-g68', theme: 'zodiac', age: 'g68', title: 'Zodiac Kit - G6-8', price: '$12.99', pages: '30 pages' },
      { id: 'zodiac-g912', theme: 'zodiac', age: 'g912', title: 'Zodiac Kit - G9-12', price: '$14.99', pages: '34 pages' },
      { id: 'panda-prek', theme: 'panda', age: 'prek', title: 'Panda Kit - PreK-K', price: '$7.99', pages: '18 pages' },
      { id: 'panda-g15', theme: 'panda', age: 'g15', title: 'Panda Kit - G1-5', price: '$9.99', pages: '25 pages' },
      { id: 'panda-g68', theme: 'panda', age: 'g68', title: 'Panda Kit - G6-8', price: '$12.99', pages: '30 pages' },
      { id: 'panda-g912', theme: 'panda', age: 'g912', title: 'Panda Kit - G9-12', price: '$14.99', pages: '34 pages' },
    ],
  },
  zh: {
    nav: {
      kits: '学习包',
      free: '免费资源',
      families: '给家庭',
      teachers: '给老师',
      about: '关于我们',
    },
    title: '全部学习包',
    subtitle: '选择你的冒险',
    filter: {
      all: '全部',
      cny: '春节',
      zodiac: '生肖',
      panda: '熊猫',
    },
    age: {
      all: '全部年龄',
      prek: 'PreK-K (3-6岁)',
      g15: 'G1-5 (6-11岁)',
      g68: 'G6-8 (11-14岁)',
      g912: 'G9-12 (14-18岁)',
    },
    kits: [
      { id: 'cny-prek', theme: 'cny', age: 'prek', title: '春节包 - PreK-K', price: '$7.99', pages: '20页' },
      { id: 'cny-g15', theme: 'cny', age: 'g15', title: '春节包 - G1-5', price: '$9.99', pages: '28页' },
      { id: 'cny-g68', theme: 'cny', age: 'g68', title: '春节包 - G6-8', price: '$12.99', pages: '32页' },
      { id: 'cny-g912', theme: 'cny', age: 'g912', title: '春节包 - G9-12', price: '$14.99', pages: '36页' },
      { id: 'zodiac-prek', theme: 'zodiac', age: 'prek', title: '生肖包 - PreK-K', price: '$7.99', pages: '18页' },
      { id: 'zodiac-g15', theme: 'zodiac', age: 'g15', title: '生肖包 - G1-5', price: '$9.99', pages: '25页' },
      { id: 'zodiac-g68', theme: 'zodiac', age: 'g68', title: '生肖包 - G6-8', price: '$12.99', pages: '30页' },
      { id: 'zodiac-g912', theme: 'zodiac', age: 'g912', title: '生肖包 - G9-12', price: '$14.99', pages: '34页' },
      { id: 'panda-prek', theme: 'panda', age: 'prek', title: '熊猫包 - PreK-K', price: '$7.99', pages: '18页' },
      { id: 'panda-g15', theme: 'panda', age: 'g15', title: '熊猫包 - G1-5', price: '$9.99', pages: '25页' },
      { id: 'panda-g68', theme: 'panda', age: 'g68', title: '熊猫包 - G6-8', price: '$12.99', pages: '30页' },
      { id: 'panda-g912', theme: 'panda', age: 'g912', title: '熊猫包 - G9-12', price: '$14.99', pages: '34页' },
    ],
  },
};

export default function KitsPage() {
  const [lang, setLang] = useState<Lang>('en');
  const [themeFilter, setThemeFilter] = useState('all');
  const [ageFilter, setAgeFilter] = useState('all');

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('zh')) {
      setLang('zh');
    }
  }, []);

  const t = content[lang];

  const filteredKits = t.kits.filter(kit => {
    if (themeFilter !== 'all' && kit.theme !== themeFilter) return false;
    if (ageFilter !== 'all' && kit.age !== ageFilter) return false;
    return true;
  });

  const themeIcons: Record<string, string> = {
    cny: '🏮',
    zodiac: '🐉',
    panda: '🐼',
  };

  return (
    <div className="min-h-screen bg-cream">
      <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm z-50 border-b border-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-teal font-nunito">Loong Kits</Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/kits" className="text-teal font-semibold">{t.nav.kits}</Link>
              <Link href="/free" className="text-ink hover:text-teal transition-colors">{t.nav.free}</Link>
              <Link href="/families" className="text-ink hover:text-teal transition-colors">{t.nav.families}</Link>
              <Link href="/teachers" className="text-ink hover:text-teal transition-colors">{t.nav.teachers}</Link>
              <Link href="/about" className="text-ink hover:text-teal transition-colors">{t.nav.about}</Link>
              <button
                onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
                className="ml-4 px-3 py-1 rounded-lg bg-teal/10 text-teal text-sm font-medium hover:bg-teal/20 transition-colors"
              >
                {lang === 'en' ? '中文' : 'EN'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-ink mb-4 font-nunito">{t.title}</h1>
            <p className="text-xl text-ink-light">{t.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <div className="flex gap-2">
              {Object.entries(t.filter).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setThemeFilter(key)}
                  className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                    themeFilter === key
                      ? 'bg-teal text-white'
                      : 'bg-white text-ink hover:bg-teal/10'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {Object.entries(t.age).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setAgeFilter(key)}
                  className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                    ageFilter === key
                      ? 'bg-orange text-white'
                      : 'bg-white text-ink hover:bg-orange/10'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredKits.map((kit) => (
              <div key={kit.id} className="card-kit">
                <div className="relative h-48 bg-teal/5 flex items-center justify-center">
                  <span className="text-5xl">{themeIcons[kit.theme]}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink mb-1 font-nunito">{kit.title}</h3>
                  <p className="text-sm text-ink-light mb-4">{kit.pages}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-teal">{kit.price}</span>
                    <button className="btn-primary text-sm py-2 px-4">
                      {lang === 'en' ? 'View' : '查看'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}