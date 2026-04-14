import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plastic Pollution Visualisation | 1.43 Million Bottles Every Second",
  description: "Every second, more plastic is produced. It doesn’t truly decompose but breaks up into smaller and smaller pieces called microplastics, which can persist in the environment almost indefinitely. It never stops accumulating.",
  keywords: ["plastic pollution", "climate change", "sustainability", "environmental awareness", "visualisation"],
  authors: [{ name: "T.J.D. Cavey" }],
  openGraph: {
    title: "Plastic Pollution Visualisation | 1.43 Million Bottles Every Second",
    description: "Visualising the relentless scale of global plastic production in real-time.",
    url: "https://plastic.cavey.dev", // Placeholder or actual URL if known
    siteName: "Plastic Awareness MVP",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plastic Pollution Visualisation | 1.43 Million Bottles Every Second",
    description: "Visualising the relentless scale of global plastic production in real-time.",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
