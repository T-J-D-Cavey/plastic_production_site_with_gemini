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
          <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
            <p>
              [Placeholder text: The author will provide copy here outlining their thoughts on the site and the problems it attempts to communicate.]
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
