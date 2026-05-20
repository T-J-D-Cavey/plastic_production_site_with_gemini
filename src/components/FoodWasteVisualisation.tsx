"use client";

import { useEffect, useRef, useState } from "react";

const FOOD_WASTE_PER_SECOND = 79.28;
const BACKGROUND_COLOR = "#0c0d0c"; // Deep earthy dark grey-green
const BUCKET_COUNT = 40;
const MAX_PARTICLES = 1000;

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

export default function FoodWasteVisualisation({ isActive }: { isActive: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [totalWaste, setTotalWaste] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const bucketsRef = useRef<number[]>(new Array(BUCKET_COUNT).fill(0));
  const isFlushingRef = useRef<boolean>(false);
  const totalWasteRef = useRef<number>(0);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Reset simulation state when section becomes active
    startTimeRef.current = Date.now();
    particlesRef.current = [];
    bucketsRef.current = new Array(BUCKET_COUNT).fill(0);
    isFlushingRef.current = false;
    totalWasteRef.current = 0;
    setTotalWaste(0);

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      bucketsRef.current = new Array(BUCKET_COUNT).fill(0);
      particlesRef.current = [];
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let animationFrameId: number;
    let lastElapsedSeconds = 0;

    const render = () => {
      if (startTimeRef.current === null) return;
      const now = Date.now();
      const elapsedSeconds = (now - startTimeRef.current) / 1000;
      
      const currentWaste = elapsedSeconds * FOOD_WASTE_PER_SECOND;
      setTotalWaste(currentWaste);
      
      totalWasteRef.current = currentWaste;

      ctx.fillStyle = BACKGROUND_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create new particles: One burger every second
      const currentSecond = Math.floor(elapsedSeconds);
      const previousSecond = Math.floor(lastElapsedSeconds);
      
      if (currentSecond > previousSecond && !isFlushingRef.current) {
        if (particlesRef.current.length < MAX_PARTICLES) {
          particlesRef.current.push({
            x: Math.random() * (canvas.width - 60) + 30,
            y: -60,
            vx: (Math.random() - 0.5) * 2,
            vy: 3 + Math.random() * 4,
            size: 40 + Math.random() * 20, // 40-60px range
            isLanded: false,
            rotation: Math.random() * Math.PI * 2,
            angularVelocity: (Math.random() - 0.5) * 0.1,
          });
        }
      }
      lastElapsedSeconds = elapsedSeconds;

      // Check if we should flush (pile too high)
      const maxPile = Math.max(...bucketsRef.current);
      if (maxPile > canvas.height * 0.45 && !isFlushingRef.current) {
        isFlushingRef.current = true;
        setTimeout(() => {
          isFlushingRef.current = false;
          bucketsRef.current = new Array(BUCKET_COUNT).fill(0);
          particlesRef.current = particlesRef.current.filter(p => !p.isLanded);
        }, 3000);
      }

      // Update and draw particles
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      particlesRef.current = particlesRef.current.filter((p) => {
        if (!p.isLanded) {
          p.x += p.vx;
          p.y += p.vy;
          p.rotation += p.angularVelocity;

          const bucketIdx = Math.floor((p.x / canvas.width) * BUCKET_COUNT);
          const safeBucketIdx = Math.max(0, Math.min(BUCKET_COUNT - 1, bucketIdx));
          const currentFloor = canvas.height - bucketsRef.current[safeBucketIdx];

          if (p.y >= currentFloor - p.size / 2.5) {
            p.y = currentFloor - p.size / 2.5;
            p.isLanded = true;
            if (!isFlushingRef.current) {
              // Increased contribution significantly to compensate for 1/79 particles
              const weightMultiplier = 12; 
              bucketsRef.current[safeBucketIdx] += p.size * 0.45 * weightMultiplier;
              if (safeBucketIdx > 0) bucketsRef.current[safeBucketIdx - 1] += p.size * 0.15 * weightMultiplier;
              if (safeBucketIdx < BUCKET_COUNT - 1) bucketsRef.current[safeBucketIdx + 1] += p.size * 0.15 * weightMultiplier;
            }
          }
        } else if (isFlushingRef.current) {
          p.y += 15;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        const drawSize = p.size; // Using base size now that it's larger
        ctx.font = `${drawSize}px serif`;
        ctx.fillText("🍔", 0, 0);
        ctx.restore();

        const isOffscreen = p.y > canvas.height + 100;
        return !isOffscreen;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0c0d0c]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 select-none pointer-events-none">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-center max-w-4xl mb-8 leading-tight drop-shadow-lg">
          Since you arrived, an equivalent of{" "}
          <span 
            className="text-lime-500 tabular-nums"
            aria-live="polite"
            aria-atomic="true"
          >
            {(Math.round(totalWaste))}
          </span>{" "}
          tonnes of food has been wasted
        </h1>
        
        <div className="flex flex-col items-center gap-6 text-center max-w-3xl">
          <p className="text-lg md:text-2xl text-stone-300 leading-relaxed drop-shadow-md font-medium">
            Annual global food loss and waste is <span className="text-white font-bold underline decoration-lime-500 underline-offset-8">~2.5 billion tonnes</span>, equivalent to 79 tonnes every second.
          </p>
          
          <div className="mt-12 flex flex-col items-center">
            <div className="flex items-center gap-6 bg-stone-900/80 backdrop-blur-md px-8 py-4 rounded-2xl border border-stone-800 shadow-2xl">
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-1">🍔</div>
                <div className="text-[10px] font-bold text-lime-500 uppercase tracking-widest">1 burger</div>
              </div>
              
              <div className="text-2xl font-light text-stone-500">=</div>
              
              <div className="flex flex-col items-start">
                <div className="text-2xl md:text-3xl font-mono font-bold text-lime-500 leading-none">
                  79.3
                </div>
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-1">
                  Tonnes of waste
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-0" />
    </div>
  );
}
