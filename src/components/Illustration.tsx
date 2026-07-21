// Loong Kits 主题插画系统 —— 大尺寸、有品牌感的矢量场景，替代 emoji 封面
// 风格：扁平插画 + 粗描边 + 大圆角 + 莫兰迪品牌色，呼应《视觉规范 V1.0》
// 这些是"统一插画语言"层；AI 生成的 IP 位图（双龙定稿/封面海报）到位后可叠加替换。

import type { ReactNode, SVGProps } from "react";

const TEAL = "#2D6A4F";
const TEAL_D = "#1F4A38";
const ORANGE = "#F4A261";
const RED = "#C8102E";
const HONG = "#D4807A"; // 灰粉
const QING = "#7A9B8E"; // 灰绿
const GOLD = "#E8C87A";
const CREAM = "#FAF7F2";

type P = SVGProps<SVGSVGElement>;

/* ---------- 装饰元素（漂浮用，统一描边语言） ---------- */

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

export function DecoSeal({ className = "", char = "龙", ...p }: P & { className?: string; char?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden {...p}>
      <rect x="4" y="4" width="48" height="48" rx="9" fill={RED} />
      <rect x="9" y="9" width="38" height="38" rx="5" fill="none" stroke={CREAM} strokeWidth="2" opacity="0.7" />
      <text x="28" y="38" textAnchor="middle" fontSize="26" fontFamily="'Noto Serif SC', serif" fontWeight="700" fill={CREAM}>
        {char}
      </text>
    </svg>
  );
}

/* ---------- 双龙主角（升级放大版，带姿态与表情） ---------- */

