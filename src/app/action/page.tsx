"use client";

import Link from "next/link";
import { useState } from "react";

const ACTIONS = [
  {
    title: "Support Greenpeace UK",
    description: "Take action on plastic pollution and join the fight for a greener future.",
    url: "https://www.greenpeace.org.uk/take-action/",
    color: "border-green-500 hover:bg-green-500/10",
  },
  {
    title: "Friends of the Earth",
    description: "Join the campaign to end plastic pollution and protect our planet.",
    url: "https://friendsoftheearth.uk/take-action",
    color: "border-blue-500 hover:bg-blue-500/10",
  },
  {
    title: "The Woodland Trust",
    description: "Help plant trees and protect ancient woodland to absorb carbon and restore nature.",
    url: "https://www.woodlandtrust.org.uk/",
    color: "border-emerald-500 hover:bg-emerald-500/10",
  },
  {
    title: "Carbon Trust",
    description: "Advice and resources for individuals and businesses to reduce their carbon footprint.",
    url: "https://www.carbontrust.com/",
    color: "border-orange-500 hover:bg-orange-500/10",
  },
  {
    title: "The Climate Coalition",
    description: "The UK's largest group of people dedicated to action on the climate and nature crisis.",
    url: "https://www.theclimatecoalition.org/",
    color: "border-red-500 hover:bg-red-500/10",
  },
  {
    title: "Petition Parliament",
    description: "Sign petitions to influence government policy on plastic production and emissions.",
    url: "https://petition.parliament.uk/",
    color: "border-purple-500 hover:bg-purple-500/10",
  },
];

