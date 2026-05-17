"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Clock, ChefHat } from "lucide-react";
import { recipes, userProfile } from "@/lib/data";
import NextLink from "next/link";
import PageTransition from "@/components/PageTransition";

const filters = ["All", "Breakfast", "Vegan", "Quick & Easy", "High Protein", "Keto"];

export default function FeedPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const featuredRecipe = recipes[0];
  const otherRecipes = recipes.slice(1);

  return (
    <PageTransition>
      <div className="space-y-10">
        {/* Greeting Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-1"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Good Morning, {userProfile.firstName}!
          </h1>
          <p className="text-secondary text-lg">
            Here are your personalized recommendations for today.
          </p>
        </motion.div>

        {/* Filter Pill Row */}
        <div className="flex items-center space-x-3 overflow-x-auto pb-2 no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeFilter === filter
                  ? "bg-primary text-white"
                  : "bg-card border border-border text-secondary hover:border-primary hover:text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Large Featured Card */}

          <motion.div 
            whileHover={{ y: -5 }}
            className="sm:col-span-2 lg:col-span-2 xl:col-span-2 group"
          >

            <NextLink href={`/recipes/${featuredRecipe.id}`} className="block h-full">
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 bg-card flex flex-col group-hover:scale-[1.01] border border-border/50">
                <div className="absolute top-4 left-4 z-10">

                  <span className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {featuredRecipe.kcal} kcal
                  </span>
                </div>
                <div 
                  className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-primary transition-all"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add save logic here
                  }}
                >
                  <Heart size={20} />
                </div>

                
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={featuredRecipe.image} 
                    alt={featuredRecipe.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      {featuredRecipe.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {featuredRecipe.name}
                    </h2>
                    <p className="text-secondary line-clamp-2">
                      {featuredRecipe.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center space-x-6 text-secondary text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{featuredRecipe.prepTime} + {featuredRecipe.cookTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ChefHat size={16} />
                      <span>{featuredRecipe.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
            </NextLink>
          </motion.div>

          {/* Smaller Cards */}
          {otherRecipes.map((recipe, index) => (
            <motion.div

                key={recipe.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
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
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {recipe.kcal} kcal
                        </span>
                      </div>
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors mb-2">
                        {recipe.name}
                      </h3>
                      <div className="flex items-center justify-between text-secondary text-xs">
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{(recipe as any).time}</span>
                        </div>
                        <div 
                          className="hover:text-primary transition-colors cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            // Add save logic here
                          }}
                        >
                          <Heart size={16} />
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
