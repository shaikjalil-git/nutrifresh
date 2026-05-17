"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { recipes } from "@/lib/data";
import NextLink from "next/link";
import { Clock, Heart, ChefHat, Loader2, AlertCircle } from "lucide-react";
import PageTransition from "@/components/PageTransition";

export default function RecipesPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      // Simulate API call and generation delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Randomly simulate an error to test error handling (10% chance)
      if (Math.random() > 0.9) {
        throw new Error("Failed to connect to AI service. Please try again.");
      }
      
      // In a real app, this would append to the recipes list or redirect to the new recipe
      alert("Recipe successfully generated! (Mock)");
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <PageTransition>
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">All Recipes</h1>
            <p className="text-secondary">Browse our collection of healthy, AI-curated recipes.</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className={`flex items-center justify-center space-x-2 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 ${
                isGenerating ? 'bg-primary/70 cursor-not-allowed' : 'bg-primary hover:bg-primary/90'
              }`}
            >
              {isGenerating ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <ChefHat size={20} />
                  <span>Generate with AI</span>
                </>
              )}
            </button>
            {error && (
              <div className="flex items-center space-x-1 text-red-500 text-xs mt-1">
                <AlertCircle size={12} />
                <span>{error}</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <NextLink href={`/recipes/${recipe.id}`} className="block h-full">
                <div className="bg-card rounded-2xl overflow-hidden card-shadow hover:shadow-lg transition-all duration-300 h-full flex flex-col group-hover:scale-[1.02] border border-border/50">
                  <div className="relative h-48 aspect-video w-full">

                    <img 
                      src={recipe.image} 
                      alt={recipe.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {recipe.kcal} kcal
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex gap-2 mb-2">
                        {recipe.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-[10px] uppercase font-bold text-primary">{tag}</span>
                        ))}
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors mb-3">
                        {recipe.name}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between text-secondary text-sm pt-4 border-t border-border/50">
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>{(recipe as any).time || (recipe as any).prepTime}</span>
                      </div>
                      <div 
                        className="hover:text-primary transition-colors cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          // Add save logic here
                        }}
                      >
                        <Heart size={18} />
                      </div>

                    </div>
                  </div>
                </div>
              </NextLink>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
