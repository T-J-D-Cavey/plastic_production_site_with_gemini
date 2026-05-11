"use client";

import Link from "next/link";
import { useState } from "react";

const ACTIONS = [
  {
    title: "Petition Parliament",
    description: "Sign petitions to influence government policy and regulations.",
    url: "https://petition.parliament.uk/",
    color: "border-purple-500 hover:bg-purple-500/10",
  },
  {
    title: "The Climate Coalition",
    description: "Together for people, climate and nature",
    url: "https://www.theclimatecoalition.org/",
    color: "border-red-500 hover:bg-red-500/10",
  },
  {
    title: "Greenpeace UK",
    description: "Together we can take on the world’s worst polluters and solve its biggest problems.",
    url: "https://www.greenpeace.org.uk/take-action/",
    color: "border-green-500 hover:bg-green-500/10",
  },
  {
    title: "Friends of the Earth",
    description: "Make a difference for people and planet",
    url: "https://friendsoftheearth.uk/take-action",
    color: "border-blue-500 hover:bg-blue-500/10",
  },
  {
    title: "The Woodland Trust",
    description: "Our woods offer us so much. And with your support, we can ensure they’re always there, free for everyone to enjoy.",
    url: "https://www.woodlandtrust.org.uk/support-us/give/donations/",
    color: "border-emerald-500 hover:bg-emerald-500/10",
  },
  {
    title: "Carbon Trust",
    description: "We partner with businesses, governments and financial institutions worldwide to accelerate their journeys to Net Zero.",
    url: "https://www.carbontrust.com/",
    color: "border-orange-500 hover:bg-orange-500/10",
  },
  {
    title: "Viva! - The Charity for Animals",
    description: "Campaigning for a vegan world to end animal suffering and protect the planet.",
    url: "https://viva.org.uk/",
    color: "border-red-600 hover:bg-red-600/10",
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
              Individual choices matter, but collective action drives change. See the list below for organisations and initiatives that can help turn the tide.
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
              </a> (plastic pollution),{" "}
              <a 
                href="https://ourworldindata.org/animal-welfare" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Our World in Data
              </a> (animal welfare),{" "}
              <a 
                href="https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                FAO
              </a> (deforestation), and the{" "}
              <a 
                href="https://globalcarbonbudget.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Global Carbon Project
              </a> (carbon emissions).
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
                Author details
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

                <div className="p-6 bg-slate-950/50 rounded-2xl text-left border border-slate-800">
                  <h4 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Animal Consumption</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Annual global land animal slaughter is approximately <strong>83 billion</strong>. 
                    Dividing by 31,536,000 seconds in a year results in approximately <strong>2,632 animals</strong> slaughtered every second.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mt-12 mb-24 p-8 md:p-12 rounded-3xl bg-slate-900/30 border border-slate-800/50">
          <h2 className="text-3xl font-black mb-6">A note from the author</h2>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              I made this simple site with the aim of helping people to appreciate the scale and rapid rate of destruction that is taking place every second of every day. 
              We really are facing a global emergency with seemingly irreversible impacts, yet it consistently slips out of the daily news cycle.
            </p>
            <p>
              I acknowledge that the issues covered here are complex and an obvious, easy solution without tradeoffs isn&apos;t realistic. 
               As an individual it&apos;s easier to distract ourselves with daily life, which is difficult enough to manage. 
               Therein lies the first problem. I don&apos;t think it should be up to us as individuals to tackle this.  
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-bold text-white mb-2">The Consumer Myth</h3>
              <p>
                For too long, the environmental narrative has focused on the choices of the end consumer, no doubt a tactic encouraged by companies and media moguls who stand to benefit from the status quo.  
                 The real impetus for change must lie with the biggest contributors: governments and business. They have the power, the infrastructure, and the capital to actually turn the tide.
              </p>
            </div>

            <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-8">
              <p className="text-2xl font-medium text-slate-200 italic">
                &quot;We shouldn&apos;t be surprised when companies don&apos;t voluntarily prioritise societal good over shareholder returns. To fix the problems we face, we have to change the rules of the game.&quot;
              </p>
            </blockquote>

            <div className="pt-4">
              <h3 className="text-xl font-bold text-white mb-2">Regulations help to solve our climate catch 22s</h3>
              <p>
                The problems we face are deeply intertwined but I believe government policy is our best chance of finding a fix. 
                 An example of the complexity is reducing plastic production. 
                 If we find a way to produce less plastic, we will likely increase demand for wood based materials, driving deforestation.
                 We absolutely shouldn&apos;t log ancient woodlands and rainforests, destroying complex ecosystems that took centuries to emerge, just to reduce plastic usage.
              </p>
              <p className="mt-4">
                Instead, an example of a government policy could be to aggressively fund the planting of &apos;working forests&apos; globally: trees planted specifically to be harvested for materials. 
                 To find the vast amount of space required for this without destroying natural habitats, another policy could be encourage plant based agriculture and phase out incredibly inefficient land uses, such as widespread meat farming.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-bold text-white mb-2">Taxation Drives Innovation</h3>
              <p>
                I am under no illusions about our current reliance on carbon. Fossil fuels are baked into our economy, and even the AI tools I used to help build this site carry a hefty carbon footprint. 
                There will likely always be niche, unavoidable uses for fossil fuels.
              </p>
              <p className="mt-4">
                But that is no excuse to maintain the status quo when better, often cheaper alternatives are available. 
                Because corporations are essentially legally bound to serve their shareholders&apos; interests, we have to make pollution expensive.
              </p>
              <p className="mt-4">
                Implementing strict carbon and plastic taxes forces companies to care. If they don&apos;t innovate to remove emissions and plastic from their supply chains, their products become too expensive to compete. 
                The companies that innovate best win the market share, the consumer still gets a great product, and society and the planet benefit.
              </p>
            </div>
              <div className="pt-4">
              <h3 className="text-xl font-bold text-white mb-2">Just my flawed ideas</h3>
              <p className="mt-4">
                My thoughts above are probably wrong in many ways, I&apos;m not qualified enough to find the solutions. But I do believe two things to be true: 1. without government regulations we won&apos;t see the change we need to see. 2. Time is running out. 
                Use your vote, use petitions and join an organisation fighting for change. 
              </p>
              <p className="mt-4">
                Thanks for visiting.  
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
