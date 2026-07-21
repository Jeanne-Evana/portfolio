/** Decorative SVG layers — tropical vegetation reclaiming the page edges */

export function VineBorder({ className = '', style }) {
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      style={style}
      viewBox="0 0 200 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M0 400 C30 350 10 280 40 220 C60 180 20 140 50 80 C70 40 40 10 60 0"
        stroke="#2d6a4f"
        strokeWidth="3"
        opacity="0.6"
      />
      <path
        d="M20 400 C50 360 30 300 55 250 C75 210 35 170 60 120 C80 80 50 40 70 0"
        stroke="#40916c"
        strokeWidth="2"
        opacity="0.4"
      />
      <ellipse cx="45" cy="75" rx="18" ry="28" fill="#52b788" opacity="0.7" transform="rotate(-25 45 75)" />
      <ellipse cx="35" cy="230" rx="22" ry="14" fill="#74c69d" opacity="0.6" transform="rotate(15 35 230)" />
      <ellipse cx="55" cy="160" rx="14" ry="22" fill="#40916c" opacity="0.65" transform="rotate(-10 55 160)" />
      <ellipse cx="25" cy="320" rx="20" ry="12" fill="#52b788" opacity="0.55" transform="rotate(30 25 320)" />
    </svg>
  )
}

export function CanopyTop() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-48 overflow-hidden" aria-hidden>
      <svg className="w-full h-full" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="canopyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1b4332" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1b4332" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,0 L1440,0 L1440,80 C1200,120 1000,40 800,90 C600,140 400,50 200,100 C100,120 50,70 0,90 Z"
          fill="url(#canopyGrad)"
        />
        <path
          d="M0,30 C200,80 400,10 600,60 C800,110 1100,20 1440,70 L1440,0 L0,0 Z"
          fill="#2d6a4f"
          opacity="0.5"
        />
        {/* dangling vines */}
        {[120, 280, 450, 620, 780, 950, 1100, 1280].map((x, i) => (
          <path
            key={x}
            d={`M${x},${60 + (i % 3) * 10} Q${x + (i % 2 ? 15 : -15)},${120 + i * 8} ${x + (i % 2 ? 8 : -8)},${160 + i * 12}`}
            stroke="#40916c"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
        ))}
      </svg>
    </div>
  )
}

export function RootFloor() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32" aria-hidden>
      <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,120 L0,80 C150,40 300,90 450,50 C600,10 750,70 900,40 C1050,10 1200,60 1440,30 L1440,120 Z"
          fill="#1b4332"
          opacity="0.7"
        />
        <path
          d="M0,120 L0,95 C200,70 400,100 600,75 C800,50 1000,95 1200,70 C1300,58 1380,85 1440,78 L1440,120 Z"
          fill="#40916c"
          opacity="0.4"
        />
      </svg>
    </div>
  )
}

export function LeafCluster({ className = '' }) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      aria-hidden
    >
      <ellipse cx="40" cy="40" rx="30" ry="18" fill="#52b788" opacity="0.5" transform="rotate(-20 40 40)" />
      <ellipse cx="30" cy="35" rx="16" ry="24" fill="#40916c" opacity="0.6" transform="rotate(10 30 35)" />
      <ellipse cx="52" cy="42" rx="14" ry="20" fill="#74c69d" opacity="0.45" transform="rotate(-35 52 42)" />
    </svg>
  )
}
