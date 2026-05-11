---
title: Next Steps
description: Immediate tasks and long-term goals for the project.
relevance: Guide for current and future development sessions.
---

# 🔜 Next Steps

The following steps outline the immediate priorities for refactoring, optimization, and controlled expansion of the project.

## 1. 🗑️ Remove Biodiversity Section (COMPLETED)
Revert the recent additions related to the Biodiversity Loss (Insect Apocalypse) section to maintain a clean baseline before the next phase.
- **Landing Page**: Remove `BiodiversityVisualisation` and its corresponding `<section>` from `src/app/page.tsx`.
- **Action Hub**: Remove the WWF link, IPBES data attribution, and the biodiversity math breakdown from `src/app/action/page.tsx`.
- **Cleanup**: Delete `src/components/BiodiversityVisualisation.tsx` and the `ai/skills/biodiversity_changes.MD` (if present).

## 2. ⚡ Performance Optimization: Conditional Visualisations (COMPLETED)
Modify the homepage logic to ensure the application remains performant as more sections are added.
- **Intersection Observer**: Implement an Intersection Observer in `src/app/page.tsx` to track which section is currently in view.
- **Conditional Execution**: Pass an `isActive` prop to each visualisation component. The internal simulation logic (Canvas animations, particle updates, etc.) must only execute when `isActive` is true.
- **Resource Management**: Ensure that when a user scrolls away, the animation loop is paused and any non-persistent resources are throttled.

## 3. ✅ Update 'New Section' Workflow (COMPLETED)
Refactor the `ai/skills/new_section.MD` skill to enforce a research-first approach.
- **Two-Phase Process**: Split the blueprint into "Phase 1: Research & Proposal" and "Phase 2: Implementation".
- **Approval Gate**: Explicitly state that the agent must stop and present a structured proposal (Source, Metrics, Visual Metaphor, Math) for user approval before writing any code for a new section.
- **Status**: Successfully refactored `ai/skills/new_section.MD`.

## 4. 🔍 Research: Domesticated Animal Consumption (COMPLETED)
Initiate the new research-first workflow outlined in next_section.MD file, for a new section focused on the scale of animal agriculture.
- **Theme**: The number of domesticated animals killed for human meat consumption.
- **Objective**: Conduct "Phase 1" research as defined in the updated blueprint in next_section.MD file.
- **Output**: Proposal approved and documented in `ai/skills/meat_consumption_changes.MD`.

## 5. 🛠️ Fix Meat Consumption & Performance Issues (COMPLETED)
Address the reported "Out of Memory" crashes and functional bugs in the new visualisations.
- **Critical Fix (Memory Leak)**: The `lastParticleTimeRef` (and similar refs in other components) now initializes to `Date.now()` upon activation, preventing massive loops.
- **Safety Clamping**: Implemented maximum limits on particles/trees/pitches created per frame to prevent memory spikes while maintaining statistical accuracy at standard frame rates.
- **Timer Consistency**: Standardized `startTimeRef` and visual state to reset upon activation, providing a clear "Since you arrived" experience for each section.
- **Visualisation Audit**: Applied these safety patterns across all components (`Bottle`, `Deforestation`, `CarbonEmissions`, and `MeatConsumption`).
