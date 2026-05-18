"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Bell, Home, BookOpen, Activity, User, X, Check, Apple, Sun, Moon, Save } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { name: "Feed", href: "/", icon: Home },
  { name: "Recipes", href: "/recipes", icon: BookOpen },
  { name: "Tracking", href: "/tracking", icon: Activity },
  { name: "Profile", href: "/profile", icon: User },
];

export default function Navbar() {
  const { user, profile, saveTrackingToCloud, isTrackingDirty } = useAuth();
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTheme, setActiveTheme] = useState("theme-light");
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("nutrifresh_theme") || "theme-light";
      const normalized = stored === "theme-obsidian" || stored === "theme-royal" || stored === "theme-dark"
        ? "theme-dark"
        : "theme-light";
      setActiveTheme(normalized);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = activeTheme === "theme-light" ? "theme-dark" : "theme-light";
    setActiveTheme(nextTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("nutrifresh_theme", nextTheme);
      window.dispatchEvent(new CustomEvent("themechange", { detail: nextTheme }));
    }
  };

  const mockNotifications = [
    { id: 1, text: "Your daily protein goal is 70% complete! 💪", time: "2h ago", unread: true },
    { id: 2, text: "AI Chef generated a new Keto Recipe just for you!", time: "5h ago", unread: true },
    { id: 3, text: "Excellent! You logged 1,450 kcal yesterday. 🥗", time: "1d ago", unread: false },
  ];

  return (
    <>
      {/* Top Header Bar */}
      <nav className="sticky top-0 z-50 w-full bg-card/85 backdrop-blur-md border-b border-border/80 py-4 px-6 md:px-12 flex items-center justify-between transition-all duration-300">
        <Link href="/" className="flex items-center space-x-2 text-primary text-2xl font-black tracking-tight group">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="p-1.5 bg-primary/10 rounded-xl text-primary"
          >
            <Apple size={24} className="fill-current" />
          </motion.div>
          <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
            NutriFresh
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1.5 bg-background/60 border border-border/40 p-1.5 rounded-full relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive ? "text-primary z-10" : "text-secondary hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTabDesktop"
                    className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* Search Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setSearchOpen(true)}
            className="p-2.5 rounded-full bg-background hover:bg-primary/5 hover:text-primary border border-border/40 transition-colors cursor-pointer"
          >
            <Search size={18} />
          </motion.button>

          {/* Save Changes Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={async () => {
              try {
                await saveTrackingToCloud();
                setSaveSuccess(true);
                setTimeout(() => setSaveSuccess(false), 2000);
              } catch (e) {
                console.error("Save error: ", e);
              }
            }}
            className={`p-2.5 rounded-full border transition-all cursor-pointer relative flex items-center justify-center ${
              saveSuccess 
                ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/30" 
                : isTrackingDirty
                  ? "bg-amber-500/10 text-amber-500 border-amber-500/30 animate-pulse"
                  : "bg-background hover:bg-primary/5 hover:text-primary border border-border/40 text-foreground"
            }`}
            title={isTrackingDirty ? "Unsaved tracking changes! Click to save." : "Save tracking data"}
          >
            {saveSuccess ? (
              <Check size={18} />
            ) : (
              <Save size={18} />
            )}
            {isTrackingDirty && !saveSuccess && (
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-amber-500 rounded-full border border-card animate-ping" />
            )}
          </motion.button>

          {/* Notifications Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="p-2.5 rounded-full bg-background hover:bg-primary/5 hover:text-primary border border-border/40 transition-colors relative cursor-pointer"
          >
            <Bell size={18} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-accent rounded-full border border-card animate-pulse" />
          </motion.button>

          {/* Animated Light/Dark Theme Toggle Button */}
          <div className="relative">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-background hover:bg-primary/5 hover:text-primary border border-border/40 transition-colors cursor-pointer flex items-center justify-center text-foreground"
              title={activeTheme === "theme-light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {activeTheme === "theme-light" ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Moon size={18} className="text-secondary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Sun size={18} className="text-amber-500 fill-amber-500/10" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Profile Quick Link */}
          <Link 
            href="/profile" 
            className="hidden md:flex w-9 h-9 rounded-full overflow-hidden border border-primary/20 hover:border-primary transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm items-center justify-center bg-secondary/10"
          >
            {user?.photoURL || profile?.avatarUrl ? (
              <img 
                src={user?.photoURL || profile?.avatarUrl} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            ) : (
              <User size={16} className="text-secondary" />
            )}
          </Link>
        </div>
      </nav>

      {/* Notifications Dropdown Drawer (AnimatePresence) */}
      <AnimatePresence>
        {notificationsOpen && (
          <>
            <div className="fixed inset-0 z-40 bg-black/5" onClick={() => setNotificationsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-6 md:right-12 top-20 z-50 w-80 bg-card border border-border/60 rounded-2xl shadow-xl p-4 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-border/40 pb-2">
                <span className="font-extrabold text-sm text-foreground">Notifications</span>
                <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">3 New</span>
              </div>
              <div className="space-y-3">
                {mockNotifications.map((notif) => (
                  <div key={notif.id} className={`p-3 rounded-xl text-xs space-y-1 border transition-all ${notif.unread ? 'bg-primary/5 border-primary/10' : 'bg-transparent border-transparent'}`}>
                    <p className="font-medium text-foreground leading-relaxed">{notif.text}</p>
                    <span className="text-secondary text-[10px]">{notif.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Global Animated Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 bg-black/35 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-xl bg-card border border-border/60 rounded-3xl shadow-2xl p-6 overflow-hidden z-10 space-y-6"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-black tracking-tight flex items-center space-x-2">
                  <Search size={18} className="text-primary" />
                  <span>Search NutriFresh</span>
                </h3>
                <button 
                  onClick={() => setSearchOpen(false)} 
                  className="p-1 rounded-full hover:bg-background text-secondary hover:text-foreground transition-all cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative">
                <input 
                  type="text" 
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search recipes, ingredients, macros..."
                  className="w-full bg-background border border-border/60 pl-12 pr-4 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-sm"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={20} />
              </div>

              {searchQuery ? (
                <div className="space-y-2 max-h-60 overflow-y-auto no-scrollbar">
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest px-2">Suggestions</p>
                  <div className="p-3 rounded-xl hover:bg-background flex items-center justify-between cursor-pointer border border-transparent hover:border-border/40 transition-all">
                    <span className="font-semibold text-sm">Low-carb {searchQuery} recipes</span>
                    <Check size={14} className="text-primary" />
                  </div>
                  <div className="p-3 rounded-xl hover:bg-background flex items-center justify-between cursor-pointer border border-transparent hover:border-border/40 transition-all">
                    <span className="font-semibold text-sm">Quick protein bowls</span>
                    <Check size={14} className="text-primary" />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest">Popular Searches</p>
                  <div className="flex flex-wrap gap-2">
                    {["High Protein", "Salad", "Keto breakfast", "Smoothie", "Avocado"].map((term) => (
                      <button
                        key={term}
                        onClick={() => setSearchQuery(term)}
                        className="px-4 py-2 bg-background border border-border/40 hover:border-primary/50 text-xs font-semibold rounded-full hover:text-primary transition-all cursor-pointer"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation with sliding indicator */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-border/60 px-6 py-2.5 flex justify-between items-center pb-safe shadow-lg">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative flex flex-col items-center py-2 px-3 space-y-1 rounded-xl transition-all duration-300 ${
                isActive ? "text-primary font-bold scale-105" : "text-secondary hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeTabMobile"
                  className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-2xl"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              <link.icon size={20} className="relative z-10" />
              <span className="text-[9px] font-semibold tracking-wide relative z-10">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
