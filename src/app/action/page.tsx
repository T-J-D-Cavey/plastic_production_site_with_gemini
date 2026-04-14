import Link from "next/link";

export default function Action() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h1 className="text-4xl font-bold mb-8">
        Take Action
      </h1>
      <p className="text-xl mb-12">
        Learn how you can help reduce plastic pollution.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="text-blue-600 font-semibold hover:underline"
        >
          &larr; Back to Visualisation
        </Link>
      </div>
    </main>
  );
}
