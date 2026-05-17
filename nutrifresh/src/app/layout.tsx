import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NutriFresh - Personalized Dietary App",
  description: "AI-generated personalized recipes and dietary tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-background text-foreground">

        <Navbar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-8 pb-24 md:pb-8">
          {children}
        </main>
      </body>
    </html>

  );
}


