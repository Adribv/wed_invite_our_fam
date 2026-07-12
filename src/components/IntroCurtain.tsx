import { motion } from "motion/react";
import { CurtainPanel } from "./CurtainPanel";
import logoImg from "@/assets/logo.png";
import weddingSong from "@/assets/wedding.mp3";
import { useRef, useState } from "react";
import { playAudio } from "@/lib/audio";

export function IntroCurtain({ onComplete }: { onComplete: () => void }) {
  const HOLD = 0;
  const OPEN = 3;
  const TIE_DELAY = OPEN * 0.55;
  const TOTAL = OPEN + 0.6;
  const ease = [0.7, 0, 0.2, 1] as const;
  const [tapped, setTapped] = useState(false);
  const hasStarted = useRef(false);

  function startExperience() {
    if (hasStarted.current) return;
    hasStarted.current = true;
    setTapped(true);

    playAudio(weddingSong);

    window.setTimeout(onComplete, TOTAL * 1000);
  }

  return (
    <motion.div
      className="fixed inset-0 z-[60] overflow-hidden pointer-events-auto cursor-pointer"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={startExperience}
      onTouchStart={startExperience}
      onPointerDown={startExperience}
    >
      {/* No <audio> tag here — audio lives in the global singleton */}

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.48 0.24 25) 0%, oklch(0.41 0.22 25) 16%, oklch(0.33 0.19 25) 58%, oklch(0.27 0.15 25) 100%)",
        }}
      />

      {/* Stripe overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 1 }}
        animate={tapped ? { opacity: [1, 0.97, 0] } : { opacity: 1 }}
        transition={{ duration: OPEN, times: [0, 0.84, 1] }}
        style={{
          background:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 10px), linear-gradient(180deg, oklch(0.53 0.24 25) 0%, oklch(0.39 0.20 25) 48%, oklch(0.29 0.16 25) 100%)",
          mixBlendMode: "screen",
        }}
      />

      {/* White flash */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={tapped ? { opacity: [0, 0.92, 1] } : { opacity: 0 }}
        transition={{ duration: OPEN, times: [0, 0.86, 1] }}
      />

      {/* LOGO + tap hint */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
        initial={{ opacity: 1 }}
        animate={tapped ? { opacity: [1, 0] } : { opacity: 1 }}
        transition={{ duration: OPEN, times: [0, 0.9], ease: "easeInOut" }}
      >
        <img
          src={logoImg}
          alt="Abdulla & Safiyyah"
          className="w-28 sm:w-32 drop-shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
          style={{
            filter:
              "brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(1)",
          }}
        />

        <motion.p
          className="mt-8 text-white/60 text-xs tracking-[0.3em] uppercase"
          animate={!tapped ? { opacity: [0.4, 1, 0.4] } : { opacity: 0 }}
          transition={
            !tapped
              ? { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.3 }
          }
        >
          Tap to begin
        </motion.p>
      </motion.div>

      {/* LEFT CURTAIN */}
      <motion.div
        className="absolute top-0 left-0 h-full z-10"
        style={{ width: "50%", transformOrigin: "left center" }}
        initial={{ scaleX: 1, skewY: 0, x: 0 }}
        animate={tapped ? { scaleX: 0.22, x: -34, skewY: -6.5 } : { scaleX: 1, x: 0, skewY: 0 }}
        transition={{ duration: OPEN, ease }}
      >
        <div
          className="h-full w-full"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 58%, 94% 65%, 88% 72%, 81% 79%, 73% 85%, 64% 90%, 55% 94%, 45% 97%, 35% 99%, 23% 100%, 0 100%)",
          }}
        >
          <CurtainPanel side="left" count={52} />
        </div>

        <motion.div
          className="absolute inset-y-0 right-0 w-1/3 pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(40,5,5,0.55))" }}
          initial={{ opacity: 0 }}
          animate={tapped ? { opacity: 0.9 } : { opacity: 0 }}
          transition={{ duration: OPEN }}
        />

        <motion.div
          className="absolute z-20"
          style={{ top: "54%", right: "-11px", transform: "translateY(-50%)" }}
          initial={{ opacity: 0, scale: 0, rotate: -20 }}
          animate={tapped ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -20 }}
          transition={{ delay: TIE_DELAY, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div
            className="relative h-4 w-16 rounded-full"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.95 0.08 90), oklch(0.78 0.14 82) 50%, oklch(0.55 0.12 65))",
              boxShadow:
                "0 4px 10px -2px rgba(120,80,10,0.55), inset 0 -2px 4px rgba(80,50,5,0.5), inset 0 1px 1px rgba(255,240,200,0.7)",
            }}
          >
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-4 w-1.5 rounded-b"
              style={{ background: "linear-gradient(180deg, oklch(0.78 0.14 82), oklch(0.5 0.1 65))" }}
            />
            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 h-2 w-3 rounded-full"
              style={{ background: "oklch(0.6 0.13 72)" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT CURTAIN */}
      <motion.div
        className="absolute top-0 right-0 h-full z-10"
        style={{ width: "50%", transformOrigin: "right center" }}
        initial={{ scaleX: 1, skewY: 0, x: 0 }}
        animate={tapped ? { scaleX: 0.22, x: 34, skewY: 6.5 } : { scaleX: 1, x: 0, skewY: 0 }}
        transition={{ duration: OPEN, ease }}
      >
        <div
          className="h-full w-full"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 100%, 77% 100%, 65% 99%, 55% 97%, 45% 94%, 36% 90%, 27% 84%, 18% 77%, 9% 69%, 0 58%)",
          }}
        >
          <CurtainPanel side="right" count={52} />
        </div>

        <motion.div
          className="absolute inset-y-0 left-0 w-1/3 pointer-events-none"
          style={{ background: "linear-gradient(270deg, transparent, rgba(40,5,5,0.55))" }}
          initial={{ opacity: 0 }}
          animate={tapped ? { opacity: 0.9 } : { opacity: 0 }}
          transition={{ duration: OPEN }}
        />

        <motion.div
          className="absolute z-20"
          style={{ top: "54%", left: "-11px", transform: "translateY(-50%)" }}
          initial={{ opacity: 0, scale: 0, rotate: 20 }}
          animate={tapped ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: 20 }}
          transition={{ delay: TIE_DELAY, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div
            className="relative h-4 w-16 rounded-full"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.95 0.08 90), oklch(0.78 0.14 82) 50%, oklch(0.55 0.12 65))",
              boxShadow:
                "0 4px 10px -2px rgba(120,80,10,0.55), inset 0 -2px 4px rgba(80,50,5,0.5), inset 0 1px 1px rgba(255,240,200,0.7)",
            }}
          >
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-4 w-1.5 rounded-b"
              style={{ background: "linear-gradient(180deg, oklch(0.78 0.14 82), oklch(0.5 0.1 65))" }}
            />
            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 h-2 w-3 rounded-full"
              style={{ background: "oklch(0.6 0.13 72)" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Edge vignette */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.14), transparent 18%), linear-gradient(90deg, rgba(0,0,0,0.14), transparent 12%, transparent 88%, rgba(0,0,0,0.14))",
        }}
      />
    </motion.div>
  );
}