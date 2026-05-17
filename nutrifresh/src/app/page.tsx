"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Clock, ChefHat, Flame, Sparkles, TrendingUp, Filter } from "lucide-react";
import { recipes, userProfile, userProgress } from "@/lib/data";
import NextLink from "next/link";
import PageTransition from "@/components/PageTransition";
import { useAuth } from "@/context/AuthContext";
import React from "react";

const filters = ["All", "Breakfast", "Vegan", "Quick & Easy", "High Protein", "Keto"];

export default function FeedPage() {
  const { profile } = useAuth();
  const [activeFilter, setActiveFilter] = useState("All");
  const [savedRecipes, setSavedRecipes] = useState<string[]>([]);
  const [waterCups, setWaterCups] = useState(4);

  // Fallback properties
  const displayName = profile?.firstName || userProfile.firstName;
  const activePreferences = profile?.dietaryPreferences && profile.dietaryPreferences.length > 0
    ? profile.dietaryPreferences
    : userProfile.dietaryPreferences;

  const toggleSave = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedRecipes(prev => 
      prev.includes(id) ? prev.filter(rId => rId !== id) : [...prev, id]
    );
  };

  // Filter recipes based on selected category tag
  const filteredRecipes = recipes.filter(recipe => {
    if (activeFilter === "All") return true;
    return recipe.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase());
  });

  const featuredRecipe = recipes[0];
  const displayRecipes = filteredRecipes.filter(r => r.id !== featuredRecipe.id || activeFilter !== "All");

  return (
    <PageTransition>
      <div className="space-y-10">
        
        {/* Greeting Header & Personalization Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-2"
          >
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground flex items-center space-x-3">
              <span>Good Morning, {displayName}!</span>
              <motion.span
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block"
              >
                👋
              </motion.span>
            </h1>
            <p className="text-secondary text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              We&apos;ve curated customized nutrition goals and gourmet recipes tailored specifically to your{" "}
              {activePreferences.map((pref, idx) => (
                <React.Fragment key={pref}>
                  {idx > 0 && " and "}
                  <span className="text-primary font-bold">{pref}</span>
                </React.Fragment>
              ))} preferences.
            </p>
          </motion.div>

          {/* Quick Summary Cards (High Information Density!) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Calories Progress Widget */}
            <div className="bg-card border border-border/60 p-4 rounded-2xl shadow-sm flex flex-col justify-between space-y-4 hover:border-primary/30 transition-all duration-300">
              <div className="flex justify-between items-center">
                <span className="text-xs font-black uppercase tracking-wider text-secondary">Calories</span>
                <Flame size={16} className="text-accent" />
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline space-x-1">
                  <span className="text-2xl font-black tracking-tight">{userProgress.kcalEaten}</span>
                  <span className="text-xs font-medium text-secondary">/ {profile?.kcalGoal || userProgress.kcalGoal} kcal</span>
                </div>
                <div className="h-2 w-full bg-border/40 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(userProgress.kcalEaten / (profile?.kcalGoal || userProgress.kcalGoal)) * 100}%` }}
                    className="h-full bg-primary rounded-full"
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>

            {/* Quick Hydration Widget */}
            <div className="bg-card border border-border/60 p-4 rounded-2xl shadow-sm flex flex-col justify-between space-y-4 hover:border-primary/30 transition-all duration-300">
              <div className="flex justify-between items-center">
                <span className="text-xs font-black uppercase tracking-wider text-secondary">Hydration</span>
                <span className="text-xs font-bold text-primary">{waterCups}/8 cups</span>
              </div>
              <div className="flex justify-between items-end gap-1">
                {[...Array(8)].map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setWaterCups(i + 1)}
                    whileTap={{ scale: 0.8 }}
                    className={`h-7 w-2.5 rounded-full transition-all border ${
                      i < waterCups 
                        ? "bg-primary border-primary" 
                        : "bg-background border-border/60 hover:border-primary/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filter Pill Row with sliding background indicator */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 border-b border-border/40 pb-3 overflow-x-auto no-scrollbar">
            <Filter size={16} className="text-secondary flex-shrink-0" />
            <div className="flex items-center space-x-2.5">
              {filters.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`relative px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      isActive ? "text-white" : "text-secondary hover:text-foreground bg-card border border-border/60 hover:border-primary/40"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeFilterPill"
                        className="absolute inset-0 bg-primary rounded-full z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                    <span className="relative z-10">{filter}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Recipe Display Section */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {/* Show Featured Recipe Card ONLY if filter is "All" or matches its tags */}
            {activeFilter === "All" && (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group"
              >
                <NextLink href={`/recipes/${featuredRecipe.id}`} className="block h-full">
                  <div className="relative rounded-3xl overflow-hidden shadow-md border border-border/50 bg-card hover:shadow-xl group-hover:scale-[1.005] transition-all duration-500 flex flex-col md:flex-row min-h-[380px]">
                    
                    {/* Featured Tag and Calories Bar overlay on image */}
                    <div className="absolute top-4 left-4 z-10 flex space-x-2">
                      <span className="bg-primary/95 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-extrabold flex items-center space-x-1 shadow-sm">
                        <Sparkles size={12} className="fill-current" />
                        <span>TODAY&apos;S PICK</span>
                      </span>
                      <span className="bg-foreground/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                        {featuredRecipe.kcal} kcal
                      </span>
                    </div>

                    {/* Animated Heart Button */}
                    <motion.button 
                      whileTap={{ scale: 0.7 }}
                      onClick={(e) => toggleSave(e, featuredRecipe.id)}
                      className={`absolute top-4 right-4 z-10 p-3 rounded-full backdrop-blur-md border shadow-sm transition-all ${
                        savedRecipes.includes(featuredRecipe.id)
                          ? "bg-rose-500 border-rose-500 text-white"
                          : "bg-white/20 border-white/30 text-white hover:bg-white hover:text-rose-500"
                      }`}
                    >
                      <Heart size={18} className={savedRecipes.includes(featuredRecipe.id) ? "fill-current animate-ping-once" : ""} />
                    </motion.button>

                    {/* Left/Top Image Block - Fully Responsive Aspect Aspect Ratio */}
                    <div className="relative w-full md:w-1/2 min-h-[250px] md:min-h-full overflow-hidden">
                      <img 
                        src={featuredRecipe.image} 
                        alt={featuredRecipe.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
                    </div>

                    {/* Right/Bottom Content Block */}
                    <div className="p-6 md:p-10 w-full md:w-1/2 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="bg-primary/10 text-primary text-[10px] uppercase tracking-widest font-black px-2 py-0.5 rounded-md">
                            98% Personal Match
                          </span>
                          {featuredRecipe.tags.map(tag => (
                            <span key={tag} className="text-[10px] uppercase tracking-widest font-black text-secondary">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-2xl md:text-3.5xl font-black text-foreground group-hover:text-primary transition-colors leading-tight">
                          {featuredRecipe.name}
                        </h2>
                        <p className="text-secondary text-sm md:text-base font-medium line-clamp-3 leading-relaxed">
                          {featuredRecipe.description}
                        </p>
                      </div>

                      {/* Specs */}
                      <div className="flex items-center space-x-6 border-t border-border/50 pt-4 text-secondary text-sm font-semibold">
                        <div className="flex items-center space-x-2">
                          <Clock size={16} className="text-primary" />
                          <span>{featuredRecipe.prepTime} + {featuredRecipe.cookTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ChefHat size={16} className="text-primary" />
                          <span>{featuredRecipe.difficulty}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-primary font-bold">
                          <TrendingUp size={16} />
                          <span>{(featuredRecipe.ingredients || []).reduce((acc, current) => acc + current.items.length, 0)} ingredients</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </NextLink>
              </motion.div>
            )}

            {/* General Recipe Cards Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {displayRecipes.map((recipe, index) => {
                const isSaved = savedRecipes.includes(recipe.id);
                return (
                  <motion.div
                    layout
                    key={recipe.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05 }}
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
                          
                          {/* Tags overlay */}
                          <div className="absolute bottom-3 left-3 flex space-x-1.5">
                            <span className="bg-primary/95 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full text-[10px] font-extrabold shadow-sm">
                              {recipe.kcal} kcal
                            </span>
                            <span className="bg-white/95 backdrop-blur-md text-foreground px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm">
                              95% Match
                            </span>
                          </div>

                          {/* Heart Button */}
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
                              {recipe.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="text-[9px] uppercase tracking-widest font-black text-primary bg-primary/5 border border-primary/10 px-1.5 py-0.5 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <h3 className="font-extrabold text-base text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                              {recipe.name}
                            </h3>
                          </div>
                          
                          <div className="flex items-center justify-between text-secondary text-xs font-semibold pt-3 border-t border-border/40">
                            <div className="flex items-center space-x-1.5">
                              <Clock size={14} className="text-primary" />
                              <span>{recipe.prepTime}</span>
                            </div>
                            <div className="flex items-center space-x-1.5">
                              <ChefHat size={14} className="text-primary" />
                              <span>{recipe.difficulty}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NextLink>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </PageTransition>
  );
}
