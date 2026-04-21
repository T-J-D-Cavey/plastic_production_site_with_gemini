# Next Steps

## ✅ What Was Done (This Session)
- **Implemented `DeforestationVisualisation.tsx`:** Created a new canvas-based visualization showing ~5 football pitches of forest loss per second with a grid-based accumulation and reset system.
- **Refactored Landing Page (`src/app/page.tsx`):** Transitioned to a vertical scrolling layout using CSS scroll snapping (`snap-y snap-mandatory`).
- **Added Navigation Cues:** Re-introduced a bouncing scroll indicator on the first section to guide users.
- **Improved Accessibility:** Added `aria-live="polite"` and `aria-atomic="true"` to real-time counters in both visualizations.
- **Fixed CTA:** Positioned the "Do Something About It" button as a fixed element at the bottom for constant accessibility across sections.

## 🔜 What's Next
### 1. Performance & Tuning
- Monitor performance on lower-end devices for the dual-canvas setup.
- Tune the "clear and reset" threshold in `DeforestationVisualisation` for different aspect ratios (mobile vs. desktop).

### 2. Further Expansion
- Consider a third section for **Global Temperature Rise** or **CO2 Emissions**.
- Add a "Share this" feature to help the awareness spread.
- Deepen the "Action Page" with more granular, local actions based on user location (if feasible in future phases).

### 3. Visual Polish
- Add a smooth fade or transition effect when snapping between sections if possible without breaking native scroll feel.
- Experiment with more detailed forest "textures" in the background of the deforestation view.

---

## 🔍 Codebase Review Findings
- **Fixed:** All counters now have accessibility properties.
- **Note:** The fixed CTA button is z-indexed at 50 to ensure it stays above the visualizations.
