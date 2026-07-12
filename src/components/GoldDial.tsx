import { motion, AnimatePresence } from "motion/react";

export function GoldDial({
  label,
  value,
  onClick,
  delay = 0,
}: {
  label: string;
  value: string | number;
  onClick: () => void;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-3"
    >
      <motion.button
        onClick={onClick}
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.04 }}
        className="relative h-24 w-24 rounded-full bg-gradient-gold shadow-gold-glow flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-[3px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 25%, oklch(0.98 0.05 90 / 0.9), transparent 50%), linear-gradient(135deg, oklch(0.85 0.12 85) 0%, oklch(0.55 0.13 70) 100%)",
          }}
        />
        <div className="absolute inset-[3px] rounded-full ring-1 ring-inset ring-white/40" />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={String(value)}
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative font-serif text-2xl font-medium"
            style={{ color: "oklch(0.25 0.05 40)", textShadow: "0 1px 0 oklch(1 0 0 / 0.4)" }}
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </motion.button>
      <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{label}</span>
    </motion.div>
  );
}
