export function CurtainPanel({ side, count = 24 }: { side: "left" | "right"; count?: number }) {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          side === "left"
            ? "linear-gradient(90deg, oklch(0.42 0.21 25) 0%, oklch(0.52 0.22 25) 60%, oklch(0.38 0.2 25) 100%)"
            : "linear-gradient(90deg, oklch(0.38 0.2 25) 0%, oklch(0.52 0.22 25) 40%, oklch(0.42 0.21 25) 100%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            side === "left"
              ? "linear-gradient(90deg, rgba(255,255,255,0.14), transparent 18%, transparent 68%, rgba(0,0,0,0.2) 100%)"
              : "linear-gradient(270deg, rgba(255,255,255,0.14), transparent 18%, transparent 68%, rgba(0,0,0,0.2) 100%)",
          mixBlendMode: "screen",
          opacity: 0.7,
        }}
      />
      <div
        className="absolute inset-y-0"
        style={{
          [side === "left" ? "right" : "left"]: "10%",
          width: "22%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.18), transparent 24%, rgba(0,0,0,0.18) 78%, rgba(0,0,0,0.32))",
          filter: "blur(0.5px)",
          opacity: 0.9,
        }}
      />
      {Array.from({ length: count }).map((_, i) => {
        const t = i / (count - 1);
        const opacity = 0.18 + Math.abs(Math.sin(t * Math.PI * 2.5)) * 0.35;
        return (
          <div
            key={i}
            className="absolute top-0 h-full"
            style={{
              left: `${(i / count) * 100}%`,
              width: "1.5px",
              background: `linear-gradient(180deg, transparent, oklch(0.98 0.02 90 / ${opacity}) 20%, oklch(0.98 0.02 90 / ${opacity}) 80%, transparent)`,
            }}
          />
        );
      })}
      <div
        className="absolute inset-x-0 bottom-0 h-12"
        style={{ background: "linear-gradient(180deg, transparent, oklch(0.25 0.16 25 / 0.6))" }}
      />
    </div>
  );
}
