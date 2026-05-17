"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Utensils, 
  AlertCircle, 
  LogOut, 
  X, 
  Search,
  Camera,
  Check,
  Sparkles,
  Save
} from "lucide-react";
import { userProfile } from "@/lib/data";
import PageTransition from "@/components/PageTransition";

const sidebarItems = [
  { id: "profile", label: "Profile", icon: User },
  { id: "diet", label: "Preferences", icon: Utensils },
  { id: "allergies", label: "Allergies", icon: AlertCircle },
];

const dietOptions = [
  "Vegetarian", "Vegan", "Keto", "Gluten-Free", "Paleo", "Mediterranean"
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [allergies, setAllergies] = useState(userProfile.allergies);
  const [selectedDiets, setSelectedDiets] = useState(userProfile.dietaryPreferences);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSaveMessage, setShowSaveMessage] = useState(false);

  const removeAllergy = (allergy: string) => {
    setAllergies(prev => prev.filter(a => a !== allergy));
  };

  const addAllergy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (!allergies.includes(searchQuery)) {
      setAllergies(prev => [...prev, searchQuery.trim()]);
    }
    setSearchQuery("");
  };

  const toggleDiet = (diet: string) => {
    setSelectedDiets(prev => 
      prev.includes(diet) ? prev.filter(d => d !== diet) : [...prev, diet]
    );
  };

  const handleSave = () => {
    setShowSaveMessage(true);
    setTimeout(() => setShowSaveMessage(false), 3000);
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto space-y-8 pb-24">
        
        {/* Settings Title */}
        <div className="space-y-1">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">Personal Hub</h1>
          <p className="text-secondary font-medium">Fine-tune your dietary rules, search boundaries, and biometric specs.</p>
        </div>

        {/* Dynamic Save Alerts */}
        <AnimatePresence>
          {showSaveMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl flex items-center justify-between text-emerald-800 text-sm font-bold shadow-sm"
            >
              <span className="flex items-center space-x-2">
                <Sparkles size={16} className="text-emerald-600" />
                <span>All modifications successfully synced to your profile ledger!</span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tab & Form Desk */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Responsive Tab Panel */}
          {/* On mobile, it scrolls horizontally; on desktop, it stacks vertically */}
          <aside className="w-full lg:w-64 bg-card border border-border/50 p-3 rounded-2.5xl shadow-sm flex flex-row lg:flex-col overflow-x-auto no-scrollbar gap-1.5 lg:space-y-1 flex-shrink-0">
            {sidebarItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center space-x-3 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap flex-1 lg:flex-none justify-center lg:justify-start ${
                    isActive 
                      ? "text-primary z-10" 
                      : "text-secondary hover:text-foreground hover:bg-background"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeSettingTab"
                      className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-xl z-0"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  <item.icon size={16} className="relative z-10" />
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
            <button className="hidden lg:flex items-center space-x-3 px-4 py-3 rounded-xl font-bold text-xs text-secondary hover:bg-rose-50 hover:text-rose-500 transition-all mt-4 border border-transparent hover:border-rose-100">
              <LogOut size={16} />
              <span>Log Out</span>
            </button>
          </aside>

          {/* Main Workspace Forms */}
          <div className="flex-1 w-full space-y-6">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: Profile Details */}
              {activeTab === "profile" && (
                <motion.section 
                  key="profile"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-card p-6 sm:p-8 rounded-3xl border border-border/50 shadow-sm space-y-6 hover:border-primary/5 transition-all duration-300"
                >
                  <div className="border-b border-border/40 pb-3">
                    <h2 className="text-lg font-black text-foreground">Identity & Accounts</h2>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6">
                    <div className="relative group cursor-pointer flex-shrink-0">
                      <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-background card-shadow">
                        <img 
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" 
                          className="w-full h-full object-cover" 
                          alt="Avatar" 
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/45 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera className="text-white" size={20} />
                      </div>
                    </div>

                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-wider text-secondary">First Name</label>
                        <input 
                          type="text" 
                          defaultValue={userProfile.firstName}
                          className="w-full bg-background border border-border/50 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-semibold text-sm"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-wider text-secondary">Last Name</label>
                        <input 
                          type="text" 
                          defaultValue={userProfile.lastName}
                          className="w-full bg-background border border-border/50 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-semibold text-sm"
                        />
                      </div>
                      <div className="sm:col-span-2 space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-wider text-secondary">Email Address</label>
                        <input 
                          type="email" 
                          defaultValue={userProfile.email}
                          className="w-full bg-background border border-border/50 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-semibold text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </motion.section>
              )}

              {/* TAB 2: Dietary Preferences */}
              {activeTab === "diet" && (
                <motion.section 
                  key="diet"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-card p-6 sm:p-8 rounded-3xl border border-border/50 shadow-sm space-y-6 hover:border-primary/5 transition-all duration-300"
                >
                  <div className="border-b border-border/40 pb-3">
                    <h2 className="text-lg font-black text-foreground">Dietary Alignment</h2>
                    <p className="text-xs text-secondary font-medium mt-1">Select the eating structures you follow to customize your recommended AI feeds.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {dietOptions.map((diet) => {
                      const isSelected = selectedDiets.includes(diet);
                      return (
                        <button
                          key={diet}
                          onClick={() => toggleDiet(diet)}
                          className={`flex items-center space-x-3.5 p-4 rounded-2xl border transition-all cursor-pointer ${
                            isSelected
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-border bg-background text-foreground hover:border-primary/30"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                            isSelected ? "bg-primary border-primary" : "border-border/60 bg-white"
                          }`}>
                            {isSelected && <Check size={12} className="text-white" />}
                          </div>
                          <span className="font-extrabold text-sm">{diet}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.section>
              )}

              {/* TAB 3: Allergies & Exclusions */}
              {activeTab === "allergies" && (
                <motion.section 
                  key="allergies"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-card p-6 sm:p-8 rounded-3xl border border-border/50 shadow-sm space-y-6 hover:border-primary/5 transition-all duration-300"
                >
                  <div className="border-b border-border/40 pb-3">
                    <h2 className="text-lg font-black text-foreground">Allergies & Exclusions</h2>
                    <p className="text-xs text-secondary font-medium mt-1">Safeguard your health. We&apos;ll black-list recipes that contain these items.</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {allergies.map((allergy) => (
                      <div 
                        key={allergy} 
                        className="flex items-center space-x-2 px-3.5 py-1.5 bg-primary/5 text-primary rounded-xl text-xs font-bold border border-primary/20"
                      >
                        <span>{allergy}</span>
                        <button 
                          onClick={() => removeAllergy(allergy)}
                          className="hover:text-rose-500 transition-colors cursor-pointer"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={addAllergy} className="relative flex items-center gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={16} />
                      <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Add ingredients to exclude (e.g. Peanuts, Dairy)..."
                        className="w-full bg-background border border-border pl-11 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all font-semibold text-xs sm:text-sm"
                      />
                    </div>
                    <motion.button 
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="px-4 py-3 bg-primary text-white rounded-xl font-bold text-xs hover:bg-primary/95 cursor-pointer shadow-sm shadow-primary/10"
                    >
                      Exclude
                    </motion.button>
                  </form>
                </motion.section>
              )}
            </AnimatePresence>

            {/* Inline Action Bar - NO STICKY OVERLAPPING ISSUES! */}
            <div className="flex justify-end space-x-3 bg-card border border-border/50 p-4 rounded-2.5xl shadow-sm">
              <button className="px-6 py-2.5 font-bold text-xs text-secondary hover:text-foreground transition-all cursor-pointer">
                Cancel
              </button>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
                className="px-6 py-2.5 bg-primary text-white rounded-xl font-extrabold text-xs hover:bg-primary/95 transition-all shadow-md shadow-primary/10 cursor-pointer flex items-center space-x-2"
              >
                <Save size={14} />
                <span>Save Changes</span>
              </motion.button>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