export default function Action() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "spread">("idle");
  const [showCalculations, setShowCalculations] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin);
    setCopyStatus("copied");
    
    // Show 'Link copied' for 1.5s, then the spread message
    setTimeout(() => {
      setCopyStatus("spread");
      // Show spread message for another 3s then reset
      setTimeout(() => setCopyStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12 lg:p-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <Link
            href="/"
            className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 mb-8 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Visualisation
          </Link>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Take <span className="text-blue-500">Action</span>
          </h1>
          <div className="space-y-4">
            <p className="text-xl text-slate-400 max-w-2xl">
              Individual choices matter, but collective action drives change. Choose a path below to help turn the tide on plastic, deforestation, and carbon emissions.
            </p>
            <p className="text-slate-500 italic">
              All links lead to external organisations committed to environmental action.
            </p>
          </div>
        </header>

        <div className="grid gap-6">
          {ACTIONS.map((action) => (
            <a
              key={action.title}
              href={action.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-6 rounded-2xl border-2 transition-all group ${action.color}`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold">{action.title}</h3>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </div>
              <p className="text-slate-400 text-lg">{action.description}</p>
            </a>
          ))}
        </div>

        <section className="mt-24 p-8 rounded-3xl bg-slate-900/50 border border-slate-800 text-center">
          <div className="space-y-6">
            <p className="text-slate-400">
              Data provided by{" "}
              <a 
                href="https://ourworldindata.org/plastic-pollution" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Our World in Data
              </a>,{" "}
              <a 
                href="https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                FAO
              </a>, and the{" "}
              <a 
                href="https://globalcarbonproject.org/carbonbudget/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Global Carbon Project
              </a>.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <button
                onClick={() => setShowCalculations(!showCalculations)}
                className={`px-4 py-2 rounded-full transition-colors ${showCalculations ? 'bg-blue-600/20 text-blue-400 border border-blue-500/50' : 'bg-slate-800 hover:bg-slate-700'}`}
              >
                {showCalculations ? "Hide Calculations" : "View Calculations"}
              </button>
              <a 
                href="https://github.com/T-J-D-Cavey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Visit Creator&apos;s GitHub
              </a>
              <button
                onClick={handleShare}
                className={`px-4 py-2 rounded-full transition-all active:scale-95 ${copyStatus !== 'idle' ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-500'}`}
              >
                {copyStatus === "idle" && "Share the link"}
                {copyStatus === "copied" && "Link copied"}
                {copyStatus === "spread" && "Send this link to your people and spread the word"}
              </button>
            </div>

            {showCalculations && (
              <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="p-6 bg-slate-950/50 rounded-2xl text-left border border-slate-800">
                  <h4 className="text-sm font-bold text-blue-500 uppercase tracking-wider mb-2">Plastic Production</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Annual global plastic production is approximately <strong>450 million tonnes</strong>. 
                    A standard 500ml plastic bottle weighs around <strong>10 grams</strong>. 
                    Dividing total plastic mass by bottle weight gives roughly <strong>45 trillion bottles per year</strong> — or about <strong>1,427,000 every second</strong>.
                  </p>
                </div>

                <div className="p-6 bg-slate-950/50 rounded-2xl text-left border border-slate-800">
                  <h4 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-2">Global Deforestation</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Annual global forest loss is approximately <strong>10.9 million hectares</strong>. 
                    With 31,536,000 seconds in a year, this results in <strong>0.3459 hectares</strong> lost every second. 
                    As a football pitch is roughly 0.714 hectares, this equates to <strong>0.5 pitches per second</strong> (one every two seconds).
                  </p>
                </div>

                <div className="p-6 bg-slate-950/50 rounded-2xl text-left border border-slate-800">
                  <h4 className="text-sm font-bold text-emerald-500 uppercase tracking-wider mb-2">Carbon Emissions</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Global annual CO₂ emissions are approximately <strong>37.4 billion tonnes</strong>. 
                    Dividing by 31,536,000 seconds per year gives approximately <strong>1,186 tonnes per second</strong>. 
                    One mature tree absorbs ~0.022 tonnes of CO₂/year, meaning it takes <strong>54,000 trees</strong> growing for a full year to absorb the emissions from just one second.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mt-12 mb-24 p-8 md:p-12 rounded-3xl bg-slate-900/30 border border-slate-800/50">
          <h2 className="text-3xl font-black mb-6">Context from the author</h2>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              This visualisation exists to make the sheer scale of the climate crisis impossible to ignore. We are facing a global emergency with irreversible impacts, yet it consistently slips out of the daily news cycle.
            </p>
            <p>
              However, recognising the scale of the problem is only the first step. We also need to be brutally honest about where the responsibility lies and how complex the solutions actually are.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-bold text-white mb-2">The Consumer Myth</h3>
              <p>
                For too long, the environmental narrative has focused on the choices of the end consumer. This is a distraction—a tactic actively encouraged by the fossil fuel industry to shift the blame away from themselves. The real impetus for change must fall on the biggest contributors: governments and large corporations. They have the power, the infrastructure, and the capital to actually turn the tide.
              </p>
            </div>

            <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-8">
              <p className="text-2xl font-medium text-slate-200 italic">
                &quot;We cannot expect companies to voluntarily prioritise societal good over shareholder returns. To fix the climate, we have to change the rules of the game.&quot;
              </p>
            </blockquote>

            <div className="pt-4">
              <h3 className="text-xl font-bold text-white mb-2">The Plastic vs. Forest Catch-22</h3>
              <p>
                The problems we face are deeply intertwined. For example, if we successfully move away from plastic, we will inevitably need more paper and cardboard, which puts immense pressure on our forests. We absolutely cannot log ancient woodlands and rainforests—which house complex ecosystems that took centuries to build—just to replace plastic packaging.
              </p>
              <p className="mt-4">
                Instead, government policy needs to aggressively fund the planting of &apos;working forests&apos; globally: trees planted specifically to be harvested for materials. To find the vast amount of space required for this without destroying natural habitats, we will have to phase out incredibly inefficient land uses, such as widespread meat farming.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-bold text-white mb-2">Taxation Drives Innovation</h3>
              <p>
                I am under no illusions about our current reliance on carbon. Fossil fuels are baked into our economy, and even the AI tools I used to help build this site carry a hefty carbon footprint. There will likely always be niche, unavoidable uses for fossil fuels.
              </p>
              <p className="mt-4">
                But that is no excuse to maintain the status quo when better, often cheaper alternatives are available. Because corporations are essentially legally bound to serve their shareholders&apos; bottom line, we have to make pollution expensive.
              </p>
              <p className="mt-4">
                Implementing strict carbon and plastic taxes forces companies to care. If they don&apos;t innovate to remove emissions and plastic from their supply chains, their products become too expensive to compete. The companies that innovate best win the market share, the consumer still gets a great product, and society wins because we finally halt the overproduction of harmful waste.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
