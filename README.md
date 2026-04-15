# 🌊 Plastic Awareness MVP

**"1.43 million bottles every second."**

An environmental awareness experiment using Gemini CLI coding agent, that aims to transform abstract plastic pollution statistics into a visceral, real-time visual experience. This project aims to make the scale of global plastic production feel immediate and emotionally impactful, guiding users from awareness to meaningful action.

[Live Demo]([https://plastic.cavey.dev](https://plastic-production-never-stops.vercel.app/)) 

---

## 📸 The Concept

Most people understand that plastic pollution is a problem, but the numbers—billions of tonnes, trillions of items—are too large for the human brain to truly process. 

This website uses a **real-time accumulation simulation** to show exactly what "1.43 million bottles per second" looks like. As you sit on the homepage, the counter climbs and the physical pile grows, making the relentless nature of production impossible to ignore.

### 📊 The Data
- **Annual Production:** ~450 million tonnes of plastic.
- **The Metric:** Based on a standard 500ml bottle (10g), this equates to roughly **45 trillion bottles per year**.
- **The Flow:** ~1,427,000 bottles produced every single second.
- **Source:** [Our World in Data — Plastic Pollution](https://ourworldindata.org/plastic-pollution)

---

## 🛠️ Technical Stack

Built with a focus on performance, smooth animations, and zero-latency transitions.

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Visuals:** HTML5 Canvas + `requestAnimationFrame` for high-performance particle physics.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)

### Key Features
- **Deterministic Simulation:** The bottle counter and physics-based pile are synced to the user's arrival time, providing a consistent "real-time" feel.
- **Instant Navigation:** Using Next.js App Router for immediate client-side transitions between the visualisation and the Action Hub.
- **Mobile Optimized:** Fully responsive design with a "flush" mechanism to ensure the visualisation remains performant and readable on all devices.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm / yarn / pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/T-J-D-Cavey/climate_project_gemini_2.0.git
   cd climate_project_gemini_2.0
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📣 Take Action

The goal of this project isn't just to inform, but to move. The [Action Page](/action) provides direct links to:
- **Greenpeace UK** & **Friends of the Earth**
- **WWF** Conservation efforts
- **UK Parliament Petitions**
- **Ethical Consumer** guides for plastic-free living

---

## 📄 License

This project is open-source and available under the MIT License. Data remains the property of the cited sources.

*Created by [T.J.D. Cavey](https://github.com/T-J-D-Cavey)*
