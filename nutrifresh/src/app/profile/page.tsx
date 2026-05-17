"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Utensils, 
  AlertCircle, 
  Target, 
  LogOut, 
  X, 
  Search,
  Camera,
  Check
} from "lucide-react";
import { userProfile } from "@/lib/data";
import PageTransition from "@/components/PageTransition";

const sidebarItems = [
  { id: "profile", label: "Profile", icon: User },
  { id: "diet", label: "Dietary Preferences", icon: Utensils },
  { id: "allergies", label: "Allergies", icon: AlertCircle },
  { id: "goals", label: "Health Goals", icon: Target },
];

const dietOptions = [
  "Vegetarian", "Vegan", "Keto", "Gluten-Free", "Paleo", "Mediterranean"
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [allergies, setAllergies] = useState(userProfile.allergies);
  const [selectedDiets, setSelectedDiets] = useState(userProfile.dietaryPreferences);
  const [searchQuery, setSearchQuery] = useState("");

  const removeAllergy = (allergy: string) => {
    setAllergies(prev => prev.filter(a => a !== allergy));
  };

  const toggleDiet = (diet: string) => {
    setSelectedDiets(prev => 
      prev.includes(diet) ? prev.filter(d => d !== diet) : [...prev, diet]
    );
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 pb-24">
        {/* Sidebar */}
        <aside className="w-full md:w-64 space-y-8">
          <h1 className="text-3xl font-bold px-4">Settings</h1>
          <nav className="flex flex-col space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  activeTab === item.id 
                    ? "bg-primary/10 text-primary" 
                    : "text-secondary hover:bg-card hover:text-primary"
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
            <button className="flex items-center space-x-3 px-4 py-3 rounded-xl font-medium text-secondary hover:bg-card hover:text-red-500 transition-all mt-4">
              <LogOut size={20} />
              <span>Log Out</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-8">
          {/* Personal Information */}
          <section id="profile" className="bg-card p-8 rounded-2xl border border-border card-shadow space-y-8">
            <h2 className="text-xl font-bold">Personal Information</h2>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="relative group cursor-pointer">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-background card-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" 
                    className="w-full h-full object-cover" 
                    alt="Avatar" 
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="text-white" size={24} />
                </div>
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary">First Name</label>
                  <input 
                    type="text" 
                    defaultValue={userProfile.firstName}
                    className="w-full bg-background border border-border p-3 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary">Last Name</label>
                  <input 
                    type="text" 
                    defaultValue={userProfile.lastName}
                    className="w-full bg-background border border-border p-3 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary">Email Address</label>
                  <input 
                    type="email" 
                    defaultValue={userProfile.email}
                    className="w-full bg-background border border-border p-3 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Dietary Preferences */}
          <section id="diet" className="bg-card p-8 rounded-2xl border border-border card-shadow space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold">Dietary Preferences</h2>
              <p className="text-sm text-secondary">Select the diets you follow to tailor your meal recommendations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dietOptions.map((diet) => (
                <button
                  key={diet}
                  onClick={() => toggleDiet(diet)}
                  className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all ${
                    selectedDiets.includes(diet)
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border bg-background text-foreground hover:border-primary/50"
                  }`}
                >
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                    selectedDiets.includes(diet) ? "bg-primary border-primary" : "border-border bg-white"
                  }`}>
                    {selectedDiets.includes(diet) && <Check size={14} className="text-white" />}
                  </div>
                  <span className="font-medium">{diet}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Allergies & Exclusions */}
          <section id="allergies" className="bg-card p-8 rounded-2xl border border-border card-shadow space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold">Allergies & Exclusions</h2>
              <p className="text-sm text-secondary">Exclude ingredients from your suggested recipes.</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {allergies.map((allergy) => (
                <div 
                  key={allergy} 
                  className="flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold border border-primary/20"
                >
                  <span>{allergy}</span>
                  <button 
                    onClick={() => removeAllergy(allergy)}
                    className="hover:text-accent transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>

            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={18} />
              <input 
                type="text" 
                placeholder="Search ingredients to exclude..."
                className="w-full bg-background border border-border pl-12 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </section>
        </main>

        {/* Sticky Footer */}
        <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-border p-4 z-40">
          <div className="max-w-6xl mx-auto flex justify-end space-x-4">
            <button className="px-8 py-2 font-bold text-secondary hover:text-foreground transition-all">
              Cancel
            </button>
            <button className="px-8 py-2 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Save Changes
            </button>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
}
