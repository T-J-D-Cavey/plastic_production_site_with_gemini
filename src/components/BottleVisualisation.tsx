"use client";

import { useEffect, useRef, useState } from "react";

const BOTTLES_PER_SECOND = 1427000;
const BOTTLE_COLOR = "rgba(59, 130, 246, 0.6)"; // Blue-600 with some transparency

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
}

export default function BottleVisualisation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [totalBottles, setTotalBottles] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

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
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let animationFrameId: number;

    const render = () => {
      if (startTimeRef.current === null) return;
      const now = Date.now();
      const elapsedSeconds = (now - startTimeRef.current) / 1000;
      setTotalBottles(Math.floor(elapsedSeconds * BOTTLES_PER_SECOND));

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new particles (representing "batches" of bottles)
      // We can't render 1.43M individual items, so each particle represents a batch
      const particlesToCreate = 15; // Number of visual particles to add per frame
      for (let i = 0; i < particlesToCreate; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: -20,
          vx: (Math.random() - 0.5) * 2,
          vy: Math.random() * 5 + 2,
          size: Math.random() * 3 + 1,
          life: 1.0,
        });
      }

      // Update and draw particles
      ctx.fillStyle = BOTTLE_COLOR;
      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.005;

        if (p.life <= 0 || p.y > canvas.height) return false;

        ctx.beginPath();
        // Drawing a simple bottle-ish shape (rectangle + neck)
        ctx.fillRect(p.x, p.y, p.size, p.size * 2.5);
        ctx.fillRect(p.x + p.size * 0.25, p.y - p.size * 0.5, p.size * 0.5, p.size * 0.5);
        
        return true;
      });

      // Keep particles under a certain limit for performance
      if (particlesRef.current.length > 2000) {
        particlesRef.current = particlesRef.current.slice(-2000);
      }

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
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h2 className="text-xl md:text-2xl font-light mb-2 tracking-widest uppercase">
          Since you arrived
        </h2>
        <div className="text-5xl md:text-8xl font-black mb-6 tabular-nums text-blue-400">
          {totalBottles.toLocaleString()}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Plastic Bottles Produced
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl text-center mb-12">
          Global production reaches <span className="text-white font-semibold">1,427,000 bottles every single second</span>. 
          Most will end up in our oceans, landfills, or as microplastics.
        </p>
      </div>
    </div>
  );
}
