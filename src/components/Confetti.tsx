import { motion } from "motion/react";
import { useMemo } from "react";

export function Confetti({ active, count = 80 }: { active: boolean; count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 0.8,
        dur: 2.5 + Math.random() * 2,
        rot: Math.random() * 720 - 360,
        size: 5 + Math.random() * 8,
        color: ["#d4a64a", "#f3e3a8", "#b9263a", "#7a5a18", "#e8c46a"][i % 5],
        shape: i % 3,
      })),
    [count]
  );

  if (!active) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-[50] overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "-10vh", x: `${p.x}vw`, rotate: 0, opacity: 1 }}
          animate={{ y: "110vh", rotate: p.rot, opacity: [1, 1, 0] }}
          transition={{ duration: p.dur, delay: p.delay, ease: "easeIn" }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.shape === 0 ? p.size * 0.4 : p.size,
            background: p.color,
            borderRadius: p.shape === 1 ? "50%" : p.shape === 0 ? "1px" : "0",
          }}
        />
      ))}
    </div>
  );
}
