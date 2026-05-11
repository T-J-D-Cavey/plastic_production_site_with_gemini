---
title: Domesticated Animal Consumption
description: Implementation details for the animal agriculture scale visualisation.
relevance: Phase 2 implementation guide for the next developer/agent.
---

# 🥩 Domesticated Animal Consumption

This section visualises the scale of land animals slaughtered for human meat consumption.

## Phase 1: Research Summary (Approved)

### 1. Data Source
- **Source**: [Our World in Data - Animal Welfare](https://ourworldindata.org/animal-welfare)
- **Primary Data**: FAO (Food and Agriculture Organization of the United Nations).
- **Latest Figures**: ~83 Billion land animals annually.

### 2. Metrics & Math
- **Annual Total**: 83,000,000,000
- **Per-Second Rate**: `83,000,000,000 / 31,536,000` = **2,632 animals per second**.
- **Visual Scale**: 1 particle = 10 animals.
- **Visual Rate**: ~263 particles per second.

### 3. Visual Metaphor
- **Style**: A "rain" of crimson particles/drops that accumulate at the bottom of the screen.
- **Color**: Deep Crimson (`#991b1b`).
- **Behavior**: Particles fall from the top at varying speeds and settle at the bottom, creating a rising "floor" of color.

## Phase 2: Implementation Details

### 1. Component: `src/components/MeatConsumptionVisualisation.tsx`
- **Hero Heading**: `Since you arrived, an equivalent of <Count> animals have been slaughtered for meat.`
- **Context Paragraph**: `Annual global land animal slaughter is ~83 Billion, equivalent to 2,632 animals every second.`
- **Key Box**:
  - Icon: 🩸 (or a custom red drop shape)
  - Text: `2,632 ANIMALS EVERY SECOND`

### 2. Action Hub Update (`src/app/action/page.tsx`)
- **New Link**: 
  - Title: "Viva! - The Charity for Animals"
  - Description: "Campaigning for a vegan world to end animal suffering and protect the planet."
  - URL: `https://viva.org.uk/`
  - Color: `border-red-600 hover:bg-red-600/10`
- **Data Source**: Add "Our World in Data (Animal Welfare)" to the attribution paragraph.
- **Math Breakdown**:
  - Title: "Animal Consumption"
  - Text: "Annual global land animal slaughter is approximately 83 billion. Dividing by 31,536,000 seconds in a year results in approximately 2,632 animals slaughtered every second."
  - Style: `text-red-600`

### 3. Landing Page Integration (`src/app/page.tsx`)
- Append as the new final section.
- Ensure `ScrollIndicator` is added to the Carbon Emissions section.
- No `ScrollIndicator` on this section as it is the final one.
