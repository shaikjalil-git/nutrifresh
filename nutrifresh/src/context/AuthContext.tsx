"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

export interface UserProfileData {
  firstName: string;
  lastName: string;
  email: string;
  weight: number;      // in kg
  height: number;      // in cm
  kcalGoal: number;    // target daily calories
  dietaryPreferences: string[];
  allergies: string[];
  setupComplete: boolean;
}

interface AuthContextType {
  user: any;
  profile: UserProfileData | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  setupRecaptcha: (containerId: string) => Promise<any>;
  sendPhoneOtp: (phoneNumber: string, verifier: any) => Promise<void>;
  verifyPhoneOtp: (otpCode: string) => Promise<void>;
  saveProfile: (profileData: Partial<UserProfileData>) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEFAULT_PROFILE: UserProfileData = {
  firstName: "UNKNOWN",
  lastName: "",
  email: "",
  weight: 65,
  height: 170,
  kcalGoal: 2000,
  dietaryPreferences: ["High-Protein", "Low-Carb"],
  allergies: ["Peanuts"],
  setupComplete: true
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<UserProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize and load from local storage first to render instantly
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("nutrifresh_profile");
      if (stored) {
        try {
          setProfile(JSON.parse(stored));
        } catch (e) {
          setProfile(DEFAULT_PROFILE);
        }
      } else {
        setProfile(DEFAULT_PROFILE);
        localStorage.setItem("nutrifresh_profile", JSON.stringify(DEFAULT_PROFILE));
      }
    } else {
      setProfile(DEFAULT_PROFILE);
    }
  }, []);

  // Listen to Firebase Auth changes in a completely non-blocking manner
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        
        // Upgrade profile details if they are still set to default "UNKNOWN"
        const stored = localStorage.getItem("nutrifresh_profile");
        let currentProfile = DEFAULT_PROFILE;
        if (stored) {
          try {
            currentProfile = JSON.parse(stored);
          } catch (e) {}
        }

        if (currentProfile.firstName === "UNKNOWN") {
          const nameParts = (firebaseUser.displayName || "Google User").split(" ");
          const updatedProfile: UserProfileData = {
            ...currentProfile,
            firstName: nameParts[0] || "Google",
            lastName: nameParts.slice(1).join(" ") || "User",
            email: firebaseUser.email || currentProfile.email,
          };
          setProfile(updatedProfile);
          localStorage.setItem("nutrifresh_profile", JSON.stringify(updatedProfile));
        } else {
          setProfile(currentProfile);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        setUser(result.user);
        
        const nameParts = (result.user.displayName || "Google User").split(" ");
        const stored = localStorage.getItem("nutrifresh_profile");
        let currentProfile = DEFAULT_PROFILE;
        if (stored) {
          try {
            currentProfile = JSON.parse(stored);
          } catch (e) {}
        }

        const updatedProfile: UserProfileData = {
          ...currentProfile,
          firstName: nameParts[0] || "Google",
          lastName: nameParts.slice(1).join(" ") || "User",
          email: result.user.email || currentProfile.email,
        };
        setProfile(updatedProfile);
        localStorage.setItem("nutrifresh_profile", JSON.stringify(updatedProfile));
      }
    } catch (err) {
      console.error("Firebase Google Sign-In Error:", err);
      throw err;
    }
  };

  const setupRecaptcha = async (containerId: string): Promise<any> => {
    return {};
  };

  const sendPhoneOtp = async (phoneNumber: string, verifier: any) => {
    // No-op for mock local flow
  };

  const verifyPhoneOtp = async (otpCode: string) => {
    // No-op for mock local flow
  };

  const saveProfile = async (profileData: Partial<UserProfileData>) => {
    try {
      const updatedProfile: UserProfileData = {
        firstName: profileData.firstName || profile?.firstName || "UNKNOWN",
        lastName: profileData.lastName || profile?.lastName || "",
        email: profileData.email || profile?.email || "",
        weight: Number(profileData.weight ?? profile?.weight ?? 65),
        height: Number(profileData.height ?? profile?.height ?? 170),
        kcalGoal: Number(profileData.kcalGoal ?? profile?.kcalGoal ?? 2000),
        dietaryPreferences: profileData.dietaryPreferences || profile?.dietaryPreferences || [],
        allergies: profileData.allergies || profile?.allergies || [],
        setupComplete: true
      };

      setProfile(updatedProfile);
      if (typeof window !== "undefined") {
        localStorage.setItem("nutrifresh_profile", JSON.stringify(updatedProfile));
      }
    } catch (err) {
      console.error("Save Profile Error: ", err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setProfile(DEFAULT_PROFILE);
      if (typeof window !== "undefined") {
        localStorage.setItem("nutrifresh_profile", JSON.stringify(DEFAULT_PROFILE));
      }
    } catch (err) {
      console.error("Firebase Sign-Out Error:", err);
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      profile,
      loading, 
      loginWithGoogle, 
      setupRecaptcha, 
      sendPhoneOtp, 
      verifyPhoneOtp, 
      saveProfile,
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
