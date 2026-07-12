import { motion } from "motion/react";

export function Reveal({
  date,
  onReset,
}: {
  date: { day: number; month: string; year: number };
  onReset: () => void;
}) {
  return (
    <motion.section
      key="reveal"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, oklch(0.92 0.08 90 / 0.6), transparent 70%)" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground"
      >
        The Date
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 h-px w-20 bg-gradient-gold"
      />

      <div className="mt-10 flex items-baseline gap-4">
        {[
          { v: String(date.day).padStart(2, "0"), d: 0.7 },
          { v: date.month, d: 0.95 },
          { v: String(date.year), d: 1.2 },
        ].map((item, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: item.d, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl text-foreground"
          >
            {item.v}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-10 h-px w-20 bg-gradient-gold"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="mt-6 max-w-[18rem] text-center font-serif italic text-base text-muted-foreground"
      >
        "A moment, sealed in gold — remembered for a lifetime."
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-10 text-[10px] uppercase tracking-[0.5em] text-crimson"
      >
        San Siro · MMXXVI
      </motion.div>

      <motion.button
        onClick={onReset}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-10 text-[10px] uppercase tracking-[0.4em] text-muted-foreground underline-offset-4 hover:underline"
      >
        Begin again
      </motion.button>
    </motion.section>
  );
}
