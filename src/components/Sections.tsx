import { motion, useInView, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CrownEmblem } from "./CrownEmblem";
import { ScratchDial } from "./ScratchDial";
import { Confetti } from "./Confetti";
import villaImg from "@/assets/villa.png";
import castleImg from "@/assets/castle.png";

const WEDDING_DATE = new Date("2026-09-10T16:00:00");

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const } },
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  return { ref, inView };
}

/* ---------- HERO ---------- */
export function HeroSection() {
  const { ref, inView } = useReveal();

  const centerClip =
    "polygon(0 0, 100% 0, 100% 82%, 94% 88%, 89% 95%, 84% 100%, 16% 100%, 11% 95%, 6% 88%, 0 82%)";

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100dvh] w-full overflow-hidden bg-[#fbf7f0]"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(255,255,255,0.55), transparent 36%), linear-gradient(180deg, rgba(255,255,255,0.95), rgba(244,238,231,1) 48%, rgba(240,234,226,1) 100%)",
        }}
      />

      <div className="relative z-10 flex min-h-[100dvh] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.985 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex h-[100dvh] w-full max-w-[44rem] flex-col items-center overflow-hidden bg-[#faf7f1] text-center shadow-[0_24px_70px_rgba(56,7,7,0.25)]"
          style={{ clipPath: centerClip }}
        >
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(252,249,243,1) 22%, rgba(248,243,234,1) 52%, rgba(252,250,245,0.98) 100%)",
            }}
          />

          <div className="relative z-10 flex h-full w-full flex-col items-center justify-between px-4 pb-[1vh] pt-[12vh] sm:px-6">
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.9 }}
                className="text-[12px] tracking-[0.3em] text-[#8f8880]"
              >
                بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
              </motion.div>
             
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="mt-3"
              >
                <CrownEmblem size={30} />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.9 }}
                className="mt-2 text-[12px] text-[#8f8880]"
              >
                With the blessings of Allah
              </motion.p>

          <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35, duration: 0.9 }}
                className="mt-5 flex max-w-[15rem] flex-col items-center gap-1 text-center font-serif font-semibold text-[11.5px] leading-6 tracking-[0.2em] text-[#6f685f] sm:max-w-[16rem] sm:text-[11px]"
              >
                
                <span>Mr. Samiullah &amp; Mrs. Saira</span>
                <span className="text-[9px]  tracking-[0.24em] text-[#8f8880] sm:text-[10px]">
                  together with
                </span>
                <span>Mr. Ahamed Ali &amp; Mrs. Sabeena</span>
           
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1, duration: 0.9 }}
                className="mt-5 max-w-[14rem] text-[11px] leading-6 text-[#7e7872]"
              >
                Cordially invite you and your family to the Nikah ceremony of their beloved children
              </motion.p> 

              {/* <motion.h6
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 font-serif italic text-[clamp(2.1rem,4.3vw,3.7rem)] leading-[0.94] tracking-[-0.03em] text-[#1f1d1b]"
              >
                Mohammed Abdulla
                <span className="mt-2 block text-[0.58em] font-normal not-italic leading-none text-crimson">
                  &amp;
                </span>
                Safiyyah Sanovar
              </motion.h6> */}
                <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 font-serif italic text-[clamp(2.8rem,6vw,4.9rem)] leading-[0.94] tracking-[-0.03em] text-[#1f1d1b]"
              >
                Abdulla
                <span className="mt-2 block text-[0.58em] font-normal not-italic leading-none text-crimson">
                  &amp;
                </span>
                Safiyyah
              </motion.h1>


              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.95, duration: 0.8 }}
                className="mt-5 h-1.5 w-16 rounded-full bg-gradient-gold origin-center"
              />

              {/* <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1, duration: 0.9 }}
                className="mt-5 max-w-[14rem] text-[11px] leading-6 text-[#7e7872]"
              >
                Together with their families, request the honour of your presence at the celebration
                of their wedding.
              </motion.p> */}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.9 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="text-[9px] tracking-[0.55em] text-[#8a837a]">SCROLL</div>
              <div className="h-7 w-px bg-[#d6a05a]" />
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

