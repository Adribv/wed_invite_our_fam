import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Landing({ onNext }: { onNext: () => void }) {
  return (
    <motion.section
      key="landing"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8 }}
    >
      {/* subtle parallax orb */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.92 0.08 90 / 0.5), transparent 70%)" }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground"
      >
        Maison · MMXXVI
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30, letterSpacing: "0.2em" }}
        animate={{ opacity: 1, y: 0, letterSpacing: "-0.02em" }}
        transition={{ delay: 0.5, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-6xl sm:text-7xl text-foreground mt-6 text-balance text-center"
      >
        San <span className="italic text-crimson">Siro</span>
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-6 h-px w-24 bg-gradient-gold origin-center"
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="mt-6 max-w-xs text-center text-sm font-light leading-relaxed text-muted-foreground"
      >
        An intimate invitation, sealed for one moment in time. Reveal the date that
        shall remain unforgotten.
      </motion.p>

      <motion.button
        onClick={onNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-12 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
      >
        <span>Enter</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-gold" />
        </motion.span>
      </motion.button>
    </motion.section>
  );
}
