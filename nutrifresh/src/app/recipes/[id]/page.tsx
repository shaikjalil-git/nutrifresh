"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ChevronLeft, 
  Heart, 
  Clock, 
  Users, 
  Flame, 
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { recipes } from "@/lib/data";
import { useState } from "react";

import PageTransition from "@/components/PageTransition";

export default function RecipeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const recipe = recipes.find(r => r.id === params.id) || recipes[0];
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);

  const toggleIngredient = (ingredient: string) => {
    setCheckedIngredients(prev => 
      prev.includes(ingredient) 
        ? prev.filter(i => i !== ingredient) 
        : [...prev, ingredient]
    );
  };

  return (
    <PageTransition>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto space-y-8"
      >

      {/* Breadcrumb & Top Bar */}
      <div className="flex items-center justify-between">
        <nav className="flex items-center space-x-2 text-sm text-secondary">
          <button onClick={() => router.push("/")} className="hover:text-primary transition-colors">Feed</button>
          <ChevronRight size={14} />
          <span className="text-foreground font-medium">Recipes</span>
        </nav>
        <button className="flex items-center space-x-2 px-4 py-2 border border-border rounded-lg font-medium hover:border-primary hover:text-primary transition-all">
          <Heart size={18} />
          <span>Save Recipe</span>
        </button>
      </div>

      {/* Header Info */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {recipe.tags.map(tag => (
            <span key={tag} className="px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold">{recipe.name}</h1>
        <p className="text-secondary text-lg max-w-3xl">{recipe.description}</p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-[300px] md:h-[500px]">
        <div className="md:col-span-3 rounded-2xl overflow-hidden card-shadow">
          <img src={recipe.image} className="w-full h-full object-cover" alt={recipe.name} />
        </div>
        <div className="md:col-span-2 grid grid-rows-2 gap-4">
          {recipe.sideImages?.map((img, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden card-shadow">
              <img src={img} className="w-full h-full object-cover" alt={`${recipe.name} view ${idx + 1}`} />
            </div>
          )) || [1, 2].map(i => (
             <div key={i} className="rounded-2xl overflow-hidden card-shadow bg-gray-100" />
          ))}
        </div>
      </div>

      {/* Meta Bar */}
      <div className="bg-card border border-border rounded-xl px-8 py-4 flex flex-wrap justify-between items-center gap-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 text-primary rounded-lg">
            <Clock size={20} />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-secondary font-bold">Prep time</p>
            <p className="font-semibold">{recipe.prepTime}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 text-primary rounded-lg">
            <Clock size={20} />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-secondary font-bold">Cook time</p>
            <p className="font-semibold">{recipe.cookTime}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 text-primary rounded-lg">
            <Users size={20} />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-secondary font-bold">Serves</p>
            <p className="font-semibold">{recipe.serves}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 text-primary rounded-lg">
            <Flame size={20} />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-secondary font-bold">Total Kcal</p>
            <p className="font-semibold text-primary">{recipe.kcal} kcal</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ingredients */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-card p-8 rounded-2xl border border-border card-shadow space-y-6">
            <div className="flex items-center space-x-3 text-primary">
              <CheckCircle2 size={24} />
              <h2 className="text-2xl font-bold">Ingredients</h2>
            </div>
            
            {recipe.ingredients?.map((section, idx) => (

              <div key={idx} className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-secondary">{section.category}</h3>
                <div className="space-y-3">
                  {section.items.map((item, iIdx) => (
                    <label 
                      key={iIdx} 
                      className="flex items-center p-3 rounded-xl border border-transparent hover:border-primary/10 hover:bg-primary/5 transition-all cursor-pointer group"
                    >
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="checkbox" 
                          checked={checkedIngredients.includes(item)}
                          onChange={() => toggleIngredient(item)}
                          className="peer appearance-none w-5 h-5 border-2 border-border rounded-md checked:bg-primary checked:border-primary transition-all"
                        />
                        <CheckCircle2 className="absolute text-white scale-0 peer-checked:scale-75 transition-transform" size={14} />
                      </div>
                      <span className={`ml-4 text-base transition-colors ${checkedIngredients.includes(item) ? 'text-secondary line-through' : 'text-foreground font-medium'}`}>
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Instructions */}
          <section className="bg-card p-8 rounded-2xl border border-border card-shadow space-y-8">
            <div className="flex items-center space-x-3 text-primary">
              <ChevronRight size={24} className="rotate-90" />
              <h2 className="text-2xl font-bold">Instructions</h2>
            </div>
            <div className="space-y-8">
              {recipe.instructions?.map((step: any, idx: number) => (
                <div key={idx} className="flex space-x-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold">{step.title}</h4>
                    <p className="text-secondary leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Nutrition Side Card */}
        <div className="space-y-6">
          {recipe.nutrition && (
            <section className="bg-card p-6 rounded-2xl border border-border card-shadow sticky top-28">

            <div className="flex items-center space-x-3 text-primary mb-6">
              <Flame size={24} />
              <h2 className="text-xl font-bold">Nutrition Facts</h2>
            </div>
            <p className="text-xs text-secondary mb-6">Per Serving ({recipe.nutrition.perServing})</p>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>Calories</span>
                  <span>{recipe.nutrition.calories} kcal</span>
                </div>
                <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '85%' }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>Protein</span>
                  <span>{recipe.nutrition.protein}g</span>
                </div>
                <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-primary opacity-80" style={{ width: '60%' }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>Carbs</span>
                  <span>{recipe.nutrition.carbs}g</span>
                </div>
                <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-primary opacity-60" style={{ width: '70%' }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>Fat</span>
                  <span>{recipe.nutrition.fat}g</span>
                </div>
                <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-primary opacity-40" style={{ width: '40%' }} />
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary mb-4">Vitamins & Minerals</h4>
                <div className="space-y-3">
                  {recipe.nutrition.vitamins?.map((v: any, idx: number) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-secondary">{v.name}</span>
                      <span className="font-bold">{v.value}</span>
                    </div>
                  ))}
                </div>
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

