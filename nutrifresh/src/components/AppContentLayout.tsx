"use client";

import React from "react";
import Navbar from "@/components/Navbar";

export default function AppContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-8 pb-24 md:pb-8">
        {children}
      </main>
    </>
  );
}
