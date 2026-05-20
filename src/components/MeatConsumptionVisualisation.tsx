"use client";

import { useEffect, useRef, useState } from "react";

const ANIMALS_PER_SECOND = 2632;
const PARTICLES_PER_SECOND = 263; // 1 particle = 10 animals
const BACKGROUND_COLOR = "#0c0a09"; // Stone-950
const PARTICLE_COLOR = "#991b1b"; // Deep Crimson (Red-800)

interface Particle {
  x: number;
  y: number;
  speed: number;
  size: number;
  isSettled: boolean;
}

export default function MeatConsumptionVisualisation({ isActive }: { isActive: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [totalAnimals, setTotalAnimals] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const lastParticleTimeRef = useRef<number>(0);
  const floorHeightRef = useRef<number>(0);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Reset simulation state when section becomes active
    startTimeRef.current = Date.now();
    lastParticleTimeRef.current = Date.now();
    particlesRef.current = [];
    floorHeightRef.current = 0;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Reset floor on resize to ensure visual consistency
      floorHeightRef.current = 0;
      particlesRef.current = [];
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let animationFrameId: number;

    const render = () => {
      if (startTimeRef.current === null) return;
      const now = Date.now();
      const elapsedSeconds = (now - startTimeRef.current) / 1000;
      setTotalAnimals(elapsedSeconds * ANIMALS_PER_SECOND);

      ctx.fillStyle = BACKGROUND_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create new particles based on rate
      const particleInterval = 1000 / PARTICLES_PER_SECOND;
      if (now - lastParticleTimeRef.current >= particleInterval) {
        let numToCreate = Math.floor((now - lastParticleTimeRef.current) / particleInterval);
        
        // Safety clamp: max 100 particles per frame to prevent memory spikes
        // while maintaining visual impact. This covers ~0.4s of missed time.
        numToCreate = Math.min(numToCreate, 100);

        for (let i = 0; i < numToCreate; i++) {
          particlesRef.current.push({
            x: Math.random() * canvas.width,
            y: -10,
            speed: 2 + Math.random() * 5,
            size: 2 + Math.random() * 3,
            isSettled: false,
          });
        }
        lastParticleTimeRef.current = now;
      }

      // Update and draw particles
      ctx.fillStyle = PARTICLE_COLOR;
      
      // Limit total particles for performance
      if (particlesRef.current.length > 5000) {
          particlesRef.current = particlesRef.current.slice(-5000);
      }

      particlesRef.current.forEach((p) => {
        if (!p.isSettled) {
          p.y += p.speed;
          
          // Check if it hit the "floor"
          const currentFloor = canvas.height - floorHeightRef.current;
          if (p.y >= currentFloor) {
            p.y = currentFloor;
            p.isSettled = true;
            floorHeightRef.current += 0.05; // Slowly rise the floor
          }
        }
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw the rising accumulation at the bottom
      if (floorHeightRef.current > 0) {
        ctx.fillRect(0, canvas.height - floorHeightRef.current, canvas.width, floorHeightRef.current);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-stone-950">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 select-none pointer-events-none">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-center max-w-4xl mb-8 leading-tight drop-shadow-lg">
          Since you arrived, an equivalent of{" "}
          <span 
            className="text-red-500 tabular-nums"
            aria-live="polite"
            aria-atomic="true"
          >
            {(totalAnimals / 1000).toFixed(1)}k
          </span>{" "}
          land animals have been slaughtered for meat
        </h1>
        
        <div className="flex flex-col items-center gap-6 text-center max-w-3xl">
          <p className="text-lg md:text-2xl text-stone-300 leading-relaxed drop-shadow-md">
            Every second, we slaughter <span className="text-white font-bold underline decoration-red-500 underline-offset-8">~2.6k land animals</span> for food. That&apos;s 83 billion animals every year.
          </p>
          
          <div className="mt-12 flex flex-col items-center">
            <div className="flex items-center gap-6 bg-stone-900/80 backdrop-blur-md px-8 py-4 rounded-2xl border border-stone-800 shadow-2xl">
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-1">🩸</div>
                <div className="text-[10px] font-bold text-red-600 uppercase tracking-widest">1 drop</div>
              </div>
              
              <div className="text-2xl font-light text-stone-500">=</div>
              
              <div className="flex flex-col items-start">
                <div className="text-2xl md:text-3xl font-mono font-bold text-red-600 leading-none">
                  10
                </div>
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-1">
                  Land animals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-0" />
    </div>
  );
}
