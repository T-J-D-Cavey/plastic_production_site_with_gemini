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
  title: "Every Second Counts | Real-Time Climate Crisis Visualisation",
  description:
    "Watch plastic overproduction, deforestation, and carbon emissions accumulate in real time. Understand the true scale of the climate crisis — and find out what you can do about it.",
  keywords: [
    "plastic pollution",
    "deforestation",
    "carbon emissions",
    "climate change",
    "real-time visualisation",
    "environmental awareness",
    "sustainability",
    "climate crisis",
    "climate action",
  ],
  authors: [{ name: "T.J.D. Cavey" }],
  openGraph: {
    title: "Every Second Counts | Real-Time Climate Crisis Visualisation",
    description:
      "Plastic overproduction. Deforestation. Carbon emissions. Watch three of the world's biggest environmental crises unfold in real time — and take action.",
    url: "https://every-second-counts-climate.vercel.app",
    siteName: "Every Second Counts",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Every Second Counts | Real-Time Climate Crisis Visualisation",
    description:
      "Plastic overproduction. Deforestation. Carbon emissions. Watch three of the world's biggest environmental crises unfold in real time — and take action.",
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
