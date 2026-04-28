# Next Steps

## ✅ What Was Done (This Session)
- **Updated `product_specifications.MD`**: Added the "Homepage — Carbon Emissions Visualisation" section with detailed data (1,186 tonnes/sec), offset calculations (54,000 trees/sec), and visual direction.
- **Updated `project_plan.MD`**: Added Step 7 for the implementation of the Carbon Emissions Visualisation.
- **Reviewed Documentation**: Integrated the calculations and logic from `carbon_emissions_changes.MD` into the core project specifications.

## 🔜 What's Next
### 1. Carbon Emissions Implementation
- **Create `CarbonEmissionsVisualisation.tsx`**: Implement the 1,186 tonnes/sec counter and the tree-growing simulation.
- **Visual Logic**: Use a grid system (similar to `DeforestationVisualisation.tsx`) where tree icons appear in random grid cells every second.
- **Refactor Landing Page**: Add the third section to `src/app/page.tsx` and ensure smooth snap-scrolling.

### 2. Action Page Expansion
- Add specific action links for carbon reduction and reforestation.
- Update the "Calculations" section to include the Carbon Emissions breakdown.

### 3. Performance & Tuning
- Monitor performance as the number of canvas-based sections increases.
- Optimize asset loading for the tree icons (emojis or SVGs).

---

## 🔍 Codebase Review Findings
- The "forest" visual logic already exists in a skeletal form within the grid-filling logic of `DeforestationVisualisation.tsx`, which can be adapted for the Carbon Emissions tree grid.
- All three major environmental metrics (Plastic, Deforestation, Carbon) are now fully documented and ready for full implementation.
