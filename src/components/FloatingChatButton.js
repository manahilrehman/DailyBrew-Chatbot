"use client";

import CoffeeCupIcon from "./CoffeeCupIcon";
import { Sparkles } from "lucide-react";

export default function FloatingChatButton({ isOpen, onOpen }) {
  if (isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      {/* Speech Bubble Tooltip Prompt */}
      <div
        onClick={onOpen}
        style={{
          backgroundColor: "#FFFFFF",
          border: "1.5px solid rgba(200, 112, 25, 0.3)",
          padding: "9px 18px",
          borderRadius: "var(--radius-full)",
          boxShadow: "0 6px 24px rgba(59, 36, 24, 0.12)",
          cursor: "pointer",
          display: "none",
          alignItems: "center",
          gap: "8px",
          transition: "all 0.2s ease",
        }}
        className="floating-tooltip-pill"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateX(-4px)";
          e.currentTarget.style.borderColor = "var(--caramel-primary)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateX(0)";
          e.currentTarget.style.borderColor = "rgba(200, 112, 25, 0.3)";
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#059669",
          }}
          className="pulse-open"
        />
        <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--espresso-dark)" }}>
          Need a recommendation? <strong style={{ color: "var(--caramel-primary)" }}>Ask Barista! ☕</strong>
        </span>
      </div>

      {/* Main Floating Action Button */}
      <button
        onClick={onOpen}
        className="fab-animated"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "var(--caramel-primary)",
          border: "2.5px solid #FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          position: "relative",
          transition: "all 0.25s ease",
          boxShadow: "0 8px 24px rgba(200, 112, 25, 0.35)",
        }}
        title="Open Daily Brew AI Barista Side Taskbar"
        aria-label="Open Daily Brew AI Barista"
      >
        <CoffeeCupIcon size={34} />

        {/* Live Sparkle notification dot */}
        <span
          style={{
            position: "absolute",
            top: "-2px",
            right: "-2px",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "#FFFFFF",
            border: "1.5px solid var(--caramel-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--caramel-primary)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <Sparkles size={11} />
        </span>
      </button>

      <style jsx>{`
        @media (min-width: 640px) {
          .floating-tooltip-pill {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
