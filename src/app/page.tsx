import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h1 className="text-4xl font-bold mb-8">
        1.43 Million Plastic Bottles
      </h1>
      <p className="text-xl mb-12">
        Produced every single second.
      </p>
      <div className="flex gap-4">
        <Link
          href="/action"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Take Action
        </Link>
      </div>
    </main>
  );
}
