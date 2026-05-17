"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

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
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@example.com",
  weight: 65,
  height: 170,
  kcalGoal: 2000,
  dietaryPreferences: ["High-Protein", "Low-Carb"],
  allergies: ["Peanuts"],
  setupComplete: true
};

const DEFAULT_USER = {
  uid: "jane-doe-123",
  email: "jane@example.com",
  displayName: "Jane Doe"
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(DEFAULT_USER);
  const [profile, setProfile] = useState<UserProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize and load from local storage to keep it functional
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
    setLoading(false);
  }, []);

  const loginWithGoogle = async () => {
    // No-op for mock local flow
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
        firstName: profileData.firstName || profile?.firstName || "",
        lastName: profileData.lastName || profile?.lastName || "",
        email: profileData.email || profile?.email || "jane@example.com",
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
      console.error("Local Save Profile Error: ", err);
      throw err;
    }
  };

  const logout = async () => {
    // No-op for local mock flow
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
