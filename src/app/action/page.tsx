import Link from "next/link";

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
          <p className="text-xl text-slate-400 max-w-2xl">
            Individual choices matter, but collective action drives change. Choose a path below to help turn the tide on plastic pollution.
          </p>
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

        <footer className="mt-24 text-center text-slate-600">
          <p>
            Data provided by Our World in Data. 
            All links lead to external organisations committed to environmental action.
          </p>
        </footer>
      </div>
    </main>
  );
}