export function DragonDuo({ className = "", ...p }: P & { className?: string }) {
  return (
    <svg viewBox="0 0 320 280" className={className} fill="none" aria-hidden {...p}>
      {/* 柔光底 */}
      <ellipse cx="160" cy="232" rx="120" ry="20" fill={TEAL} opacity="0.08" />

      {/* 小青龙 Qing（导师，拱手，沉稳）—— 左后 */}
      <g transform="translate(70 96)">
        <path d="M40 120c-22 0-34-16-34-40s14-44 34-44 34 20 34 44-12 40-34 40Z" fill={QING} stroke={TEAL_D} strokeWidth="3" />
        <path d="M40 120c-12 0-20-8-20-22h40c0 14-8 22-20 22Z" fill={GOLD} stroke={TEAL_D} strokeWidth="2.4" />
        {/* 鹿角 */}
        <path d="M26 40c-4-10-2-16 2-20M24 30c-6-2-9-6-9-10M54 40c4-10 2-16-2-20M56 30c6-2 9-6 9-10" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
        {/* 蓬松鬃毛 */}
        <path d="M14 56c-8 2-12 8-12 14M66 56c8 2 12 8 12 14" stroke={QING} strokeWidth="6" strokeLinecap="round" opacity="0.7" />
        {/* 眼 */}
        <circle cx="30" cy="62" r="4.5" fill={TEAL_D} />
        <circle cx="50" cy="62" r="4.5" fill={TEAL_D} />
        <circle cx="31.5" cy="60.5" r="1.4" fill="#fff" />
        <circle cx="51.5" cy="60.5" r="1.4" fill="#fff" />
        {/* 抿嘴微笑 */}
        <path d="M34 74c3 3 9 3 12 0" stroke={TEAL_D} strokeWidth="2.4" strokeLinecap="round" />
        {/* 长须 */}
        <path d="M22 72c-10 4-16 12-18 22M58 72c10 4 16 12 18 22" stroke={TEAL_D} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        {/* 拱手 */}
        <path d="M30 104c4-4 16-4 20 0" stroke={TEAL_D} strokeWidth="3" strokeLinecap="round" />
        <circle cx="40" cy="102" r="6" fill={GOLD} stroke={TEAL_D} strokeWidth="2.4" />
      </g>

      {/* 小红龙 Hong（主角，吐舌挥手，活泼）—— 右前，更大 */}
      <g transform="translate(150 70)">
        <path d="M52 150c-28 0-44-20-44-50s18-56 44-56 44 26 44 56-16 50-44 50Z" fill={HONG} stroke={TEAL_D} strokeWidth="3.4" />
        <path d="M52 150c-15 0-25-10-25-27h50c0 17-10 27-25 27Z" fill={GOLD} stroke={TEAL_D} strokeWidth="2.6" />
        {/* 鹿角 */}
        <path d="M34 50c-5-13-2-21 3-26M31 38c-8-2-12-8-12-13M70 50c5-13 2-21-3-26M73 38c8-2 12-8 12-13" stroke={GOLD} strokeWidth="3.4" strokeLinecap="round" />
        {/* 蓬松鬃毛 */}
        <path d="M16 70c-10 3-15 10-15 18M88 70c10 3 15 10 15 18" stroke={HONG} strokeWidth="7" strokeLinecap="round" opacity="0.7" />
        {/* 眼（大而亮） */}
        <circle cx="40" cy="78" r="6" fill={TEAL_D} />
        <circle cx="64" cy="78" r="6" fill={TEAL_D} />
        <circle cx="42" cy="76" r="2" fill="#fff" />
        <circle cx="66" cy="76" r="2" fill="#fff" />
        {/* 腮红 */}
        <circle cx="30" cy="92" r="5" fill={RED} opacity="0.25" />
        <circle cx="74" cy="92" r="5" fill={RED} opacity="0.25" />
        {/* 吐舌微笑 */}
        <path d="M42 92c4 5 16 5 20 0" stroke={TEAL_D} strokeWidth="2.8" strokeLinecap="round" />
        <path d="M48 96c0 6 8 6 8 0Z" fill={RED} stroke={TEAL_D} strokeWidth="2" />
        {/* 长须 */}
        <path d="M28 90c-13 5-20 15-23 28M76 90c13 5 20 15 23 28" stroke={TEAL_D} strokeWidth="2.2" strokeLinecap="round" opacity="0.6" />
        {/* 挥手 */}
        <path d="M92 96c10-4 18-2 22 4" stroke={TEAL_D} strokeWidth="3.4" strokeLinecap="round" />
        <circle cx="116" cy="98" r="8" fill={GOLD} stroke={TEAL_D} strokeWidth="2.6" />
      </g>

      {/* 漂浮小点缀 */}
      <circle cx="40" cy="60" r="5" fill={ORANGE} opacity="0.7" />
      <circle cx="288" cy="120" r="4" fill={RED} opacity="0.6" />
      <path d="M270 50l3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" fill={GOLD} />
    </svg>
  );
}

/* ---------- 三大主题封面场景（卡片用，横幅比例） ---------- */

function Frame({ children, bg }: { children: ReactNode; bg: string }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="400" height="300" fill={bg} />
      {/* 纸纹点 */}
      <g fill={TEAL} opacity="0.05">
        {Array.from({ length: 7 }).map((_, r) =>
          Array.from({ length: 9 }).map((_, c) => <circle key={`${r}-${c}`} cx={20 + c * 45} cy={20 + r * 45} r="2" />)
        )}
      </g>
      {children}
    </svg>
  );
}

