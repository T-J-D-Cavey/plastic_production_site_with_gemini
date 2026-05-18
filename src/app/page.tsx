"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import BottleVisualisation from "@/components/BottleVisualisation";
import DeforestationVisualisation from "@/components/DeforestationVisualisation";
import CarbonEmissionsVisualisation from "@/components/CarbonEmissionsVisualisation";
import MeatConsumptionVisualisation from "@/components/MeatConsumptionVisualisation";
import FoodWasteVisualisation from "@/components/FoodWasteVisualisation";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  const [activeSection, setActiveSection] = useState<number>(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex((el) => el === entry.target);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory">
      {/* Section 1: Plastic Production */}
      <section 
        ref={(el) => { sectionRefs.current[0] = el; }} 
        className="relative h-screen snap-start"
      >
        <BottleVisualisation isActive={activeSection === 0} />
        <ScrollIndicator />
      </section>

      {/* Section 2: Deforestation */}
      <section 
        ref={(el) => { sectionRefs.current[1] = el; }} 
        className="relative h-screen snap-start"
      >
        <DeforestationVisualisation isActive={activeSection === 1} />
        <ScrollIndicator />
      </section>

      {/* Section 3: Carbon Emissions */}
      <section 
        ref={(el) => { sectionRefs.current[2] = el; }} 
        className="relative h-screen snap-start"
      >
        <CarbonEmissionsVisualisation isActive={activeSection === 2} />
        <ScrollIndicator />
      </section>

      {/* Section 4: Meat Consumption */}
      <section 
        ref={(el) => { sectionRefs.current[3] = el; }} 
        className="relative h-screen snap-start"
      >
        <MeatConsumptionVisualisation isActive={activeSection === 3} />
        <ScrollIndicator />
      </section>

      {/* Section 5: Food Waste */}
      <section 
        ref={(el) => { sectionRefs.current[4] = el; }} 
        className="relative h-screen snap-start"
      >
        <FoodWasteVisualisation isActive={activeSection === 4} />
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
