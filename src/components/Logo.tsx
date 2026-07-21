// Loong Kits 标志 —— 一方红印章（篆刻感）作为图形标记，配 wordmark 由导航栏排版。
// 印章是中国品牌最稳的视觉锚：缩到 16px 仍是一枚清楚的印，放大也耐看。
// 配色取《视觉规范》强调色中国红 #C8102E；印文用思源宋体粗，方正如刻。

const RED = "#C8102E";
const RED_D = "#9E0C24";
const CREAM = "#FAF7F2";

export function Logo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Loong Kits 印章标志"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 印身：圆角方印 + 内陷细边，模拟篆刻边框 */}
      <rect x="2" y="2" width="44" height="44" rx="9" fill={RED} />
      <rect x="2" y="2" width="44" height="44" rx="9" fill="url(#sealShade)" />
      <rect x="6.5" y="6.5" width="35" height="35" rx="5.5" fill="none" stroke={CREAM} strokeWidth="1.6" opacity="0.85" />
      {/* 四角刻痕，增篆刻质感 */}
      <g stroke={CREAM} strokeWidth="1.4" opacity="0.5" strokeLinecap="round">
        <path d="M9 12 V9 H12" />
        <path d="M39 12 V9 H36" />
        <path d="M9 36 V39 H12" />
        <path d="M39 36 V39 H36" />
      </g>
      {/* 印文 龙 */}
      <text
        x="24"
        y="33"
        textAnchor="middle"
        fontFamily="'Noto Serif SC', 'Songti SC', serif"
        fontWeight="700"
        fontSize="25"
        fill={CREAM}
      >
        龙
      </text>
      <defs>
        <linearGradient id="sealShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.12" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor={RED_D} stopOpacity="0.35" />
        </linearGradient>
      </defs>
    </svg>
  );
}
