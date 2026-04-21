# Next Steps

## ✅ What Was Done (This Session)
- **Updated `product_specifications.MD`**: Added the "Homepage — Deforestation Visualisation" section with detailed data, calculations (0.5 pitches/sec), and visual direction to match the existing plastic pollution specs.
- **Updated Action Page (`src/app/action/page.tsx`)**: 
    - Expanded the introductory text to include environmental destruction alongside plastic pollution.
    - Updated the data source section to include the FAO (Food and Agriculture Organization).
    - Refactored the calculations toggle to show two distinct, well-formatted boxes: one for Plastic Production and one for Global Deforestation.
- **Synchronized Data**: Ensured that the documentation, calculations, and `DeforestationVisualisation.tsx` implementation all consistently use the ~0.5 football pitches per second figure.

## 🔜 What's Next
### 1. Action Page Expansion
- Consider adding specific action links for deforestation (e.g., Rainforest Alliance, Woodland Trust).
- Add a "Did you know?" section to further connect the visualisations to specific impacts.

### 2. Performance & Tuning
- Monitor performance on lower-end devices for the dual-canvas setup now that both visualisations are fully documented and integrated.
- Fine-tune the "clear and reset" threshold in `DeforestationVisualisation` for different aspect ratios.

### 3. Visual Polish
- Add smooth transitions when switching between the two visualisation sections on the homepage.
- Experiment with adding a "soundscape" (e.g., subtle forest sounds vs. industrial noise) to increase emotional impact.

---

## 🔍 Codebase Review Findings
- The `DeforestationVisualisation.tsx` was already correctly implemented at 0.5 pitches/sec, which is now accurately reflected in all documentation.
- The Action page calculations are now more robust and provide better context for both visualisations.