/* ---------- REVEAL DATE (scratch) ---------- */
export function RevealDateSection() {
  const { ref, inView } = useReveal();
  const [revealed, setRevealed] = useState({ d: false, m: false, y: false });
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (revealed.d && revealed.m && revealed.y && !confetti) {
      setConfetti(true);
      const t = setTimeout(() => setConfetti(false), 5000);
      return () => clearTimeout(t);
    }
  }, [revealed, confetti]);

  return (
    <section ref={ref} className="relative px-6 py-24 text-center">
      <Confetti active={confetti} />
      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={fadeUp}
        className="flex justify-center mb-4"
      >
        <CrownEmblem size={42} />
      </motion.div>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="font-serif italic text-3xl text-foreground"
      >
        Save the Date
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-3 text-[10px] tracking-[0.4em] uppercase text-muted-foreground"
      >
         Scratch to reveal
      </motion.p>

      <div className="mt-12 flex items-start justify-center gap-4 sm:gap-6">
        {[
          { value: "10", label: "Day", key: "d" as const },
          { value: "Sep", label: "Month", key: "m" as const },
          { value: "2026", label: "Year", key: "y" as const },
        ].map((d, i) => (
          <motion.div
            key={d.key}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.9 }}
          >
            <ScratchDial
              value={d.value}
              label={d.label}
              size={92}
              onReveal={() => setRevealed((r) => ({ ...r, [d.key]: true }))}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {confetti && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-10 font-serif italic text-lg text-crimson"
          >
            X - IX - MMXXVI
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------- COUNTDOWN ---------- */
function useCountdown(target: Date) {
  const [mounted, setMounted] = useState(false);
  const [t, setT] = useState(0);
  useEffect(() => {
    setMounted(true);
    const tick = () => setT(target.getTime() - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  const clamp = Math.max(0, t);
  return {
    mounted,
    days: Math.floor(clamp / 86400000),
    hours: Math.floor((clamp / 3600000) % 24),
    minutes: Math.floor((clamp / 60000) % 60),
    seconds: Math.floor((clamp / 1000) % 60),
  };
}

export function CountdownSection() {
  const { ref, inView } = useReveal();
  const c = useCountdown(WEDDING_DATE);
  const items = [
    { v: c.days, l: "Days" },
    { v: c.hours, l: "Hours" },
    { v: c.minutes, l: "Min" },
    { v: c.seconds, l: "Sec" },
  ];
  return (
    <section ref={ref} className="relative px-6 py-24 text-center">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="font-serif italic text-3xl text-foreground"
      >
        Countdown
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mx-auto mt-4 h-px w-12 bg-gradient-gold"
      />

      <div className="mt-10 flex justify-center gap-2 sm:gap-3">
        {items.map((it, i) => (
          <motion.div
            key={it.l}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative rounded-md border border-foreground/15 bg-card px-3 py-3 min-w-[58px] shadow-sm">
              {c.mounted ? (
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={it.v}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.3 }}
                    className="block font-serif text-xl text-foreground"
                  >
                    {String(it.v).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>
              ) : (
                <span className="block font-serif text-xl text-foreground">--</span>
              )}
            </div>
            <div className="mt-2 text-[8px] tracking-[0.3em] uppercase text-muted-foreground">
              {it.l}
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-8 text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
        Until we say Qubool
      </p>
    </section>
  );
}

/* ---------- VENUE ---------- */
export function VenueSection() {
  const { ref, inView } = useReveal();
  return (
    <section ref={ref} className="relative px-8 py-24 text-center">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground"
      >
        The celebration will take place at
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.3, duration: 1.1 }}
        className="mt-6"
      >
        <img
          src={villaImg}
          alt="The Grand Pavilion"
          loading="lazy"
          className="mx-auto w-full max-w-[280px]"
        />
      </motion.div>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mt-4 font-serif italic text-2xl text-foreground"
      >
        YR Mahal, Nagercoil
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
      >
        Water Tank Rd, Nagercoil
        <br />
       InShAllah Thursday, 10 September 2026
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-4 font-serif italic text-sm text-crimson"
      >
        Nikkah Time: 12:00 Noon
      </motion.p>

      {/* Quranic verse */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.0, duration: 1 }}
        className="mt-10 mx-auto max-w-xs"
      >
        <div className="mx-auto mb-4 h-px w-10 bg-gradient-gold" />
        <p className="font-serif italic text-sm leading-7 text-foreground">
          "And one of His signs is that He created for you spouses from among yourselves so that you
          may find tranquility in them. And He has placed between you affection and mercy."
        </p>
        <p className="mt-3 text-[10px] tracking-[0.3em] uppercase text-crimson">
          — Qur'an 30:21
        </p>
        <div className="mx-auto mt-4 h-px w-10 bg-gradient-gold" />
        
      </motion.div>
    </section>
  );
}

/* ---------- PROGRAM (proper invitation card) ---------- */
export function ProgramSection() {
  const { ref, inView } = useReveal();
  const events = [
    { time: "3:30 PM", name: "Guest Arrival", note: "Welcome refreshments at the entrance" },
    { time: "4:00 PM", name: "Nikkah Ceremony", note: "The sacred union begins" },
    { time: "5:00 PM", name: "Photography", note: "Family & friends portraits" },
    { time: "6:30 PM", name: "Walima Dinner", note: "A feast in celebration" },
    { time: "8:30 PM", name: "Toasts & Speeches", note: "Words from loved ones" },
    { time: "9:30 PM", name: "Dance & Dessert", note: "An evening to remember" },
  ];

  return (
    <section ref={ref} className="relative px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-md"
      >
        {/* Invitation card */}
        <div
          className="relative rounded-sm bg-card px-7 py-12 sm:px-10 sm:py-14"
          style={{
            boxShadow: "0 30px 60px -20px rgba(120,30,30,0.18), 0 0 0 1px oklch(0.92 0.005 80)",
          }}
        >
          {/* corner ornaments */}
          {[
            "top-3 left-3",
            "top-3 right-3 rotate-90",
            "bottom-3 left-3 -rotate-90",
            "bottom-3 right-3 rotate-180",
          ].map((pos, i) => (
            <svg
              key={i}
              className={`absolute ${pos} text-crimson/70`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M2 2 L14 2 M2 2 L2 14 M5 5 Q9 5 9 9" />
            </svg>
          ))}

          {/* double border frame */}
          <div className="absolute inset-5 border border-crimson/30 pointer-events-none" />
          <div className="absolute inset-[22px] border border-gold-dark/30 pointer-events-none" />

          <div className="relative text-center">
            <div className="flex justify-center">
              <CrownEmblem size={36} />
            </div>
            <p className="mt-3 text-[10px] tracking-[0.45em] uppercase text-crimson">
              Order of Ceremony
            </p>
            <h2 className="mt-2 font-serif italic text-3xl text-foreground">Programme</h2>
            <div className="mx-auto mt-3 h-px w-12 bg-gradient-gold" />

            <p className="mt-5 font-serif italic text-sm text-muted-foreground">
              "And of His signs is that He created for you from yourselves mates that you may find
              tranquility in them."
            </p>

            <ul className="mt-8 space-y-5 text-left">
              {events.map((e, i) => (
                <motion.li
                  key={e.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.7 }}
                  className="grid grid-cols-[minmax(0,72px)_1fr] items-baseline gap-4"
                >
                  <div className="text-[10px] tracking-[0.2em] uppercase text-crimson font-medium text-right">
                    {e.time}
                  </div>
                  <div className="border-l border-gold-dark/30 pl-4">
                    <div className="font-serif text-base text-foreground">{e.name}</div>
                    <div className="text-[10px] tracking-[0.1em] uppercase text-muted-foreground mt-0.5">
                      {e.note}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="mx-auto mt-10 h-px w-16 bg-gradient-gold" />
            <p className="mt-5 font-serif italic text-sm text-crimson">Abdullh &amp; Safiyyah</p>
            <p className="mt-1 text-[9px] tracking-[0.4em] uppercase text-muted-foreground">
              13 · IX · MMXXVI
            </p>
            <div className="mt-6 flex justify-center">
              <img src={castleImg} alt="" loading="lazy" className="w-24 opacity-80" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- DRESS CODE ---------- */
export function DressCodeSection() {
  const { ref, inView } = useReveal();
  return (
    <section ref={ref} className="relative px-8 py-24 text-center">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="font-serif italic text-2xl text-foreground"
      >
        Dress Code
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mx-auto mt-3 h-px w-10 bg-gradient-gold"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-4 text-[10px] tracking-[0.4em] uppercase text-muted-foreground"
      >
        Formal Attire
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-2 font-serif italic text-sm text-muted-foreground"
      >
        Traditional · evening elegance
      </motion.p>
      <motion.img
        src={dresscodeImg}
        alt="Dress code reference"
        loading="lazy"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 1 }}
        className="mx-auto mt-8 w-full max-w-md"
      />
    </section>
  );
}
/* ---------- GIFTS ---------- */
export function GiftsSection() {
  const { ref, inView } = useReveal();
  return (
    <section ref={ref} className="relative px-8 py-24 text-center">
      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={fadeUp}
        className="flex justify-center"
      >
        <CrownEmblem size={44} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.15, duration: 0.9 }}
        className="mt-3 font-serif italic text-base text-foreground tracking-wide"
      >
        #Abdiyah
      </motion.p>
      <motion.p
  initial={{ opacity: 0 }}
  animate={inView ? { opacity: 1 } : {}}
  transition={{ delay: 0.3, duration: 0.9 }}
  className="mt-1 font-serif italic text-[11px] text-muted-foreground"
>
  Together, our journey of faith begins
</motion.p>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mt-6 font-serif italic text-2xl"
      >
        With Gratitude
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-4 mx-auto max-w-xs text-[11px] leading-relaxed text-muted-foreground font-light"
      >
         Your presence is the greatest gift of all. 
        Your prayers are most cherished on this special day.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 font-serif italic text-sm text-crimson"
      >
         With all our love
      </motion.p>
      
    </section>
  );
}
/* ---------- TRANSPORT ---------- */
export function TransportSection() {
  const { ref, inView } = useReveal();
  return (
    <section ref={ref} className="relative px-8 py-24 text-center">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground"
      >
        How to get there
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mt-3 font-serif italic text-3xl text-foreground"
      >
        Travel
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-6 mx-auto max-w-xs text-[11px] leading-relaxed text-muted-foreground font-light"
      >
        Complimentary shuttles will run from the city centre to the venue and back.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.9 }}
        className="mt-10 space-y-6"
      >
        <div>
          <div className="text-[9px] tracking-[0.4em] uppercase text-crimson">Departure</div>
          <div className="mt-1 font-serif italic text-lg">City Centre</div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-0.5">
            2:30 PM
          </div>
        </div>
        <div className="mx-auto h-px w-10 bg-gradient-gold" />
        <div>
          <div className="text-[9px] tracking-[0.4em] uppercase text-crimson">Return</div>
          <div className="mt-1 font-serif italic text-lg">After Reception</div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-0.5">
            11:00 PM
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- RSVP ---------- */
export function RsvpSection() {
  const { ref, inView } = useReveal();
  const [submitted, setSubmitted] = useState(false);
  return (
    <section ref={ref} className="relative px-8 pt-24 pb-32 text-center">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground"
      >
        Kindly reply by
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mt-3 font-serif italic text-3xl text-foreground"
      >
        RSVP
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
      >
        15 · VIII · MMXXVI
      </motion.p>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="mx-auto mt-10 flex max-w-xs flex-col gap-4 text-left"
          >
            <input
              required
              placeholder="Full name"
              className="border-b border-foreground/20 bg-transparent py-2 text-sm font-serif italic placeholder:text-muted-foreground focus:border-crimson outline-none transition-colors"
            />
            <input
              type="email"
              required
              placeholder="Email"
              className="border-b border-foreground/20 bg-transparent py-2 text-sm font-serif italic placeholder:text-muted-foreground focus:border-crimson outline-none transition-colors"
            />
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 rounded-full bg-gradient-crimson px-4 py-3 text-[10px] tracking-[0.35em] uppercase text-white shadow-sm"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="flex-1 rounded-full border border-foreground/20 px-4 py-3 text-[10px] tracking-[0.35em] uppercase text-foreground"
              >
                Decline
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-12"
          >
            <CrownEmblem size={50} />
            <p className="mt-5 font-serif italic text-xl text-crimson">Thank you</p>
            <p className="mt-2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              We can't wait to celebrate with you
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-20 text-[9px] tracking-[0.5em] uppercase text-muted-foreground">
        Abdulla&amp; Safiyyah · MMXXVI
      </div>
    </section>
  );
}
