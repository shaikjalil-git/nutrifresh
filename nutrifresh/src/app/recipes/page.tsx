"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { recipes } from "@/lib/data";
import NextLink from "next/link";
import { Clock, Heart, ChefHat, Loader2, AlertCircle, Search, Filter, Sparkles, Flame } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const availableFilters = ["All", "Vegan", "Gluten-Free", "High Protein", "Keto", "Quick & Easy", "Breakfast"];

export default function RecipesPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedRecipes, setSavedRecipes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const toggleSave = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedRecipes(prev => 
      prev.includes(id) ? prev.filter(rId => rId !== id) : [...prev, id]
    );
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      // Simulate API call and generation delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, this would append to the recipes list or redirect to the new recipe
      alert("AI Chef is preparing your customized recipe! Check back in a moment.");
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
      setError(errorMessage);
    } finally {
      setIsGenerating(false);
    }
  };

  // Live filter and search logic
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          recipe.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (activeFilter === "All") return matchesSearch;
    const matchesTag = recipe.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase());
    return matchesSearch && matchesTag;
  });

  return (
    <PageTransition>
      <div className="space-y-10 pb-24">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">AI Recipe Conservatory</h1>
            <p className="text-secondary font-medium">Browse and search our chef-crafted, AI-curated nutrition database.</p>
          </div>
          
          <div className="flex flex-col items-stretch md:items-end gap-2">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={handleGenerate}
              disabled={isGenerating}
              className={`flex items-center justify-center space-x-2 text-white px-6 py-3.5 rounded-2xl font-extrabold transition-all shadow-md shadow-primary/10 cursor-pointer ${
                isGenerating ? 'bg-primary/70 cursor-not-allowed' : 'bg-primary hover:bg-primary/95'
              }`}
            >
              {isGenerating ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Curating Chef Options...</span>
                </>
              ) : (
                <>
                  <Sparkles size={18} className="fill-current" />
                  <span>Assemble with AI</span>
                </>
              )}
            </motion.button>
            {error && (
              <div className="flex items-center space-x-1.5 text-red-500 text-xs mt-1 font-semibold">
                <AlertCircle size={12} />
                <span>{error}</span>
              </div>
            )}
          </div>
        </div>

        {/* Search Bar & Filters controls */}
        <div className="bg-card border border-border/50 p-4 rounded-3xl shadow-sm space-y-4 hover:border-primary/10 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            
            {/* Live Search Input */}
            <div className="relative flex-1">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search recipe catalog by name, keywords or tags..." 
                className="w-full bg-background border border-border/50 pl-11 pr-4 py-3 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-semibold text-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={18} />
            </div>

            <div className="flex items-center space-x-2 bg-background border border-border/50 px-4 py-3 rounded-2xl font-bold text-xs text-secondary">
              <Filter size={14} className="text-primary" />
              <span>{filteredRecipes.length} Matches Found</span>
            </div>
          </div>

          {/* Interactive Tag Pill Row with layout animations */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pt-1">
            {availableFilters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive ? "text-white" : "text-secondary hover:text-foreground bg-background border border-border/40 hover:border-primary/30"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeFilterCatalog"
                      className="absolute inset-0 bg-primary rounded-full z-0"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{filter}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredRecipes.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredRecipes.map((recipe, index) => {
                  const isSaved = savedRecipes.includes(recipe.id);
                  return (
                    <motion.div
                      layout
                      key={recipe.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: index * 0.03 }}
                      className="group"
                    >
                      <NextLink href={`/recipes/${recipe.id}`} className="block h-full">
                        <div className="bg-card rounded-2.5xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col group-hover:scale-[1.015]">
                          <div className="relative h-48 w-full overflow-hidden">
                            <img 
                              src={recipe.image} 
                              alt={recipe.name} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                            
                            {/* Calories Badge Overlay */}
                            <div className="absolute bottom-3 left-3 flex space-x-1.5">
                              <span className="bg-primary/95 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full text-[10px] font-extrabold shadow-sm flex items-center space-x-1">
                                <Flame size={10} className="fill-current" />
                                <span>{recipe.kcal} kcal</span>
                              </span>
                            </div>

                            {/* Saved Heart Button */}
                            <motion.button 
                              whileTap={{ scale: 0.7 }}
                              onClick={(e) => toggleSave(e, recipe.id)}
                              className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md border shadow-sm transition-all ${
                                isSaved
                                  ? "bg-rose-500 border-rose-500 text-white"
                                  : "bg-white/20 border-white/30 text-white hover:bg-white hover:text-rose-500"
                              }`}
                            >
                              <Heart size={14} className={isSaved ? "fill-current" : ""} />
                            </motion.button>
                          </div>
                          
                          <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                            <div className="space-y-2">
                              <div className="flex gap-1.5 flex-wrap">
                                {recipe.tags.slice(0, 3).map(tag => (
                                  <span key={tag} className="text-[9px] uppercase tracking-widest font-black text-primary bg-primary/5 border border-primary/10 px-1.5 py-0.5 rounded">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <h3 className="font-extrabold text-base text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                                {recipe.name}
                              </h3>
                              <p className="text-xs text-secondary line-clamp-2 leading-relaxed font-semibold">
                                {recipe.description}
                              </p>
                            </div>
                            
                            <div className="flex items-center justify-between text-secondary text-xs font-semibold pt-3 border-t border-border/40">
                              <div className="flex items-center space-x-1.5">
                                <Clock size={14} className="text-primary" />
                                <span>{recipe.prepTime || "15m"}</span>
                              </div>
                              <div className="flex items-center space-x-1.5">
                                <ChefHat size={14} className="text-primary" />
                                <span>{recipe.difficulty || "Easy"}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NextLink>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-card border border-border/50 rounded-3xl p-8 space-y-3"
              >
                <div className="p-4 bg-primary/5 rounded-full inline-block text-primary">
                  <ChefHat size={32} />
                </div>
                <h3 className="text-lg font-black">No Recipes Found</h3>
                <p className="text-secondary text-sm max-w-sm mx-auto font-medium">Try broadening your search query or switching your active filter category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
}
