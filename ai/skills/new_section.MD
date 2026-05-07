---
title: Creating a New Section
description: A blueprint for adding modular theme-based sections to the climate project.
relevance: Required for AI agents and developers adding new climate-themed visualisations.
---

# 🏗️ Modular Section Blueprint

To add a new theme (e.g., Ocean Acidification, Ice Melt, Overfishing), follow these steps to maintain consistency and modularity.

## 1. 📊 Data Research & Precomputation
Before coding, source data from reputable organisations (Our World in Data, FAO, NASA, etc.).
- **Requirement**: Convert annual data into a **per-second rate**.
- **Calculation**: (Annual Total) / 31,536,000 seconds = Rate per second.
- **Visual Analog**: Define what 1 visual item represents (e.g., 1 bottle = 1.4M bottles, 1 tree = 0.5 football pitches).

## 2. 🎨 Visualization Component (`src/components/[Theme]Visualisation.tsx`)
Create a new client component following this structure:
- **Canvas-based**: Use `useRef<HTMLCanvasElement>` and `requestAnimationFrame`.
- **State**: Track `totalValue` based on `(Date.now() - startTime) / 1000 * RATE_PER_SECOND`.
- **Message**: "Since you arrived, an equivalent of [X] [Units] has been [Action]".
- **Key Box**: A UI element showing "1 [Icon] = [Actual Rate] [Units] every second".
- **Styling**: Use Tailwind CSS for the UI overlay and raw Canvas API for the simulation.

## 3. 📄 Landing Page Integration (`src/app/page.tsx`)
1. Import the new component.
2. Add a new `<section>` tag within the `main` container:
   ```tsx
   <section className="relative h-screen snap-start">
     <ThemeVisualisation />
     {/* Add ScrollIndicator ONLY if this is NOT the final section */}
     <ScrollIndicator /> 
   </section>
   ```
3. **Important**: If you add a section after the previous "final" section, you MUST add a `<ScrollIndicator />` to the previous section so the user knows to keep scrolling.

## 4. ⚡ Action Hub Update (`src/app/action/page.tsx`)
1. **Link**: Add a new object to the `ACTIONS` array with a relevant organisation.
   - Choose a unique `color` (Tailwind border/hover classes).
2. **Source Link**: Add the data source link to the source attribution paragraph.
3. **Calculations**: Add a new `div` block inside the `showCalculations` section:
   - Use a unique color for the heading (e.g., `text-pink-500`).
   - Clearly explain the math: (Source Data) / (Seconds in a year) = (Per-second impact).

## 🧪 Validation Checklist
- [ ] Is the data sourced from a reputable institution?
- [ ] Are the calculations verified and explained in the Action Hub?
- [ ] Does the new section snap correctly on scroll?
- [ ] Is the 'Scroll Indicator' present on the preceding section?
- [ ] Is the component mobile-responsive?
- [ ] Does the visualization loop or "flush" to prevent performance degradation?
