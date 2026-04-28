---
title: Next Steps
description: Immediate tasks and long-term goals for the project.
relevance: Guide for current and future development sessions.
---
# Next Steps

## ✅ What Was Done (This Session)
- **YAML Front Matter**: Added YAML sections to all markdown files in the `ai/` directory for better LLM context management.
- **Implemented Carbon Emissions Visualisation**: 
    - Created `src/components/CarbonEmissionsVisualisation.tsx` with a canvas-based tree-planting simulation.
    - Integrated logic for 1,186 tonnes/sec of CO₂ and the 54,000 trees/sec offset metric.
- **Updated Landing Page**: 
    - Added the Carbon Emissions section to `src/app/page.tsx`.
    - Moved the scroll indicator to the Deforestation section to guide users further down.
- **Enhanced Action Page**:
    - Added new organizations (Woodland Trust, Carbon Trust, Climate Coalition).
    - Added the detailed Carbon Emissions breakdown to the Calculations section.
- **Completed Phase 4**: All planned expansions in the Project Plan are now implemented.

## 🔜 What's Next
### 1. Polish & Optimization
- **Mobile Fine-tuning**: Verify that the tree grid and font sizes in `CarbonEmissionsVisualisation` look good on small screens.
- **Asset Optimization**: Consider using SVGs instead of emojis for trees if higher fidelity is desired.
- **Transitions**: Smooth out the entry/exit animations for visual elements when scrolling between sections.

### 2. Accessibility & SEO
- **Aria Labels**: Audit all visualisations for better screen reader support (especially the live counters).
- **Meta Tags**: Add OpenGraph images and meta descriptions to improve sharing impact.

### 3. Potential New Features
- **Section 4?**: Research a fourth high-impact metric (e.g., Ocean Warming or Species Extinction).
- **Interactive Elements**: Allow users to "plant a tree" or "pick up a bottle" on the screen to see a tiny reduction in the counter.

---

## 🔍 Codebase Review Findings
- The component architecture is consistent across all three visualisations.
- Snap-scrolling is working effectively for the three-section landing page.
- YAML front matter is now standard across all documentation.
