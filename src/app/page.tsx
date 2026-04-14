import Link from "next/link";
import BottleVisualisation from "@/components/BottleVisualisation";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <div className="w-full">
        <BottleVisualisation />
      </div>

      <div className="absolute bottom-10 z-20 flex flex-col items-center gap-6 pb-8">
        <Link
          href="/action"
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-blue-500/20"
        >
          Do Something About It
        </Link>
        <div className="text-slate-500 animate-bounce">
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
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </div>
    </main>
  );
}
