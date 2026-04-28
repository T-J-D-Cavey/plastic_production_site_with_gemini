---
title: Project Plan
description: Roadmap for the Climate Awareness MVP, tracking progress across phases.
relevance: High-level overview of project milestones and completion status.
---
# Project Plan — Climate Awareness MVP

## Phase 1: Foundation
- [x] **Step 1: Initialize Next.js Project**
    - Setup Next.js with App Router, TypeScript, and Tailwind CSS.
    - Clean up default boilerplate.
    - Configure basic layout and navigation.

## Phase 2: Core Features
- [x] **Step 2: Homepage & Visualisation**
    - Implement the "1.43 million bottles per second" simulation.
    - Create the visual loop using `useEffect` and CSS/Canvas.
    - Add descriptive text and a Call to Action (CTA) to the Action Page.

- [x] **Step 3: Action Page**
    - Create a clean, high-impact list of action links.
    - Ensure instant client-side transitions between pages.

## Phase 3: Polish & Deployment
- [x] **Step 4: Design & Responsiveness**
    - Apply final styling consistent with the emotional impact goal.
    - Ensure full mobile responsiveness.
    - Final audit against MVP success criteria.

## Phase 4: Expansion
- [x] **Step 5: Deforestation Visualisation**
    - Implement the "4.85 football pitches per second" simulation as defined in `deforestation_changes.MD`.
    - Create a persistent visual system where pitches accumulate and reset when the background is full.

- [x] **Step 6: Multi-Section Landing Page**
    - Refactor `src/app/page.tsx` to support vertical scrolling between Plastic and Deforestation sections.
    - Re-introduce scroll indicators to guide the user to the second section.
    - Ensure the CTA "Do Something About It" remains accessible or is repeated effectively.

- [x] **Step 7: Carbon Emissions Visualisation**
    - Implement the "1,186 tonnes of CO₂ per second" simulation as defined in `carbon_emissions_changes.MD`.
    - Create a visual system where a tree icon (🌳) appears every second, representing 54,000 mature trees needed to offset that emission.
    - Icons should appear in random positions but snap to a grid, eventually forming a "forest" that fills the screen and resets.
