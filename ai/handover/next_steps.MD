---
title: Next Steps
description: Immediate tasks and long-term goals for the project.
relevance: Guide for current and future development sessions.
---

# 🔜 Next Steps

## ✅ Recent Changes

### 🍎 Food Waste Section Refactor
- **State Management**: Switched to `useState` for the `totalWaste` counter, ensuring consistency with other sections.
- **Simplified Rendering**: Replaced `offscreenCanvas` with direct `ctx.fillText` for better maintainability without sacrificing performance.
- **Metric Logic Fix**: Corrected the Key Box to show "79 Tonnes every second" as the primary rate.
- **Flush Standardization**: Implemented a `setTimeout` based flush mechanism matching the `BottleVisualisation` pattern.
- **Visual Alignment**: Updated styling to use `bg-stone-900/80`, `rounded-2xl`, and `border-stone-800`.

### 🎨 Project-Wide Consistency Pass
- **Typography**: Standardized icon and unit labels across all visualizations using `text-stone-400` and `tracking-widest`.
- **Key Box Styling**: Applied the "Stone Theme" (`bg-stone-900/80`, `border-stone-800`) to `MeatConsumption`, `CarbonEmissions`, and `Deforestation` sections.
- **Scroll Continuity**: Verified section ordering and `ScrollIndicator` placement in the main landing page.
- **Data Verification**: Confirmed all visualization figures align with the calculation block in the Action Hub.

## 📋 To Do Next

### 🛠️ Fix Food Waste Visual Logic & Performance
- [x] **Scale Correction**: Redefine the visual scale so **1 burger = 79.28 tonnes**. Currently, it is spawning 1 burger per tonne (~79 burgers/sec), which causes performance lag and visual clutter.
- [x] **Spawning Logic**: Update `FoodWasteVisualisation.tsx` to spawn exactly **one burger per second**.
  - Logic should trigger when `Math.floor(elapsedSeconds)` increments.
- [x] **Visual Impact**: Increase the size of the burger particles slightly (e.g., `40-60px` range) and increase their contribution to the "mound" (`bucketsRef`) so the pile still grows effectively despite the lower particle count.
- [x] **Documentation Sync**: Update `ai/skills/food_waste_changes.MD` to reflect the new scale (1 burger = 79 tonnes).
- [x] **Performance Audit**: Verify that the FPS is stable (60 FPS) on both mobile and desktop after the change.

### 🧪 Final Project Polish
- [x] **Navigation Check**: Ensure all `ScrollIndicator` components are correctly pointing to the next section and that the final section (Food Waste) correctly lacks one.
- [x] **Data Audit**: Final pass on all visualization components to ensure the "Key Box" metrics match the logic in `src/app/action/page.tsx`.
- [x] **Responsive Review**: Check that all text overlays are legible on small screens and don't overlap with the canvas animations.

