"use client";

import { useState } from "react";
import CafeNavbar from "@/components/CafeNavbar";
import CafeHero from "@/components/CafeHero";
import CafeMenuSection from "@/components/CafeMenuSection";
import CafeStorySection from "@/components/CafeStorySection";
import CafeHoursLocation from "@/components/CafeHoursLocation";
import SideChatDrawer from "@/components/SideChatDrawer";
import FloatingChatButton from "@/components/FloatingChatButton";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialPrompt, setInitialPrompt] = useState(null);

  const handleOpenChat = (promptText = null) => {
    if (promptText) {
      setInitialPrompt(promptText);
    }
    setIsChatOpen(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--bg-cream)",
        position: "relative",
      }}
    >
      {/* 1. Cafe Navigation Bar */}
      <CafeNavbar onOpenChat={() => handleOpenChat()} />

      {/* 2. Main Cafe Website Content */}
      <main style={{ flex: 1 }}>
        {/* Real Cafe Hero Banner */}
        <CafeHero onOpenChat={handleOpenChat} />

        {/* Clean, Mouthwatering Menu Section */}
        <CafeMenuSection onOpenChat={handleOpenChat} />

        {/* Cafe Story & Cozy Ambiance */}
        <CafeStorySection onOpenChat={handleOpenChat} />

        {/* Operating Hours & Location Footer */}
        <CafeHoursLocation onOpenChat={handleOpenChat} />
      </main>

      {/* 3. Floating Action Launcher Button (Bottom Right) */}
      <FloatingChatButton
        isOpen={isChatOpen}
        onOpen={() => handleOpenChat()}
      />

      {/* 4. Side Taskbar / Drawer Chatbot Widget */}
      <SideChatDrawer
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        initialPrompt={initialPrompt}
        onClearInitialPrompt={() => setInitialPrompt(null)}
      />
    </div>
  );
}
