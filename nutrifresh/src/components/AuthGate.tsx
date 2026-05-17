"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { 
  Sparkles, 
  Smartphone, 
  Mail, 
  Loader2, 
  AlertCircle, 
  Send, 
  Bot, 
  X,
  MessageSquare,
  ShieldCheck, 
  UserCheck,
  ChevronRight,
  ArrowLeft
} from "lucide-react";

export default function AuthGate() {
  const { 
    loginWithGoogle, 
    setupRecaptcha, 
    sendPhoneOtp, 
    verifyPhoneOtp, 
    loading: authLoading 
  } = useAuth();

  const [activeTab, setActiveTab] = useState<"google" | "phone">("google");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  
  const [localLoading, setLocalLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Floating AI Chat assistant states (neatly floating in bottom right, out of the way)
  const [showAiChat, setShowAiChat] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "ai" | "user"; text: string }>>([
    { sender: "ai", text: "Hi! 🌟 I'm NutriBot. Ask me about how we track calories, customized meal planning, or ask for guidance on setting up your account!" }
  ]);

  const recaptchaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (showAiChat) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, showAiChat]);

  // Firebase Raw Error Parser to user-friendly guides
  const getFriendlyError = (rawError: string | null) => {
    if (!rawError) return null;
    const lower = rawError.toLowerCase();
    
    if (lower.includes("unauthorized-domain") || lower.includes("auth/unauthorized-domain")) {
      return {
        title: "Domain Not Authorized",
        message: "This site's current domain is not registered in your Firebase Console's Authorized Domains list.",
        steps: [
          "Open your Firebase Console > Authentication.",
          "Go to the 'Settings' tab > 'Authorized domains'.",
          "Click 'Add domain' and add: nutreefresh.netlify.app",
          "Also add any deploy preview domains if testing dynamic deployments."
        ]
      };
    }
    
    if (lower.includes("operation-not-allowed") || lower.includes("auth/operation-not-allowed")) {
      return {
        title: "SMS Auth Provider Disabled",
        message: "Phone/SMS authentication is currently disabled in your Firebase backend project.",
        steps: [
          "Open your Firebase Console > Authentication.",
          "Go to the 'Sign-in method' tab.",
          "Under 'Native providers', click 'Phone' and toggle 'Enable'.",
          "Save changes and try requesting OTP again."
        ]
      };
    }

    if (lower.includes("too-many-requests")) {
      return {
        title: "Too Many Requests",
        message: "This device has been temporarily blocked due to unusual activity or too many attempts. Please try again later or sign in with Google.",
        steps: []
      };
    }

    return {
      title: "Authentication Error",
      message: rawError,
      steps: []
    };
  };

  const friendlyError = getFriendlyError(error);

  const handleGoogleSignIn = async () => {
    setLocalLoading(true);
    setError(null);
    try {
      await loginWithGoogle();
      setSuccess("Successfully authenticated via Google!");
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Failed to authenticate via Google. Try again.");
    } finally {
      setLocalLoading(false);
    }
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      setError("Please input a valid phone number including country code (+1...)");
      return;
    }

    setLocalLoading(true);
    setError(null);
    try {
      const verifier = await setupRecaptcha("recaptcha-container");
      await sendPhoneOtp(phoneNumber, verifier);
      setOtpSent(true);
      setSuccess("SMS Verification Code sent successfully!");
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Error sending SMS. Ensure phone number starts with country code (+1...)");
    } finally {
      setLocalLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpCode.trim() || otpCode.length < 6) {
      setError("Please input the complete 6-digit OTP code.");
      return;
    }

    setLocalLoading(true);
    setError(null);
    try {
      await verifyPhoneOtp(otpCode);
      setSuccess("Phone Number successfully verified!");
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Invalid or expired OTP verification code.");
    } finally {
      setLocalLoading(false);
    }
  };

  const handleAiChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    setChatMessages(prev => [...prev, { sender: "user", text: userText }]);
    setChatInput("");

    setTimeout(() => {
      let botResponse = "I'm here to help you get started! You can log in securely using your Google Gmail or your mobile phone number on the card.";
      const lower = userText.toLowerCase();

      if (lower.includes("diet") || lower.includes("vegan") || lower.includes("keto")) {
        botResponse = "NutriFresh curates completely customized diets! We offer high-protein, keto, vegan, and gluten-free plans, and let you generate custom recipes with the live Gemini AI Chef!";
      } else if (lower.includes("phone") || lower.includes("sms") || lower.includes("mobile")) {
        botResponse = "To log in via mobile, select the 'Mobile Phone' tab, type your number (with country code, e.g. +15550199) and complete the secure SMS verification code.";
      } else if (lower.includes("google") || lower.includes("gmail") || lower.includes("mail")) {
        botResponse = "Google Sign-In is our fastest secure method. Just select 'Google Account' and tap 'Verify via Google Account'. It takes 2 seconds!";
      } else if (lower.includes("error") || lower.includes("fail") || lower.includes("unauthorized")) {
        botResponse = "If you see a Firebase domain error, you just need to add your current domain (e.g. nutreefresh.netlify.app) into the 'Authorized Domains' tab inside your Firebase Console.";
      } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
        botResponse = "Hello there! I'm NutriBot. Ask me about how we track calories, customized meal planning, or ask for guidance on setting up your account!";
      }

      setChatMessages(prev => [...prev, { sender: "ai", text: botResponse }]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070b11] text-foreground p-6 overflow-y-auto overflow-x-hidden select-none font-sans">
      
      {/* Sleek aesthetic ambient background mesh */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/5 blur-[140px] pointer-events-none" />

      {/* Centered Minimalist Auth Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-md bg-[#0e141c]/90 border border-slate-800/80 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-xl flex flex-col space-y-8"
      >
        
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Sparkles size={22} className="fill-current animate-pulse" />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-extrabold tracking-tight text-white">Welcome to NutriFresh</h1>
            <p className="text-xs text-slate-400 font-medium">Verify your session to unlock your custom diet console.</p>
          </div>
        </div>

        {/* Minimal Tab Selectors */}
        <div className="flex bg-[#070b11] p-1 rounded-xl border border-slate-800/40">
          <button
            onClick={() => {
              setActiveTab("google");
              setError(null);
              setSuccess(null);
            }}
            className={`flex-1 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
              activeTab === "google" 
                ? "bg-[#16212e] text-emerald-400 shadow-sm border border-slate-700/30" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Mail size={13} />
            <span>Google Account</span>
          </button>
          <button
            onClick={() => {
              setActiveTab("phone");
              setError(null);
              setSuccess(null);
            }}
            className={`flex-1 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
              activeTab === "phone" 
                ? "bg-[#16212e] text-emerald-400 shadow-sm border border-slate-700/30" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Smartphone size={13} />
            <span>Mobile Phone</span>
          </button>
        </div>

        {/* Notification Blocks */}
        <AnimatePresence mode="wait">
          {success && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl flex items-start space-x-3 text-xs font-medium"
            >
              <ShieldCheck size={16} className="mt-0.5 flex-shrink-0" />
              <span>{success}</span>
            </motion.div>
          )}

          {error && friendlyError && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-4 rounded-xl flex flex-col space-y-3 text-xs"
            >
              <div className="flex items-start space-x-3">
                <AlertCircle size={16} className="mt-0.5 flex-shrink-0 text-rose-400" />
                <div className="space-y-1">
                  <p className="font-bold text-white">{friendlyError.title}</p>
                  <p className="text-slate-300 font-medium leading-relaxed">{friendlyError.message}</p>
                </div>
              </div>

              {/* Step-by-step custom Firebase Console Troubleshooting guide */}
              {friendlyError.steps.length > 0 && (
                <div className="pt-2 border-t border-rose-500/10 space-y-1.5 pl-7">
                  <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">How to resolve:</p>
                  <ol className="list-decimal list-inside space-y-1 text-slate-300 font-semibold text-[11px]">
                    {friendlyError.steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Auth Body Forms */}
        <div className="min-h-[120px] flex items-center">
          {activeTab === "google" ? (
            /* Clean Minimal Google Auth */
            <div className="w-full flex flex-col space-y-4">
              <button
                onClick={handleGoogleSignIn}
                disabled={localLoading || authLoading}
                className="w-full py-3.5 bg-white hover:bg-neutral-100 text-slate-900 rounded-xl font-bold text-xs flex items-center justify-center space-x-3 transition-all cursor-pointer shadow-md hover:scale-[1.01]"
              >
                {localLoading ? (
                  <Loader2 size={16} className="animate-spin text-emerald-600" />
                ) : (
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12 5.04c1.62 0 3.08.56 4.22 1.65l3.15-3.15C17.45 1.68 14.93 1 12 1 7.35 1 3.39 3.65 1.46 7.54l3.78 2.93C6.18 7.35 8.85 5.04 12 5.04z" />
                    <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.29 1.48-1.14 2.73-2.4 3.58l3.75 2.91c2.19-2.02 3.68-4.99 3.68-8.64z" />
                    <path fill="#FBBC05" d="M5.24 10.47c-.24-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29L1.46 2.96C.53 4.82 0 6.91 0 9.12s.53 4.3 1.46 6.16l3.78-2.96-.06-1.85z" />
                    <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.75-2.91c-1.05.7-2.39 1.12-4.21 1.12-3.15 0-5.82-2.31-6.76-5.43l-3.78 2.93C3.39 20.35 7.35 23 12 23z" />
                  </svg>
                )}
                <span>Verify with Google Account</span>
              </button>
              <p className="text-[10px] text-center text-slate-500 font-semibold leading-relaxed">
                Logs in instantly via Google Secure OAuth connection.
              </p>
            </div>
          ) : (
            /* Clean SMS Authentication Form */
            <div className="w-full">
              {!otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="e.g. +1 555 0199 or +91 98765 43210"
                      className="w-full bg-[#070b11] border border-slate-800 focus:border-emerald-500/50 px-4 py-3 rounded-xl outline-none focus:ring-1 focus:ring-emerald-500/20 transition-all font-semibold text-xs text-white placeholder-slate-600"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={localLoading || authLoading}
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md hover:scale-[1.01]"
                  >
                    {localLoading ? <Loader2 size={15} className="animate-spin" /> : <Smartphone size={13} />}
                    <span>Request OTP via SMS</span>
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-5">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Verify 6-Digit SMS Code</label>
                      <button 
                        type="button"
                        onClick={() => {
                          setOtpSent(false);
                          setError(null);
                          setSuccess(null);
                        }}
                        className="text-[10px] font-bold text-emerald-400 hover:underline flex items-center space-x-1"
                      >
                        <ArrowLeft size={10} />
                        <span>Change Number</span>
                      </button>
                    </div>
                    <input
                      type="text"
                      maxLength={6}
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      placeholder="••••••"
                      className="w-full bg-[#070b11] border border-slate-800 focus:border-emerald-500/50 text-center tracking-[0.4em] px-4 py-3.5 rounded-xl outline-none focus:ring-1 focus:ring-emerald-500/20 transition-all font-bold text-lg text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={localLoading || authLoading}
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md hover:scale-[1.01]"
                  >
                    {localLoading ? <Loader2 size={15} className="animate-spin" /> : <UserCheck size={13} />}
                    <span>Confirm Code & Enter App</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Footer verification notice */}
        <div className="pt-5 border-t border-slate-850 flex items-center justify-center space-x-2 text-[10px] text-slate-500 font-bold tracking-wider">
          <ShieldCheck size={13} className="text-emerald-500" />
          <span>Secure End-to-End Firebase Authentication</span>
        </div>
      </motion.div>

      {/* Floating NutriBot Assistant (Beautifully minimized floating action bubble) */}
      <div className="fixed bottom-6 right-6 z-[120] flex flex-col items-end">
        <AnimatePresence>
          {showAiChat && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="w-80 bg-[#0e141c] border border-slate-800 rounded-2xl shadow-2xl p-4 flex flex-col mb-4 max-h-[380px]"
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                <div className="flex items-center space-x-2.5">
                  <div className="relative">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Bot size={14} />
                    </div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border border-[#0e141c]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">NutriBot Chat</h3>
                    <p className="text-[9px] text-emerald-400 font-bold">Companion Online</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowAiChat(false)}
                  className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800/40 transition-all cursor-pointer"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Message List */}
              <div className="flex-1 overflow-y-auto no-scrollbar py-3 space-y-3 max-h-[220px] min-h-[160px]">
                {chatMessages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col max-w-[85%] ${
                      msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl text-[11px] font-semibold leading-relaxed ${
                      msg.sender === "user" 
                        ? "bg-slate-700 text-white rounded-tr-none" 
                        : "bg-[#070b11] border border-slate-850 text-slate-200 rounded-tl-none"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Form */}
              <form onSubmit={handleAiChatSubmit} className="relative flex items-center mt-2.5">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask NutriBot..."
                  className="w-full bg-[#070b11] border border-slate-800 pl-3.5 pr-9 py-2.5 rounded-xl outline-none focus:border-emerald-500/50 transition-all font-semibold text-xs text-white placeholder-slate-650"
                />
                <button 
                  type="submit" 
                  className="absolute right-2 p-1.5 text-emerald-400 hover:text-emerald-300 transition-all cursor-pointer"
                >
                  <Send size={11} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Chat Trigger Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAiChat(!showAiChat)}
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl cursor-pointer transition-colors border border-emerald-400/20"
        >
          {showAiChat ? <X size={20} /> : <MessageSquare size={20} />}
        </motion.button>
      </div>

      {/* Hidden Captcha anchor for Phone SMS verification */}
      <div id="recaptcha-container" ref={recaptchaRef} className="hidden pointer-events-none select-none"></div>
    </div>
  );
}