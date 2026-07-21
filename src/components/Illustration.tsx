// Loong Kits 民俗视觉系统 —— 全部为几何/民俗/字体元素，零卡通生物。
// 设计原则：能画好的才画。祥云/印章/灯笼/红包/毛笔飞白/竖排书法 = 可靠且地道；
// 3D 卡通龙 = 本工具画不好，故不在此伪造，等真实渲染资产到位再叠加。
// 配色严格取《视觉规范 V1.0》。

import type { ReactNode, SVGProps } from "react";

const TEAL = "#2D6A4F";
const TEAL_D = "#1F4A38";
const ORANGE = "#F4A261";
const RED = "#C8102E";
const GOLD = "#E8C87A";
const CREAM = "#FAF7F2";

type P = SVGProps<SVGSVGElement>;

/* ---------- 剪纸祥云（可平铺/漂浮的氛围元素） ---------- */
export function DecoCloud({ className = "", ...p }: P & { className?: string }) {
  return (
    <svg viewBox="0 0 64 36" className={className} fill="none" aria-hidden {...p}>
      <path
        d="M14 30a10 10 0 0 1 1-20 13 13 0 0 1 25 2 9 9 0 0 1-2 18Z"
        fill={CREAM}
        stroke={TEAL}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* 实心剪纸祥云（用于深色/暖色背景上的点缀） */
export function CloudSolid({ className = "", color = TEAL, ...p }: P & { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 64 36" className={className} fill="none" aria-hidden {...p}>
      <path
        d="M14 30a10 10 0 0 1 1-20 13 13 0 0 1 25 2 9 9 0 0 1-2 18Z"
        fill={color}
        stroke={color}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DecoLantern({ className = "", ...p }: P & { className?: string }) {
  return (
    <svg viewBox="0 0 40 60" className={className} fill="none" aria-hidden {...p}>
      <path d="M20 2v6M20 52v6" stroke={GOLD} strokeWidth="2.4" strokeLinecap="round" />
      <rect x="8" y="8" width="24" height="44" rx="12" fill={RED} stroke={TEAL_D} strokeWidth="2.4" />
      <path d="M14 9c-3 6-3 34 0 42M26 9c3 6 3 34 0 42" stroke={CREAM} strokeWidth="1.6" opacity="0.6" />
      <path d="M8 20h24M8 40h24" stroke={TEAL_D} strokeWidth="2" />
      <rect x="14" y="6" width="12" height="4" rx="2" fill={GOLD} stroke={TEAL_D} strokeWidth="1.6" />
    </svg>
  );
}

export function DecoEnvelope({ className = "", ...p }: P & { className?: string }) {
  return (
    <svg viewBox="0 0 44 56" className={className} fill="none" aria-hidden {...p}>
      <rect x="4" y="4" width="36" height="48" rx="6" fill={RED} stroke={TEAL_D} strokeWidth="2.4" />
      <path d="M4 16c6 6 12 9 18 9s12-3 18-9" stroke={TEAL_D} strokeWidth="2.4" />
      <circle cx="22" cy="30" r="7" fill={GOLD} stroke={TEAL_D} strokeWidth="2.4" />
      <path d="M22 26v8M18 30h8" stroke={TEAL_D} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* 印章：可作为点缀，也可放大作背景图形 */
export function DecoSeal({
  className = "",
  char = "龙",
  color = RED,
  ...p
}: P & { className?: string; char?: string; color?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden {...p}>
      <rect x="4" y="4" width="48" height="48" rx="9" fill={color} />
      <rect x="9" y="9" width="38" height="38" rx="5" fill="none" stroke={CREAM} strokeWidth="2" opacity="0.7" />
      <text x="28" y="38" textAnchor="middle" fontSize="26" fontFamily="'Noto Serif SC', serif" fontWeight="700" fill={CREAM}>
        {char}
      </text>
    </svg>
  );
}

/* ---------- 毛笔飞白：一笔写意的笔触，加载时自绘（stroke 动画） ---------- */
export function InkStroke({ className = "", color = TEAL, ...p }: P & { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 320 80" className={className} fill="none" aria-hidden {...p}>
      <path
        className="ink-draw"
        pathLength={1}
        d="M8 52 C 70 20, 120 64, 176 38 S 268 18, 312 44"
        stroke={color}
        strokeWidth="13"
        strokeLinecap="round"
      />
      <path
        className="ink-draw ink-draw-2"
        pathLength={1}
        d="M40 64 C 96 50, 150 70, 210 56"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

/* ---------- 品牌氛围组合：居中分层徽章（印章为核，民俗元素环抱，零生物） ---------- */
export function BrandMotif({ className = "", ...p }: P & { className?: string }) {
  const C = 180;
  const R = 130; // 民俗元素所在环半径
  // 环上四点 N/E/S/W
  const N = [C, C - R], E = [C + R, C], S = [C, C + R], W = [C - R, C];
  return (
    <svg viewBox="0 0 360 360" className={className} fill="none" aria-hidden {...p}>
      {/* 1 巨型水印龙字（最底） */}
      <text x={C} y={C + 78} textAnchor="middle" fontSize="232" fontFamily="'Noto Serif SC', serif" fontWeight="700" fill={TEAL} opacity="0.05">
        龙
      </text>
      {/* 2 旋转虚线环 */}
      <circle className="spin-slow" cx={C} cy={C} r={R} fill="none" stroke={TEAL} strokeWidth="1.5" strokeDasharray="2 12" opacity="0.3" />
      <circle cx={C} cy={C} r={R + 14} fill="none" stroke={TEAL} strokeWidth="1" opacity="0.1" />
      {/* 3 米白承盘 + 柔光环 */}
      <circle cx={C} cy={C} r="100" fill="#fff" opacity="0.92" />
      <circle cx={C} cy={C} r="100" fill="none" stroke={TEAL} strokeWidth="1" opacity="0.12" />
      {/* 4 环上民俗元素（居中绘制，各自微动） */}
      <g className="sway" transform={`translate(${N[0]} ${N[1]})`}>
        <MiniLantern />
      </g>
      <g className="float-2" transform={`translate(${E[0]} ${E[1]})`}>
        <MiniEnvelope />
      </g>
      <g className="float-3" transform={`translate(${S[0]} ${S[1]})`}>
        <MiniCloud />
      </g>
      <g className="float-2" transform={`translate(${W[0]} ${W[1]})`}>
        <MiniCloud />
      </g>
      {/* 对角点缀 */}
      <path d={`M${C + 92} ${C - 92} l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 Z`} fill={GOLD} />
      <circle cx={C - 92} cy={C + 92} r="5" fill={ORANGE} opacity="0.8" />
      {/* 5 中心红印（略斜，浮动） */}
      <g className="float-1" transform={`rotate(-4 ${C} ${C})`}>
        <rect x={C - 66} y={C - 66} width="132" height="132" rx="18" fill={RED} />
        <rect x={C - 66} y={C - 66} width="132" height="132" rx="18" fill="url(#sealShade2)" />
        <rect x={C - 55} y={C - 55} width="110" height="110" rx="12" fill="none" stroke={CREAM} strokeWidth="2.6" opacity="0.82" />
        <g stroke={CREAM} strokeWidth="2" opacity="0.5" strokeLinecap="round">
          <path d={`M${C - 47} ${C - 38} V${C - 47} H${C - 38}`} />
          <path d={`M${C + 47} ${C - 38} V${C - 47} H${C + 38}`} />
          <path d={`M${C - 47} ${C + 38} V${C + 47} H${C - 38}`} />
          <path d={`M${C + 47} ${C + 38} V${C + 47} H${C + 38}`} />
        </g>
        <text x={C} y={C + 28} textAnchor="middle" fontSize="74" fontFamily="'Noto Serif SC', serif" fontWeight="700" fill={CREAM}>
          龙
        </text>
      </g>
      <defs>
        <linearGradient id="sealShade2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.12" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor={TEAL_D} stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* 居中（原点 0,0）的迷你民俗图形，供环上嵌套 */
function MiniLantern() {
  return (
    <svg width="30" height="48" viewBox="-15 -24 30 48" fill="none" aria-hidden overflow="visible">
      <path d="M0 -23v5M0 18v5" stroke={GOLD} strokeWidth="2.2" strokeLinecap="round" />
      <rect x="-12" y="-18" width="24" height="36" rx="12" fill={RED} stroke={TEAL_D} strokeWidth="2.2" />
      <path d="M-12 -6h24M-12 6h24" stroke={TEAL_D} strokeWidth="1.8" />
      <rect x="-6" y="-20" width="12" height="4" rx="2" fill={GOLD} stroke={TEAL_D} strokeWidth="1.4" />
    </svg>
  );
}
function MiniEnvelope() {
  return (
    <svg width="32" height="40" viewBox="-16 -20 32 40" fill="none" aria-hidden overflow="visible">
      <rect x="-15" y="-19" width="30" height="38" rx="5" fill={RED} stroke={TEAL_D} strokeWidth="2.2" />
      <path d="M-15 -7c5 6 10 8 15 8s10-2 15-8" stroke={TEAL_D} strokeWidth="2.2" />
      <circle cx="0" cy="4" r="6" fill={GOLD} stroke={TEAL_D} strokeWidth="2" />
    </svg>
  );
}
function MiniCloud() {
  return (
    <svg width="50" height="28" viewBox="-23 -13 46 26" fill="none" aria-hidden overflow="visible">
      <g transform="translate(-22 -14) scale(0.82)">
        {/* 浅青填充：在米白页底与白色承盘上都看得清，不再是"奶油叠奶油" */}
        <path d="M14 30a10 10 0 0 1 1-20 13 13 0 0 1 25 2 9 9 0 0 1-2 18Z" fill="#E3ECE7" stroke={TEAL} strokeWidth="2.6" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/* ---------- 三大主题封面（卡片用，横幅比例） ---------- */
function Frame({ children, bg }: { children: ReactNode; bg: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="400" height="300" fill={bg} />
      <g fill={TEAL} opacity="0.05">
        {Array.from({ length: 7 }).map((_, r) =>
          Array.from({ length: 9 }).map((_, c) => <circle key={`${r}-${c}`} cx={20 + c * 45} cy={20 + r * 45} r="2" />)
        )}
      </g>
      {children}
    </svg>
  );
}

export function CoverCny() {
  return (
    <Frame bg="#FBEEE6">
      <path d="M40 90a22 22 0 0 1 3-44 28 28 0 0 1 54 4 20 20 0 0 1-4 40Z" fill="#fff" stroke={TEAL} strokeWidth="3" opacity="0.85" />
      <path d="M300 70a18 18 0 0 1 2-36 23 23 0 0 1 44 3 16 16 0 0 1-3 33Z" fill="#fff" stroke={TEAL} strokeWidth="3" opacity="0.7" />
      <g transform="translate(150 40)">
        <path d="M50 0v14" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <rect x="14" y="14" width="72" height="120" rx="36" fill={RED} stroke={TEAL_D} strokeWidth="4" />
        <path d="M30 16c-8 18-8 98 0 118M70 16c8 18 8 98 0 118" stroke={CREAM} strokeWidth="2.4" opacity="0.55" />
        <path d="M14 50h72M14 98h72" stroke={TEAL_D} strokeWidth="3" />
        <rect x="34" y="8" width="32" height="10" rx="4" fill={GOLD} stroke={TEAL_D} strokeWidth="3" />
        <path d="M50 134v22M40 150h20" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <text x="50" y="86" textAnchor="middle" fontSize="40" fontFamily="'Noto Serif SC', serif" fontWeight="700" fill={GOLD}>春</text>
      </g>
      <g transform="translate(40 150) rotate(-12)">
        <rect x="0" y="0" width="84" height="110" rx="12" fill={RED} stroke={TEAL_D} strokeWidth="4" />
        <path d="M0 28c14 14 28 20 42 20s28-6 42-20" stroke={TEAL_D} strokeWidth="4" />
        <circle cx="42" cy="64" r="15" fill={GOLD} stroke={TEAL_D} strokeWidth="4" />
        <path d="M42 56v16M34 64h16" stroke={TEAL_D} strokeWidth="3" strokeLinecap="round" />
      </g>
      <g transform="translate(300 150)">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${i * 22} ${i % 2 ? 14 : 0})`}>
            <rect x="0" y="20" width="18" height="60" rx="5" fill={RED} stroke={TEAL_D} strokeWidth="3" />
            <path d="M9 20c0-8 4-12 4-18" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
            <path d="M0 38h18M0 62h18" stroke={GOLD} strokeWidth="2.4" />
          </g>
        ))}
      </g>
    </Frame>
  );
}

export function CoverZodiac() {
  return (
    <Frame bg="#EAF1EC">
      <path d="M30 70a20 20 0 0 1 3-40 26 26 0 0 1 50 4 18 18 0 0 1-4 36Z" fill="#fff" stroke={TEAL} strokeWidth="3" opacity="0.7" />
      <circle cx="200" cy="150" r="96" fill="#fff" stroke={TEAL} strokeWidth="3" opacity="0.6" />
      <circle className="spin-slow" cx="200" cy="150" r="96" fill="none" stroke={ORANGE} strokeWidth="2" strokeDasharray="3 9" />
      {/* 中心：龙字印（取代画不好的卡通龙头） */}
      <g transform="translate(168 118)">
        <rect x="0" y="0" width="64" height="64" rx="12" fill={TEAL} />
        <rect x="6" y="6" width="52" height="52" rx="8" fill="none" stroke={CREAM} strokeWidth="2.4" opacity="0.8" />
        <text x="32" y="45" textAnchor="middle" fontSize="36" fontFamily="'Noto Serif SC', serif" fontWeight="700" fill={CREAM}>龙</text>
      </g>
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
        return <circle key={i} cx={200 + Math.cos(a) * 96} cy={150 + Math.sin(a) * 96} r="5" fill={i % 3 === 0 ? RED : ORANGE} />;
      })}
    </Frame>
  );
}

export function CoverPanda() {
  return (
    <Frame bg="#EEF3EC">
      {[40, 350].map((x, i) => (
        <g key={i} transform={`translate(${x} 30)`}>
          <rect x="0" y="0" width="16" height="240" rx="8" fill={QING} stroke={TEAL_D} strokeWidth="3" />
          <path d="M0 60h16M0 120h16M0 180h16" stroke={TEAL_D} strokeWidth="2.4" />
          <path d="M16 50c14-6 24-2 30 6M0 110c-14-6-24-2-30 6" stroke={TEAL} strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>
      ))}
      <g transform="translate(138 96)">
        <circle cx="34" cy="20" r="16" fill="#2B2B2B" />
        <circle cx="90" cy="20" r="16" fill="#2B2B2B" />
        <path d="M62 120c-34 0-50-22-50-50S28 18 62 18s50 24 50 52-16 50-50 50Z" fill="#fff" stroke={TEAL_D} strokeWidth="4" />
        <ellipse cx="44" cy="62" rx="13" ry="16" fill="#2B2B2B" transform="rotate(-12 44 62)" />
        <ellipse cx="80" cy="62" rx="13" ry="16" fill="#2B2B2B" transform="rotate(12 80 62)" />
        <circle cx="46" cy="60" r="4" fill="#fff" />
        <circle cx="78" cy="60" r="4" fill="#fff" />
        <path d="M58 78h8l-4 6Z" fill="#2B2B2B" />
        <path d="M62 84c-4 5-10 4-12 1M62 84c4 5 10 4 12 1" stroke="#2B2B2B" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="34" cy="80" r="6" fill={HONG} opacity="0.5" />
        <circle cx="90" cy="80" r="6" fill={HONG} opacity="0.5" />
      </g>
      <path d="M120 230c-10-4-16 0-20 8 10 2 16-2 20-8Z" fill={TEAL} />
      <path d="M280 232c10-4 16 0 20 8-10 2-16-2-20-8Z" fill={TEAL} />
    </Frame>
  );
}

const QING = "#7A9B8E";
const HONG = "#D4807A";

export const themeCover = {
  cny: CoverCny,
  zodiac: CoverZodiac,
  panda: CoverPanda,
} as const;
