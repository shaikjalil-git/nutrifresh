"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
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
  Loader2,
  Scale,
  Ruler,
  Flame,
  Key,
  HeartPulse,
  Image,
  RefreshCw
} from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { useAuth } from "@/context/AuthContext";

const sidebarItems = [
  { id: "profile", label: "Profile Specs", icon: User },
  { id: "diet", label: "Diet Patterns", icon: Utensils },
  { id: "allergies", label: "Allergies & Exclusions", icon: AlertCircle },
];

const dietOptions = [
  "Vegetarian", "Vegan", "Keto", "Gluten-Free", "Paleo", "Mediterranean"
];

// Quick suggestions for allergy exclusions
const allergySuggestions = [
  { name: "Peanuts 🥜", value: "Peanuts" },
  { name: "Dairy 🥛", value: "Dairy" },
  { name: "Soy 🫘", value: "Soy" },
  { name: "Shellfish 🍤", value: "Shellfish" },
  { name: "Gluten 🌾", value: "Gluten" },
  { name: "Eggs 🥚", value: "Eggs" }
];

export default function ProfilePage() {
  const { profile, saveProfile, logout, user, loginWithGoogle } = useAuth();
  
  const [activeTab, setActiveTab] = useState("profile");
  
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 400], [0, 50]);
  const opacityParallax = useTransform(scrollY, [0, 300], [1, 0.4]);
  
  // Editable profile state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [allergies, setAllergies] = useState<string[]>([]);
  const [selectedDiets, setSelectedDiets] = useState<string[]>([]);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(170);
  const [kcalGoal, setKcalGoal] = useState(2000);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [showSaveMessage, setShowSaveMessage] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);

  // Sync edits from the persistent Firestore profile once loaded
  useEffect(() => {
    if (profile) {
      setFirstName(profile.firstName || "");
      setLastName(profile.lastName || "");
      setEmail(profile.email || "");
      setAllergies(profile.allergies || []);
      setSelectedDiets(profile.dietaryPreferences || []);
      setAvatarUrl(profile.avatarUrl || "");
      setWeight(profile.weight || 65);
      setHeight(profile.height || 170);
      setKcalGoal(profile.kcalGoal || 2000);
    }
  }, [profile]);

  const removeAllergy = (allergy: string) => {
    setAllergies(prev => prev.filter(a => a !== allergy));
  };

  const addAllergy = (e?: React.FormEvent, customVal?: string) => {
    if (e) e.preventDefault();
    const targetVal = customVal || searchQuery;
    if (!targetVal.trim()) return;
    const clean = targetVal.trim();
    if (!allergies.includes(clean)) {
      setAllergies(prev => [...prev, clean]);
    }
    if (!customVal) setSearchQuery("");
  };

  const toggleDiet = (diet: string) => {
    setSelectedDiets(prev => 
      prev.includes(diet) ? prev.filter(d => d !== diet) : [...prev, diet]
    );
  };

  const handleAvatarFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadingAvatar(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
        setUploadingAvatar(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await saveProfile({
        firstName: firstName.trim() || "UNKNOWN",
        lastName: lastName.trim(),
        email: email.trim(),
        allergies,
        dietaryPreferences: selectedDiets,
        avatarUrl,
        weight: Number(weight),
        height: Number(height),
        kcalGoal: Number(kcalGoal)
      });
      setShowSaveMessage(true);
      setTimeout(() => setShowSaveMessage(false), 3000);
    } catch (err) {
      console.error("Error updating profile ledger: ", err);
    } finally {
      setIsSaving(false);
    }
  };

  // BMI Calculator helper
  const bmi = height > 0 ? ((weight / (height * height)) * 10000).toFixed(1) : "0.0";
  const getBmiCategory = (valStr: string) => {
    const num = parseFloat(valStr);
    if (num < 18.5) return { label: "Underweight 🥦", color: "text-amber-400" };
    if (num < 25) return { label: "Healthy Weight ✨", color: "text-emerald-400" };
    if (num < 30) return { label: "Overweight 🏃", color: "text-amber-500" };
    return { label: "Obese 🩺", color: "text-rose-500" };
  };
  const bmiCat = getBmiCategory(bmi);

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto space-y-8 pb-24">
        
        {/* Settings Title & Header Preview Banner container */}
        <motion.div style={{ y: yParallax, opacity: opacityParallax }} className="space-y-8">
          {/* Settings Title */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-3xl md:text-4xl font-black tracking-tight">Personal Hub</h1>
              <p className="text-secondary font-medium">Fine-tune your dietary rules, search boundaries, and biometric specs.</p>
            </div>
            
            {/* Quick Stats Summary badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-xl text-[10px] font-black uppercase tracking-wider">
                {selectedDiets.length} Preferences Active
              </span>
              <span className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-xl text-[10px] font-black uppercase tracking-wider">
                {allergies.length} Exclusions Listed
              </span>
            </div>
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

          {/* Header Preview Banner (Design Principle: Visual Excellence) */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/15 via-accent/10 to-transparent border border-border/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-12 w-48 h-48 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              {/* Interactive Profile Avatar Container with dual gallery/camera capture option */}
              <div className="relative group">
                <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-background bg-secondary/15 flex items-center justify-center relative shadow-md">
                  {uploadingAvatar ? (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Loader2 size={24} className="text-white animate-spin" />
                    </div>
                  ) : user?.photoURL || avatarUrl ? (
                    <img 
                      src={user?.photoURL || avatarUrl} 
                      className="w-full h-full object-cover" 
                      alt="Avatar" 
                    />
                  ) : (
                    <div className="text-2xl font-black text-secondary uppercase">
                      {(firstName || "U").charAt(0)}
                    </div>
                  )}
                </div>

                {/* Avatar Multi-upload Actions Overlay */}
                <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 z-20">
                  {/* Camera upload input */}
                  <label 
                    htmlFor="profile-avatar-camera"
                    className="p-1.5 bg-primary text-white rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center border border-background"
                    title="Direct Camera Capture"
                  >
                    <Camera size={12} />
                  </label>
                  <input 
                    type="file" 
                    id="profile-avatar-camera" 
                    accept="image/*" 
                    capture="user"
                    onChange={handleAvatarFileChange} 
                    className="hidden" 
                  />

                  {/* Gallery upload input */}
                  <label 
                    htmlFor="profile-avatar-gallery"
                    className="p-1.5 bg-accent text-white rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center border border-background"
                    title="Upload from Gallery"
                  >
                    <Image size={12} />
                  </label>
                  <input 
                    type="file" 
                    id="profile-avatar-gallery" 
                    accept="image/*" 
                    onChange={handleAvatarFileChange} 
                    className="hidden" 
                  />
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
                  {firstName || "UNKNOWN"} {lastName}
                </h2>
                <p className="text-xs text-secondary font-semibold mt-1">
                  {email || user?.email || "No email linked"}
                </p>
                
                <div className="mt-2.5 flex flex-wrap gap-2 items-center justify-center sm:justify-start">
                  <span className="px-2.5 py-1 bg-background/60 border border-border/50 rounded-lg text-[9px] font-black uppercase text-secondary">
                    BMI: <span className="text-foreground">{bmi}</span>
                  </span>
                  <span className={`text-[9px] font-black uppercase ${bmiCat.color}`}>
                    {bmiCat.label}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center md:items-end gap-2.5 w-full md:w-auto">
              {/* Cloud Connection Badge */}
              {user ? (
                <div className="flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl w-full sm:w-auto justify-center">
                  <Check size={14} />
                  <span className="text-[10px] font-black uppercase tracking-wider">Cloud Connected</span>
                </div>
              ) : (
                <button
                  onClick={loginWithGoogle}
                  className="flex items-center space-x-2 px-4 py-2.5 bg-foreground text-background font-extrabold text-[10px] uppercase tracking-wider rounded-2xl hover:opacity-90 active:scale-98 transition-all cursor-pointer shadow-sm w-full sm:w-auto justify-center"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                  </svg>
                  <span>Google Sync</span>
                </button>
              )}

              <button
                onClick={logout}
                className="flex items-center justify-center space-x-1.5 px-4 py-2 border border-rose-500/20 text-rose-500 hover:bg-rose-500/5 rounded-2xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer w-full sm:w-auto"
              >
                <LogOut size={12} />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Tab & Form Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Biometrics Calculator Dashboard Widget (Design Principle: Rich Functionalities) */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card border border-border/50 p-6 rounded-3xl shadow-sm space-y-6 hover:border-primary/10 transition-all duration-300"
            >
              <div className="border-b border-border/40 pb-3 flex items-center space-x-2">
                <HeartPulse className="text-primary" size={18} />
                <h2 className="text-base font-black text-foreground uppercase tracking-wider">Target Biometrics</h2>
              </div>

              {/* Weight Card Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-secondary">
                  <span className="flex items-center space-x-1">
                    <Scale size={13} />
                    <span>Weight</span>
                  </span>
                  <span className="text-foreground font-black">{weight} kg</span>
                </div>
                <input 
                  type="range"
                  min="30"
                  max="180"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-1.5 bg-border/40 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[10px] text-secondary/60 font-semibold">
                  <span>30 kg</span>
                  <span>180 kg</span>
                </div>
              </div>

              {/* Height Card Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-secondary">
                  <span className="flex items-center space-x-1">
                    <Ruler size={13} />
                    <span>Height</span>
                  </span>
                  <span className="text-foreground font-black">{height} cm</span>
                </div>
                <input 
                  type="range"
                  min="120"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-1.5 bg-border/40 rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-[10px] text-secondary/60 font-semibold">
                  <span>120 cm</span>
                  <span>220 cm</span>
                </div>
              </div>

              {/* Calorie Target input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-secondary">
                  <span className="flex items-center space-x-1">
                    <Flame size={13} />
                    <span>Daily Kcal Goal</span>
                  </span>
                  <span className="text-foreground font-black">{kcalGoal} kcal</span>
                </div>
                <input 
                  type="range"
                  min="1200"
                  max="4500"
                  step="50"
                  value={kcalGoal}
                  onChange={(e) => setKcalGoal(Number(e.target.value))}
                  className="w-full h-1.5 bg-border/40 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-secondary/60 font-semibold">
                  <span>1,200 kcal</span>
                  <span>4,500 kcal</span>
                </div>
              </div>

              <div className="bg-background/40 border border-border/50 p-4 rounded-2xl text-[11px] text-secondary font-medium leading-relaxed">
                ⚖️ Adjusting your biometric sliders instantly updates your custom caloric target calculation. Remember to click <span className="font-extrabold text-foreground">Save Changes</span> to lock these in!
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Interactive Tab Panel & Active Tab Forms */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Segmented Controller */}
            <div className="bg-card border border-border/50 p-1.5 rounded-2xl flex gap-1 shadow-sm">
              {sidebarItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`relative flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl font-black text-xs tracking-tight transition-all cursor-pointer flex-1 ${
                      isActive 
                        ? "bg-primary text-white shadow-sm" 
                        : "text-secondary hover:text-foreground hover:bg-background/50"
                    }`}
                  >
                    <item.icon size={13} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Main Workspace Forms */}
            <div className="w-full">
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
                    <div className="border-b border-border/40 pb-3 flex items-center justify-between">
                      <h2 className="text-base font-black text-foreground uppercase tracking-wider">Identity Specifications</h2>
                      <Key size={16} className="text-primary" />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-wider text-secondary">First Name</label>
                        <input 
                          type="text" 
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="e.g. UNKNOWN"
                          className="w-full bg-background border border-border/60 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-semibold text-sm"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-wider text-secondary">Last Name</label>
                        <input 
                          type="text" 
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="e.g. Doe"
                          className="w-full bg-background border border-border/60 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-semibold text-sm"
                        />
                      </div>
                      <div className="sm:col-span-2 space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-wider text-secondary">Email Address</label>
                        <input 
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. user@domain.com"
                          className="w-full bg-background border border-border/60 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-semibold text-sm"
                        />
                      </div>
                      <div className="sm:col-span-2 space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-wider text-secondary">Profile Image Data URL / Link</label>
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            value={avatarUrl}
                            onChange={(e) => setAvatarUrl(e.target.value)}
                            placeholder="Enter image link, select from gallery, or capture direct photo above"
                            className="flex-1 bg-background border border-border/60 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-semibold text-xs text-secondary truncate"
                          />
                          {avatarUrl && (
                            <button
                              type="button"
                              onClick={() => setAvatarUrl("")}
                              className="px-3 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-xl hover:bg-rose-500/20 active:scale-95 transition-all text-xs font-bold"
                            >
                              Reset
                            </button>
                          )}
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
                      <h2 className="text-base font-black text-foreground uppercase tracking-wider">Dietary Preferences</h2>
                      <p className="text-xs text-secondary font-semibold mt-1">Select the eating structures you follow to customize your recommended AI feeds.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {dietOptions.map((diet) => {
                        const isSelected = selectedDiets.includes(diet);
                        return (
                          <button
                            key={diet}
                            type="button"
                            onClick={() => toggleDiet(diet)}
                            className={`flex items-center space-x-3.5 p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                              isSelected
                                ? "border-primary bg-primary/5 text-primary shadow-sm"
                                : "border-border/60 bg-background text-foreground hover:border-primary/30"
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                              isSelected ? "bg-primary border-primary" : "border-border/60 bg-background"
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
                      <h2 className="text-base font-black text-foreground uppercase tracking-wider">Allergies & Exclusions</h2>
                      <p className="text-xs text-secondary font-semibold mt-1">Safeguard your health. We&apos;ll black-list recipes that contain these items.</p>
                    </div>

                    {/* Excluded Tag ledger list */}
                    <div className="flex flex-wrap gap-2">
                      {allergies.length === 0 ? (
                        <span className="text-xs text-secondary font-semibold italic p-1">No allergies added yet. Click suggestions below or search to exclude.</span>
                      ) : (
                        allergies.map((allergy) => (
                          <div 
                            key={allergy} 
                            className="flex items-center space-x-2 px-3.5 py-1.5 bg-primary/5 text-primary rounded-xl text-xs font-bold border border-primary/20 hover:border-rose-500/20 hover:text-rose-500 transition-all group"
                          >
                            <span>{allergy}</span>
                            <button 
                              type="button"
                              onClick={() => removeAllergy(allergy)}
                              className="hover:text-rose-500 transition-colors cursor-pointer"
                            >
                              <X size={12} className="group-hover:scale-110" />
                            </button>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Quick suggestions area */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-secondary pl-1">Quick Suggestions</span>
                      <div className="flex flex-wrap gap-1.5">
                        {allergySuggestions.map((item) => {
                          const isExcluded = allergies.includes(item.value);
                          return (
                            <button
                              key={item.value}
                              type="button"
                              onClick={() => isExcluded ? removeAllergy(item.value) : addAllergy(undefined, item.value)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer flex items-center space-x-1 ${
                                isExcluded 
                                  ? "bg-rose-500/10 border-rose-500/25 text-rose-500" 
                                  : "bg-background border-border hover:border-primary/20 text-foreground"
                              }`}
                            >
                              <span>{item.name}</span>
                              {isExcluded && <Check size={10} />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Search addition bar */}
                    <form onSubmit={addAllergy} className="relative flex items-center gap-2">
                      <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={16} />
                        <input 
                          type="text" 
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Add ingredients to exclude (e.g. Peanuts, Dairy)..."
                          className="w-full bg-background border border-border pl-11 pr-4 py-3.5 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all font-semibold text-xs sm:text-sm"
                        />
                      </div>
                      <motion.button 
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="px-5 py-3.5 bg-primary text-white rounded-xl font-bold text-xs hover:bg-primary/95 cursor-pointer shadow-sm shadow-primary/10"
                      >
                        Exclude
                      </motion.button>
                    </form>
                  </motion.section>
                )}
              </AnimatePresence>

              {/* Action Bar */}
              <div className="flex justify-end space-x-3 bg-card border border-border/50 p-4 rounded-2.5xl shadow-sm mt-6">
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
      </div>
    </PageTransition>
  );
}
