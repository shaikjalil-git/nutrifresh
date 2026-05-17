"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function AppContentLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("theme-cream");

  useEffect(() => {
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const newTheme = customEvent.detail || "theme-cream";
      setTheme(newTheme);
      document.documentElement.className = newTheme;
    };

    if (typeof window !== "undefined") {
      const initial = localStorage.getItem("nutrifresh_theme") || "theme-cream";
      setTheme(initial);
      document.documentElement.className = initial;
      
      window.addEventListener("themechange", handleThemeChange);
    }
    
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("themechange", handleThemeChange);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-8 pb-24 md:pb-8">
        {children}
      </main>
    </>
  );
}
