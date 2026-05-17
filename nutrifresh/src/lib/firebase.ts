import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAa8TAbaWzHUBSiUrOPKB869q8VfowhC_w",
  authDomain: "nutrifresh-d7a7e.firebaseapp.com",
  projectId: "nutrifresh-d7a7e",
  storageBucket: "nutrifresh-d7a7e.firebasestorage.app",
  messagingSenderId: "702309659260",
  appId: "1:702309659260:web:926b695a871baceda9cff9",
  measurementId: "G-K37E9LKFFP"
};

// Initialize Firebase (Singleton pattern to prevent re-initialization during hot reloading)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// Safe Analytics initialization for SSR environments
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, db, storage, auth, analytics };
