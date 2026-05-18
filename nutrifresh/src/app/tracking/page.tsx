"use client";

import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Plus, MoreHorizontal, ExternalLink, ChefHat, GlassWater, Trophy, Dumbbell, Sparkles, Camera, Loader2, Trash2, Coffee, CupSoda, Milk, Droplet, RotateCcw, ListPlus, Info, Image } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PageTransition from "@/components/PageTransition";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { userProgress } from "@/lib/data";

const DEFAULT_MEAL_IMAGE = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" fill="%230c1417" rx="16"/><circle cx="50" cy="50" r="32" fill="none" stroke="%2310b981" stroke-width="4" stroke-dasharray="1 3"/><circle cx="50" cy="50" r="24" fill="%230f1e22" stroke="%2306b6d4" stroke-width="2"/><path d="M38 52 C38 62, 62 62, 62 52" stroke="%2310b981" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M42 42 L42 44" stroke="%2306b6d4" stroke-width="3" stroke-linecap="round"/><path d="M58 42 L58 44" stroke="%2306b6d4" stroke-width="3" stroke-linecap="round"/></svg>`;

// Extensive Food Dictionary for the intelligent client-side AI estimator
interface FoodItem {
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
}

const foodDictionary: Record<string, FoodItem> = {
  egg: { kcal: 70, protein: 6, carbs: 0.6, fat: 5 },
  eggs: { kcal: 70, protein: 6, carbs: 0.6, fat: 5 },
  banana: { kcal: 105, protein: 1.3, carbs: 27, fat: 0.3 },
  bananas: { kcal: 105, protein: 1.3, carbs: 27, fat: 0.3 },
  apple: { kcal: 95, protein: 0.5, carbs: 25, fat: 0.3 },
  apples: { kcal: 95, protein: 0.5, carbs: 25, fat: 0.3 },
  chicken: { kcal: 165, protein: 31, carbs: 0, fat: 3.6 },
  breast: { kcal: 165, protein: 31, carbs: 0, fat: 3.6 },
  salmon: { kcal: 200, protein: 22, carbs: 0, fat: 13 },
  steak: { kcal: 250, protein: 26, carbs: 0, fat: 17 },
  beef: { kcal: 250, protein: 26, carbs: 0, fat: 17 },
  oatmeal: { kcal: 150, protein: 6, carbs: 27, fat: 3 },
  oats: { kcal: 150, protein: 6, carbs: 27, fat: 3 },
  milk: { kcal: 120, protein: 8, carbs: 12, fat: 5 },
  coffee: { kcal: 5, protein: 0.3, carbs: 0, fat: 0 },
  salad: { kcal: 150, protein: 3, carbs: 10, fat: 11 },
  rice: { kcal: 130, protein: 2.7, carbs: 28, fat: 0.3 },
  bread: { kcal: 80, protein: 3, carbs: 15, fat: 1 },
  toast: { kcal: 80, protein: 3, carbs: 15, fat: 1 },
  avocado: { kcal: 160, protein: 2, carbs: 9, fat: 15 },
  avocados: { kcal: 160, protein: 2, carbs: 9, fat: 15 },
  protein: { kcal: 120, protein: 25, carbs: 3, fat: 1.5 },
  shake: { kcal: 200, protein: 20, carbs: 15, fat: 4 },
  smoothie: { kcal: 250, protein: 5, carbs: 45, fat: 2 },
  yogurt: { kcal: 100, protein: 10, carbs: 6, fat: 2 },
  almonds: { kcal: 160, protein: 6, carbs: 6, fat: 14 },
  nuts: { kcal: 180, protein: 5, carbs: 6, fat: 16 },
  tuna: { kcal: 130, protein: 28, carbs: 0, fat: 1 },
  pasta: { kcal: 200, protein: 7, carbs: 42, fat: 1 },
  pizza: { kcal: 280, protein: 12, carbs: 32, fat: 10 },
  burger: { kcal: 500, protein: 25, carbs: 40, fat: 22 },
  fries: { kcal: 365, protein: 4, carbs: 48, fat: 17 },
  cookie: { kcal: 150, protein: 2, carbs: 20, fat: 7 },
  chocolate: { kcal: 220, protein: 3, carbs: 25, fat: 12 }
};

const parseSmartLogText = (text: string) => {
  if (!text.trim()) return { kcal: 0, protein: 0, carbs: 0, fat: 0, ingredients: [] };

  // Support direct calorie detection (e.g., "hamburger 400 calories" or "salad 320 kcal")
  const kcalMatch = text.match(/(\d+)\s*(kcal|calorie|calories)/i);
  let extractedKcal = kcalMatch ? parseInt(kcalMatch[1]) : 0;

  const words = text.toLowerCase().split(/\s+/);
  let estimatedKcal = 0;
  let estimatedP = 0;
  let estimatedC = 0;
  let estimatedF = 0;
  let matchedIngredients: string[] = [];

  let currentMultiplier = 1;

  for (let i = 0; i < words.length; i++) {
    const word = words[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    
    // Check if word is a number
    const num = parseFloat(word);
    if (!isNaN(num)) {
      currentMultiplier = num;
      continue;
    }

    // Check if word matches an ingredient in our dictionary
    if (foodDictionary[word]) {
      const item = foodDictionary[word];
      estimatedKcal += Math.round(item.kcal * currentMultiplier);
      estimatedP += Math.round(item.protein * currentMultiplier);
      estimatedC += Math.round(item.carbs * currentMultiplier);
      estimatedF += Math.round(item.fat * currentMultiplier);
      matchedIngredients.push(`${currentMultiplier}x ${word}`);
      currentMultiplier = 1; // reset multiplier
    }
  }

  // If a specific calorie count was typed in directly, let it override/drive the estimation!
  if (extractedKcal > 0) {
    estimatedKcal = extractedKcal;
    // Distribute macros standardly based on the specified calories
    estimatedP = Math.round(extractedKcal * 0.08);
    estimatedC = Math.round(extractedKcal * 0.12);
    estimatedF = Math.round(extractedKcal * 0.04);
  }

  // Default fallback if no matched foods or direct calories found
  if (estimatedKcal === 0 && text.trim().length > 0) {
    estimatedKcal = 250;
    estimatedP = 12;
    estimatedC = 25;
    estimatedF = 8;
  }

  return {
    kcal: estimatedKcal,
    protein: estimatedP,
    carbs: estimatedC,
    fat: estimatedF,
    ingredients: matchedIngredients
  };
};

// Weekly Mock Data for interactive progress bars
const weeklyData = [
  { day: "Mon", kcal: 1850, goal: 2000 },
  { day: "Tue", kcal: 2100, goal: 2000 },
  { day: "Wed", kcal: 1950, goal: 2000 },
  { day: "Thu", kcal: 1780, goal: 2000 },
  { day: "Fri", kcal: 2200, goal: 2000 },
  { day: "Sat", kcal: 1450, goal: 2000 }, // today
  { day: "Sun", kcal: 0, goal: 2000 },
];

export default function TrackingPage() {
  const { 
    user, 
    profile,
    waterIntake, 
    recentMeals: recentMealsList, 
    kcalEaten, 
    protein, 
    carbs, 
    fat,
    addCupOfWater, 
    removeCupOfWater, 
    setWaterIntake,
    logMeal, 
    deleteMeal,
    resetDailyTracking,
    loading: loadingDb 
  } = useAuth();
  
  const [formattedDate, setFormattedDate] = useState("");
  const [smartInput, setSmartInput] = useState("");
  const [showLogEffect, setShowLogEffect] = useState(false);

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 400], [0, 60]);
  const opacityParallax = useTransform(scrollY, [0, 300], [1, 0.4]);

  // Tab control: "ai" (Smart Log) or "manual" (Direct Input Form)
  const [activeLogMode, setActiveLogMode] = useState<"ai" | "manual">("ai");

  // Manual input fields state
  const [manualName, setManualName] = useState("");
  const [manualKcal, setManualKcal] = useState("");
  const [manualProtein, setManualProtein] = useState("");
  const [manualCarbs, setManualCarbs] = useState("");
  const [manualFat, setManualFat] = useState("");

  // Base64 device capture / gallery states
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        // Encodes file to Base64 format perfectly, preserving it locally and in cloud Firestore!
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearSelectedImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  // AI-assisted natural language log handler
  const handleSmartLog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!smartInput.trim() || uploading) return;

    setUploading(true);

    // AI estimations
    const estimate = parseSmartLogText(smartInput);
    const imageUrl = imagePreview || DEFAULT_MEAL_IMAGE;

    const newMeal = {
      id: "m_" + Date.now(),
      name: smartInput.charAt(0).toUpperCase() + smartInput.slice(1),
      type: "AI Logged",
      kcal: estimate.kcal,
      protein: estimate.protein,
      carbs: estimate.carbs,
      fat: estimate.fat,
      image: imageUrl,
      createdAt: new Date().toISOString()
    };

    await logMeal(newMeal);

    setSmartInput("");
    clearSelectedImage();
    setUploading(false);
    setShowLogEffect(true);
    setTimeout(() => setShowLogEffect(false), 2000);
  };

  // Direct manual parameter input form handler
  const handleManualLog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualName.trim() || uploading) return;

    setUploading(true);

    const kcalVal = Math.max(0, parseInt(manualKcal) || 0);
    const pVal = Math.max(0, parseInt(manualProtein) || 0);
    const cVal = Math.max(0, parseInt(manualCarbs) || 0);
    const fVal = Math.max(0, parseInt(manualFat) || 0);
    const imageUrl = imagePreview || DEFAULT_MEAL_IMAGE;

    const newMeal = {
      id: "m_" + Date.now(),
      name: manualName.charAt(0).toUpperCase() + manualName.slice(1),
      type: "Manual Logged",
      kcal: kcalVal,
      protein: pVal,
      carbs: cVal,
      fat: fVal,
      image: imageUrl,
      createdAt: new Date().toISOString()
    };

    await logMeal(newMeal);

    // Reset manual form fields
    setManualName("");
    setManualKcal("");
    setManualProtein("");
    setManualCarbs("");
    setManualFat("");
    clearSelectedImage();
    
    setUploading(false);
    setShowLogEffect(true);
    setTimeout(() => setShowLogEffect(false), 2000);
  };

  useEffect(() => {
    const date = new Date();
    const timer = setTimeout(() => {
      setFormattedDate(date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'short', 
        day: 'numeric' 
      }));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const calorieGoal = profile?.kcalGoal || 2000;

  const chartData = [
    { name: "Eaten", value: kcalEaten },
    { name: "Remaining", value: Math.max(0, calorieGoal - kcalEaten) },
  ];

  return (
    <PageTransition>
      <div className="space-y-10 pb-24">
        
        {/* Header Block */}
        <motion.div 
          style={{ y: yParallax, opacity: opacityParallax }}
          className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">Daily Nutrition Desk</h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <p className="text-secondary font-semibold">{formattedDate}</p>
              <span className="w-1.5 h-1.5 rounded-full bg-border/80 hidden sm:inline" />
              <button 
                type="button"
                onClick={async () => {
                  if (confirm("Are you sure you want to reset today's water, calorie, and meal logs to zero?")) {
                    await resetDailyTracking();
                  }
                }}
                className="text-xs text-rose-500 hover:text-rose-600 hover:underline font-bold transition-all cursor-pointer"
              >
                Reset Today's Progress
              </button>
            </div>
          </div>
          
          {/* Smart Logging double-mode desk (High interactive value!) */}
          <div className="bg-card border border-border/50 p-5 rounded-3xl shadow-md w-full md:max-w-md flex flex-col gap-4">
            
            {/* Segmented Tab Controller */}
            <div className="grid grid-cols-2 p-1 bg-background rounded-2xl border border-border/60">
              <button
                type="button"
                onClick={() => setActiveLogMode("ai")}
                className={`flex items-center justify-center space-x-2 py-2 rounded-xl text-xs font-black tracking-tight transition-all cursor-pointer ${
                  activeLogMode === "ai"
                    ? "bg-primary text-white shadow-sm"
                    : "text-secondary hover:text-foreground"
                }`}
              >
                <Sparkles size={14} />
                <span>🤖 AI Smart Log</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveLogMode("manual")}
                className={`flex items-center justify-center space-x-2 py-2 rounded-xl text-xs font-black tracking-tight transition-all cursor-pointer ${
                  activeLogMode === "manual"
                    ? "bg-primary text-white shadow-sm"
                    : "text-secondary hover:text-foreground"
                }`}
              >
                <ListPlus size={14} />
                <span>📝 Manual Form</span>
              </button>
            </div>

            {/* AI AUTO ESTIMATE MODE */}
            {activeLogMode === "ai" ? (
              <form onSubmit={handleSmartLog} className="flex flex-col gap-3">
                <div className="relative flex items-center">
                  <input 
                    type="text" 
                    value={smartInput}
                    onChange={(e) => setSmartInput(e.target.value)}
                    placeholder="Smart log: '2 eggs and banana'..." 
                    className="bg-background border border-border/60 pl-16 pr-10 py-3 rounded-2xl w-full outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-semibold text-sm"
                  />
                  
                  {/* Photo Upload Gallery & Capture triggers */}
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center space-x-1 z-10">
                    {/* Gallery input */}
                    <label 
                      htmlFor="food-image-gallery-ai" 
                      className="p-1 bg-accent/5 hover:bg-accent/15 rounded-lg text-accent transition-all cursor-pointer flex items-center justify-center border border-accent/10"
                      title="Upload from Gallery"
                    >
                      <Image size={13} />
                    </label>
                    <input 
                      type="file" 
                      id="food-image-gallery-ai" 
                      accept="image/*" 
                      onChange={handleImageChange} 
                      className="hidden" 
                    />

                    {/* Camera capture input */}
                    <label 
                      htmlFor="food-image-capture-ai" 
                      className="p-1 bg-primary/5 hover:bg-primary/15 rounded-lg text-primary transition-all cursor-pointer flex items-center justify-center border border-primary/10"
                      title="Direct Camera Capture"
                    >
                      <Camera size={13} />
                    </label>
                    <input 
                      type="file" 
                      id="food-image-capture-ai" 
                      accept="image/*" 
                      capture="environment"
                      onChange={handleImageChange} 
                      className="hidden" 
                    />
                  </div>

                  <ChefHat size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-primary opacity-60 pointer-events-none" />
                </div>

                {/* AI Real-time estimation drawer */}
                {smartInput.trim() && (
                  <motion.div 
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-primary/5 border border-primary/10 rounded-2xl p-3 flex flex-col gap-1.5"
                  >
                    <div className="flex items-center space-x-1.5 text-[10px] font-black uppercase tracking-wider text-primary">
                      <Sparkles size={11} className="animate-spin text-primary" />
                      <span>Live AI Estimation</span>
                    </div>
                    {(() => {
                      const est = parseSmartLogText(smartInput);
                      return (
                        <div className="space-y-1">
                          <p className="text-sm font-black text-foreground">{est.kcal} kcal</p>
                          <div className="flex items-center gap-2 text-[10px] text-secondary font-bold">
                            <span className="bg-background border border-border/40 px-2 py-0.5 rounded-lg">P: {est.protein}g</span>
                            <span className="bg-background border border-border/40 px-2 py-0.5 rounded-lg">C: {est.carbs}g</span>
                            <span className="bg-background border border-border/40 px-2 py-0.5 rounded-lg">F: {est.fat}g</span>
                          </div>
                          {est.ingredients.length > 0 && (
                            <p className="text-[9px] text-primary/80 font-semibold pt-1">Parsed: {est.ingredients.join(", ")}</p>
                          )}
                        </div>
                      );
                    })()}
                  </motion.div>
                )}

                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={uploading || !smartInput.trim()}
                  className={`flex items-center justify-center space-x-2 bg-primary text-white w-full py-3 rounded-2xl font-extrabold hover:bg-primary/95 transition-all shadow-md shadow-primary/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {uploading ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
                  <span>{uploading ? "Analyzing & Logging..." : "AI Auto Log Meal"}</span>
                </motion.button>
              </form>
            ) : (
              // MANUAL DETAILED FORM MODE
              <form onSubmit={handleManualLog} className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  {/* Photo Gallery & Capture selectors side-by-side */}
                  <div className="flex gap-1 flex-shrink-0">
                    {/* Gallery input */}
                    <label 
                      htmlFor="food-image-gallery-manual" 
                      className="flex flex-col items-center justify-center w-10 h-14 bg-background border border-border/60 hover:border-accent/50 hover:bg-accent/5 rounded-2xl text-accent transition-all cursor-pointer"
                      title="Upload from Gallery"
                    >
                      <Image size={15} />
                      <span className="text-[7px] font-black mt-0.5">Gallery</span>
                    </label>
                    <input 
                      type="file" 
                      id="food-image-gallery-manual" 
                      accept="image/*" 
                      onChange={handleImageChange} 
                      className="hidden" 
                    />

                    {/* Camera capture input */}
                    <label 
                      htmlFor="food-image-capture-manual" 
                      className="flex flex-col items-center justify-center w-10 h-14 bg-background border border-border/60 hover:border-primary/50 hover:bg-primary/5 rounded-2xl text-primary transition-all cursor-pointer"
                      title="Direct Camera Capture"
                    >
                      <Camera size={15} />
                      <span className="text-[7px] font-black mt-0.5">Capture</span>
                    </label>
                    <input 
                      type="file" 
                      id="food-image-capture-manual" 
                      accept="image/*" 
                      capture="environment"
                      onChange={handleImageChange} 
                      className="hidden" 
                    />
                  </div>

                  <input 
                    type="text" 
                    required
                    value={manualName}
                    onChange={(e) => setManualName(e.target.value)}
                    placeholder="Meal name: 'Grilled salmon'..." 
                    className="flex-1 bg-background border border-border/60 px-4 py-3.5 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-semibold text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-secondary tracking-widest pl-1">Calories (kcal)</label>
                    <input 
                      type="number" 
                      required
                      value={manualKcal}
                      onChange={(e) => setManualKcal(e.target.value)}
                      placeholder="e.g. 450" 
                      className="bg-background border border-border/60 px-3.5 py-2.5 rounded-xl w-full outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-semibold text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-secondary tracking-widest pl-1">Protein (g)</label>
                    <input 
                      type="number" 
                      value={manualProtein}
                      onChange={(e) => setManualProtein(e.target.value)}
                      placeholder="e.g. 35" 
                      className="bg-background border border-border/60 px-3.5 py-2.5 rounded-xl w-full outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-semibold text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-secondary tracking-widest pl-1">Carbs (g)</label>
                    <input 
                      type="number" 
                      value={manualCarbs}
                      onChange={(e) => setManualCarbs(e.target.value)}
                      placeholder="e.g. 20" 
                      className="bg-background border border-border/60 px-3.5 py-2.5 rounded-xl w-full outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-semibold text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-secondary tracking-widest pl-1">Fat (g)</label>
                    <input 
                      type="number" 
                      value={manualFat}
                      onChange={(e) => setManualFat(e.target.value)}
                      placeholder="e.g. 10" 
                      className="bg-background border border-border/60 px-3.5 py-2.5 rounded-xl w-full outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-semibold text-xs"
                    />
                  </div>
                </div>

                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={uploading || !manualName.trim()}
                  className={`flex items-center justify-center space-x-2 bg-primary text-white w-full py-3 rounded-2xl font-extrabold hover:bg-primary/95 transition-all shadow-md shadow-primary/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {uploading ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
                  <span>{uploading ? "Logging..." : "Log Manual Meal"}</span>
                </motion.button>
              </form>
            )}

            {/* Dynamic Image Preview Drawer */}
            <AnimatePresence>
              {imagePreview && (
                <motion.div 
                  initial={{ opacity: 0, y: 5, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  className="flex items-center space-x-3 bg-background border border-border/60 p-2 rounded-2xl shadow-sm"
                >
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-border flex-shrink-0">
                    <img src={imagePreview} className="w-full h-full object-cover" alt="Custom meal preview" />
                    {uploading && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Loader2 size={14} className="text-white animate-spin" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-black truncate text-foreground">Custom Photo Attached</p>
                    <p className="text-[10px] text-secondary font-semibold">
                      {uploading ? "Uploading..." : "Ready to log"}
                    </p>
                  </div>
                  <button 
                    type="button"
                    onClick={clearSelectedImage}
                    className="p-1 px-2.5 rounded-lg text-secondary hover:text-destructive hover:bg-destructive/10 transition-all font-bold text-[10px] cursor-pointer"
                  >
                    Remove
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Dynamic Log Notifications */}
        <AnimatePresence>
          {showLogEffect && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl flex items-center justify-between text-emerald-800 text-sm font-bold shadow-sm"
            >
              <span className="flex items-center space-x-2">
                <Sparkles size={16} className="text-emerald-600" />
                <span>Meal successfully added to your logs and statistics updated!</span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Stats Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Calorie Circular Chart Card */}
          <div className="lg:col-span-2 bg-card p-6 sm:p-8 rounded-3xl border border-border/50 shadow-sm flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-8 sm:gap-12 hover:border-primary/20 transition-all duration-300">
            
            {/* Fully Responsive Donut Wrapper */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex-shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={85}
                    paddingAngle={3}
                    dataKey="value"
                    startAngle={90}
                    endAngle={450}
                  >
                    <Cell fill="var(--primary)" stroke="none" />
                    <Cell fill="var(--border)" stroke="none" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              
              {/* Inner Text Stat */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
                <span className="text-3xl sm:text-4.5xl font-black tracking-tight leading-none text-foreground">{kcalEaten.toLocaleString()}</span>
                <span className="text-[10px] text-secondary font-black uppercase tracking-widest mt-1">kcal eaten</span>
              </div>
            </div>

            {/* Structured Stats Side Panel */}
            <div className="flex-1 w-full flex flex-col justify-center space-y-5">
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-secondary">
                  <span>Daily Calorie Goal</span>
                  <span className="text-foreground font-black">{calorieGoal.toLocaleString()} kcal</span>
                </div>
                <div className="h-1.5 bg-border/40 rounded-full overflow-hidden">
                  <div className="h-full bg-primary/40" style={{ width: '100%' }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-secondary">
                  <span>Net Remaining</span>
                  <span className={`font-black ${kcalEaten >= calorieGoal ? "text-rose-500" : "text-primary"}`}>
                    {Math.max(0, calorieGoal - kcalEaten).toLocaleString()} kcal
                  </span>
                </div>
                <div className="h-1.5 bg-border/40 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, (kcalEaten / calorieGoal) * 100)}%` }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-secondary">
                  <span>Burned Calories</span>
                  <span className="text-accent font-black flex items-center space-x-1">
                    <Dumbbell size={14} />
                    <span>{userProgress.kcalBurned.toLocaleString()} kcal</span>
                  </span>
                </div>
                <div className="h-1.5 bg-accent/10 rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: '35%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Macro Cards Block (High visual premium feel) */}
          <div className="flex flex-col gap-4">
            {Object.entries(userProgress.macros).map(([key, rawValue], idx) => {
              const value = rawValue as { current: number; goal: number };
              const macroColors = {
                protein: "bg-primary",
                carbs: "bg-accent",
                fat: "bg-amber-500",
              };
              const label = key === "protein" ? "Protein 🥩" : key === "carbs" ? "Carbs 🍞" : "Fat 🥑";
              
              // Map to dynamic state variables
              const currentVal = key === "protein" ? protein : key === "carbs" ? carbs : fat;
              
              return (
                <motion.div 
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-card p-5 rounded-2.5xl border border-border/50 shadow-sm space-y-3 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex justify-between items-center capitalize">
                    <span className="font-extrabold text-sm text-foreground">{label}</span>
                    <span className="text-xs text-secondary font-semibold">
                      <span className="text-foreground font-black">{currentVal}g</span> / {value.goal}g
                    </span>
                  </div>
                  <div className="h-2 w-full bg-border/40 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, (currentVal / value.goal) * 100)}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className={`h-full ${macroColors[key as keyof typeof macroColors] || "bg-primary"}`} 
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Weekly Progress Mini-Dashboard & Hydration Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Weekly Calorie Bar Chart */}
          <div className="lg:col-span-2 bg-card p-6 sm:p-8 rounded-3xl border border-border/50 shadow-sm space-y-6 hover:border-primary/20 transition-all duration-300">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-black tracking-tight flex items-center space-x-2">
                <Trophy size={18} className="text-primary" />
                <span>Weekly Consistency</span>
              </h2>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">6 Day Streak</span>
            </div>

            {/* Custom pure CSS animated responsive Weekly Bars */}
            <div className="flex justify-between items-end h-40 pt-4 px-2">
              {weeklyData.map((d, index) => {
                const ratio = d.kcal === 0 ? 0 : Math.min(100, (d.kcal / d.goal) * 100);
                const isOver = d.kcal > d.goal;
                
                return (
                  <div key={d.day} className="flex flex-col items-center flex-1 space-y-2 group cursor-pointer">
                    <div className="relative w-full flex items-end justify-center h-28">
                      {/* Hover stats label */}
                      <span className="absolute -top-6 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-white text-[9px] px-2 py-0.5 rounded font-black shadow z-10 whitespace-nowrap">
                        {d.kcal.toLocaleString()} kcal
                      </span>
                      
                      {/* Background Bar */}
                      <div className="w-4 sm:w-6 bg-border/40 h-full rounded-full absolute" />
                      
                      {/* Active Fill Bar */}
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${ratio}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.8, ease: "easeOut" }}
                        className={`w-4 sm:w-6 rounded-full relative z-0 ${
                          d.kcal === 0 
                            ? "bg-transparent" 
                            : isOver 
                              ? "bg-accent" 
                              : "bg-primary"
                        }`}
                      />
                    </div>
                    <span className="text-[10px] font-black text-secondary group-hover:text-foreground transition-colors">{d.day}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Hydration Water Glass Desk */}
          <div className="bg-card p-6 rounded-3xl border border-border/50 shadow-sm flex flex-col justify-between space-y-6 hover:border-primary/20 transition-all duration-300">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black tracking-tight flex items-center space-x-2">
                <GlassWater size={18} className="text-primary animate-pulse" />
                <span>Hydration</span>
              </h2>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-black">
                {Math.min(100, Math.round((waterIntake / 2500) * 100))}% of 2.5L
              </span>
            </div>

            {/* Animated Interactive Cup */}
            <div className="flex items-center justify-center py-2">
              <div className="relative w-28 h-36 border-4 border-foreground/10 rounded-b-3xl rounded-t-lg overflow-hidden flex items-end bg-background shadow-inner">
                {/* Wave/Liquid overlay */}
                <motion.div 
                  animate={{ 
                    y: ["0%", "-4%", "0%"],
                    borderRadius: ["40%", "43%", "40%"]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute left-[-20%] right-[-20%] bg-primary/20 w-[140%] h-[140%] origin-bottom"
                  style={{ bottom: `${Math.min(100, (waterIntake / 2500) * 100) - 100}%` }}
                />
                <motion.div 
                  animate={{ 
                    y: ["0%", "5%", "0%"],
                    borderRadius: ["42%", "38%", "42%"]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute left-[-20%] right-[-20%] bg-primary/80 w-[140%] h-[140%] origin-bottom"
                  style={{ bottom: `${Math.min(100, (waterIntake / 2500) * 100) - 100}%` }}
                />
                
                {/* Water Count Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-10">
                  <span className={`text-2xl font-black tracking-tight transition-colors duration-300 ${waterIntake >= 1200 ? 'text-white' : 'text-foreground'}`}>
                    {waterIntake}
                  </span>
                  <span className={`text-[8px] font-black uppercase tracking-widest transition-colors duration-300 ${waterIntake >= 1200 ? 'text-white/80' : 'text-secondary'}`}>
                    mL Logged
                  </span>
                </div>
              </div>
            </div>

            {/* mL Presets Layout with interactive UI icons */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-black tracking-widest text-secondary block text-center">Tap to Log Volume</span>
              <div className="grid grid-cols-5 gap-1.5">
                {[
                  { label: "1 cup", vol: 150, desc: "150ml", icon: Coffee },
                  { label: "Cup", vol: 300, desc: "300ml", icon: GlassWater },
                  { label: "Big cup", vol: 500, desc: "500ml", icon: CupSoda },
                  { label: "1 bottle", vol: 800, desc: "800ml", icon: Milk },
                  { label: "Big bot", vol: 1000, desc: "1 L", icon: Droplet },
                ].map((preset) => {
                  const Icon = preset.icon;
                  return (
                    <motion.button
                      key={preset.vol}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => addCupOfWater(preset.vol)}
                      type="button"
                      className="flex flex-col items-center justify-center p-2 rounded-xl bg-background border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer group"
                      title={`Add ${preset.desc}`}
                    >
                      <Icon size={16} className="text-primary group-hover:animate-bounce" />
                      <span className="text-[8px] font-black mt-1 text-foreground">{preset.desc}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Deduct options to easily remove mistakes */}
              <div className="flex items-center justify-between border-t border-border/40 pt-3 text-[10px] font-bold text-secondary">
                <button
                  type="button"
                  onClick={() => removeCupOfWater(150)}
                  className="hover:text-rose-500 cursor-pointer flex items-center space-x-0.5"
                >
                  <span>-150ml</span>
                </button>
                <button
                  type="button"
                  onClick={() => removeCupOfWater(300)}
                  className="hover:text-rose-500 cursor-pointer flex items-center space-x-0.5"
                >
                  <span>-300ml</span>
                </button>
                <button
                  type="button"
                  onClick={() => setWaterIntake(0)}
                  className="hover:text-rose-600 font-extrabold cursor-pointer flex items-center space-x-0.5"
                >
                  <RotateCcw size={10} />
                  <span>Clear</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Meals Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black tracking-tight">Nutrition Ledger</h2>
            <button className="text-primary text-sm font-extrabold flex items-center space-x-1 hover:underline cursor-pointer">
              <span>View All Logs</span>
              <ExternalLink size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence>
              {recentMealsList.map((meal) => (
                <motion.div 
                  key={meal.id}
                  initial={{ opacity: 0, y: 25, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  exit={{ opacity: 0, x: -10 }}
                  whileHover={{ scale: 1.008 }}
                  className="bg-card p-4 rounded-2xl border border-border/50 shadow-sm flex items-center justify-between group hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-background border border-border/40 flex-shrink-0">
                      <img src={meal.image} alt={meal.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base leading-snug">{meal.name}</h3>
                      <p className="text-xs text-secondary font-semibold mt-1">{meal.type} • {meal.kcal} kcal</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => deleteMeal(meal.id)}
                    className="p-2 text-secondary hover:text-rose-500 hover:bg-rose-500/10 rounded-full transition-all cursor-pointer"
                    title="Remove meal log"
                  >
                    <Trash2 size={18} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
