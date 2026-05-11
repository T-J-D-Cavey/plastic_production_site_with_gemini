---
title: Next Steps
description: Immediate tasks and long-term goals for the project.
relevance: Guide for current and future development sessions.
---

# 🔜 Next Steps

The following steps outline the immediate priorities for refactoring, optimization, and controlled expansion of the project.

## 1. 🗑️ Remove Biodiversity Section
Revert the recent additions related to the Biodiversity Loss (Insect Apocalypse) section to maintain a clean baseline before the next phase.
- **Landing Page**: Remove `BiodiversityVisualisation` and its corresponding `<section>` from `src/app/page.tsx`.
- **Action Hub**: Remove the WWF link, IPBES data attribution, and the biodiversity math breakdown from `src/app/action/page.tsx`.
- **Cleanup**: Delete `src/components/BiodiversityVisualisation.tsx` and the `ai/skills/biodiversity_changes.MD` (if present).

## 2. ⚡ Performance Optimization: Conditional Visualisations
Modify the homepage logic to ensure the application remains performant as more sections are added.
- **Intersection Observer**: Implement an Intersection Observer in `src/app/page.tsx` to track which section is currently in view.
- **Conditional Execution**: Pass an `isActive` prop to each visualisation component. The internal simulation logic (Canvas animations, particle updates, etc.) must only execute when `isActive` is true.
- **Resource Management**: Ensure that when a user scrolls away, the animation loop is paused and any non-persistent resources are throttled.

## 3. 🛠️ Update 'New Section' Workflow
Refactor the `ai/skills/new_section.MD` skill to enforce a research-first approach.
- **Two-Phase Process**: Split the blueprint into "Phase 1: Research & Proposal" and "Phase 2: Implementation".
- **Approval Gate**: Explicitly state that the agent must stop and present a structured proposal (Source, Metrics, Visual Metaphor, Math) for user approval before writing any code for a new section.

## 4. 🔍 Research: Domesticated Animal Consumption
Initiate the new research-first workflow for a section focused on the scale of animal agriculture.
- **Theme**: The volume of domesticated animals killed for human meat consumption.
- **Objective**: Conduct "Phase 1" research as defined in the updated blueprint.
- **Output**: Present a proposal including reputable data sources (e.g., FAO), per-second kill rates, and a visual metaphor that effectively communicates the scale.
