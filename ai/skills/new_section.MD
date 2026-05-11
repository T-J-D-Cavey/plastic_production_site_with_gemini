---
title: Creating a New Section
description: A blueprint for adding modular theme-based sections to the climate project.
relevance: Required for AI agents and developers adding new climate-themed visualisations.
---

# 🏗️ Modular Section Blueprint

To add a new theme (e.g., Overfishing, Ice Melt, Ocean Acidification), follow this two-phase research-to-implementation process.

## Phase 1: Research & Proposal
**The agent must complete this phase and stop for user approval before writing any code.**

### 1. 🔍 Research & Data Gathering
Determine the "Impact Unit" that will be visualised.
- **Metric**: Find a reputable annual figure (NASA, FAO, Our World in Data). Provide the source URL.
- **Rate**: Calculate `Annual Total / 31,536,000` to get the **Per-Second Rate**.
- **Visual Metaphor**: Choose a visual item that represents the scale.
  - *Example*: 1 fish icon = 100,000 tonnes of fish.
  - *Example*: 1 ice cube = 1,000 tonnes of glacial melt.
- **Visual Style**: Decide on a primary theme color (e.g., Overfishing = Silver/Grey, Ice Melt = Cyan/White).

### 🛑 STOP: Proposal Approval
Present a structured proposal to the user containing:
1. **Source**: Link to the data source.
2. **Metrics**: Annual total and calculated per-second rate.
3. **Visual Metaphor**: What will be drawn on the canvas and what it represents.
4. **The Math**: A clear breakdown of the calculation.

**Do not proceed to Phase 2 until the user has approved the proposal.**

## Phase 2: Implementation
Once approved, proceed with the technical implementation.

### 2. 🎨 Visualization Component (`src/components/[Theme]Visualisation.tsx`)
Create a client component using the standard pattern:

#### A. The Simulation (Canvas)
- Use `useRef<HTMLCanvasElement>` and `requestAnimationFrame`.
- Implement a particle system or growth simulation.
- **Flush Mechanism**: Ensure particles/objects are cleared or "recycled" if they exceed a certain count or height to prevent performance lag.
- **Responsiveness**: Use `resizeCanvas` listener to update `canvas.width/height`.

#### B. The UI Overlay
- **Hero Heading**: `Since you arrived, an equivalent of <Count> <Units> have been <Action>`.
  - Use `tabular-nums` class for the count to prevent flickering.
- **Context Paragraph**: `Annual global <Metric> is ~<Total>, equivalent to <Per-Second Rate> <Units> every second.`
- **The "Key Box"**: A rounded, semi-transparent box (`bg-slate-900/80 backdrop-blur-sm`) at the bottom showing:
  - An icon representation of the visual unit.
  - An equals sign.
  - The large per-second number.
  - A label like `[UNITS] EVERY SECOND`.

### 3. 📄 Landing Page Integration (`src/app/page.tsx`)
1. Import the component.
2. Wrap it in a `<section className="relative h-screen snap-start">`.
3. **Sequential Scrolling**:
   - Add a `<ScrollIndicator />` to the **previous** section.
   - Do NOT add a `<ScrollIndicator />` to the new section if it is the new final section.

### 4. ⚡ Action Hub Update (`src/app/action/page.tsx`)
1. **Link**: Add a new entry to `ACTIONS` array.
   - Pick a unique Tailwind border/hover color (e.g., `border-pink-500 hover:bg-pink-500/10`).
2. **Data Source**: Add the organization name and link to the data attribution paragraph.
3. **Math Breakdown**: Add a new calculation block in the `showCalculations` section:
   - Use a unique text color for the title (`text-pink-500`).
   - Clearly state: "Annual [Metric] is [X]. Dividing by [Seconds in Year] gives [Y] per second."

## 🧪 Validation Checklist
- [ ] **Snap Check**: Does the new section snap perfectly into view?
- [ ] **Performance**: Does the FPS remain stable after 60 seconds of simulation?
- [ ] **Mobile**: Is the text readable and the Canvas scaled on small screens?
- [ ] **Math**: Do the figures in the Visualization match the Calculation block in the Action Hub?
- [ ] **Navigation**: Is there a way to reach the next/previous section (Scroll Indicator/CTA)?
