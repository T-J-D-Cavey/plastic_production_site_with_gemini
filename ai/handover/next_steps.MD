# Next Steps


## ✅ What Was Done (Current Session)
- **Visceral Accumulation implemented:** Bottles now pile up at the bottom of the screen instead of fading out, visually demonstrating that plastic stays in the environment.
- **Explicit Scale Key added:** A new UI element explains that "1 Visual Bottle = 1,427,000 Real Units", bridging the gap between abstract numbers and the animation.
- **"Reset & Loop" implemented:** Added a "flush" mechanism where the pile clears once it reaches a certain height, reinforcing the relentless and unsustainable nature of production.
- **Accessibility & UX Refinements:** Added `aria-live` to the counter and refined the "Since you arrived" typography for better impact and clarity.
- **Visual Polish:** Improved bottle shapes and added a "bornAt" timestamp to particles to manage their lifecycle.


## 🔍 Codebase Review
- **Alignment with Spec:**
    - The simulation now matches the "one bottle per second" and "resetting and looping" instructions from the product spec.
    - The Scale Key is now prominent and easy to understand.
- **Technical Performance:**
    - The particle count is kept stable even with the "flush" mechanism.
    - Canvas rendering remains high-performance despite the "pile height" calculation.
- **User Experience:**
    - The "Since you arrived" counter feels more urgent with the visual support of landing bottles.


## 🔜 Recommended Next Steps (Refining the MVP)


### 1. Final Polish: "Urgent Escape" CTA
- **Change:** Enhance the "Do Something About It" button to feel like an urgent escape from the overwhelming data. Maybe add a "count-up" or "pressure" effect to the UI as the pile grows.
- **Impact:** Increases conversion to the Action Page.


### 2. Sound Effects (Optional)
- **Change:** Add a subtle "thud" or "clink" when bottles land and a "whoosh/flush" sound when the pile resets.
- **Impact:** Adds a layer of sensory impact that reinforces the physical presence of the plastic.


### 3. SEO & Metadata
- **Change:** Ensure the site has proper environmental awareness meta tags and social sharing images.
- **Impact:** Improves visibility when shared.


---


**Next Task:** Enhance the **CTA (Do Something About It)** and add **Sound Effects** for maximum emotional impact.
