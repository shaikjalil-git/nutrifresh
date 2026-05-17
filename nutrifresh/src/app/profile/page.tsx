"use client";

import { useState, useEffect } from "react";
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
  Save,
  Loader2
} from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { useAuth } from "@/context/AuthContext";

const sidebarItems = [
  { id: "profile", label: "Profile", icon: User },
  { id: "diet", label: "Preferences", icon: Utensils },
  { id: "allergies", label: "Allergies", icon: AlertCircle },
];

const dietOptions = [
  "Vegetarian", "Vegan", "Keto", "Gluten-Free", "Paleo", "Mediterranean"
];

export default function ProfilePage() {
  const { profile, saveProfile, logout, user, loginWithGoogle } = useAuth();
  
  const [activeTab, setActiveTab] = useState("profile");
  
  // Editable profile state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [allergies, setAllergies] = useState<string[]>([]);
  const [selectedDiets, setSelectedDiets] = useState<string[]>([]);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [showSaveMessage, setShowSaveMessage] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Sync edits from the persistent Firestore profile once loaded
  useEffect(() => {
    if (profile) {
      setFirstName(profile.firstName || "");
      setLastName(profile.lastName || "");
      setEmail(profile.email || "");
      setAllergies(profile.allergies || []);
      setSelectedDiets(profile.dietaryPreferences || []);
    }
  }, [profile]);

  const removeAllergy = (allergy: string) => {
    setAllergies(prev => prev.filter(a => a !== allergy));
  };

  const addAllergy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const clean = searchQuery.trim();
    if (!allergies.includes(clean)) {
      setAllergies(prev => [...prev, clean]);
    }
    setSearchQuery("");
  };

  const toggleDiet = (diet: string) => {
    setSelectedDiets(prev => 
      prev.includes(diet) ? prev.filter(d => d !== diet) : [...prev, diet]
    );
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await saveProfile({
        firstName,
        lastName,
        email,
        allergies,
        dietaryPreferences: selectedDiets
      });
      setShowSaveMessage(true);
      setTimeout(() => setShowSaveMessage(false), 3000);
    } catch (err) {
      console.error("Error updating profile ledger: ", err);
    } finally {
      setIsSaving(false);
    }
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
              className="bg-[#10191e] border border-emerald-500/20 p-4 rounded-2xl flex items-center justify-between text-emerald-400 text-sm font-bold shadow-sm"
            >
              <span className="flex items-center space-x-2">
                <Sparkles size={16} className="text-emerald-500 animate-pulse" />
                <span>All modifications successfully synced to your profile ledger!</span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tab & Form Desk */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Responsive Tab Panel */}
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
            <button
              onClick={logout}
              className="flex lg:hidden items-center space-x-3 px-4 py-3 rounded-xl font-bold text-xs text-rose-500 hover:bg-rose-500/5 transition-all cursor-pointer whitespace-nowrap flex-1 justify-center"
            >
              <LogOut size={16} />
              <span>Log Out</span>
            </button>
            <button 
              onClick={logout} 
              className="hidden lg:flex items-center space-x-3 px-4 py-3 rounded-xl font-bold text-xs text-secondary hover:bg-rose-500/5 hover:text-rose-500 transition-all mt-4 border border-transparent hover:border-rose-500/10 cursor-pointer"
            >
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
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" 
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
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full bg-background border border-border/50 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-semibold text-sm"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-wider text-secondary">Last Name</label>
                        <input 
                          type="text" 
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full bg-background border border-border/50 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-semibold text-sm"
                        />
                      </div>
                      <div className="sm:col-span-2 space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-wider text-secondary">Email Address</label>
                        <input 
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-background border border-border/50 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-semibold text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Google Connection Desk */}
                  <div className="border-t border-border/40 pt-6 space-y-4">
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-secondary">Cloud Synchronization (Optional)</h3>
                      <p className="text-xs text-secondary font-medium mt-0.5">
                        Link your Google Account to synchronize your customized diet rules and biometric history.
                      </p>
                    </div>

                    {user ? (
                      <div className="flex items-center justify-between p-4 bg-primary/5 border border-primary/20 rounded-2xl">
                        <div className="flex items-center space-x-3.5 flex-1 min-w-0">
                          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
                            <img src={user.photoURL || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100"} className="w-full h-full object-cover" alt="User Profile" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-extrabold text-sm text-foreground truncate">{user.displayName || "Google User"}</p>
                            <p className="text-xs font-semibold text-secondary truncate">{user.email}</p>
                          </div>
                        </div>
                        <span className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/25 rounded-xl text-[10px] font-black uppercase tracking-wider flex items-center space-x-1.5 flex-shrink-0">
                          <Check size={10} />
                          <span>Connected</span>
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 bg-background border border-border/60 rounded-2xl">
                        <div className="space-y-0.5">
                          <p className="font-extrabold text-sm text-foreground">Local Guest Account</p>
                          <p className="text-xs font-semibold text-secondary">Your preferences are saved in Local Storage.</p>
                        </div>
                        <motion.button
                          whileTap={{ scale: 0.96 }}
                          onClick={loginWithGoogle}
                          className="px-4 py-2.5 bg-foreground text-background font-extrabold text-xs rounded-xl hover:opacity-90 transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                          </svg>
                          <span>Sign in with Google</span>
                        </motion.button>
                      </div>
                    )}
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
                            isSelected ? "bg-primary border-primary" : "border-border/60 bg-[#0c1316]"
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
                    {allergies.length === 0 ? (
                      <span className="text-xs text-secondary font-semibold italic">No allergies added yet.</span>
                    ) : (
                      allergies.map((allergy) => (
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
                      ))
                    )}
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

            {/* Action Bar */}
            <div className="flex justify-end space-x-3 bg-card border border-border/50 p-4 rounded-2.5xl shadow-sm">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                disabled={isSaving}
                onClick={handleSave}
                className="px-6 py-2.5 bg-primary text-white rounded-xl font-extrabold text-xs hover:bg-primary/95 transition-all shadow-md shadow-primary/10 cursor-pointer flex items-center space-x-2"
              >
                {isSaving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
                <span>Save Changes</span>
              </motion.button>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
