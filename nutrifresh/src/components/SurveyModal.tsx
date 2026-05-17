"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { Check, Sparkles, User, Utensils, X } from "lucide-react";

export default function SurveyModal() {
  const { user, profile, saveProfile } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedDiets, setSelectedDiets] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  // Monitor login status to trigger the survey
  useEffect(() => {
    if (user) {
      const surveyDone = localStorage.getItem("nutrifresh_survey_completed");
      if (!surveyDone) {
        // Pre-fill name from Google account if available
        if (user.displayName) {
          const parts = user.displayName.split(" ");
          setFirstName(parts[0] || "");
          setLastName(parts.slice(1).join(" ") || "");
        } else if (profile) {
          setFirstName(profile.firstName === "UNKNOWN" ? "" : profile.firstName);
          setLastName(profile.lastName || "");
        }

        if (profile) {
          setSelectedDiets(profile.dietaryPreferences || []);
        }

        // Open survey modal with a tiny delay for excellent UX feel
        const timer = setTimeout(() => setIsOpen(true), 800);
        return () => clearTimeout(timer);
      }
    } else {
      setIsOpen(false);
    }
  }, [user, profile]);

  const dietOptions = [
    { id: "Vegan", label: "Vegan 🌱" },
    { id: "Non-Vegan", label: "Non-Vegan 🥩" },
    { id: "Keto", label: "Keto 🥑" },
    { id: "Vegetarian", label: "Vegetarian 🥦" },
    { id: "Gluten-Free", label: "Gluten-Free 🌾" },
    { id: "High-Protein", label: "High-Protein 🍗" }
  ];

  const handleToggleDiet = (dietId: string) => {
    setSelectedDiets(prev => {
      // Non-Vegan and Vegan/Vegetarian are mutually exclusive for consistency
      if (dietId === "Non-Vegan") {
        return prev.includes(dietId) 
          ? prev.filter(d => d !== dietId) 
          : [...prev.filter(d => d !== "Vegan" && d !== "Vegetarian"), dietId];
      }
      if (dietId === "Vegan" || dietId === "Vegetarian") {
        return prev.includes(dietId) 
          ? prev.filter(d => d !== dietId) 
          : [...prev.filter(d => d !== "Non-Vegan"), dietId];
      }
      return prev.includes(dietId) ? prev.filter(d => d !== dietId) : [...prev, dietId];
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await saveProfile({
        firstName: firstName.trim() || "UNKNOWN",
        lastName: lastName.trim(),
        dietaryPreferences: selectedDiets
      });
      localStorage.setItem("nutrifresh_survey_completed", "true");
      setIsOpen(false);
    } catch (err) {
      console.error("Error saving survey data: ", err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleClose = () => {
    localStorage.setItem("nutrifresh_survey_completed", "true");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Glass Overlay Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Survey Card Deck */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-card border border-border/80 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 overflow-hidden z-10"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span className="text-[10px] bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full font-black uppercase tracking-wider flex items-center w-fit gap-1.5">
                  <Sparkles size={10} className="animate-pulse" />
                  <span>Personalize Feed</span>
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-foreground mt-2">Welcome to NutriFresh!</h2>
                <p className="text-xs text-secondary font-medium leading-relaxed">
                  Help us calibrate your meal goals and recipe suggestions by answering two quick questions.
                </p>
              </div>
              <button 
                onClick={handleClose}
                className="p-1.5 rounded-full hover:bg-background text-secondary hover:text-foreground transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-5">
              
              {/* Question 1: Name */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-wider text-secondary flex items-center gap-1.5">
                  <User size={12} />
                  <span>What should we call you?</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full bg-background border border-border/60 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-semibold text-xs sm:text-sm"
                  />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name (Optional)"
                    className="w-full bg-background border border-border/60 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-semibold text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Question 2: Dietary Preferences */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-wider text-secondary flex items-center gap-1.5">
                  <Utensils size={12} />
                  <span>Select your dietary boundaries (Multiple select)</span>
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {dietOptions.map((opt) => {
                    const isSelected = selectedDiets.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleToggleDiet(opt.id)}
                        className={`flex items-center justify-between p-3.5 rounded-xl border font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                          isSelected
                            ? "bg-primary/5 border-primary text-primary"
                            : "bg-background border-border/60 text-foreground hover:border-primary/40"
                        }`}
                      >
                        <span>{opt.label}</span>
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all flex-shrink-0 ${
                          isSelected ? "bg-primary border-primary" : "border-border/60 bg-card"
                        }`}>
                          {isSelected && <Check size={10} className="text-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Actions Panel */}
            <div className="flex items-center space-x-3 pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 py-3 border border-border/60 rounded-xl font-bold text-xs hover:bg-background transition-all text-secondary hover:text-foreground cursor-pointer"
              >
                Skip for Now
              </button>
              <button
                type="button"
                onClick={handleSave}
                disabled={isSaving}
                className="flex-1 py-3 bg-primary text-white rounded-xl font-black text-xs hover:bg-primary/95 transition-all shadow-md shadow-primary/15 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSaving ? "Saving..." : "Start Exploring 🚀"}
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
