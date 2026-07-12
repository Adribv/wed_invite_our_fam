import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ScratchDialProps {
  value: string;
  label: string;
  size?: number;
  onReveal?: () => void;
}

export function ScratchDial({ value, label, size = 96, onReveal }: ScratchDialProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const drawing = useRef(false);
  const revealedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    // gold scratch overlay
    const g = ctx.createRadialGradient(
      size / 2,
      size / 2 - size * 0.15,
      size * 0.1,
      size / 2,
      size / 2,
      size / 2,
    );
    g.addColorStop(0, "#f3e3a8");
    g.addColorStop(0.5, "#caa24a");
    g.addColorStop(1, "#7a5a18");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 1, 0, Math.PI * 2);
    ctx.fill();

    // subtle radial pleat marks
    ctx.strokeStyle = "rgba(80,55,10,0.35)";
    ctx.lineWidth = 0.8;
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(size / 2, size / 2);
      ctx.lineTo(size / 2 + Math.cos(a) * (size / 2 - 1), size / 2 + Math.sin(a) * (size / 2 - 1));
      ctx.stroke();
    }

    // hint text
    ctx.fillStyle = "rgba(60,40,10,0.65)";
    ctx.font = `600 ${Math.round(size * 0.085)}px Inter, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("", size / 2, size / 2);

    ctx.globalCompositeOperation = "destination-out";
  }, [size]);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas || revealedRef.current) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d")!;
    const px = ((x - rect.left) / rect.width) * size;
    const py = ((y - rect.top) / rect.height) * size;
    ctx.beginPath();
    ctx.arc(px, py, size * 0.18, 0, Math.PI * 2);
    ctx.fill();

    // sample alpha to detect % cleared
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let cleared = 0;
    const step = 40;
    let count = 0;
    for (let i = 3; i < data.length; i += step * 4) {
      if (data[i] === 0) cleared++;
      count++;
    }
    if (cleared / count > 0.55) {
      revealedRef.current = true;
      setRevealed(true);
      onReveal?.();
    }
  };

  const handlePointer = (e: React.PointerEvent) => {
    if (!drawing.current) return;
    scratch(e.clientX, e.clientY);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        {!revealed && (
          <div
            aria-hidden
            className="absolute inset-0 rounded-full border border-gold/35"
            style={{
              background:
                "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.16), transparent 42%), radial-gradient(circle at 50% 52%, rgba(255,255,255,0.03), transparent 62%)",
              boxShadow: "0 0 0 1px rgba(120,80,10,0.15), inset 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          />
        )}
        <AnimatePresence>
          {revealed && (
            <motion.div
              key="val"
              initial={{ opacity: 0, scale: 0.8, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-center justify-center font-serif italic pointer-events-none"
              style={{
                fontSize: size * 0.3,
                color: "oklch(0.18 0.03 35)",
                textShadow: "none",
              }}
            >
              {value}
            </motion.div>
          )}
        </AnimatePresence>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 rounded-full touch-none cursor-pointer"
          style={{
            width: size,
            height: size,
            opacity: revealed ? 0 : 1,
            transition: "opacity 0.5s",
            filter: revealed ? "none" : "drop-shadow(0 8px 16px rgba(180,140,40,0.45))",
          }}
          onPointerDown={(e) => {
            drawing.current = true;
            (e.target as HTMLElement).setPointerCapture(e.pointerId);
            scratch(e.clientX, e.clientY);
          }}
          onPointerMove={handlePointer}
          onPointerUp={() => {
            drawing.current = false;
          }}
          onPointerCancel={() => {
            drawing.current = false;
          }}
        />
      </div>
      <div className="mt-3 text-[9px] tracking-[0.35em] uppercase text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
