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
    title: 'About Loong Kits',
    story: {
      title: 'Our Story',
      text: 'Loong Kits was born from a simple observation: heritage families and educators need better tools to share Chinese culture with the next generation. We believe learning should be joyful, accessible, and meaningful.',
    },
    mission: {
      title: 'Our Mission',
      text: 'To make Chinese culture accessible and engaging for every child, everywhere. Through beautifully designed printable resources, we help families and teachers create meaningful learning experiences.',
    },
    values: {
      title: 'Our Values',
      items: [
        { icon: '❤️', title: 'Cultural Pride', desc: 'Celebrating heritage with authenticity and respect' },
        { icon: '✨', title: 'Quality First', desc: 'Every resource is crafted with care and expertise' },
        { icon: '🌍', title: 'Global Community', desc: 'Connecting families and educators worldwide' },
        { icon: '🌱', title: 'Lifelong Learning', desc: 'Growing curiosity and understanding at every age' },
      ],
    },
    contact: {
      title: 'Get in Touch',
      email: 'hello@loongkits.com',
    },
  },
  zh: {
    nav: {
      kits: '学习包',
      free: '免费资源',
      families: '给家庭',
      teachers: '给老师',
      about: '关于我们',
    },
    title: '关于 Loong Kits',
    story: {
      title: '我们的故事',
      text: 'Loong Kits 源于一个简单的观察：海外华裔家庭和教育工作者需要更好的工具来向下一代分享中国文化。我们相信学习应该是快乐的、可及的、有意义的。',
    },
    mission: {
      title: '我们的使命',
      text: '让中国文化触手可及，让每个孩子都能快乐学习。通过精心设计的可打印资源，我们帮助家庭和老师创造有意义的学习体验。',
    },
    values: {
      title: '我们的价值观',
      items: [
        { icon: '❤️', title: '文化自豪', desc: '以真诚和尊重庆祝文化传承' },
        { icon: '✨', title: '质量第一', desc: '每一份资源都用心制作' },
        { icon: '🌍', title: '全球社区', desc: '连接世界各地的家庭和教育者' },
        { icon: '🌱', title: '终身学习', desc: '在每个年龄段培养好奇心和理解力' },
      ],
    },
    contact: {
      title: '联系我们',
      email: 'hello@loongkits.com',
    },
  },
};

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('zh')) {
      setLang('zh');
    }
  }, []);

  const t = content[lang];

  return (
    <div className="min-h-screen bg-cream">
      <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm z-50 border-b border-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-teal font-nunito">Loong Kits</Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/kits" className="text-ink hover:text-teal transition-colors">{t.nav.kits}</Link>
              <Link href="/free" className="text-ink hover:text-teal transition-colors">{t.nav.free}</Link>
              <Link href="/families" className="text-ink hover:text-teal transition-colors">{t.nav.families}</Link>
              <Link href="/teachers" className="text-ink hover:text-teal transition-colors">{t.nav.teachers}</Link>
              <Link href="/about" className="text-teal font-semibold">{t.nav.about}</Link>
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-ink mb-4 font-nunito">{t.title}</h1>
          </div>

          <section className="mb-12 bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-ink mb-4 font-nunito">{t.story.title}</h2>
            <p className="text-ink-light text-lg leading-relaxed">{t.story.text}</p>
          </section>

          <section className="mb-12 bg-teal/5 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-ink mb-4 font-nunito">{t.mission.title}</h2>
            <p className="text-ink-light text-lg leading-relaxed">{t.mission.text}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink mb-8 font-nunito">{t.values.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.values.items.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-ink mb-2 font-nunito">{item.title}</h3>
                  <p className="text-ink-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-ink mb-4 font-nunito">{t.contact.title}</h2>
            <a href={`mailto:${t.contact.email}`} className="text-teal text-lg hover:underline">
              {t.contact.email}
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}