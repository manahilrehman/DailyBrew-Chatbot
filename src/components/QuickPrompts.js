"use client";

import { Sparkles, Coffee, Clock, BookOpen, ShieldAlert } from "lucide-react";

export default function QuickPrompts({ onSelectPrompt, disabled }) {
  const prompts = [
    {
      label: "What do you recommend to drink?",
      icon: <Sparkles size={13} style={{ color: "var(--caramel-primary)" }} />,
    },
    {
      label: "What are your opening hours?",
      icon: <Clock size={13} style={{ color: "#059669" }} />,
    },
    {
      label: "What's on the menu?",
      icon: <BookOpen size={13} style={{ color: "var(--caramel-primary)" }} />,
    },
    {
      label: "Tell me about the Blueberry Muffin",
      icon: <Coffee size={13} style={{ color: "#D97706" }} />,
    },
    {
      label: "Can you write Python code for me?",
      icon: <ShieldAlert size={13} style={{ color: "#DC2626" }} />,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        overflowX: "auto",
        padding: "4px 2px 10px",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {prompts.map((p, idx) => (
        <button
          key={idx}
          disabled={disabled}
          onClick={() => onSelectPrompt(p.label)}
          style={{
            whiteSpace: "nowrap",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "7px 14px",
            borderRadius: "var(--radius-full)",
            backgroundColor: "#FFFFFF",
            border: "1px solid rgba(200, 112, 25, 0.25)",
            color: "var(--espresso-dark)",
            fontSize: "0.8rem",
            fontWeight: "600",
            cursor: disabled ? "not-allowed" : "pointer",
            transition: "all 0.18s ease",
            boxShadow: "0 1px 4px rgba(59, 36, 24, 0.05)",
            flexShrink: 0,
            opacity: disabled ? 0.6 : 1,
          }}
          onMouseEnter={(e) => {
            if (!disabled) {
              e.currentTarget.style.backgroundColor = "#FFF7ED";
              e.currentTarget.style.borderColor = "var(--caramel-primary)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }
          }}
          onMouseLeave={(e) => {
            if (!disabled) {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.borderColor = "rgba(200, 112, 25, 0.25)";
              e.currentTarget.style.transform = "translateY(0)";
            }
          }}
        >
          {p.icon}
          <span>{p.label}</span>
        </button>
      ))}
    </div>
  );
}
