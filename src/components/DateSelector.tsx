import { useState } from "react";
import { motion } from "motion/react";
import { GoldDial } from "./GoldDial";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function DateSelector({ onReveal }: { onReveal: (d: { day: number; month: string; year: number }) => void }) {
  const [day, setDay] = useState(10);
  const [monthIdx, setMonthIdx] = useState(8);
  const [year, setYear] = useState(2027);

  return (
    <motion.section
      key="selector"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground"
      >
        Chapter II
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 1 }}
        className="mt-4 font-serif text-3xl text-center text-balance"
      >
        Select to discover <span className="italic text-crimson">the date</span>
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-5 h-px w-16 bg-gradient-gold"
      />

      <div className="mt-14 flex items-center justify-center gap-5">
        <GoldDial
          label="Day"
          value={String(day).padStart(2, "0")}
          delay={0.8}
          onClick={() => setDay((d) => (d % 31) + 1)}
        />
        <GoldDial
          label="Month"
          value={MONTHS[monthIdx]}
          delay={0.95}
          onClick={() => setMonthIdx((m) => (m + 1) % 12)}
        />
        <GoldDial
          label="Year"
          value={year}
          delay={1.1}
          onClick={() => setYear((y) => (y >= 2030 ? 2024 : y + 1))}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="mt-10 max-w-xs text-center text-xs font-light leading-relaxed text-muted-foreground"
      >
        Tap each dial to compose the moment.
      </motion.p>

      <motion.button
        onClick={() => onReveal({ day, month: MONTHS[monthIdx], year })}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: 1.02 }}
        className="mt-12 relative px-10 py-3 text-[11px] uppercase tracking-[0.4em] text-foreground"
      >
        <span className="absolute inset-0 rounded-full border border-foreground/20" />
        <span className="absolute inset-0 rounded-full bg-gradient-gold opacity-0 transition-opacity duration-500 hover:opacity-20" />
        <span className="relative">Reveal</span>
      </motion.button>
    </motion.section>
  );
}
