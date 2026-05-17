import React, { createContext, useContext, useState, useEffect } from "react";
import { 
  User, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signOut,
  signInWithPhoneNumber,
  ConfirmationResult,
  RecaptchaVerifier
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

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
  user: User | null;
  profile: UserProfileData | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  setupRecaptcha: (containerId: string) => Promise<RecaptchaVerifier>;
  sendPhoneOtp: (phoneNumber: string, verifier: RecaptchaVerifier) => Promise<void>;
  verifyPhoneOtp: (otpCode: string) => Promise<void>;
  saveProfile: (profileData: Partial<UserProfileData>) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  // Monitor persistent session auth state changes and query profile from Firestore
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setProfile(docSnap.data() as UserProfileData);
          } else {
            setProfile(null);
          }
        } catch (err: any) {
          if (err.code === 'unavailable' || err.message?.includes('offline')) {
            console.warn("Firebase: Client is offline, defaulting to null profile.");
          } else {
            console.error("Error loading user profile: ", err);
          }
          setProfile(null);
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Google popup sign-in
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Google Auth Popup Error: ", err);
      throw err;
    }
  };

  // Setup invisible or visible ReCAPTCHA verifier for mobile phone authentication
  const setupRecaptcha = async (containerId: string): Promise<RecaptchaVerifier> => {
    try {
      if ((window as any).recaptchaVerifier) {
        (window as any).recaptchaVerifier.clear();
      }
      
      const verifier = new RecaptchaVerifier(auth, containerId, {
        size: "invisible",
        callback: () => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
        }
      });
      
      (window as any).recaptchaVerifier = verifier;
      return verifier;
    } catch (err) {
      console.error("ReCAPTCHA setup failed: ", err);
      throw err;
    }
  };

  // Send OTP SMS challenge to phone number
  const sendPhoneOtp = async (phoneNumber: string, verifier: RecaptchaVerifier) => {
    try {
      const result = await signInWithPhoneNumber(auth, phoneNumber, verifier);
      setConfirmationResult(result);
    } catch (err) {
      console.error("SMS OTP Send Error: ", err);
      throw err;
    }
  };

  // Verify the OTP code sent via SMS
  const verifyPhoneOtp = async (otpCode: string) => {
    if (!confirmationResult) {
      throw new Error("No active verification session found. Send OTP first.");
    }
    try {
      await confirmationResult.confirm(otpCode);
      setConfirmationResult(null);
    } catch (err) {
      console.error("OTP Code Verification Error: ", err);
      throw err;
    }
  };

  // Save or modify the user's profile details in Firestore
  const saveProfile = async (profileData: Partial<UserProfileData>) => {
    if (!user) {
      throw new Error("Cannot save profile. No authenticated user found.");
    }
    try {
      const docRef = doc(db, "users", user.uid);
      
      // Merge with existing profile data if present
      const updatedProfile: UserProfileData = {
        firstName: profileData.firstName || profile?.firstName || "",
        lastName: profileData.lastName || profile?.lastName || "",
        email: profileData.email || user.email || profile?.email || "",
        weight: Number(profileData.weight ?? profile?.weight ?? 70),
        height: Number(profileData.height ?? profile?.height ?? 175),
        kcalGoal: Number(profileData.kcalGoal ?? profile?.kcalGoal ?? 2000),
        dietaryPreferences: profileData.dietaryPreferences || profile?.dietaryPreferences || [],
        allergies: profileData.allergies || profile?.allergies || [],
        setupComplete: profileData.setupComplete ?? profile?.setupComplete ?? true
      };

      await setDoc(docRef, updatedProfile, { merge: true });
      setProfile(updatedProfile);
    } catch (err) {
      console.error("Firestore Save Profile Error: ", err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout Error: ", err);
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
