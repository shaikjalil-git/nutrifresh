"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  Loader2, 
  Utensils, 
  Scale, 
  ShieldAlert, 
  Check, 
  Search,
  X 
} from "lucide-react";

export default function OnboardingWizard() {
  const { user, saveProfile } = useAuth();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Profile data state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(user?.email || "");
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);
  const [kcalGoal, setKcalGoal] = useState(2000);
  
  const [dietaryPreferences, setDietaryPreferences] = useState<string[]>([]);
  const [allergies, setAllergies] = useState<string[]>([]);
  const [allergyInput, setAllergyInput] = useState("");

  const dietOptions = [
    "Vegetarian", "Vegan", "Keto", "Gluten-Free", "Paleo", "Mediterranean"
  ];

  const handleToggleDiet = (diet: string) => {
    setDietaryPreferences(prev => 
      prev.includes(diet) ? prev.filter(d => d !== diet) : [...prev, diet]
    );
  };

  const handleAddAllergy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!allergyInput.trim()) return;
    const clean = allergyInput.trim();
    if (!allergies.includes(clean)) {
      setAllergies(prev => [...prev, clean]);
    }
    setAllergyInput("");
  };

  const handleRemoveAllergy = (item: string) => {
    setAllergies(prev => prev.filter(a => a !== item));
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!firstName.trim() || !lastName.trim()) {
        setError("Please enter your first and last name to configure your card.");
        return;
      }
      setError(null);
    }
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setError(null);
    setStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      await saveProfile({
        firstName,
        lastName,
        email,
        weight,
        height,
        kcalGoal,
        dietaryPreferences,
        allergies,
        setupComplete: true
      });
    } catch (err: any) {
      setError(err?.message || "Failed to finalize profile ledger. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-[#090f12] text-foreground p-4 overflow-y-auto select-none">
      
      {/* Decorative background orbs (toned down) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[130px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-[#10191e]/90 border border-border/40 rounded-lg p-6 md:p-8 backdrop-blur-md shadow-lg flex flex-col justify-between min-h-[480px]"
      >
        {/* Wizard Progress Header */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs font-black uppercase text-secondary tracking-widest">
            <span className="flex items-center space-x-1.5 text-foreground/80">
              <Sparkles size={14} className="animate-spin" />
              <span>Personalizing NutriFresh</span>
            </span>
            <span>Step {step} of 3</span>
          </div>

          {/* Glowing slider bar */}
          <div className="h-1.5 w-full bg-[#0c1316] rounded-full overflow-hidden border border-border/20">
            <motion.div 
              className="h-full bg-primary rounded-full"
              initial={{ width: "33%" }}
              animate={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* Dynamic Form Contents */}
        <div className="flex-1 my-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="space-y-1">
                  <h2 className="text-xl font-black flex items-center space-x-2">
                    <Scale className="text-foreground/80" size={18} />
                    <span>Identity & Target Biometrics</span>
                  </h2>
                  <p className="text-xs text-secondary font-semibold">Let&apos;s calculate your daily caloric limits based on your stats.</p>
                </div>

                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-md text-xs font-bold">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-secondary">First Name</label>
                    <input 
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="e.g. John"
                      className="w-full bg-[#0c1316] border border-border/50 px-4 py-3 rounded-lg outline-none focus:border-primary transition-all font-semibold text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-secondary">Last Name</label>
                    <input 
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="e.g. Smith"
                      className="w-full bg-[#0c1316] border border-border/50 px-4 py-3 rounded-lg outline-none focus:border-primary transition-all font-semibold text-sm"
                    />
                  </div>
                  <div className="col-span-2 space-y-1">
                    <label className="text-[10px] font-black uppercase text-secondary">Email Ledger (optional)</label>
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. john.smith@gmail.com"
                      className="w-full bg-[#0c1316] border border-border/50 px-4 py-3 rounded-lg outline-none focus:border-primary transition-all font-semibold text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-secondary">Weight (kg)</label>
                    <input 
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      className="w-full bg-[#0c1316] border border-border/50 px-4 py-3 rounded-lg outline-none focus:border-primary transition-all font-semibold text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-secondary">Height (cm)</label>
                    <input 
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full bg-[#0c1316] border border-border/50 px-4 py-3 rounded-lg outline-none focus:border-primary transition-all font-semibold text-sm"
                    />
                  </div>
                  <div className="col-span-2 space-y-1">
                    <label className="text-[10px] font-black uppercase text-secondary">Target Daily Calories (kcal)</label>
                    <input 
                      type="number"
                      value={kcalGoal}
                      onChange={(e) => setKcalGoal(Number(e.target.value))}
                      className="w-full bg-[#0c1316] border border-border/50 px-4 py-3.5 rounded-lg outline-none focus:border-primary transition-all font-black text-sm text-primary"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="space-y-1">
                  <h2 className="text-xl font-black flex items-center space-x-2">
                    <Utensils className="text-foreground/80" size={18} />
                    <span>Select Dietary Preferences</span>
                  </h2>
                  <p className="text-xs text-secondary font-semibold">Align your custom feed options. Select all that apply.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {dietOptions.map((diet) => {
                    const isSelected = dietaryPreferences.includes(diet);
                    return (
                      <button
                        key={diet}
                        onClick={() => handleToggleDiet(diet)}
                        className={`flex items-center space-x-3 p-4 rounded-lg border transition-all cursor-pointer text-left ${
                          isSelected
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border/50 bg-[#0c1316] hover:border-primary/40"
                        }`}
                      >
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                          isSelected ? "bg-primary border-primary" : "border-border/60"
                        }`}>
                          {isSelected && <Check size={10} className="text-white" />}
                        </div>
                        <span className="font-extrabold text-xs">{diet}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="space-y-1">
                  <h2 className="text-xl font-black flex items-center space-x-2">
                    <ShieldAlert className="text-foreground/80" size={18} />
                    <span>Allergies & Exclusions</span>
                  </h2>
                  <p className="text-xs text-secondary font-semibold">Keep things safe. We will filter out elements containing these ingredients.</p>
                </div>

                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-md text-xs font-bold">
                    {error}
                  </div>
                )}

                {/* Exclusions Tags */}
                <div className="flex flex-wrap gap-2 min-h-[40px] bg-[#0c1316] p-3 rounded-lg border border-border/30">
                  {allergies.length === 0 ? (
                    <span className="text-[11px] text-secondary font-semibold italic">No allergies added yet. Safe to eat everything!</span>
                  ) : (
                    allergies.map((allergy) => (
                      <div 
                        key={allergy}
                        className="flex items-center space-x-1.5 px-3 py-1 bg-primary/5 text-primary border border-primary/20 rounded-md text-xs font-bold"
                      >
                        <span>{allergy}</span>
                        <button 
                          type="button" 
                          onClick={() => handleRemoveAllergy(allergy)}
                          className="hover:text-rose-500 cursor-pointer"
                        >
                          <X size={10} />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                <form onSubmit={handleAddAllergy} className="relative flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={16} />
                    <input 
                      type="text" 
                      value={allergyInput}
                      onChange={(e) => setAllergyInput(e.target.value)}
                      placeholder="Add an ingredient to exclude (e.g. Peanuts, Milk)..."
                      className="w-full bg-[#0c1316] border border-border/50 pl-11 pr-4 py-3 rounded-lg outline-none focus:border-primary transition-all font-semibold text-xs"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="px-4 py-3 bg-primary text-white rounded-lg font-bold text-xs hover:bg-primary/95 cursor-pointer"
                  >
                    Exclude
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Wizard Footer Controls */}
        <div className="pt-5 border-t border-border/30 flex items-center justify-between">
          <button
            onClick={handlePrevStep}
            disabled={step === 1 || loading}
            className={`px-4 py-2.5 rounded-md font-bold text-xs flex items-center space-x-1 transition-all cursor-pointer ${
              step === 1 ? "opacity-35 cursor-not-allowed" : "text-secondary hover:text-foreground"
            }`}
          >
            <ChevronLeft size={16} />
            <span>Back</span>
          </button>

          {step < 3 ? (
            <button
              onClick={handleNextStep}
              className="px-5 py-2.5 bg-[#0c1316] hover:bg-[#0c1316]/85 border border-border/40 text-foreground rounded-md font-bold text-xs flex items-center space-x-1 transition-all cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md font-black text-xs flex items-center space-x-2 transition-all cursor-pointer shadow-sm hover:scale-[1.01]"
            >
              {loading ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <Check size={14} />
              )}
              <span>Begin Gourmet Journey</span>
            </button>
          )}
        </div>

      </motion.div>
    </div>
  );
}
