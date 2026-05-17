"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, MoreHorizontal, ExternalLink, ChefHat, GlassWater, Trophy, Dumbbell, Sparkles, Camera, Loader2 } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { userProgress } from "@/lib/data";
import PageTransition from "@/components/PageTransition";
import { useState, useEffect } from "react";

// Local storage keys
const STORAGE_KEY = "nutrifresh_meals";

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
  const [formattedDate, setFormattedDate] = useState("");
  const [waterIntake, setWaterIntake] = useState(4); // 4 cups logged
  const [recentMealsList, setRecentMealsList] = useState(userProgress.recentMeals);
  const [kcalEaten, setKcalEaten] = useState(userProgress.kcalEaten);
  const [smartInput, setSmartInput] = useState("");
  const [showLogEffect, setShowLogEffect] = useState(false);

  // Custom Image Uploading states
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const clearSelectedImage = () => {
    setSelectedImage(null);
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }
    setImagePreview(null);
  };

  // Fetch meals from local storage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const meals = JSON.parse(stored);
          if (meals && meals.length > 0) {
            setRecentMealsList(meals);
            const total = meals.reduce((sum: number, m: any) => sum + (m.kcal || 0), 0);
            setKcalEaten(total);
          }
        } catch (e) {
          console.error("Local load meals error: ", e);
        }
      }
    }
  }, []);

  // Parse smart logs (e.g. typing "1 bowl of oatmeal" or just adding a numeric calorie)
  const handleSmartLog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!smartInput.trim() || uploading) return;

    let cal = 250; // default estimated calories
    const mealName = smartInput;

    // A simple intelligent keyword parser
    const lowerInput = smartInput.toLowerCase();
    if (lowerInput.includes("egg")) {
      cal = 140;
    } else if (lowerInput.includes("salad")) {
      cal = 320;
    } else if (lowerInput.includes("shake") || lowerInput.includes("smoothie")) {
      cal = 280;
    } else if (lowerInput.includes("chicken")) {
      cal = 450;
    } else if (lowerInput.includes("banana")) {
      cal = 90;
    } else if (lowerInput.includes("steak") || lowerInput.includes("beef")) {
      cal = 550;
    }

    // Since we don't use Firebase, preview URL is directly used
    const imageUrl = imagePreview || "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=10&w=100";

    const newMeal = {
      id: "m_" + Date.now(),
      name: mealName.charAt(0).toUpperCase() + mealName.slice(1),
      type: "Logged",
      kcal: cal,
      image: imageUrl,
      createdAt: new Date().toISOString()
    };

    const updatedList = [newMeal, ...recentMealsList];
    setRecentMealsList(updatedList);
    setKcalEaten(prev => prev + cal);

    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    }

    setSmartInput("");
    clearSelectedImage();
    setShowLogEffect(true);
    setTimeout(() => setShowLogEffect(false), 2000);
  };

  const addCupOfWater = () => {
    if (waterIntake < 12) {
      setWaterIntake(prev => prev + 1);
    }
  };

  const removeCupOfWater = () => {
    if (waterIntake > 0) {
      setWaterIntake(prev => prev - 1);
    }
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

  const chartData = [
    { name: "Eaten", value: kcalEaten },
    { name: "Remaining", value: Math.max(0, userProgress.kcalGoal - kcalEaten) },
  ];

  return (
    <PageTransition>
      <div className="space-y-10 pb-24">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">Daily Nutrition Desk</h1>
            <p className="text-secondary font-semibold">{formattedDate}</p>
          </div>
          
          {/* Smart Logging Bar (High interactive value!) */}
          <div className="flex flex-col items-stretch sm:items-end gap-2">
            <form onSubmit={handleSmartLog} className="flex flex-col sm:flex-row items-stretch gap-3">
              <div className="relative flex-1 sm:flex-initial flex items-center">
                <input 
                  type="text" 
                  value={smartInput}
                  onChange={(e) => setSmartInput(e.target.value)}
                  placeholder="Smart log: '2 scrambled eggs'..." 
                  className="bg-card border border-border/60 pl-12 pr-10 py-3 rounded-2xl w-full sm:w-72 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-semibold text-sm"
                />
                
                {/* Photo Upload camera trigger */}
                <label 
                  htmlFor="food-image-upload" 
                  className="absolute left-3.5 p-1 bg-primary/5 hover:bg-primary/10 rounded-lg text-primary transition-all cursor-pointer flex items-center justify-center"
                  title="Upload custom food photo"
                >
                  <Camera size={16} />
                </label>
                <input 
                  type="file" 
                  id="food-image-upload" 
                  accept="image/*" 
                  onChange={handleImageChange} 
                  className="hidden" 
                />

                <ChefHat size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-primary opacity-60 pointer-events-none" />
              </div>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={uploading}
                className={`flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-2xl font-extrabold hover:bg-primary/95 transition-all shadow-md shadow-primary/10 cursor-pointer ${uploading ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                {uploading ? <Loader2 size={18} className="animate-spin" /> : <Plus size={18} />}
                <span>{uploading ? "Uploading..." : "Log"}</span>
              </motion.button>
            </form>

            {/* Dynamic Image Preview Drawer */}
            <AnimatePresence>
              {imagePreview && (
                <motion.div 
                  initial={{ opacity: 0, y: 5, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  className="flex items-center space-x-3 bg-card border border-border/50 p-2 rounded-2xl shadow-sm w-full sm:w-72"
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
                    className="p-1 px-2.5 rounded-lg text-secondary hover:text-destructive hover:bg-destructive/10 transition-all font-bold text-[10px]"
                  >
                    Remove
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

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
                    <Cell fill="#1A6B45" stroke="none" />
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
                  <span className="text-foreground font-black">{userProgress.kcalGoal.toLocaleString()} kcal</span>
                </div>
                <div className="h-1.5 bg-border/40 rounded-full overflow-hidden">
                  <div className="h-full bg-primary/40" style={{ width: '100%' }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-secondary">
                  <span>Net Remaining</span>
                  <span className={`font-black ${kcalEaten >= userProgress.kcalGoal ? "text-rose-500" : "text-primary"}`}>
                    {Math.max(0, userProgress.kcalGoal - kcalEaten).toLocaleString()} kcal
                  </span>
                </div>
                <div className="h-1.5 bg-border/40 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, (kcalEaten / userProgress.kcalGoal) * 100)}%` }}
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
            {Object.entries(userProgress.macros).map(([key, value], idx) => {
              const macroColors = {
                protein: "bg-primary",
                carbs: "bg-accent",
                fat: "bg-amber-500",
              };
              const label = key === "protein" ? "Protein 🥩" : key === "carbs" ? "Carbs 🍞" : "Fat 🥑";
              
              return (
                <motion.div 
                  key={key}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card p-5 rounded-2.5xl border border-border/50 shadow-sm space-y-3 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex justify-between items-center capitalize">
                    <span className="font-extrabold text-sm text-foreground">{label}</span>
                    <span className="text-xs text-secondary font-semibold">
                      <span className="text-foreground font-black">{value.current}g</span> / {value.goal}g
                    </span>
                  </div>
                  <div className="h-2 w-full bg-border/40 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(value.current / value.goal) * 100}%` }}
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
                        animate={{ height: `${ratio}%` }}
                        transition={{ delay: index * 0.05, duration: 0.8 }}
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
                {Math.round((waterIntake / 8) * 100)}% Done
              </span>
            </div>

            {/* Animated Interactive Cup */}
            <div className="flex items-center justify-center py-4">
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
                  style={{ bottom: `${(waterIntake / 8) * 100 - 100}%` }}
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
                  style={{ bottom: `${(waterIntake / 8) * 100 - 100}%` }}
                />
                
                {/* Water Count Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-10">
                  <span className={`text-3xl font-black transition-colors duration-300 ${waterIntake >= 5 ? 'text-white' : 'text-foreground'}`}>
                    {waterIntake}
                  </span>
                  <span className={`text-[9px] font-black uppercase tracking-widest transition-colors duration-300 ${waterIntake >= 5 ? 'text-white/80' : 'text-secondary'}`}>
                    Cups Logged
                  </span>
                </div>
              </div>
            </div>

            {/* Cup Control Buttons */}
            <div className="flex items-center space-x-3 w-full">
              <button 
                onClick={removeCupOfWater}
                className="flex-1 py-2.5 rounded-xl border border-border/60 bg-background font-bold text-xs hover:border-primary/40 hover:text-primary transition-all cursor-pointer text-center"
              >
                - 1 Cup
              </button>
              <button 
                onClick={addCupOfWater}
                className="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold text-xs hover:bg-primary/95 transition-all shadow-md shadow-primary/10 cursor-pointer text-center"
              >
                + 1 Cup
              </button>
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
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
                  <button className="p-2 text-secondary hover:text-primary hover:bg-primary/5 rounded-full transition-all cursor-pointer">
                    <MoreHorizontal size={20} />
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
