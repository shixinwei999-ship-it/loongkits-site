// 双龙环抱品牌标志 v2 —— 两条可识别的 Q 版小龙首尾相环成圆（太极追逐式）
// 配色按《视觉规范》Logo 条：红龙中国红 #C8102E / 青龙青绿 #2D6A4F / 角须橙黄 #F4A261
// 每条龙带"头+角+眼+须"，缩小到 32px 仍能看出是两条龙围成环，而非色块。

const RED = "#C8102E";
const TEAL = "#2D6A4F";
const OUT = "#1F4A38";
const GOLD = "#F4A261";

// 单条龙：一段粗弧身 + 弧端的头（角/眼/须）。head 在弧的哪一端由 flip 控制。
function Dragon({
  color,
  d,
  hx,
  hy,
  flip = 1,
}: {
  color: string;
  d: string;
  hx: number;
  hy: number;
  flip?: number;
}) {
  return (
    <g>
      <path d={d} fill="none" stroke={color} strokeWidth={13} strokeLinecap="round" />
      <g transform={`translate(${hx} ${hy}) scale(${flip} 1)`}>
        {/* 头 */}
        <circle cx={0} cy={0} r={11} fill={color} stroke={OUT} strokeWidth={2} />
        {/* 鹿角 */}
        <path d="M-3 -9 C -5 -15, -3 -18, 0 -20 M-4 -14 C -8 -15, -10 -18, -10 -21" stroke={GOLD} strokeWidth={2.4} strokeLinecap="round" fill="none" />
        <path d="M4 -9 C 6 -14, 5 -17, 3 -19" stroke={GOLD} strokeWidth={2.4} strokeLinecap="round" fill="none" />
        {/* 眼 */}
        <circle cx={3} cy={-1} r={2.4} fill="#fff" />
        <circle cx={3.6} cy={-1} r={1.1} fill={OUT} />
        {/* 须 */}
        <path d="M8 4 C 13 6, 16 10, 17 15" stroke={OUT} strokeWidth={1.4} strokeLinecap="round" fill="none" opacity={0.7} />
      </g>
    </g>
  );
}

export function Logo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Loong Kits 双龙标志"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 红龙：上半环，头在右 */}
      <Dragon color={RED} d="M22 52 C 22 24, 78 24, 78 50" hx={78} hy={50} flip={1} />
      {/* 青龙：下半环，头在左 */}
      <Dragon color={TEAL} d="M78 50 C 78 78, 22 78, 22 52" hx={22} hy={52} flip={-1} />
    </svg>
  );
}
