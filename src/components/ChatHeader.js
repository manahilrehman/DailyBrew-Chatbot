"use client";

import CoffeeCupIcon from "./CoffeeCupIcon";
import StoreStatusBadge from "./StoreStatusBadge";
import { BookOpen, Volume2, VolumeX, RotateCcw, Sparkles } from "lucide-react";
import { STORE_INFO } from "@/data/storeInfo";

export default function ChatHeader({
  onOpenMenu,
  soundEnabled,
  onToggleSound,
  onClearChat,
  hasMessages,
}) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        backgroundColor: "rgba(18, 11, 8, 0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border-warm)",
        padding: "12px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        {/* Brand Identity */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              padding: "6px",
              borderRadius: "12px",
              backgroundColor: "rgba(229, 142, 55, 0.12)",
              border: "1px solid var(--border-warm)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CoffeeCupIcon size={30} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  color: "var(--latte-cream)",
                  letterSpacing: "-0.01em",
                  lineHeight: "1.2",
                }}
              >
                {STORE_INFO.name}
              </h1>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "3px",
                  fontSize: "0.68rem",
                  padding: "2px 7px",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "rgba(229, 142, 55, 0.18)",
                  color: "var(--caramel-light)",
                  fontWeight: "600",
                  border: "1px solid var(--border-warm)",
                }}
              >
                <Sparkles size={10} style={{ color: "var(--accent-gold)" }} />
                AI Barista
              </span>
            </div>
            <p style={{ fontSize: "0.78rem", color: "var(--latte-subtle)", marginTop: "1px" }}>
              {STORE_INFO.tagline}
            </p>
          </div>
        </div>

        {/* Live Operating Status */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <StoreStatusBadge />
        </div>

        {/* Action Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Menu Drawer Toggle */}
          <button
            onClick={onOpenMenu}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "7px 14px",
              borderRadius: "var(--radius-full)",
              backgroundColor: "rgba(229, 142, 55, 0.16)",
              border: "1px solid var(--border-warm)",
              color: "var(--caramel-light)",
              fontSize: "0.82rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.18s ease",
            }}
            title="Browse our 3 menu favorites & add-ons"
          >
            <BookOpen size={14} style={{ color: "var(--caramel-primary)" }} />
            <span>Menu</span>
            <span
              style={{
                fontSize: "0.7rem",
                padding: "1px 6px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--caramel-primary)",
                color: "#1A110D",
                fontWeight: "700",
              }}
            >
              {STORE_INFO.menu.length}
            </span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--border-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: soundEnabled ? "var(--caramel-primary)" : "var(--latte-subtle)",
              cursor: "pointer",
              transition: "all 0.18s ease",
            }}
            title={soundEnabled ? "Sound enabled (click to mute)" : "Sound muted (click to enable)"}
            aria-label="Toggle sound"
          >
            {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
          </button>

          {/* Clear Chat */}
          {hasMessages && (
            <button
              onClick={onClearChat}
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--border-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--latte-subtle)",
                cursor: "pointer",
                transition: "all 0.18s ease",
              }}
              title="Reset conversation"
              aria-label="Reset conversation"
            >
              <RotateCcw size={14} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
