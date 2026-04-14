"use client";

import { useEffect, useRef, useState } from "react";

const BOTTLES_PER_SECOND = 1427000;
const BOTTLE_COLOR = "rgba(59, 130, 246, 0.7)";
const BOTTLE_ACCENT = "rgba(255, 255, 255, 0.3)";
const BUCKET_COUNT = 40;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  isLanded: boolean;
  rotation: number;
  angularVelocity: number;
}

export default function BottleVisualisation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [totalBottles, setTotalBottles] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const lastParticleTimeRef = useRef<number>(0);
  const bucketsRef = useRef<number[]>(new Array(BUCKET_COUNT).fill(0));
  const isFlushingRef = useRef<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (startTimeRef.current === null) {
      startTimeRef.current = Date.now();
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Reset buckets on resize to prevent weirdness
      bucketsRef.current = new Array(BUCKET_COUNT).fill(0);
      particlesRef.current = [];
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let animationFrameId: number;

    const render = () => {
      if (startTimeRef.current === null) return;
      const now = Date.now();
      const elapsedSeconds = (now - startTimeRef.current) / 1000;
      setTotalBottles(Math.floor(elapsedSeconds * BOTTLES_PER_SECOND));

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add one particle every second (1 visual bottle = 1.427M real bottles)
      if (!isFlushingRef.current && now - lastParticleTimeRef.current >= 1000) {
        particlesRef.current.push({
          x: Math.random() * (canvas.width - 100) + 50,
          y: -50,
          vx: (Math.random() - 0.5) * 2,
          vy: Math.random() * 1 + 2,
          size: Math.random() * 10 + 15,
          isLanded: false,
          rotation: Math.random() * Math.PI * 2,
          angularVelocity: (Math.random() - 0.5) * 0.1,
        });
        lastParticleTimeRef.current = now;
      }

      // Check if we should flush (pile too high)
      const maxPile = Math.max(...bucketsRef.current);
      if (maxPile > canvas.height * 0.3 && !isFlushingRef.current) {
        isFlushingRef.current = true;
        setTimeout(() => {
          isFlushingRef.current = false;
          bucketsRef.current = new Array(BUCKET_COUNT).fill(0);
          particlesRef.current = particlesRef.current.filter(p => !p.isLanded);
        }, 3000);
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((p) => {
        if (!p.isLanded) {
          p.x += p.vx;
          p.y += p.vy;
          p.rotation += p.angularVelocity;

          // Bucket collision
          const bucketIdx = Math.floor((p.x / canvas.width) * BUCKET_COUNT);
          const safeBucketIdx = Math.max(0, Math.min(BUCKET_COUNT - 1, bucketIdx));
          const currentFloor = canvas.height - bucketsRef.current[safeBucketIdx];

          if (p.y >= currentFloor - p.size) {
            p.y = currentFloor - p.size;
            p.isLanded = true;
            if (!isFlushingRef.current) {
              bucketsRef.current[safeBucketIdx] += p.size * 0.8;
              // Smooth adjacent buckets
              if (safeBucketIdx > 0) bucketsRef.current[safeBucketIdx - 1] += p.size * 0.2;
              if (safeBucketIdx < BUCKET_COUNT - 1) bucketsRef.current[safeBucketIdx + 1] += p.size * 0.2;
            }
          }
        } else if (isFlushingRef.current) {
          // Fall through floor when flushing
          p.y += 10;
        }

        // Keep it on canvas horizontally
        if (p.x < 20 || p.x > canvas.width - 20) p.vx *= -1;

        // Draw bottle
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        
        ctx.fillStyle = BOTTLE_COLOR;
        const w = p.size;
        const h = w * 2.2;
        
        // Body (rounded)
        ctx.beginPath();
        ctx.moveTo(-w/2, -h/2);
        ctx.lineTo(w/2, -h/2);
        ctx.lineTo(w/2, h/2);
        ctx.lineTo(-w/2, h/2);
        ctx.closePath();
        ctx.fill();
        
        // Neck
        ctx.fillRect(-w/4, -h/2 - w/3, w/2, w/3);
        
        // Label/Accent
        ctx.fillStyle = BOTTLE_ACCENT;
        ctx.fillRect(-w/2, -h/6, w, h/3);
        
        ctx.restore();

        // Remove if off screen bottom
        return p.y < canvas.height + 100;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-950">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-50"
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 select-none">
        <h2 className="text-xl md:text-2xl font-light mb-2 tracking-widest uppercase text-slate-500">
          Since you arrived
        </h2>
        <div 
          className="text-6xl md:text-9xl font-black mb-6 tabular-nums text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          aria-live="polite"
        >
          {totalBottles.toLocaleString()}
        </div>
        
        <div className="flex flex-col items-center gap-6 text-center max-w-3xl">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
            Plastic Bottles Produced
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-400 leading-relaxed">
            Global production reaches <span className="text-white font-bold underline decoration-blue-500 underline-offset-8">1.43 million bottles every second</span>. 
            Relentless. Unsustainable. Accumulating.
          </p>
          
          <div className="mt-12 flex flex-col items-center">
            <div className="text-xs font-black text-slate-600 uppercase tracking-[0.4em] mb-4">
              Real-time Visual Scale
            </div>
            <div className="flex items-center gap-6 bg-slate-900/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-slate-800 shadow-2xl">
              <div className="flex flex-col items-center">
                <div className="w-5 h-12 bg-blue-500/70 rounded-sm relative mb-1">
                  <div className="absolute top-0 left-0 w-full h-2 bg-white/30 rounded-t-sm"></div>
                  <div className="absolute top-1/2 left-0 w-full h-3 bg-white/10"></div>
                </div>
                <div className="text-[10px] font-bold text-blue-400/60">1 VISUAL</div>
              </div>
              
              <div className="text-2xl font-light text-slate-500">=</div>
              
              <div className="flex flex-col items-start">
                <div className="text-2xl md:text-3xl font-mono font-bold text-blue-100 leading-none">
                  1,427,000
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                  Actual Bottles Produced
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient to ground the pile */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none z-0" />
    </div>
  );
}
