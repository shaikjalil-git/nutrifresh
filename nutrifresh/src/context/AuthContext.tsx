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
  avatarUrl?: string; // Optional custom profile image URL
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
  authError: { code: string; message: string } | null;
  clearAuthError: () => void;
  simulateSandboxLogin: () => void;

  // New shared tracking states
  waterIntake: number;
  recentMeals: any[];
  kcalEaten: number;
  protein: number;
  carbs: number;
  fat: number;
  setWaterIntake: (mL: number) => void;
  addCupOfWater: (amount?: number) => void;
  removeCupOfWater: (amount?: number) => void;
  logMeal: (meal: any) => Promise<void>;
  deleteMeal: (mealId: string) => Promise<void>;
  saveTrackingToCloud: () => Promise<void>;
  isTrackingDirty: boolean;
  resetDailyTracking: () => Promise<void>;
}

const getTodayStr = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

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
  setupComplete: true,
  avatarUrl: ""
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<UserProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<{ code: string; message: string } | null>(null);

  // Shared tracking states
  const [waterIntake, setWaterIntakeState] = useState(0);
  const [recentMeals, setRecentMeals] = useState<any[]>([]);
  const [kcalEaten, setKcalEaten] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fat, setFat] = useState(0);
  const [isTrackingDirty, setIsTrackingDirty] = useState(false);

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
    if (typeof window !== "undefined") {
      const persistedMock = localStorage.getItem("nutrifresh_sandbox_user");
      if (persistedMock) {
        try {
          const parsed = JSON.parse(persistedMock);
          setUser(parsed);
          setLoading(false);
        } catch (e) {}
      }
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        if (typeof window !== "undefined") {
          localStorage.removeItem("nutrifresh_sandbox_user"); // remove mock user if real user logs in
        }
        
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
        if (typeof window !== "undefined" && !localStorage.getItem("nutrifresh_sandbox_user")) {
          setUser(null);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Sync / load tracking state when user changes
  useEffect(() => {
    const loadTrackingData = async () => {
      const todayStr = getTodayStr();
      if (user) {
        // Logged in: first try reading from local storage cache for instant rendering
        if (typeof window !== "undefined") {
          const stored = localStorage.getItem(`nutrifresh_user_tracking_${user.uid}`);
          if (stored) {
            try {
              const data = JSON.parse(stored);
              if (data.date === todayStr) {
                setWaterIntakeState(data.waterIntake ?? 0);
                setRecentMeals(data.recentMeals ?? []);
                setKcalEaten(data.kcalEaten ?? 0);
                setProtein(data.protein ?? 0);
                setCarbs(data.carbs ?? 0);
                setFat(data.fat ?? 0);
              } else {
                // Outdated date: reset to zero
                setWaterIntakeState(0);
                setRecentMeals([]);
                setKcalEaten(0);
                setProtein(0);
                setCarbs(0);
                setFat(0);
              }
            } catch (e) {}
          }
        }

        // Then, retrieve latest from Firestore database
        try {
          const { doc, getDoc, setDoc } = await import("firebase/firestore");
          const { db } = await import("@/lib/firebase");
          const docRef = doc(db, "users", user.uid, "tracking", "daily");
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            const savedDate = data.date || (data.updatedAt ? data.updatedAt.split("T")[0] : "");

            if (savedDate === todayStr) {
              const loadedWater = data.waterIntake ?? 0;
              const loadedMeals = data.recentMeals ?? [];
              const loadedKcal = data.kcalEaten ?? 0;
              const loadedProtein = data.protein ?? 0;
              const loadedCarbs = data.carbs ?? 0;
              const loadedFat = data.fat ?? 0;

              setWaterIntakeState(loadedWater);
              setRecentMeals(loadedMeals);
              setKcalEaten(loadedKcal);
              setProtein(loadedProtein);
              setCarbs(loadedCarbs);
              setFat(loadedFat);

              // Sync to local storage cache
              if (typeof window !== "undefined") {
                localStorage.setItem(`nutrifresh_user_tracking_${user.uid}`, JSON.stringify({
                  waterIntake: loadedWater,
                  recentMeals: loadedMeals,
                  kcalEaten: loadedKcal,
                  protein: loadedProtein,
                  carbs: loadedCarbs,
                  fat: loadedFat,
                  date: todayStr
                }));
              }
            } else {
              // Outdated Firestore record: auto-reset to zero & update Firestore
              setWaterIntakeState(0);
              setRecentMeals([]);
              setKcalEaten(0);
              setProtein(0);
              setCarbs(0);
              setFat(0);

              await setDoc(docRef, {
                waterIntake: 0,
                recentMeals: [],
                kcalEaten: 0,
                protein: 0,
                carbs: 0,
                fat: 0,
                date: todayStr,
                updatedAt: new Date().toISOString()
              }, { merge: true });

              if (typeof window !== "undefined") {
                localStorage.setItem(`nutrifresh_user_tracking_${user.uid}`, JSON.stringify({
                  waterIntake: 0,
                  recentMeals: [],
                  kcalEaten: 0,
                  protein: 0,
                  carbs: 0,
                  fat: 0,
                  date: todayStr
                }));
              }
            }
          } else {
            // Document doesn't exist yet: check if guest has any local tracking data to migrate to the database!
            let initialData = {
              waterIntake: 0,
              recentMeals: [],
              kcalEaten: 0,
              protein: 0,
              carbs: 0,
              fat: 0,
              date: todayStr
            };
            if (typeof window !== "undefined") {
              const guestStored = localStorage.getItem("nutrifresh_guest_tracking");
              if (guestStored) {
                try {
                  const guestData = JSON.parse(guestStored);
                  if (guestData.date === todayStr) {
                    initialData = { ...guestData, date: todayStr };
                  }
                } catch (e) {}
              }
            }

            // Provision daily document in Firestore with these initial values
            await setDoc(docRef, {
              ...initialData,
              updatedAt: new Date().toISOString()
            });

            setWaterIntakeState(initialData.waterIntake);
            setRecentMeals(initialData.recentMeals);
            setKcalEaten(initialData.kcalEaten);
            setProtein(initialData.protein);
            setCarbs(initialData.carbs);
            setFat(initialData.fat);

            if (typeof window !== "undefined") {
              localStorage.setItem(`nutrifresh_user_tracking_${user.uid}`, JSON.stringify(initialData));
            }
          }
        } catch (e) {
          console.error("Firestore daily load failed, using local fallback:", e);
        }
      } else {
        // Guest: keep all tracked data to default of ZERO before login
        if (typeof window !== "undefined") {
          const guestStored = localStorage.getItem("nutrifresh_guest_tracking");
          if (guestStored) {
            try {
              const data = JSON.parse(guestStored);
              if (data.date === todayStr) {
                setWaterIntakeState(data.waterIntake ?? 0);
                setRecentMeals(data.recentMeals ?? []);
                setKcalEaten(data.kcalEaten ?? 0);
                setProtein(data.protein ?? 0);
                setCarbs(data.carbs ?? 0);
                setFat(data.fat ?? 0);
                return;
              }
            } catch (e) {}
          }
        }
        setWaterIntakeState(0);
        setRecentMeals([]);
        setKcalEaten(0);
        setProtein(0);
        setCarbs(0);
        setFat(0);
      }
    };
    loadTrackingData();
  }, [user]);

  const setWaterIntake = (mL: number) => {
    setWaterIntakeState(mL);
    setIsTrackingDirty(true);
    if (typeof window !== "undefined") {
      const todayStr = getTodayStr();
      const trackingData = {
        waterIntake: mL,
        recentMeals,
        kcalEaten,
        protein,
        carbs,
        fat,
        date: todayStr
      };
      if (user) {
        localStorage.setItem(`nutrifresh_user_tracking_${user.uid}`, JSON.stringify(trackingData));
      } else {
        localStorage.setItem("nutrifresh_guest_tracking", JSON.stringify(trackingData));
      }
    }
  };

  const addCupOfWater = (amount: number = 300) => {
    setWaterIntake(waterIntake + amount);
  };

  const removeCupOfWater = (amount: number = 300) => {
    setWaterIntake(Math.max(0, waterIntake - amount));
  };

  const logMeal = async (meal: any) => {
    const updatedMeals = [meal, ...recentMeals];
    setRecentMeals(updatedMeals);
    const updatedKcal = kcalEaten + meal.kcal;
    setKcalEaten(updatedKcal);
    
    // Check for custom explicit macros on the meal, or fall back to default dynamic estimation
    const mealP = meal.protein !== undefined ? Number(meal.protein) : Math.round(meal.kcal * 0.08);
    const mealC = meal.carbs !== undefined ? Number(meal.carbs) : Math.round(meal.kcal * 0.12);
    const mealF = meal.fat !== undefined ? Number(meal.fat) : Math.round(meal.kcal * 0.04);
    
    const updatedP = protein + mealP;
    const updatedC = carbs + mealC;
    const updatedF = fat + mealF;
    
    setProtein(updatedP);
    setCarbs(updatedC);
    setFat(updatedF);
    setIsTrackingDirty(true);

    if (typeof window !== "undefined") {
      const todayStr = getTodayStr();
      const trackingData = {
        waterIntake,
        recentMeals: updatedMeals,
        kcalEaten: updatedKcal,
        protein: updatedP,
        carbs: updatedC,
        fat: updatedF,
        date: todayStr
      };
      if (user) {
        localStorage.setItem(`nutrifresh_user_tracking_${user.uid}`, JSON.stringify(trackingData));
      } else {
        localStorage.setItem("nutrifresh_guest_tracking", JSON.stringify(trackingData));
      }
    }
  };

  const deleteMeal = async (mealId: string) => {
    const mealToDelete = recentMeals.find(m => m.id === mealId);
    if (!mealToDelete) return;
    
    const updatedMeals = recentMeals.filter(m => m.id !== mealId);
    setRecentMeals(updatedMeals);
    const updatedKcal = Math.max(0, kcalEaten - (mealToDelete.kcal || 0));
    setKcalEaten(updatedKcal);
    
    const mealP = mealToDelete.protein !== undefined ? Number(mealToDelete.protein) : Math.round((mealToDelete.kcal || 0) * 0.08);
    const mealC = mealToDelete.carbs !== undefined ? Number(mealToDelete.carbs) : Math.round((mealToDelete.kcal || 0) * 0.12);
    const mealF = mealToDelete.fat !== undefined ? Number(mealToDelete.fat) : Math.round((mealToDelete.kcal || 0) * 0.04);
    
    const updatedP = Math.max(0, protein - mealP);
    const updatedC = Math.max(0, carbs - mealC);
    const updatedF = Math.max(0, fat - mealF);
    
    setProtein(updatedP);
    setCarbs(updatedC);
    setFat(updatedF);
    setIsTrackingDirty(true);

    if (typeof window !== "undefined") {
      const todayStr = getTodayStr();
      const trackingData = {
        waterIntake,
        recentMeals: updatedMeals,
        kcalEaten: updatedKcal,
        protein: updatedP,
        carbs: updatedC,
        fat: updatedF,
        date: todayStr
      };
      if (user) {
        localStorage.setItem(`nutrifresh_user_tracking_${user.uid}`, JSON.stringify(trackingData));
      } else {
        localStorage.setItem("nutrifresh_guest_tracking", JSON.stringify(trackingData));
      }
    }
  };

  const saveTrackingToCloud = async () => {
    const todayStr = getTodayStr();
    if (typeof window !== "undefined") {
      const trackingData = {
        waterIntake,
        recentMeals,
        kcalEaten,
        protein,
        carbs,
        fat,
        date: todayStr
      };
      if (user) {
        localStorage.setItem(`nutrifresh_user_tracking_${user.uid}`, JSON.stringify(trackingData));
      } else {
        localStorage.setItem("nutrifresh_guest_tracking", JSON.stringify(trackingData));
      }
    }

    if (!user) {
      setIsTrackingDirty(false);
      return;
    }
    
    try {
      const { doc, setDoc } = await import("firebase/firestore");
      const { db } = await import("@/lib/firebase");
      const docRef = doc(db, "users", user.uid, "tracking", "daily");
      await setDoc(docRef, {
        waterIntake,
        recentMeals,
        kcalEaten,
        protein,
        carbs,
        fat,
        date: todayStr,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      setIsTrackingDirty(false);
    } catch (err) {
      console.error("Failed to save tracking data to cloud:", err);
      throw err;
    }
  };

  const resetDailyTracking = async () => {
    setWaterIntakeState(0);
    setRecentMeals([]);
    setKcalEaten(0);
    setProtein(0);
    setCarbs(0);
    setFat(0);
    setIsTrackingDirty(true);
    const todayStr = getTodayStr();

    if (typeof window !== "undefined") {
      const trackingData = {
        waterIntake: 0,
        recentMeals: [],
        kcalEaten: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        date: todayStr
      };
      if (user) {
        localStorage.setItem(`nutrifresh_user_tracking_${user.uid}`, JSON.stringify(trackingData));
      } else {
        localStorage.setItem("nutrifresh_guest_tracking", JSON.stringify(trackingData));
      }
    }

    if (user) {
      try {
        const { doc, setDoc } = await import("firebase/firestore");
        const { db } = await import("@/lib/firebase");
        const docRef = doc(db, "users", user.uid, "tracking", "daily");
        await setDoc(docRef, {
          waterIntake: 0,
          recentMeals: [],
          kcalEaten: 0,
          protein: 0,
          carbs: 0,
          fat: 0,
          date: todayStr,
          updatedAt: new Date().toISOString()
        });
        setIsTrackingDirty(false);
      } catch (err) {
        console.error("Failed to reset daily tracking on cloud:", err);
      }
    }
  };

  const loginWithGoogle = async () => {
    setAuthError(null);
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
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
        
        // Remove survey completed flag so they can fill it out on new login
        localStorage.removeItem("nutrifresh_survey_completed");
      }
    } catch (err: any) {
      console.error("Firebase Google Auth failed:", err);
      setAuthError({
        code: err.code || "auth/unknown",
        message: err.message || "Failed to authenticate with Google."
      });
    }
  };

  const simulateSandboxLogin = () => {
    setAuthError(null);
    const mockGoogleUser = {
      uid: "mock-google-uid-777",
      displayName: "Jalil Shaik",
      email: "jalilshaik2003@gmail.com",
      photoURL: "", // Default to no profile image - user can add if they want
    };
    
    setUser(mockGoogleUser);
    if (typeof window !== "undefined") {
      localStorage.setItem("nutrifresh_sandbox_user", JSON.stringify(mockGoogleUser));
    }
    
    const stored = localStorage.getItem("nutrifresh_profile");
    let currentProfile = DEFAULT_PROFILE;
    if (stored) {
      try {
        currentProfile = JSON.parse(stored);
      } catch (e) {}
    }

    const updatedProfile: UserProfileData = {
      ...currentProfile,
      firstName: "Jalil",
      lastName: "Shaik",
      email: mockGoogleUser.email,
      avatarUrl: "" // Start with no image
    };
    setProfile(updatedProfile);
    if (typeof window !== "undefined") {
      localStorage.setItem("nutrifresh_profile", JSON.stringify(updatedProfile));
      // Remove survey completed flag so they can fill it out on new login
      localStorage.removeItem("nutrifresh_survey_completed");
    }
  };

  const clearAuthError = () => {
    setAuthError(null);
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
        setupComplete: true,
        avatarUrl: profileData.avatarUrl !== undefined ? profileData.avatarUrl : profile?.avatarUrl || ""
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
      logout,
      authError,
      clearAuthError,
      simulateSandboxLogin,
      waterIntake,
      recentMeals,
      kcalEaten,
      protein,
      carbs,
      fat,
      setWaterIntake,
      addCupOfWater,
      removeCupOfWater,
      logMeal,
      deleteMeal,
      saveTrackingToCloud,
      isTrackingDirty,
      resetDailyTracking
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
