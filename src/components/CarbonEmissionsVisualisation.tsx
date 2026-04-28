"use client";

import { useEffect, useRef, useState } from "react";

const CO2_PER_SECOND = 1186;
const TREES_PER_SECOND = 1;
const BACKGROUND_COLOR = "#0c0a09"; // Stone-950 (Dark industrial feel)
const TREE_EMOJI = "🌳";

interface Tree {
  x: number;
  y: number;
  opacity: number;
  scale: number;
}

export default function CarbonEmissionsVisualisation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [totalCO2, setTotalCO2] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const treesRef = useRef<Tree[]>([]);
  const lastTreeTimeRef = useRef<number>(0);
  const gridRef = useRef<{ occupied: boolean }[][]>([]);
  
  const CELL_SIZE = 40;

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
      
      const cols = Math.floor(canvas.width / CELL_SIZE);
      const rows = Math.floor(canvas.height / CELL_SIZE);
      
      gridRef.current = Array(rows).fill(null).map(() => 
        Array(cols).fill(null).map(() => ({ occupied: false }))
      );
      treesRef.current = [];
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let animationFrameId: number;

    const render = () => {
      if (startTimeRef.current === null) return;
      const now = Date.now();
      const elapsedSeconds = (now - startTimeRef.current) / 1000;
      setTotalCO2(elapsedSeconds * CO2_PER_SECOND);

      ctx.fillStyle = BACKGROUND_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add 1 tree every second
      const treeInterval = 1000; 
      if (now - lastTreeTimeRef.current >= treeInterval) {
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
            
            const offsetX = (canvas.width - (cols * CELL_SIZE)) / 2;
            const offsetY = (canvas.height - (rows * CELL_SIZE)) / 2;

            treesRef.current.push({
              x: offsetX + c * CELL_SIZE + CELL_SIZE / 2,
              y: offsetY + r * CELL_SIZE + CELL_SIZE / 2,
              opacity: 0,
              scale: 0.5,
            });
          } else {
            // Screen is full, reset
            gridRef.current.forEach(row => row.forEach(cell => cell.occupied = false));
            treesRef.current = [];
          }
        }
        lastTreeTimeRef.current = now;
      }

      // Draw trees
      ctx.font = `${CELL_SIZE * 0.8}px serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      treesRef.current.forEach(tree => {
        if (tree.opacity < 1) tree.opacity += 0.05;
        if (tree.scale < 1) tree.scale += 0.05;
        
        ctx.globalAlpha = tree.opacity;
        ctx.save();
        ctx.translate(tree.x, tree.y);
        ctx.scale(tree.scale, tree.scale);
        ctx.fillText(TREE_EMOJI, 0, 0);
        ctx.restore();
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
    <div className="relative w-full h-screen overflow-hidden bg-stone-950">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 select-none pointer-events-none">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-center max-w-4xl mb-8 leading-tight drop-shadow-lg">
          Since you arrived,{" "}
          <span 
            className="text-orange-500 tabular-nums"
            aria-live="polite"
            aria-atomic="true"
          >
            {Math.floor(totalCO2).toLocaleString()}
          </span>{" "}
          tonnes of CO₂ have been released from fossil fuels alone
        </h1>
        
        <div className="flex flex-col items-center gap-6 text-center max-w-3xl">
          <p className="text-lg md:text-2xl text-stone-300 leading-relaxed drop-shadow-md">
            Every second, 1,186 tonnes of CO₂ enter the atmosphere. We would need 54k trees growing for a year to absorb that much.
          </p>
          
          <div className="mt-12 flex flex-col items-center">
            <div className="flex items-center gap-6 bg-stone-900/80 backdrop-blur-md px-8 py-4 rounded-2xl border border-stone-800 shadow-2xl">
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-1">{TREE_EMOJI}</div>
                <div className="text-[10px] font-bold text-emerald-500 uppercase">1 tree</div>
              </div>
              
              <div className="text-2xl font-light text-stone-500">=</div>
              
              <div className="flex flex-col items-start">
                <div className="text-2xl md:text-3xl font-mono font-bold text-emerald-400 leading-none">
                  54,000
                </div>
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-1">
                  Trees growing for a full year
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