export function CoverCny(p: P) {
  return (
    <Frame bg="#FBEEE6">
      {/* 祥云背景 */}
      <path d="M40 90a22 22 0 0 1 3-44 28 28 0 0 1 54 4 20 20 0 0 1-4 40Z" fill="#fff" stroke={TEAL} strokeWidth="3" opacity="0.85" />
      <path d="M300 70a18 18 0 0 1 2-36 23 23 0 0 1 44 3 16 16 0 0 1-3 33Z" fill="#fff" stroke={TEAL} strokeWidth="3" opacity="0.7" />
      {/* 大灯笼 */}
      <g transform="translate(150 40)">
        <path d="M50 0v14" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <rect x="14" y="14" width="72" height="120" rx="36" fill={RED} stroke={TEAL_D} strokeWidth="4" />
        <path d="M30 16c-8 18-8 98 0 118M70 16c8 18 8 98 0 118" stroke={CREAM} strokeWidth="2.4" opacity="0.55" />
        <path d="M14 50h72M14 98h72" stroke={TEAL_D} strokeWidth="3" />
        <rect x="34" y="8" width="32" height="10" rx="4" fill={GOLD} stroke={TEAL_D} strokeWidth="3" />
        <path d="M50 134v22M40 150h20" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <text x="50" y="86" textAnchor="middle" fontSize="40" fontFamily="'Noto Serif SC', serif" fontWeight="700" fill={GOLD}>春</text>
      </g>
      {/* 红包 */}
      <g transform="translate(40 150) rotate(-12)">
        <rect x="0" y="0" width="84" height="110" rx="12" fill={RED} stroke={TEAL_D} strokeWidth="4" />
        <path d="M0 28c14 14 28 20 42 20s28-6 42-20" stroke={TEAL_D} strokeWidth="4" />
        <circle cx="42" cy="64" r="15" fill={GOLD} stroke={TEAL_D} strokeWidth="4" />
        <path d="M42 56v16M34 64h16" stroke={TEAL_D} strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* 爆竹 */}
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

export function CoverZodiac(p: P) {
  return (
    <Frame bg="#EAF1EC">
      <path d="M30 70a20 20 0 0 1 3-40 26 26 0 0 1 50 4 18 18 0 0 1-4 36Z" fill="#fff" stroke={TEAL} strokeWidth="3" opacity="0.7" />
      {/* 圆月/轮盘 */}
      <circle cx="200" cy="150" r="96" fill="#fff" stroke={TEAL} strokeWidth="3" opacity="0.6" />
      <circle cx="200" cy="150" r="96" fill="none" stroke={ORANGE} strokeWidth="2" strokeDasharray="3 9" />
      {/* 中心龙（Q 版盘身） */}
      <g transform="translate(148 92)">
        <path d="M52 116c-30 0-46-22-46-52S24 12 52 12s46 22 46 52-16 52-46 52Z" fill={QING} stroke={TEAL_D} strokeWidth="4" />
        <path d="M52 116c-16 0-26-10-26-28h52c0 18-10 28-26 28Z" fill={GOLD} stroke={TEAL_D} strokeWidth="3" />
        <path d="M34 36c-5-13-2-20 3-25M70 36c5-13 2-20-3-25" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        <circle cx="40" cy="58" r="6" fill={TEAL_D} />
        <circle cx="64" cy="58" r="6" fill={TEAL_D} />
        <circle cx="42" cy="56" r="2" fill="#fff" />
        <circle cx="66" cy="56" r="2" fill="#fff" />
        <path d="M44 74c4 5 12 5 16 0" stroke={TEAL_D} strokeWidth="3" strokeLinecap="round" />
        <path d="M28 70c-12 5-18 14-21 26M76 70c12 5 18 14 21 26" stroke={TEAL_D} strokeWidth="2.4" strokeLinecap="round" opacity="0.6" />
      </g>
      {/* 12 点位小圆点（生肖轮） */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
        return <circle key={i} cx={200 + Math.cos(a) * 96} cy={150 + Math.sin(a) * 96} r="5" fill={i % 3 === 0 ? RED : ORANGE} />;
      })}
    </Frame>
  );
}

