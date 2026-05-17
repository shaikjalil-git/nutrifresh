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
  CheckCircle, 
  ShieldCheck, 
  UserCheck 
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

  // AI Chat onboarding assistant states
  const [showAiChat, setShowAiChat] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "ai" | "user"; text: string }>>([
    { sender: "ai", text: "Welcome to NutriFresh! 🌟 I am NutriBot, your AI nutrition helper. Feel free to ask me anything about recipes or dietary goals, or type 'setup' to begin registration!" }
  ]);

  const recaptchaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const handleGoogleSignIn = async () => {
    setLocalLoading(true);
    setError(null);
    try {
      await loginWithGoogle();
      setSuccess("Successfully authenticated via Google!");
    } catch (err: any) {
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
      // Initialize Firebase Recaptcha
      const verifier = await setupRecaptcha("recaptcha-container");
      await sendPhoneOtp(phoneNumber, verifier);
      setOtpSent(true);
      setSuccess("SMS Verification Code sent successfully!");
    } catch (err: any) {
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
      setError(err?.message || "Invalid or expired OTP verification code.");
    } finally {
      setLocalLoading(false);
    }
  };

  // AI Assistant responses
  const handleAiChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    setChatMessages(prev => [...prev, { sender: "user", text: userText }]);
    setChatInput("");

    setTimeout(() => {
      let botResponse = "I'm here to help you get started! You can log in securely using your Google Gmail or your mobile phone number on the card on your left.";
      const lower = userText.toLowerCase();

      if (lower.includes("diet") || lower.includes("vegan") || lower.includes("keto")) {
        botResponse = "NutriFresh curates completely customized diets! We offer high-protein, keto, vegan, and gluten-free plans, and let you assemble entirely custom recipes using the live Gemini 3 Flash AI!";
      } else if (lower.includes("phone") || lower.includes("sms") || lower.includes("mobile")) {
        botResponse = "To log in via mobile, click the 'Mobile Phone OTP' tab on the card. Type your number (with country code, e.g. +15550199) and complete the secure SMS verification.";
      } else if (lower.includes("google") || lower.includes("gmail") || lower.includes("mail")) {
        botResponse = "Google Sign-In is our fastest secure method. Just click the 'Gmail Account Login' tab and tap 'Verify via Google Account'. It takes 2 seconds!";
      } else if (lower.includes("setup") || lower.includes("register") || lower.includes("start")) {
        botResponse = "Perfect! Let's get you registered. Choose your preferred login tab on the left card (Google or Mobile OTP). Once authenticated, you will unlock your personal nutrition planner.";
      } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
        botResponse = "Hello there! I'm NutriBot. Ask me about how we track calories, customized meal planning, or ask for guidance on setting up your account!";
      }

      setChatMessages(prev => [...prev, { sender: "ai", text: botResponse }]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col md:flex-row items-center justify-center bg-[#090f12] text-foreground p-4 overflow-y-auto overflow-x-hidden select-none">
      
      {/* Absolute futuristic decorative light orbs (toned down) */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative flex flex-col lg:flex-row items-stretch justify-center w-full max-w-4xl gap-8 min-h-[500px]">
        
        {/* Left Side: Authentication Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 bg-[#10191e]/90 border border-border/40 rounded-lg p-6 md:p-8 backdrop-blur-md shadow-lg flex flex-col justify-between"
        >
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-foreground/80">
              <Sparkles size={24} className="fill-current" />
              <span className="text-xl font-black uppercase tracking-widest">NutriFresh</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight">Unlock Your Nutrition Desk</h1>
            <p className="text-xs text-secondary font-semibold">Join thousands of health enthusiasts tracking goals with live AI coaching.</p>
          </div>

          {/* Form Tabs */}
          <div className="my-6 space-y-5">
            <div className="grid grid-cols-2 gap-2 bg-[#0c1316] p-1.5 rounded-lg border border-border/30">
              <button
                onClick={() => {
                  setActiveTab("google");
                  setError(null);
                  setSuccess(null);
                }}
                className={`py-3 rounded-md text-xs font-black flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                  activeTab === "google" 
                    ? "bg-primary text-white" 
                    : "text-secondary hover:text-foreground"
                }`}
              >
                <Mail size={14} />
                <span>Gmail Account</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab("phone");
                  setError(null);
                  setSuccess(null);
                }}
                className={`py-3 rounded-md text-xs font-black flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                  activeTab === "phone" 
                    ? "bg-primary text-white" 
                    : "text-secondary hover:text-foreground"
                }`}
              >
                <Smartphone size={14} />
                <span>Mobile Phone OTP</span>
              </button>
            </div>

            {/* Notification Bars */}
            {error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-500/10 border border-red-500/20 text-red-400 p-3.5 rounded-xl flex items-center space-x-2 text-xs font-bold"
              >
                <AlertCircle size={14} className="flex-shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            {success && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-3.5 rounded-xl flex items-center space-x-2 text-xs font-bold"
              >
                <ShieldCheck size={14} className="flex-shrink-0" />
                <span>{success}</span>
              </motion.div>
            )}

            {/* Dynamic Forms */}
            <div className="min-h-[140px] flex items-center justify-center">
              {activeTab === "google" ? (
                /* Google authentication Form */
                <div className="w-full text-center space-y-4">
                  <p className="text-xs text-secondary font-semibold leading-relaxed">
                    Verify securely in 1 click using your active Google/Gmail session.
                  </p>
                  <button
                    onClick={handleGoogleSignIn}
                    disabled={localLoading || authLoading}
                    className="w-full py-4 bg-white hover:bg-neutral-100 text-[#090f12] rounded-lg font-black text-xs flex items-center justify-center space-x-3 transition-all cursor-pointer shadow-sm border border-neutral-200"
                  >
                    {localLoading ? (
                      <Loader2 size={16} className="animate-spin text-primary" />
                    ) : (
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="#EA4335" d="M12 5.04c1.62 0 3.08.56 4.22 1.65l3.15-3.15C17.45 1.68 14.93 1 12 1 7.35 1 3.39 3.65 1.46 7.54l3.78 2.93C6.18 7.35 8.85 5.04 12 5.04z" />
                        <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.29 1.48-1.14 2.73-2.4 3.58l3.75 2.91c2.19-2.02 3.68-4.99 3.68-8.64z" />
                        <path fill="#FBBC05" d="M5.24 10.47c-.24-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29L1.46 2.96C.53 4.82 0 6.91 0 9.12s.53 4.3 1.46 6.16l3.78-2.96-.06-1.85z" />
                        <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.75-2.91c-1.05.7-2.39 1.12-4.21 1.12-3.15 0-5.82-2.31-6.76-5.43l-3.78 2.93C3.39 20.35 7.35 23 12 23z" />
                      </svg>
                    )}
                    <span>Verify via Google Account</span>
                  </button>
                </div>
              ) : (
                /* Mobile Phone with OTP input challenge */
                <div className="w-full">
                  {!otpSent ? (
                    <form onSubmit={handleSendOtp} className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase text-secondary">Phone Number (include country code)</label>
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="e.g. +1 555 0199 or +91 98765 43210"
                          className="w-full bg-[#0c1316] border border-border/50 px-4 py-3.5 rounded-lg outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all font-semibold text-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={localLoading || authLoading}
                        className="w-full py-3.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-black text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-sm"
                      >
                        {localLoading ? <Loader2 size={16} className="animate-spin" /> : <Smartphone size={14} />}
                        <span>Request OTP via SMS</span>
                      </button>
                    </form>
                  ) : (
                    <form onSubmit={handleVerifyOtp} className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="text-[10px] font-black uppercase text-secondary">Verify 6-Digit SMS Code</label>
                          <button 
                            type="button"
                            onClick={() => setOtpSent(false)}
                            className="text-[10px] font-bold text-primary hover:underline"
                          >
                            Change Number
                          </button>
                        </div>
                        <input
                          type="text"
                          maxLength={6}
                          value={otpCode}
                          onChange={(e) => setOtpCode(e.target.value)}
                          placeholder="Type 6-digit code..."
                          className="w-full bg-[#0c1316] border border-border/50 text-center tracking-[0.4em] px-4 py-3.5 rounded-lg outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all font-black text-lg"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={localLoading || authLoading}
                        className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-black text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-sm"
                      >
                        {localLoading ? <Loader2 size={16} className="animate-spin" /> : <UserCheck size={14} />}
                        <span>Confirm Code & Enter App</span>
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Secure verification notice */}
          <div className="pt-4 border-t border-border/30 flex items-center justify-center space-x-2 text-[10px] text-secondary font-bold">
            <ShieldCheck size={12} className="text-primary" />
            <span>End-to-End Encrypted Authentication via Google Firebase Auth</span>
          </div>
        </motion.div>

        {/* Right Side: Interactive AI Assistant */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="w-full lg:w-80 bg-[#10191e]/90 border border-border/40 rounded-lg p-6 backdrop-blur-md shadow-lg flex flex-col justify-between max-h-[500px]"
        >
          {/* Chat header */}
          <div className="flex items-center space-x-2 pb-3 border-b border-border/30">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-primary/25 border border-primary/45 flex items-center justify-center text-primary flex-shrink-0">
                <Bot size={16} />
              </div>
              <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border border-[#10191e]" />
            </div>
            <div>
              <p className="text-xs font-black">NutriBot Assistant</p>
              <p className="text-[9px] text-emerald-400 font-bold">AI Companion Online</p>
            </div>
          </div>

          {/* Message List */}
          <div className="flex-1 overflow-y-auto no-scrollbar py-4 space-y-3 max-h-[300px]">
            {chatMessages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col max-w-[85%] ${
                  msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                }`}
              >
                <div className={`p-3 rounded-lg text-xs font-semibold leading-relaxed ${
                  msg.sender === "user" 
                    ? "bg-neutral-700 text-white rounded-tr-sm" 
                    : "bg-[#0c1316] border border-border/20 text-foreground/90 rounded-tl-sm"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input field */}
          <form onSubmit={handleAiChatSubmit} className="relative flex items-center mt-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask me: 'tell me about Vegan diets'..."
              className="w-full bg-[#0c1316] border border-border/50 pl-4 pr-10 py-3 rounded-lg outline-none focus:border-primary transition-all font-semibold text-xs"
            />
            <button 
              type="submit" 
              className="absolute right-2 p-1.5 text-primary hover:text-primary/80 transition-all cursor-pointer"
            >
              <Send size={12} />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Hidden Captcha anchor for Phone SMS verification */}
      <div id="recaptcha-container" ref={recaptchaRef} className="hidden pointer-events-none select-none"></div>
    </div>
  );
}
