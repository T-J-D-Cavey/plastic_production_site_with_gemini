import Link from "next/link";
import BottleVisualisation from "@/components/BottleVisualisation";
import DeforestationVisualisation from "@/components/DeforestationVisualisation";

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory">
      {/* Section 1: Plastic Production */}
      <section className="relative h-screen snap-start">
        <BottleVisualisation />
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span className="text-white text-xs font-bold uppercase tracking-widest">Scroll for more</span>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* Section 2: Deforestation */}
      <section className="relative h-screen snap-start">
        <DeforestationVisualisation />
      </section>

      {/* CTA Button - Fixed at bottom */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <Link
          href="/action"
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-blue-500/20 whitespace-nowrap"
        >
          Do Something About It
        </Link>
      </div>
    </main>
  );
}
