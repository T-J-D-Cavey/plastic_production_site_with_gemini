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
    title: "WWF Get Involved",
    description: "Learn how you can help protect wildlife and the natural world from plastic.",
    url: "https://www.wwf.org.uk/get-involved",
    color: "border-teal-500 hover:bg-teal-500/10",
  },
  {
    title: "Petition Parliament",
    description: "Sign petitions to influence government policy on plastic production and waste.",
    url: "https://petition.parliament.uk/",
    color: "border-purple-500 hover:bg-purple-500/10",
  },
  {
    title: "Ethical Consumer",
    description: "Find plastic-free alternatives and make informed choices about your purchases.",
    url: "https://www.ethicalconsumer.org/",
    color: "border-amber-500 hover:bg-amber-500/10",
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
              Individual choices matter, but collective action drives change. Choose a path below to help turn the tide on plastic pollution.
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
                href="https://github.com" 
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
              <div className="mt-8 p-6 bg-slate-950/50 rounded-2xl text-left border border-slate-800 animate-in fade-in slide-in-from-top-4 duration-300">
                <p className="text-slate-300 leading-relaxed">
                  Annual global plastic production is approximately <strong>450 million tonnes</strong>. 
                  A standard 500ml plastic bottle weighs around <strong>10 grams</strong>. 
                  Dividing total plastic mass by bottle weight gives roughly <strong>45 trillion bottles per year</strong> — or about <strong>1,427,000 every second</strong>.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