export function CoverPanda(p: P) {
  return (
    <Frame bg="#EEF3EC">
      {/* 竹子 */}
      {[40, 350].map((x, i) => (
        <g key={i} transform={`translate(${x} 30)`}>
          <rect x="0" y="0" width="16" height="240" rx="8" fill={QING} stroke={TEAL_D} strokeWidth="3" />
          <path d="M0 60h16M0 120h16M0 180h16" stroke={TEAL_D} strokeWidth="2.4" />
          <path d="M16 50c14-6 24-2 30 6M0 110c-14-6-24-2-30 6" stroke={TEAL} strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>
      ))}
      {/* 熊猫 */}
      <g transform="translate(138 96)">
        <circle cx="34" cy="20" r="16" fill="#2B2B2B" />
        <circle cx="90" cy="20" r="16" fill="#2B2B2B" />
        <path d="M62 120c-34 0-50-22-50-50S28 18 62 18s50 24 50 52-16 50-50 50Z" fill="#fff" stroke={TEAL_D} strokeWidth="4" />
        {/* 眼圈 */}
        <ellipse cx="44" cy="62" rx="13" ry="16" fill="#2B2B2B" transform="rotate(-12 44 62)" />
        <ellipse cx="80" cy="62" rx="13" ry="16" fill="#2B2B2B" transform="rotate(12 80 62)" />
        <circle cx="46" cy="60" r="4" fill="#fff" />
        <circle cx="78" cy="60" r="4" fill="#fff" />
        {/* 鼻嘴 */}
        <path d="M58 78h8l-4 6Z" fill="#2B2B2B" />
        <path d="M62 84c-4 5-10 4-12 1M62 84c4 5 10 4 12 1" stroke="#2B2B2B" strokeWidth="2.4" strokeLinecap="round" />
        {/* 腮红 */}
        <circle cx="34" cy="80" r="6" fill={HONG} opacity="0.5" />
        <circle cx="90" cy="80" r="6" fill={HONG} opacity="0.5" />
      </g>
      {/* 竹叶点缀 */}
      <path d="M120 230c-10-4-16 0-20 8 10 2 16-2 20-8Z" fill={TEAL} />
      <path d="M280 232c10-4 16 0 20 8-10 2-16-2-20-8Z" fill={TEAL} />
    </Frame>
  );
}

