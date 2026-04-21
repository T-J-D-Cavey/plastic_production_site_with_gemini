"use client";

import { useEffect, useRef, useState } from "react";

const PITCHES_PER_SECOND = 0.5;
const FOREST_COLOR = "#064e3b"; // Dark forest green
const PITCH_OUTLINE_COLOR = "rgba(252, 211, 77, 0.6)"; // Amber/Golden outline for impact
const PITCH_FILL_COLOR = "rgba(120, 53, 15, 0.3)"; // Brownish fill for cleared land

interface Pitch {
  x: number;
  y: number;
  w: number;
  h: number;
  opacity: number;
}

export default function DeforestationVisualisation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [totalPitches, setTotalPitches] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const pitchesRef = useRef<Pitch[]>([]);
  const lastPitchTimeRef = useRef<number>(0);
  const gridRef = useRef<{ occupied: boolean }[][]>([]);
  
  const PITCH_WIDTH = 120;
  const PITCH_HEIGHT = 80;
  const PADDING = 4;

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
      
      const cols = Math.floor(canvas.width / (PITCH_WIDTH + PADDING));
      const rows = Math.floor(canvas.height / (PITCH_HEIGHT + PADDING));
      
      gridRef.current = Array(rows).fill(null).map(() => 
        Array(cols).fill(null).map(() => ({ occupied: false }))
      );
      pitchesRef.current = [];
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let animationFrameId: number;

    const render = () => {
      if (startTimeRef.current === null) return;
      const now = Date.now();
      const elapsedSeconds = (now - startTimeRef.current) / 1000;
      setTotalPitches(elapsedSeconds * PITCHES_PER_SECOND);

      ctx.fillStyle = FOREST_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add 1 pitch every 2 seconds (0.5 pitches per second)
      const pitchInterval = 2000; 
      if (now - lastPitchTimeRef.current >= pitchInterval) {
        // Find an empty spot
        const rows = gridRef.current.length;
        const cols = gridRef.current[0]?.length || 0;
        
        if (rows > 0 && cols > 0) {
          const availableSpots: [number, number][] = [];
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              if (!gridRef.current[r][c].occupied) {
                availableSpots.push([r, c]);
              }
            }
          }

          if (availableSpots.length > 0) {
            const [r, c] = availableSpots[Math.floor(Math.random() * availableSpots.length)];
            gridRef.current[r][c].occupied = true;
            
            const offsetX = (canvas.width - (cols * (PITCH_WIDTH + PADDING))) / 2;
            const offsetY = (canvas.height - (rows * (PITCH_HEIGHT + PADDING))) / 2;

            pitchesRef.current.push({
              x: offsetX + c * (PITCH_WIDTH + PADDING),
              y: offsetY + r * (PITCH_HEIGHT + PADDING),
              w: PITCH_WIDTH,
              h: PITCH_HEIGHT,
              opacity: 0,
            });
          } else {
            // Screen is full, reset
            gridRef.current.forEach(row => row.forEach(cell => cell.occupied = false));
            pitchesRef.current = [];
          }
        }
        lastPitchTimeRef.current = now;
      }

      // Draw pitches
      pitchesRef.current.forEach(p => {
        if (p.opacity < 1) p.opacity += 0.05;
        
        ctx.globalAlpha = p.opacity;
        
        // Pitch fill
        ctx.fillStyle = PITCH_FILL_COLOR;
        ctx.fillRect(p.x, p.y, p.w, p.h);
        
        // Pitch outline
        ctx.strokeStyle = PITCH_OUTLINE_COLOR;
        ctx.lineWidth = 1;
        ctx.strokeRect(p.x, p.y, p.w, p.h);
        
        // Center line
        ctx.beginPath();
        ctx.moveTo(p.x + p.w / 2, p.y);
        ctx.lineTo(p.x + p.w / 2, p.y + p.h);
        ctx.stroke();
        
        // Center circle
        ctx.beginPath();
        ctx.arc(p.x + p.w / 2, p.y + p.h / 2, p.h / 6, 0, Math.PI * 2);
        ctx.stroke();
      });
      
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-emerald-950">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 select-none pointer-events-none">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-center max-w-4xl mb-8 leading-tight drop-shadow-lg">
          Since you arrived,{" "}
          <span 
            className="text-amber-400 tabular-nums"
            aria-live="polite"
            aria-atomic="true"
          >
            {totalPitches.toFixed(1)}
          </span>{" "}
          football pitches of forest have been cut down
        </h1>
        
        <div className="flex flex-col items-center gap-6 text-center max-w-3xl">
          <p className="text-lg md:text-2xl text-emerald-100/80 leading-relaxed drop-shadow-md">
            Global forest loss is ~10.9 million hectares per year, equivalent to <span className="text-white font-bold underline decoration-amber-500 underline-offset-8">0.5 football pitches</span> lost every second.
          </p>
          
          <div className="mt-12 flex flex-col items-center">
            <div className="flex items-center gap-6 bg-emerald-900/60 backdrop-blur-md px-8 py-4 rounded-2xl border border-emerald-800 shadow-2xl">
              <div className="flex flex-col items-center">
                <div className="w-10 h-6 border border-amber-500/50 relative mb-1 flex items-center justify-center">
                   <div className="w-[1px] h-full bg-amber-500/50"></div>
                   <div className="absolute w-2 h-2 border border-amber-500/50 rounded-full"></div>
                </div>
                <div className="text-[10px] font-bold text-amber-400/60 uppercase">1 pitch</div>
              </div>
              
              <div className="text-2xl font-light text-emerald-500">=</div>
              
              <div className="flex flex-col items-start">
                <div className="text-2xl md:text-3xl font-mono font-bold text-amber-100 leading-none">
                  0.7
                </div>
                <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mt-1">
                  Hectares every 2 seconds
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-0" />
    </div>
  );
}
