---
title: Global Food Waste
description: Implementation details for the global food waste volume visualisation.
relevance: Phase 2 implementation guide for the next developer/agent.
---

# 🍎 Global Food Waste

This section visualises the staggering volume of food that is lost or wasted annually, from farm to fork.

## Phase 1: Research Summary (Approved)

### 1. Data Source
- **Source**: [WWF - Driven to Waste (2021)](https://www.wwf.org.uk/press-release/sent-waste-new-report-shows-25-billion-tonnes-food-wasted-annually) / [UNEP Food Waste Index Report 2024](https://www.unep.org/resources/publication/food-waste-index-report-2024)
- **Primary Data**: Combined estimates of food loss (FAO) and food waste (UNEP), including on-farm losses.
- **Latest Figures**: ~2.5 Billion tonnes annually.

### 2. Metrics & Math
- **Annual Total**: 2,500,000,000 tonnes
- **Per-Second Rate**: `2,500,000,000 / 31,536,000` = **79.28 tonnes per second**.
- **Visual Scale**: 1 hamburger particle = 79.28 tonnes of food waste.
- **Visual Rate**: 1 particle per second.

### 3. Visual Metaphor
- **Style**: A "pile-up" of hamburger icons that form a growing mound.
- **Behavior**: One large burger falls every second, representing the total global waste occurring in that moment. These burgers create a mound that eventually fills the bottom third of the screen and flushes out to restart the loop.

## Phase 2: Implementation Details

### 1. Component: `src/components/FoodWasteVisualisation.tsx`
- **Hero Heading**: `Since you arrived, an equivalent of <Count> tonnes of food has been wasted.`
- **Context Paragraph**: `Annual global food loss and waste is ~2.5 Billion tonnes, equivalent to 79 tonnes every second.`
- **Key Box**:
  - Icon: 🍔 '1 burger ='
  - Text: `79.3 TONNES OF WASTE`

### 2. Action Hub Update (`src/app/action/page.tsx`)
- **New Link**: 
  - Title: "WRAP - Food Waste Action Week"
  - Description: "Working with governments, businesses and communities to deliver practical solutions to improve resource efficiency."
  - URL: `https://www.wrap.org.uk/`
  - Color: `border-lime-600 hover:bg-lime-600/10`
- **Data Source**: Add "WWF (Driven to Waste)" and "UNEP (Food Waste Index)" to the attribution paragraph.
- **Math Breakdown**:
  - Title: "Food Waste"
  - Text: "Annual global food loss and waste is approximately 2.5 billion tonnes. Dividing by 31,536,000 seconds in a year results in approximately 79 tonnes of food wasted every second."
  - Style: `text-lime-600`

### 3. Landing Page Integration (`src/app/page.tsx`)
- Append as the new final section.
- Ensure `ScrollIndicator` is added to the previous section (Meat Consumption).
- No `ScrollIndicator` on this section as it is the final one.
