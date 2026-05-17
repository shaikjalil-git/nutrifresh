"use client";

import { motion } from "framer-motion";
import { Plus, MoreHorizontal, ExternalLink, ChefHat } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { userProgress } from "@/lib/data";
import PageTransition from "@/components/PageTransition";
import { useState, useEffect } from "react";


const COLORS = ["#1A6B45", "#E5E7EB"];

export default function TrackingPage() {
  const chartData = [
    { name: "Eaten", value: userProgress.kcalEaten },
    { name: "Remaining", value: userProgress.kcalGoal - userProgress.kcalEaten },
  ];

  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const date = new Date();
    setFormattedDate(date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'short', 
      day: 'numeric' 
    }));
  }, []);


  return (
    <PageTransition>
      <div className="space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold">Today's Progress</h1>
            <p className="text-secondary">{formattedDate}</p>
          </div>
          <div className="flex flex-col md:flex-row items-stretch gap-3">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Smart log: '2 eggs and toast'..." 
                className="bg-card border border-border px-4 py-3 rounded-xl w-full md:w-64 outline-none focus:border-primary transition-all pr-10"
              />
              <ChefHat size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-primary opacity-50" />
            </div>
            <button className="flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              <Plus size={20} />
              <span>Log Meal</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Card (Donut Chart) */}
          <div className="lg:col-span-2 bg-card p-8 rounded-2xl border border-border card-shadow flex flex-col md:flex-row items-center md:items-stretch gap-12">
            <div className="relative w-64 h-64 flex-shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    startAngle={90}
                    endAngle={450}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-black">{userProgress.kcalEaten.toLocaleString()}</span>
                <span className="text-secondary text-xs font-bold uppercase tracking-widest">kcal eaten</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-8">
              <div className="space-y-1">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-medium">Goal</span>
                  <span className="font-bold">{userProgress.kcalGoal.toLocaleString()} kcal</span>
                </div>
                <div className="h-1 bg-border rounded-full" />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-medium">Remaining</span>
                  <span className="font-bold">{(userProgress.kcalGoal - userProgress.kcalEaten).toLocaleString()} kcal</span>
                </div>
                <div className="h-1 bg-border rounded-full" />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-medium">Burned</span>
                  <span className="font-bold text-accent">{userProgress.kcalBurned.toLocaleString()} kcal</span>
                </div>
                <div className="h-1 bg-accent/20 rounded-full" />
              </div>
            </div>
          </div>

          {/* Macro Cards */}
          <div className="flex flex-col gap-4">
            {Object.entries(userProgress.macros).map(([key, value], idx) => (
              <motion.div 
                key={key}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border card-shadow space-y-4"
              >
                <div className="flex justify-between items-center capitalize">
                  <span className="font-bold">{key}</span>
                  <span className="text-sm text-secondary">
                    <span className="text-foreground font-bold">{value.current}g</span> / {value.goal}g
                  </span>
                </div>
                <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(value.current / value.goal) * 100}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-primary" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Meals Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Recent Meals</h2>
            <button className="text-primary text-sm font-bold flex items-center space-x-1 hover:underline">
              <span>View All</span>
              <ExternalLink size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userProgress.recentMeals.map((meal) => (
              <motion.div 
                key={meal.id}
                whileHover={{ scale: 1.01 }}
                className="bg-card p-4 rounded-xl border border-border card-shadow flex items-center justify-between group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <img src={meal.image} alt={meal.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold group-hover:text-primary transition-colors">{meal.name}</h3>
                    <p className="text-xs text-secondary">{meal.type} • {meal.kcal} kcal</p>
                  </div>
                </div>
                <button className="p-2 text-secondary hover:text-primary hover:bg-primary/5 rounded-full transition-all">
                  <MoreHorizontal size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
