# 🌍 Every Second Counts — Climate Awareness

**"1.43 million bottles and 0.5 football pitches every second."**

An environmental awareness experiment using Gemini CLI coding agent, that aims to transform abstract climate statistics into a visceral, real-time visual experience. This project makes the scale of global plastic production and deforestation feel immediate and emotionally impactful, guiding users from awareness to meaningful action.

[Live Demo](https://every-second-counts-climate.vercel.app/) 

---

## 📸 The Concept

Most people understand that climate change and pollution are problems, but the numbers—billions of tonnes, millions of hectares—are too large for the human brain to truly process. 

This website uses **real-time accumulation simulations** to show the relentless pace of environmental destruction. As you scroll through the homepage, the counters climb and the physical impact grows, making the scale of production and loss impossible to ignore.

### 📊 The Data

#### 🥤 Plastic Production
- **Annual Production:** ~450 million tonnes of plastic.
- **The Metric:** Based on a standard 500ml bottle (10g), this equates to roughly **45 trillion bottles per year**.
- **The Flow:** ~1,427,000 bottles produced every single second.
- **Source:** [Our World in Data — Plastic Pollution](https://ourworldindata.org/plastic-pollution)

#### 🌲 Global Deforestation
- **Annual Loss:** ~10.9 million hectares of forest.
- **The Metric:** Based on the area of a standard football pitch (0.714ha), this equates to roughly **15.2 million pitches per year**.
- **The Flow:** ~0.5 football pitches (one every two seconds) lost every single second.
- **Source:** [FAO — Global Forest Resources Assessment 2025](https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows)

---

## 🛠️ Technical Stack

Built with a focus on performance, smooth animations, and zero-latency transitions.

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Visuals:** HTML5 Canvas + `requestAnimationFrame` for high-performance physics and grid animations.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)

### Key Features
- **Multi-Section Landing Page:** Smooth vertical scroll snapping between different environmental impact visualisations.
- **Deterministic Simulations:** All counters and visual piles are synced to the user's arrival time, providing a consistent "real-time" feel.
- **Instant Navigation:** Using Next.js App Router for immediate client-side transitions between the visualisations and the Action Hub.
- **Mobile Optimized:** Fully responsive design with optimized canvas rendering to ensure performance on all devices.

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
