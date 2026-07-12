// Gold pleated/pinwheel circle (matches the disc shape in the reference)
export function PleatedDial({ size = 84, segments = 16 }: { size?: number; segments?: number }) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 2;
  const wedges = Array.from({ length: segments }).map((_, i) => {
    const a1 = (i / segments) * Math.PI * 2 - Math.PI / 2;
    const a2 = ((i + 1) / segments) * Math.PI * 2 - Math.PI / 2;
    const x1 = cx + Math.cos(a1) * r;
    const y1 = cy + Math.sin(a1) * r;
    const x2 = cx + Math.cos(a2) * r;
    const y2 = cy + Math.sin(a2) * r;
    const path = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`;
    const fill = i % 2 === 0 ? "url(#goldLight)" : "url(#goldDark)";
    return <path key={i} d={path} fill={fill} />;
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block">
      <defs>
        <radialGradient id="goldLight" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="oklch(0.97 0.06 90)" />
          <stop offset="60%" stopColor="oklch(0.85 0.13 85)" />
          <stop offset="100%" stopColor="oklch(0.65 0.13 75)" />
        </radialGradient>
        <radialGradient id="goldDark" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="oklch(0.82 0.12 82)" />
          <stop offset="70%" stopColor="oklch(0.6 0.13 72)" />
          <stop offset="100%" stopColor="oklch(0.45 0.1 65)" />
        </radialGradient>
        <radialGradient id="goldCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.98 0.06 90)" />
          <stop offset="100%" stopColor="oklch(0.7 0.13 78)" />
        </radialGradient>
      </defs>
      {wedges}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="oklch(0.45 0.1 65 / 0.6)" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={r * 0.15} fill="url(#goldCenter)" stroke="oklch(0.5 0.1 65 / 0.8)" strokeWidth="0.5" />
    </svg>
  );
}
