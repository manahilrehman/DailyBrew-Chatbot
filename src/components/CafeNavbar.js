"use client";

import CoffeeCupIcon from "./CoffeeCupIcon";
import StoreStatusBadge from "./StoreStatusBadge";
import { MessageSquareText, Sparkles } from "lucide-react";
import { STORE_INFO } from "@/data/storeInfo";

export default function CafeNavbar({ onOpenChat }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        backgroundColor: "rgba(250, 247, 242, 0.95)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(59, 36, 24, 0.08)",
        padding: "14px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Brand Logo & Name */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              padding: "7px",
              borderRadius: "14px",
              backgroundColor: "#FFF7ED",
              border: "1px solid rgba(200, 112, 25, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(200, 112, 25, 0.1)",
            }}
          >
            <CoffeeCupIcon size={32} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.45rem",
                  fontWeight: "700",
                  color: "var(--espresso-dark)",
                  letterSpacing: "-0.01em",
                }}
              >
                {STORE_INFO.name}
              </span>
            </div>
            <span
              style={{
                fontSize: "0.76rem",
                color: "var(--espresso-muted)",
                display: "block",
                marginTop: "-1px",
              }}
            >
              {STORE_INFO.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            gap: "28px",
            alignItems: "center",
          }}
          className="nav-links-desktop"
        >
          <a
            href="#menu"
            style={{
              color: "var(--espresso-muted)",
              textDecoration: "none",
              fontSize: "0.92rem",
              fontWeight: "600",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--caramel-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--espresso-muted)")}
          >
            Our Menu
          </a>
          <a
            href="#story"
            style={{
              color: "var(--espresso-muted)",
              textDecoration: "none",
              fontSize: "0.92rem",
              fontWeight: "600",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--caramel-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--espresso-muted)")}
          >
            Our Story
          </a>
          <a
            href="#hours"
            style={{
              color: "var(--espresso-muted)",
              textDecoration: "none",
              fontSize: "0.92rem",
              fontWeight: "600",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--caramel-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--espresso-muted)")}
          >
            Hours & Location
          </a>
        </nav>

        {/* Right Actions: Status & Trigger Chat */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ display: "none" }} className="badge-desktop">
            <StoreStatusBadge />
          </div>

          <button
            onClick={() => onOpenChat()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "9px 18px",
              borderRadius: "var(--radius-full)",
              backgroundColor: "var(--caramel-primary)",
              color: "#FFFFFF",
              border: "none",
              fontSize: "0.88rem",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow: "0 3px 12px rgba(200, 112, 25, 0.3)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--caramel-hover)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--caramel-primary)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <MessageSquareText size={16} />
            <span>AI Barista</span>
            <span
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                padding: "2px 7px",
                borderRadius: "var(--radius-full)",
                fontSize: "0.72rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <Sparkles size={10} /> Side Chat
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .nav-links-desktop {
            display: flex !important;
          }
          .badge-desktop {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
