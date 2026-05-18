"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import SurveyModal from "@/components/SurveyModal";
import FirebaseAuthErrorModal from "@/components/FirebaseAuthErrorModal";

export default function AppContentLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("theme-light");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const newTheme = customEvent.detail || "theme-light";
      setTheme(newTheme);
      document.documentElement.className = newTheme;
    };

    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("nutrifresh_theme") || "theme-light";
      const initial = stored === "theme-obsidian" || stored === "theme-royal" || stored === "theme-dark" 
        ? "theme-dark" 
        : "theme-light";
      setTheme(initial);
      document.documentElement.className = initial;
      localStorage.setItem("nutrifresh_theme", initial);
      
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
      {/* Dynamic top scroll progress bar */}
      <motion.div 
        style={{ scaleX }} 
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50" 
      />
      <Navbar />
      <SurveyModal />
      <FirebaseAuthErrorModal />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-8 pb-24 md:pb-8">
        {children}
      </main>
    </>
  );
}
