// 双龙环绕品牌标志（太极追逐式）
// 配色取自《视觉规范》双龙 IP：Hong 灰粉 #D4807A / Qing 灰绿 #7A9B8E / 角须 muted gold #E8C87A
// 等家长公开文档仓库、拿到 Pixar 3D 双龙原图后，可整体替换为位图版本

export function Logo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Loong Kits 双龙标志"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M100 30 A70 70 0 0 1 100 170 A35 35 0 0 1 100 100 A35 35 0 0 0 100 30 Z" fill="#D4807A" />
      <path d="M100 30 A70 70 0 0 0 100 170 A35 35 0 0 0 100 100 A35 35 0 0 1 100 30 Z" fill="#7A9B8E" />
      <circle cx="100" cy="65" r="9" fill="#7A9B8E" />
      <circle cx="100" cy="135" r="9" fill="#D4807A" />
      <path d="M100 30 q -20 -16 -34 -6" stroke="#E8C87A" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M100 30 q 20 -16 34 -6" stroke="#E8C87A" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M100 170 q -20 16 -34 6" stroke="#E8C87A" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M100 170 q 20 16 34 6" stroke="#E8C87A" strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  );
}
