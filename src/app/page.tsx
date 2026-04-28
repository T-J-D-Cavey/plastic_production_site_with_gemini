import Link from "next/link";
import BottleVisualisation from "@/components/BottleVisualisation";
import DeforestationVisualisation from "@/components/DeforestationVisualisation";
import CarbonEmissionsVisualisation from "@/components/CarbonEmissionsVisualisation";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory">
      {/* Section 1: Plastic Production */}
      <section className="relative h-screen snap-start">
        <BottleVisualisation />
        <ScrollIndicator />
      </section>

      {/* Section 2: Deforestation */}
      <section className="relative h-screen snap-start">
        <DeforestationVisualisation />
        <ScrollIndicator />
      </section>

      {/* Section 3: Carbon Emissions */}
      <section className="relative h-screen snap-start">
        <CarbonEmissionsVisualisation />
      </section>

      {/* CTA Button - Fixed at bottom */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <Link
          href="/action"
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-blue-500/20 whitespace-nowrap"
        >
          TAKE ACTION
        </Link>
      </div>
    </main>
  );
}
