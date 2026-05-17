"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Heart, 
  Clock, 
  Users, 
  Flame, 
  CheckCircle2,
  ChevronRight,
  Apple,
  Sparkles,
  Award
} from "lucide-react";
import { recipes } from "@/lib/data";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";

interface InstructionStep {
  step: number;
  title: string;
  description: string;
}

interface Micronutrient {
  name: string;
  value: string;
}

export default function RecipeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const recipe = recipes.find(r => r.id === params.id) || recipes[0];
  
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isSaved, setIsSaved] = useState(false);

  const toggleIngredient = (ingredient: string) => {
    setCheckedIngredients(prev => 
      prev.includes(ingredient) 
        ? prev.filter(i => i !== ingredient) 
        : [...prev, ingredient]
    );
  };

  const toggleStep = (stepNumber: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepNumber)
        ? prev.filter(s => s !== stepNumber)
        : [...prev, stepNumber]
    );
  };

  const totalIngredientsCount = recipe.ingredients?.reduce((acc, current) => acc + current.items.length, 0) || 0;
  const ingredientsProgress = (checkedIngredients.length / totalIngredientsCount) * 100;
  const stepsProgress = (completedSteps.length / (recipe.instructions?.length || 1)) * 100;

  return (
    <PageTransition>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto space-y-8 pb-24"
      >
        {/* Breadcrumb & Action bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <nav className="flex items-center space-x-2 text-xs font-bold text-secondary uppercase tracking-wider">
            <button onClick={() => router.push("/")} className="hover:text-primary transition-colors cursor-pointer">Feed</button>
            <ChevronRight size={12} />
            <button onClick={() => router.push("/recipes")} className="hover:text-primary transition-colors cursor-pointer">Recipes</button>
            <ChevronRight size={12} />
            <span className="text-foreground font-black truncate max-w-[150px]">{recipe.name}</span>
          </nav>
          
          <div className="flex space-x-2">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSaved(!isSaved)}
              className={`flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-5 py-2.5 border rounded-xl font-extrabold text-xs transition-all cursor-pointer ${
                isSaved 
                  ? "bg-rose-500 border-rose-500 text-white shadow-md shadow-rose-500/10" 
                  : "bg-card border-border/60 text-secondary hover:border-primary/40 hover:text-primary"
              }`}
            >
              <Heart size={14} className={isSaved ? "fill-current" : ""} />
              <span>{isSaved ? "Saved" : "Save Recipe"}</span>
            </motion.button>
          </div>
        </div>

        {/* Header Block */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            <span className="px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-[10px] font-black rounded-md uppercase tracking-wider">
              98% Personal Match
            </span>
            {recipe.tags.map(tag => (
              <span key={tag} className="px-3 py-1 border border-border/60 bg-card text-secondary text-[10px] font-bold rounded-md uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-foreground">{recipe.name}</h1>
          <p className="text-secondary text-base md:text-lg font-semibold max-w-3xl leading-relaxed">{recipe.description}</p>
        </div>

        {/* Fully Responsive Image Grid */}
        {/* On mobile, it shows a neat hero image, on tablet/desktop it expands to a gorgeous 5-column collage */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-[250px] sm:h-[350px] md:h-[450px] w-full">
          <div className="col-span-1 md:col-span-3 rounded-3xl overflow-hidden shadow-sm border border-border/40 relative">
            <img src={recipe.image} className="w-full h-full object-cover" alt={recipe.name} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          <div className="hidden md:col-span-2 md:grid grid-rows-2 gap-4">
            {recipe.sideImages?.map((img, idx) => (
              <div key={idx} className="rounded-3xl overflow-hidden shadow-sm border border-border/40 bg-card">
                <img src={img} className="w-full h-full object-cover" alt={`${recipe.name} side angle ${idx + 1}`} />
              </div>
            )) || [
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400"
            ].map((img, idx) => (
              <div key={idx} className="rounded-3xl overflow-hidden shadow-sm border border-border/40 bg-card">
                <img src={img} className="w-full h-full object-cover" alt="Complementary view" />
              </div>
            ))}
          </div>
        </div>

        {/* Structured Spec Bar (Highly responsive layout) */}
        <div className="bg-card border border-border/50 rounded-2.5xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-sm hover:border-primary/10 transition-all duration-300">
          <div className="flex items-center space-x-3.5 border-r border-border/30 last:border-0 pr-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-2xl flex-shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-secondary font-black">Prep Time</p>
              <p className="font-extrabold text-sm sm:text-base text-foreground">{recipe.prepTime || "15m"}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3.5 border-r border-border/30 last:border-0 pr-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-2xl flex-shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-secondary font-black">Cook Time</p>
              <p className="font-extrabold text-sm sm:text-base text-foreground">{recipe.cookTime || "25m"}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3.5 border-r border-border/30 last:border-0 pr-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-2xl flex-shrink-0">
              <Users size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-secondary font-black">Servings</p>
              <p className="font-extrabold text-sm sm:text-base text-foreground">{recipe.serves || 2} Persons</p>
            </div>
          </div>
          <div className="flex items-center space-x-3.5 border-r border-border/30 last:border-0 pr-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-2xl flex-shrink-0">
              <Flame size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-secondary font-black">Calories</p>
              <p className="font-extrabold text-sm sm:text-base text-primary">{recipe.kcal} kcal</p>
            </div>
          </div>
        </div>

        {/* Main Cooking Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Ingredients & Steps column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Ingredients Segment with progressive check bar */}
            <section className="bg-card p-6 sm:p-8 rounded-3xl border border-border/50 shadow-sm space-y-6 hover:border-primary/10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 border-b border-border/40 pb-4">
                <div className="flex items-center space-x-3 text-primary">
                  <Apple size={22} className="fill-current" />
                  <h2 className="text-xl sm:text-2xl font-black text-foreground">Ingredients Checklist</h2>
                </div>
                
                {/* Visual Progress Bar */}
                <div className="flex items-center space-x-3 min-w-[150px]">
                  <div className="h-2 flex-1 bg-border/40 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary" 
                      style={{ width: `${ingredientsProgress}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-black text-secondary whitespace-nowrap">
                    {checkedIngredients.length}/{totalIngredientsCount} Items
                  </span>
                </div>
              </div>
              
              <div className="space-y-6">
                {recipe.ingredients?.map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">{section.category}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {section.items.map((item, iIdx) => {
                        const isChecked = checkedIngredients.includes(item);
                        return (
                          <label 
                            key={iIdx} 
                            className={`flex items-center p-3 rounded-2xl border transition-all cursor-pointer group ${
                              isChecked 
                                ? "bg-primary/5 border-primary/20 text-secondary" 
                                : "bg-background border-border/45 hover:border-primary/30 text-foreground"
                            }`}
                          >
                            <input 
                              type="checkbox" 
                              checked={isChecked}
                              onChange={() => toggleIngredient(item)}
                              className="w-4 h-4 accent-primary rounded border-border cursor-pointer flex-shrink-0"
                            />
                            <span className={`ml-3.5 text-xs sm:text-sm font-semibold transition-all leading-normal ${isChecked ? 'line-through opacity-70' : ''}`}>
                              {item}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Step-by-Step Instructions with Progress checklist */}
            <section className="bg-card p-6 sm:p-8 rounded-3xl border border-border/50 shadow-sm space-y-6 hover:border-primary/10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 border-b border-border/40 pb-4">
                <div className="flex items-center space-x-3 text-primary">
                  <CheckCircle2 size={22} className="fill-current" />
                  <h2 className="text-xl sm:text-2xl font-black text-foreground">Cooking Guide</h2>
                </div>
                
                {/* Steps Progress bar */}
                <div className="flex items-center space-x-3 min-w-[150px]">
                  <div className="h-2 flex-1 bg-border/40 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary" 
                      style={{ width: `${stepsProgress}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-black text-secondary whitespace-nowrap">
                    {completedSteps.length}/{recipe.instructions?.length || 1} Steps Done
                  </span>
                </div>
              </div>

              <div className="space-y-6 pt-2">
                {recipe.instructions?.map((step: InstructionStep, idx: number) => {
                  const isDone = completedSteps.includes(step.step);
                  return (
                    <motion.div 
                      key={idx} 
                      onClick={() => toggleStep(step.step)}
                      className={`flex items-start p-4 rounded-2.5xl border transition-all cursor-pointer group ${
                        isDone 
                          ? "bg-primary/5 border-primary/20 opacity-75"
                          : "bg-background border-border/40 hover:border-primary/20"
                      }`}
                    >
                      {/* Step Number Badge */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm mr-4 transition-all ${
                        isDone 
                          ? "bg-primary text-white"
                          : "bg-card border border-border/60 text-secondary group-hover:border-primary/50 group-hover:text-primary"
                      }`}>
                        {step.step}
                      </div>

                      {/* Text info */}
                      <div className="space-y-1.5 flex-1 pr-2">
                        <h4 className={`text-base font-extrabold transition-colors duration-300 ${isDone ? 'text-secondary line-through' : 'text-foreground'}`}>
                          {step.title}
                        </h4>
                        <p className={`text-xs sm:text-sm font-semibold leading-relaxed transition-all duration-300 ${isDone ? 'text-secondary/70' : 'text-secondary'}`}>
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Premium Nutrition Side Column */}
          <div className="space-y-6">
            {recipe.nutrition && (
              <section className="bg-card p-6 rounded-3xl border border-border/50 shadow-sm sticky top-24 hover:border-primary/10 transition-all duration-300 space-y-6">
                
                {/* Section Header */}
                <div className="flex items-center space-x-3 text-primary border-b border-border/45 pb-3">
                  <Flame size={20} className="fill-current" />
                  <h2 className="text-lg font-black text-foreground">Nutrition Analysis</h2>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-secondary">Suggested Intake Portion</p>
                  <p className="text-sm font-extrabold text-foreground">Per Serving ({recipe.nutrition.perServing})</p>
                </div>

                {/* Macro progress lists */}
                <div className="space-y-4 pt-2">
                  {[
                    { label: "Calories 🔥", value: `${recipe.nutrition.calories} kcal`, pct: "85%", col: "bg-primary" },
                    { label: "Protein 🥩", value: `${recipe.nutrition.protein}g`, pct: "60%", col: "bg-primary/90" },
                    { label: "Carbohydrates 🍞", value: `${recipe.nutrition.carbs}g`, pct: "75%", col: "bg-accent" },
                    { label: "Healthy Fats 🥑", value: `${recipe.nutrition.fat}g`, pct: "40%", col: "bg-amber-500" }
                  ].map((macro) => (
                    <div key={macro.label} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-extrabold text-foreground">
                        <span>{macro.label}</span>
                        <span>{macro.value}</span>
                      </div>
                      <div className="h-2 w-full bg-border/40 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: macro.pct }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-full ${macro.col} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Micro-Vitamins and Minerals statistics grid */}
                  <div className="pt-5 border-t border-border/40 space-y-3.5">
                    <h4 className="text-[9px] font-black uppercase tracking-widest text-secondary flex items-center space-x-1.5">
                      <Award size={12} className="text-primary" />
                      <span>Beneficial Micronutrients</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {recipe.nutrition.vitamins?.map((v: Micronutrient, idx: number) => (
                        <div key={idx} className="bg-background border border-border/50 p-2.5 rounded-xl text-center space-y-0.5">
                          <p className="text-[9px] font-black text-secondary uppercase tracking-wider">{v.name}</p>
                          <p className="font-extrabold text-xs text-primary">{v.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Chef Tip Info card */}
                <div className="bg-primary/5 border border-primary/10 p-4 rounded-2xl flex items-start space-x-3 text-xs leading-relaxed text-primary">
                  <Sparkles size={16} className="fill-current mt-0.5 flex-shrink-0" />
                  <div className="space-y-1">
                    <p className="font-black uppercase tracking-widest text-[9px]">AI Chef Suggestion</p>
                    <p className="font-semibold text-secondary">To optimize bio-availability of active iron in quinoa, splash a squeeze of fresh lemon juice right before serving!</p>
                  </div>
                </div>

              </section>
            )}
          </div>
        </div>

      </motion.div>
    </PageTransition>
  );
}
