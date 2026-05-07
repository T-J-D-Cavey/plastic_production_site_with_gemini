---
title: Next Steps
description: Immediate tasks and long-term goals for the project.
relevance: Guide for current and future development sessions.
---
# Next Steps

## ✅ What Was Done (This Session)
- **Author Context Update**: Replaced the placeholder in `src/app/action/page.tsx` with detailed, formatted copy from the author, including sections on "The Consumer Myth", "The Plastic vs. Forest Catch-22", and "Taxation Drives Innovation".
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

1. **Final Polish & Audit**: Perform a final pass on the visualisations to ensure performance is optimal on lower-end devices.
2. **Accessibility Pass**: Ensure all buttons and links have proper ARIA labels and the site is navigable via keyboard.
3. **Deployment**: Prepare the site for hosting (e.g., Vercel, Netlify).



---

## 🔍 Codebase Review Findings
- The component architecture is consistent across all three visualisations.
- Snap-scrolling is working effectively for the three-section landing page.
- YAML front matter is now standard across all documentation.
