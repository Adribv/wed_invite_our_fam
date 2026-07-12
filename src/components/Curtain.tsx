import { motion } from "motion/react";

export function Curtain({ onComplete }: { onComplete: () => void }) {
  const lines = Array.from({ length: 14 });
  return (
    <motion.div
      className="fixed inset-0 z-50 flex pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={onComplete}
    >
      {/* Left half */}
      <motion.div
        className="relative w-1/2 h-full overflow-hidden"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1.6, delay: 1.4, ease: [0.85, 0, 0.15, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-crimson" />
        {lines.map((_, i) => (
          <motion.div
            key={`l-${i}`}
            className="absolute top-0 h-full"
            style={{
              right: `${(i / lines.length) * 100}%`,
              width: "2px",
              background: `linear-gradient(180deg, transparent, oklch(0.92 0.08 90 / ${0.15 + (i % 3) * 0.1}), transparent)`,
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: i * 0.04, ease: "easeOut" }}
          />
        ))}
      </motion.div>
      {/* Right half */}
      <motion.div
        className="relative w-1/2 h-full overflow-hidden"
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.6, delay: 1.4, ease: [0.85, 0, 0.15, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-crimson" />
        {lines.map((_, i) => (
          <motion.div
            key={`r-${i}`}
            className="absolute top-0 h-full"
            style={{
              left: `${(i / lines.length) * 100}%`,
              width: "2px",
              background: `linear-gradient(180deg, transparent, oklch(0.92 0.08 90 / ${0.15 + (i % 3) * 0.1}), transparent)`,
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: i * 0.04, ease: "easeOut" }}
          />
        ))}
      </motion.div>
      {/* Center seal */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.6, times: [0, 0.25, 0.7, 1] }}
      >
        <div className="text-center">
          <div className="text-gold-light/80 text-[10px] tracking-[0.4em] uppercase mb-3">Presenting</div>
          <div className="font-serif italic text-gold-light text-3xl">a story</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
