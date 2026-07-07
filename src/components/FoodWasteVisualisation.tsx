"use client";

import { useEffect, useRef, useState } from "react";

const FOOD_WASTE_PER_SECOND = 79.28;
const BACKGROUND_COLOR = "#0c0d0c"; 
const BURGER_SIZE = 50;
const SPACING_Y = 70;
const MARGIN_TOP = 100;
const TARGET_GAP = 20;

interface Burger {
  x: number;
  y: number;
  row: number;
  isMoving: boolean;
  spawnTime: number;
}

export default function FoodWasteVisualisation({ isActive }: { isActive: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [totalWaste, setTotalWaste] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const burgersRef = useRef<Burger[]>([]);
  const currentRowRef = useRef<number>(0);
  const rowStartTimeRef = useRef<number>(0);
  const isResettingRef = useRef<boolean>(false);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Reset simulation state when section becomes active
    startTimeRef.current = Date.now();
    burgersRef.current = [];
    currentRowRef.current = 0;
    rowStartTimeRef.current = Date.now();
    isResettingRef.current = false;
    setTotalWaste(0);

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      burgersRef.current = [];
      currentRowRef.current = 0;
      rowStartTimeRef.current = Date.now();
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let animationFrameId: number;
    let lastSpawnSecond = -1;

    const render = () => {
      if (startTimeRef.current === null) return;
      const now = Date.now();
      const elapsedSeconds = (now - startTimeRef.current) / 1000;
      
      setTotalWaste(elapsedSeconds * FOOD_WASTE_PER_SECOND);

      ctx.fillStyle = BACKGROUND_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (isResettingRef.current) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const cols = Math.max(1, Math.floor((canvas.width - TARGET_GAP) / (TARGET_GAP + BURGER_SIZE)));
      const rows = Math.floor((canvas.height - MARGIN_TOP * 2) / SPACING_Y);
      
      const g = (canvas.width - cols * BURGER_SIZE) / (cols + 1);
      const spacingX = BURGER_SIZE + g;
      const speed = spacingX; // pixels per second (speed matches spacing so burgers spawned 1s apart are perfectly spaced)

      const currentSecond = Math.floor(elapsedSeconds);
      
      // Spawn new burger every second
      if (currentSecond > lastSpawnSecond) {
        const rowElapsed = (now - rowStartTimeRef.current) / 1000;
        // Only spawn if the current row isn't full yet
        if (rowElapsed < cols) {
          burgersRef.current.push({
            x: -BURGER_SIZE,
            y: MARGIN_TOP + currentRowRef.current * SPACING_Y,
            row: currentRowRef.current,
            isMoving: true,
            spawnTime: now,
          });
        }
        lastSpawnSecond = currentSecond;
      }

      // Update positions
      burgersRef.current.forEach((b) => {
        if (b.isMoving) {
          const burgerElapsed = (now - b.spawnTime) / 1000;
          b.x = -BURGER_SIZE + burgerElapsed * speed;
          
          // If this is the first burger of the row and it hit the target
          if (b.row === currentRowRef.current) {
            const firstBurgerInRow = burgersRef.current.find(nb => nb.row === b.row);
            const targetX = g + BURGER_SIZE / 2 + (cols - 1) * spacingX;
            
            if (firstBurgerInRow && firstBurgerInRow.x >= targetX) {
              // Find all burgers in this row and snap them
              const rowBurgers = burgersRef.current.filter(nb => nb.row === b.row);
              rowBurgers.sort((a, b) => a.spawnTime - b.spawnTime);
              
              rowBurgers.forEach((nb, index) => {
                nb.isMoving = false;
                nb.x = g + BURGER_SIZE / 2 + (cols - 1 - index) * spacingX;
              });

              currentRowRef.current++;
              rowStartTimeRef.current = now;

              // Check if screen is full
              if (currentRowRef.current >= rows) {
                isResettingRef.current = true;
                setTimeout(() => {
                  burgersRef.current = [];
                  currentRowRef.current = 0;
                  rowStartTimeRef.current = Date.now();
                  isResettingRef.current = false;
                }, 2000);
              }
            }
          }
        }
      });

      // Draw
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `${BURGER_SIZE}px serif`;

      burgersRef.current.forEach((b) => {
        ctx.fillText("🍔", b.x, b.y);
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
