---
title: Technical Architecture
description: Overview of the tech stack, component structure, and deployment strategy.
relevance: Essential for understanding the codebase organization and development workflow.
---
# Technical Architecture


## Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (auto-deploy via GitHub)


## Project Type
Single Page Application — no backend, no database, no API calls. All data is hardcoded as precomputed per-second rates derived from publicly available annual statistics.


## Routing
Use Next.js App Router with `<Link>` for client-side navigation. The Action Hub page must load instantly with no network request — treat it as a client-side view transition.


## Visualisations
- Built in React using `useEffect` + `requestAnimationFrame` or `setInterval`
- Visuals driven by precomputed per-second rates
- All animations loop seamlessly
- Each visual includes a CTA button linking to the Action Hub


## Styling Rules
- Tailwind CSS only — no external UI libraries
- Mobile-responsive at all breakpoints
- You have freedom to choose a design style and appearance that aligns with the project_specifications.MD concepts and aims


## Testing
- Not necessary for MVP
