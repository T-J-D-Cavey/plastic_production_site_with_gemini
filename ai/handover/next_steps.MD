---
title: Next Steps
description: Immediate tasks and long-term goals for the project.
relevance: Guide for current and future development sessions.
---

# 🔜 Next Steps

## ✅ Recent Changes

### 🍔 Symmetrical Food Waste Visualisation
- **Dynamic Columns**: Calculated columns based on a target minimum gap and burger size instead of using a hardcoded column calculation.
- **Exact Symmetrical Gaps**: Replaced fixed left/right margins and spacing constants with a dynamically calculated gap `g` and spacing `spacingX`. This guarantees that the space between each burger, and between the outer burgers and the portal edges, is completely even and symmetrical on any screen size.
- **Synchronized Velocity**: Set the burger animation speed to `spacingX` so they travel at exactly the same spacing they occupy when stationary, eliminating visual jump or warping when they snap/dock.

### 🎨 Project-Wide Consistency Pass
- **Typography**: Standardized icon and unit labels across all visualizations using `text-stone-400` and `tracking-widest`.
- **Key Box Styling**: Applied the "Stone Theme" (`bg-stone-900/80`, `border-stone-800`) to `MeatConsumption`, `CarbonEmissions`, and `Deforestation` sections.
- **Scroll Continuity**: Verified section ordering and `ScrollIndicator` placement in the main landing page.
- **Data Verification**: Confirmed all visualization figures align with the calculation block in the Action Hub.

## 📋 To Do Next

### 🧪 Project Validation & Expansion
- [ ] **Verification**: Confirm visual symmetry is correct on local mobile viewports (e.g., via Chrome Developer Tools).
- [ ] **Section Expansion**: Propose and implement a new topic (e.g. Overfishing, Glacial Melt, Ocean Acidification) following the modular blueprint.
- [ ] **User Feedback**: Align with the user on any additional styling or feature refinements.

