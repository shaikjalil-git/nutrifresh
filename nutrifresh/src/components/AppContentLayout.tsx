"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import AuthGate from "@/components/AuthGate";
import OnboardingWizard from "@/components/OnboardingWizard";
import { Loader2, Sparkles } from "lucide-react";

export default function AppContentLayout({ children }: { children: React.ReactNode }) {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#090f12] text-foreground space-y-4">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-16 h-16 rounded-full border-t-2 border-primary animate-spin" />
          <Sparkles className="text-primary animate-pulse" size={24} />
        </div>
        <p className="text-xs uppercase font-black tracking-widest text-secondary animate-pulse">
          Synchronizing Ledger Credentials...
        </p>
      </div>
    );
  }

  if (!user) {
    return <AuthGate />;
  }

  // Render Setup Wizard for first-time logged in users
  if (!profile || !profile.setupComplete) {
    return <OnboardingWizard />;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-8 pb-24 md:pb-8">
        {children}
      </main>
    </>
  );
}