/* ---------- 全身 Q 版东方龙 v2：有身体/四肢/长身鱼尾/鹿角狮鬃长须 ---------- */
// 单只龙，局部坐标以头中心为 (0,0)，外层用 translate 定位。mood 控制表情与手势。
function DragonFull({
  cx,
  cy,
  s,
  body,
  mood,
}: {
  cx: number;
  cy: number;
  s: number;
  body: string;
  mood: "hong" | "qing";
}) {
  const out = TEAL_D;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      {/* 长身鱼尾（身后，先画） */}
      <path
        d="M22 78 C 64 84, 78 120, 52 134 C 40 141, 24 134, 30 120"
        fill={body}
        stroke={out}
        strokeWidth={3}
        strokeLinejoin="round"
      />
      <path d="M52 134 C 66 132, 76 140, 78 150 C 66 148, 58 144, 52 134 Z" fill={GOLD} stroke={out} strokeWidth={2.4} strokeLinejoin="round" />
      <path d="M52 134 C 60 144, 58 156, 50 162 C 46 152, 46 142, 52 134 Z" fill={GOLD} stroke={out} strokeWidth={2.4} strokeLinejoin="round" />
      {/* 背鬃（蓬松，身体同色） */}
      <circle cx={-40} cy={6} r={9} fill={body} opacity={0.85} />
      <circle cx={-44} cy={26} r={9} fill={body} opacity={0.85} />
      <circle cx={-42} cy={48} r={8} fill={body} opacity={0.85} />
      {/* 身体（梨形坐姿） */}
      <path
        d="M0 24 C -34 24, -40 66, -33 96 C -27 120, 27 120, 33 96 C 40 66, 34 24, 0 24 Z"
        fill={body}
        stroke={out}
        strokeWidth={3.2}
        strokeLinejoin="round"
      />
      {/* 肚子 */}
      <ellipse cx={0} cy={88} rx={21} ry={25} fill={GOLD} stroke={out} strokeWidth={2.4} />
      {/* 后脚 + 三趾 */}
      {[-19, 19].map((fx) => (
        <g key={fx}>
          <ellipse cx={fx} cy={116} rx={12} ry={8} fill={body} stroke={out} strokeWidth={2.6} />
          <path d={`M${fx - 5} 122 v4 M${fx} 123 v4 M${fx + 5} 122 v4`} stroke={out} strokeWidth={2} strokeLinecap="round" />
        </g>
      ))}
      {/* 头 */}
      <circle cx={0} cy={0} r={49} fill={body} stroke={out} strokeWidth={3.4} />
      {/* 鹿角 */}
      <path d="M-17 -40 C -23 -56, -19 -64, -13 -70 M-19 -54 C -27 -58, -31 -64, -31 -70" stroke={GOLD} strokeWidth={3.4} strokeLinecap="round" fill="none" />
      <path d="M17 -40 C 23 -56, 19 -64, 13 -70 M19 -54 C 27 -58, 31 -64, 31 -70" stroke={GOLD} strokeWidth={3.4} strokeLinecap="round" fill="none" />
      {/* 狮鬃（脸颊蓬松） */}
      <path d="M-46 -6 C -58 -2, -62 8, -60 18" stroke={body} strokeWidth={8} strokeLinecap="round" fill="none" opacity={0.8} />
      <path d="M46 -6 C 58 -2, 62 8, 60 18" stroke={body} strokeWidth={8} strokeLinecap="round" fill="none" opacity={0.8} />
      {/* 长须 */}
      <path d="M-30 12 C -46 18, -54 30, -58 46" stroke={out} strokeWidth={2.2} strokeLinecap="round" fill="none" opacity={0.65} />
      <path d="M30 12 C 46 18, 54 30, 58 46" stroke={out} strokeWidth={2.2} strokeLinecap="round" fill="none" opacity={0.65} />
      {/* 眼 */}
      <circle cx={-15} cy={-4} r={6.5} fill={out} />
      <circle cx={15} cy={-4} r={6.5} fill={out} />
      <circle cx={-13} cy={-6} r={2.2} fill="#fff" />
      <circle cx={17} cy={-6} r={2.2} fill="#fff" />
      {/* 腮红 */}
      <circle cx={-30} cy={12} r={5.5} fill={RED} opacity={0.25} />
      <circle cx={30} cy={12} r={5.5} fill={RED} opacity={0.25} />
      {/* 嘴 */}
      {mood === "hong" ? (
        <>
          <path d="M-12 14 C -6 22, 6 22, 12 14" stroke={out} strokeWidth={2.8} strokeLinecap="round" fill="none" />
          <path d="M-5 18 C -5 26, 5 26, 5 18 Z" fill={RED} stroke={out} strokeWidth={2} strokeLinejoin="round" />
        </>
      ) : (
        <path d="M-12 15 C -6 21, 6 21, 12 15" stroke={out} strokeWidth={2.8} strokeLinecap="round" fill="none" />
      )}
      {/* 手 / 手势 */}
      {mood === "hong" ? (
        <>
          <path d="M40 44 C 54 38, 64 30, 66 18" stroke={out} strokeWidth={3.4} strokeLinecap="round" fill="none" />
          <circle cx={67} cy={14} r={8.5} fill={GOLD} stroke={out} strokeWidth={2.6} />
          <circle cx={-40} cy={62} r={8} fill={GOLD} stroke={out} strokeWidth={2.6} />
        </>
      ) : (
        <>
          <path d="M-22 56 C -10 50, 10 50, 22 56" stroke={out} strokeWidth={3.2} strokeLinecap="round" fill="none" />
          <circle cx={0} cy={56} r={9} fill={GOLD} stroke={out} strokeWidth={2.6} />
        </>
      )}
    </g>
  );
}

// 双龙并排全身版（替代旧的"双蛋头"）
export function DragonPair({ className = "", ...p }: P & { className?: string }) {
  return (
    <svg viewBox="0 0 360 300" className={className} fill="none" aria-hidden {...p}>
      <ellipse cx="180" cy="262" rx="140" ry="20" fill={TEAL} opacity="0.08" />
      <DragonFull cx={120} cy={120} s={1} body={QING} mood="qing" />
      <DragonFull cx={244} cy={112} s={1.12} body={HONG} mood="hong" />
      <circle cx="40" cy="70" r="5" fill={ORANGE} opacity="0.7" />
      <path d="M320 60 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 Z" fill={GOLD} />
    </svg>
  );
}

export const themeCover = {
  cny: CoverCny,
  zodiac: CoverZodiac,
  panda: CoverPanda,
} as const;
