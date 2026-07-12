import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

import { IntroCurtain } from "@/components/IntroCurtain";
import { getAudio } from "@/lib/audio";
import weddingSong from "@/assets/wedding.mp3";
import {
  CountdownSection,
  GiftsSection,
  HeroSection,
  RevealDateSection,
  VenueSection,
} from "@/components/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdulla & Safiyyah — Wedding Invitation" },
      {
        name: "description",
        content:
          "An intimate invitation to the wedding of Abdulla & Safiyyah on 10 September 2026.",
      },
      { property: "og:title", content: "Abdulla & Safiyyah — Wedding Invitation" },
      {
        property: "og:description",
        content: "Join us on 10 September 2026 for the wedding of Abdulla & Safiyyah.",
      },
    ],
  }),
  component: Index,
});

function MuteButton() {
  const [muted, setMuted] = useState(false);

  function toggle() {
    const audio = getAudio(weddingSong);
    audio.muted = !audio.muted;
    setMuted((m) => !m);
  }

  return (
    <button
      onClick={toggle}
      aria-label={muted ? "Unmute music" : "Mute music"}
      className="fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center 
                 rounded-full bg-white/20 shadow-lg backdrop-blur-sm transition 
                 hover:bg-white/30 text-white text-lg"
    >
      {muted ? "🔇" : "🔊"}
    </button>
  );
}

export function Index() {
  const [introDone, setIntroDone] = useState(false);

  // Load Google Fonts once
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Cormorant+Garamond:ital,wght@0,400;1,400;1,500&family=Inter:wght@300;400;500&display=swap";
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-background">
      {/* subtle paper grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-1 mix-blend-multiply opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <AnimatePresence>
        {!introDone && (
          <IntroCurtain key="intro" onComplete={() => setIntroDone(true)} />
        )}
      </AnimatePresence>

      {/* Mute button only appears after intro is done */}
      {introDone && <MuteButton />}

      <div className="relative z-2">
        <HeroSection />
        <RevealDateSection />
        <CountdownSection />
        <VenueSection />
        <GiftsSection />
      </div>
    </main>
  );
}