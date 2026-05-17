"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth, UserProfileData } from "@/context/AuthContext";
import { 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  Loader2, 
  Check, 
  Scale, 
  Ruler, 
  Flame, 
  ShieldAlert,
  Bot
} from "lucide-react";

interface WizardFormInputs {
  firstName: string;
  lastName: string;
  weight: number;
  height: number;
  dietaryPreferences: string[];
  allergies: string[];
}

const dietOptions = [
  "Vegetarian", "Vegan", "Keto", "Gluten-Free", "Paleo", "Mediterranean"
];

const commonAllergies = [
  "Peanuts", "Tree Nuts", "Milk", "Eggs", "Wheat", "Soy", "Fish", "Shellfish"
];

export default function OnboardingWizard() {
  const { user, saveProfile } = useAuth();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit: onSubmitWrapper, watch, setValue, formState: { errors } } = useForm<WizardFormInputs>({
    defaultValues: {
      firstName: "",
      lastName: "",
      weight: 70,
      height: 175,
      dietaryPreferences: [],
      allergies: []
    }
  });

  // Real-time watchers for dynamic calculation screens
  const watchedName = watch("firstName");
  const watchedWeight = watch("weight");
  const watchedHeight = watch("height");
  const watchedDiets = watch("dietaryPreferences") || [];
  const watchedAllergies = watch("allergies") || [];

  // Compute recommended baseline caloric intake dynamically in real-time
  const computedCalories = Math.round(
    10 * Number(watchedWeight || 70) + 6.25 * Number(watchedHeight || 175) - 5 * 25 + 5
  );

  const handleNextStep = () => {
    if (step < 3) {
      setStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const toggleDiet = (diet: string) => {
    const current = watchedDiets;
    if (current.includes(diet)) {
      setValue("dietaryPreferences", current.filter(d => d !== diet));
    } else {
      setValue("dietaryPreferences", [...current, diet]);
    }
  };

  const toggleAllergy = (allergy: string) => {
    const current = watchedAllergies;
    if (current.includes(allergy)) {
      setValue("allergies", current.filter(a => a !== allergy));
    } else {
      setValue("allergies", [...current, allergy]);
    }
  };

  const handleSubmit = onSubmitWrapper(async (data) => {
    setLoading(true);
    try {
      // Formulate final structure for Firestore profile synchronization
      const finalProfile: Partial<UserProfileData> = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: user?.email || "",
        weight: Number(data.weight),
        height: Number(data.height),
        kcalGoal: computedCalories,
        dietaryPreferences: data.dietaryPreferences,
        allergies: data.allergies,
        setupComplete: true
      };

      await saveProfile(finalProfile);
    } catch (err) {
      console.error("Failed to commit profile ledger setup: ", err);
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#090f12] text-foreground p-4 overflow-y-auto">
      
      {/* Background decorations */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Wizard Form Frame */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-[#10191e]/90 border border-border/40 rounded-lg p-6 md:p-8 backdrop-blur-md shadow-xl flex flex-col justify-between min-h-[520px]"
      >
        {/* Progress Bar & Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-foreground/80">
              <Sparkles size={20} className="fill-current" />
              <span className="text-sm font-black uppercase tracking-widest">Setup Wizard</span>
            </div>
            <span className="text-xs font-black text-secondary">Step {step} of 3</span>
          </div>

          <div className="h-1.5 w-full bg-[#0c1316] rounded-full overflow-hidden border border-border/20">
            <motion.div 
              className="h-full bg-primary" 
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            />
          </div>
        </div>

        {/* Dynamic Multi-Step Pages */}
        <div className="my-8 flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Basic Identity & Biometrics */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="text-center md:text-left space-y-1.5">
                  <h2 className="text-xl font-black">Configure Personal Specs</h2>
                  <p className="text-xs text-secondary font-semibold">Inputs will be used to calibrate your ideal calorie levels and macro margins.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-secondary">First Name</label>
                    <input 
                      type="text"
                      {...register("firstName", { required: true })}
                      placeholder="e.g. Jane"
                      className="w-full bg-[#0c1316] border border-border/50 px-4 py-3 rounded-lg outline-none focus:border-primary transition-all font-semibold text-sm"
                    />
                    {errors.firstName && <span className="text-[10px] text-red-400 font-bold flex items-center gap-1"><ShieldAlert size={10}/> First Name is required</span>}
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-secondary">Last Name</label>
                    <input 
                      type="text"
                      {...register("lastName", { required: true })}
                      placeholder="e.g. Doe"
                      className="w-full bg-[#0c1316] border border-border/50 px-4 py-3 rounded-lg outline-none focus:border-primary transition-all font-semibold text-sm"
                    />
                    {errors.lastName && <span className="text-[10px] text-red-400 font-bold flex items-center gap-1"><ShieldAlert size={10}/> Last Name is required</span>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-secondary flex justify-between">
                      <span>Weight (kg)</span>
                      <span className="text-primary font-black">{watchedWeight} kg</span>
                    </label>
                    <div className="relative flex items-center">
                      <Scale size={16} className="absolute left-3.5 text-secondary" />
                      <input 
                        type="number"
                        {...register("weight", { required: true, min: 30, max: 250 })}
                        className="w-full bg-[#0c1316] border border-border/50 pl-11 pr-4 py-3 rounded-lg outline-none focus:border-primary transition-all font-semibold text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-secondary flex justify-between">
                      <span>Height (cm)</span>
                      <span className="text-primary font-black">{watchedHeight} cm</span>
                    </label>
                    <div className="relative flex items-center">
                      <Ruler size={16} className="absolute left-3.5 text-secondary" />
                      <input 
                        type="number"
                        {...register("height", { required: true, min: 100, max: 250 })}
                        className="w-full bg-[#0c1316] border border-border/50 pl-11 pr-4 py-3 rounded-lg outline-none focus:border-primary transition-all font-semibold text-sm"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Dietary Alignment & Exclusions */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="text-center md:text-left space-y-1.5">
                  <h2 className="text-xl font-black">Preferences & Safety</h2>
                  <p className="text-xs text-secondary font-semibold">Align recommended recipes to your diets and safely block allergens.</p>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-secondary">Dietary Structures (Select all that apply)</label>
                    <div className="flex flex-wrap gap-2">
                      {dietOptions.map(diet => {
                        const active = watchedDiets.includes(diet);
                        return (
                          <button
                            type="button"
                            key={diet}
                            onClick={() => toggleDiet(diet)}
                            className={`px-4 py-2.5 rounded-lg border font-bold text-xs transition-all cursor-pointer ${
                              active 
                                ? "bg-primary border-primary text-white" 
                                : "bg-[#0c1316] border-border/50 text-secondary hover:text-foreground"
                            }`}
                          >
                            {diet}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-secondary">Allergies (Block from recommendations)</label>
                    <div className="flex flex-wrap gap-2">
                      {commonAllergies.map(allergy => {
                        const active = watchedAllergies.includes(allergy);
                        return (
                          <button
                            type="button"
                            key={allergy}
                            onClick={() => toggleAllergy(allergy)}
                            className={`px-4 py-2.5 rounded-lg border font-bold text-xs transition-all cursor-pointer ${
                              active 
                                ? "bg-red-600/90 border-red-600/90 text-white" 
                                : "bg-[#0c1316] border-border/50 text-secondary hover:text-foreground"
                            }`}
                          >
                            {allergy}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Calorie & Macro Target Computations */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="text-center md:text-left space-y-1.5">
                  <h2 className="text-xl font-black">Caloric Ledger Calibration</h2>
                  <p className="text-xs text-secondary font-semibold">Your custom daily balance target computed via metabolic formulas.</p>
                </div>

                <div className="bg-[#0c1316] border border-border/40 p-5 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 flex-shrink-0 text-center md:text-left">
                    <span className="text-[9px] uppercase tracking-widest font-black text-primary bg-primary/10 px-2 py-0.5 rounded">
                      Metabolic Target
                    </span>
                    <h3 className="text-2xl font-black tracking-tight flex items-center justify-center md:justify-start gap-1">
                      <Flame className="text-accent" size={20} />
                      <span>{computedCalories} kcal / day</span>
                    </h3>
                    <p className="text-[10px] text-secondary font-semibold">Tailored specifically to {watchedName || "your profile"}.</p>
                  </div>

                  <div className="text-center md:text-right text-xs font-bold text-secondary space-y-1 leading-relaxed">
                    <p>🎯 Targets automatically compiled.</p>
                    <p>🍳 Excluded allergen filter active.</p>
                    <p>📊 Nutrition charts ready in your dashboard.</p>
                  </div>
                </div>

                <div className="bg-[#10191e] border border-border/30 p-3.5 rounded-lg flex items-center gap-3 text-xs font-semibold text-foreground/80 leading-relaxed">
                  <Bot size={24} className="text-primary flex-shrink-0" />
                  <span>Your profile setup is complete! Press &quot;Begin Gourmet Journey&quot; below to launch your workspace.</span>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Wizard Footer Navigation */}
        <div className="pt-4 border-t border-border/30 flex items-center justify-between">
          <button
            type="button"
            onClick={handlePrevStep}
            disabled={step === 1 || loading}
            className={`px-4 py-2.5 rounded-md text-xs font-black flex items-center space-x-1 transition-all ${
              step === 1 || loading 
                ? "text-secondary/40 cursor-not-allowed" 
                : "text-secondary hover:text-foreground cursor-pointer"
            }`}
          >
            <ChevronLeft size={16} />
            <span>Back</span>
          </button>

          {step < 3 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="px-5 py-2.5 bg-[#0c1316] hover:bg-[#0c1316]/85 border border-border/40 text-foreground rounded-md font-bold text-xs flex items-center space-x-1 transition-all cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          ) : (
            <button
              type="button"
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
