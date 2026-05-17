"use client";

import { useAuth } from "@/context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, CheckCircle, ExternalLink, Play, X } from "lucide-react";

export default function FirebaseAuthErrorModal() {
  const { authError, clearAuthError, simulateSandboxLogin } = useAuth();

  if (!authError) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop glassmorphism */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={clearAuthError}
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
        />

        {/* Modal body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-card border border-border/85 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden z-10"
        >
          {/* Top visual elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />

          {/* Close button */}
          <button
            onClick={clearAuthError}
            className="absolute top-4 right-4 p-2 text-secondary hover:text-foreground hover:bg-secondary/10 rounded-full transition-all cursor-pointer"
          >
            <X size={18} />
          </button>

          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-amber-500/10 text-amber-600 dark:text-amber-500 rounded-2xl">
              <ShieldAlert size={28} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-foreground leading-tight">
                Firebase Setup Needed
              </h2>
              <p className="text-xs text-secondary font-black uppercase tracking-wider mt-0.5">
                Google Authentication Setup
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <p className="text-sm text-secondary leading-relaxed font-semibold">
              Hi! Google Sign-In couldn't be completed automatically. This is usually because the Google Provider needs to be turned on inside your Firebase Console.
            </p>

            {/* Diagnostics box */}
            <div className="p-4 bg-secondary/5 rounded-2xl border border-border/60 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="font-extrabold text-secondary">Firebase Project ID:</span>
                <span className="font-black text-foreground">nutrifresh-d7a7e</span>
              </div>
              <div className="flex justify-between">
                <span className="font-extrabold text-secondary">Firebase Error:</span>
                <span className="font-black text-rose-500 max-w-[240px] truncate" title={authError.message}>
                  {authError.code}
                </span>
              </div>
            </div>

            {/* Instruction Steps */}
            <div className="space-y-3">
              <h3 className="text-xs font-black uppercase tracking-widest text-primary">
                Steps to Enable Google Sign-In
              </h3>
              
              <ul className="space-y-2.5 text-xs text-secondary font-semibold">
                <li className="flex items-start space-x-2">
                  <CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    Go to the{" "}
                    <a
                      href="https://console.firebase.google.com/project/nutrifresh-d7a7e/authentication/providers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-black hover:underline inline-flex items-center space-x-0.5"
                    >
                      <span>Firebase Console</span>
                      <ExternalLink size={10} />
                    </a>
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Click <b>"Add new provider"</b> and select <b>Google</b>. Enable it and save.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    Under the <b>Settings</b> tab (Authorized domains), ensure both <code>localhost</code> and{" "}
                    <code>nutreeefresh.netlify.app</code> are added!
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={simulateSandboxLogin}
              className="flex-1 py-3 px-4 bg-primary hover:bg-primary/95 text-white font-extrabold text-sm rounded-xl transition-all shadow-md shadow-primary/10 cursor-pointer flex items-center justify-center space-x-2"
            >
              <Play size={14} fill="currentColor" />
              <span>Sandbox Mode (Test App)</span>
            </button>
            
            <button
              onClick={clearAuthError}
              className="py-3 px-6 bg-secondary/10 hover:bg-secondary/15 text-foreground font-extrabold text-sm rounded-xl transition-all border border-border/40 cursor-pointer text-center"
            >
              Dismiss
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
