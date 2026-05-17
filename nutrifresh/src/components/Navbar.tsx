"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Bell, Home, BookOpen, Activity, User } from "lucide-react";

const navLinks = [
  { name: "Feed", href: "/", icon: Home },
  { name: "Recipes", href: "/recipes", icon: BookOpen },
  { name: "Tracking", href: "/tracking", icon: Activity },
  { name: "Profile", href: "/profile", icon: User },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-card border-b border-border py-4 px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-primary text-2xl font-bold tracking-tight">
          NutriFresh
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-[18px] left-0 w-full h-[2px] bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-5">
          <button className="p-1 hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <button className="p-1 hover:text-primary transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full border border-card" />
          </button>
          <Link href="/profile" className="hidden md:block w-8 h-8 rounded-full overflow-hidden border border-border">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border px-6 py-3 flex justify-between items-center pb-safe">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex flex-col items-center space-y-1 ${
                isActive ? "text-primary" : "text-secondary"
              }`}
            >
              <link.icon size={20} />
              <span className="text-[10px] font-medium">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}

