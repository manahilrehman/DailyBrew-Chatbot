"use client";

import { STORE_INFO } from "@/data/storeInfo";
import { Clock, MapPin, Phone, MessageSquareText } from "lucide-react";
import StoreStatusBadge from "./StoreStatusBadge";

export default function CafeHoursLocation({ onOpenChat }) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <footer
      id="hours"
      style={{
        backgroundColor: "#F3ECE3",
        borderTop: "1px solid rgba(59, 36, 24, 0.1)",
        padding: "60px 24px 30px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Brand & Mission */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.6rem",
                color: "var(--espresso-dark)",
                marginBottom: "10px",
              }}
            >
              Daily Brew
            </h3>
            <p style={{ color: "var(--espresso-muted)", fontSize: "0.94rem", lineHeight: "1.6", marginBottom: "16px" }}>
              Your friendly neighborhood coffeehouse sanctuary. Fresh Colombian beans, artisan cold brews, and warm blueberry muffins baked daily.
            </p>
            <div style={{ marginBottom: "16px" }}>
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
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(200, 112, 25, 0.3)",
                color: "var(--caramel-deep)",
                fontSize: "0.85rem",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(59, 36, 24, 0.05)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFF7ED")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
            >
              <MessageSquareText size={15} style={{ color: "var(--caramel-primary)" }} />
              <span>Open Side Barista Chat</span>
            </button>
          </div>

          {/* Operating Hours Table */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <Clock size={18} style={{ color: "var(--caramel-primary)" }} />
              <h4 style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--espresso-dark)" }}>
                Operating Hours
              </h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {days.map((day) => (
                <div
                  key={day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "7px 0",
                    borderBottom: "1px solid rgba(59, 36, 24, 0.08)",
                    fontSize: "0.88rem",
                  }}
                >
                  <span style={{ color: "var(--espresso-muted)", fontWeight: "500" }}>{day}</span>
                  <span style={{ color: "var(--caramel-deep)", fontWeight: "700" }}>
                    7:00 AM – 9:00 PM
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Contact Info */}
          <div>
            <h4 style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--espresso-dark)", marginBottom: "16px" }}>
              Visit & Contact Us
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "0.9rem" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <MapPin size={18} style={{ color: "var(--caramel-primary)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <strong style={{ color: "var(--espresso-dark)" }}>Cafe Address</strong>
                  <p style={{ color: "var(--espresso-muted)", marginTop: "2px" }}>
                    {STORE_INFO.location}
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <Phone size={18} style={{ color: "var(--caramel-primary)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <strong style={{ color: "var(--espresso-dark)" }}>Phone Orders</strong>
                  <p style={{ color: "var(--espresso-muted)", marginTop: "2px" }}>
                    {STORE_INFO.phone}
                  </p>
                </div>
              </div>

              <div
                style={{
                  padding: "14px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(200, 112, 25, 0.25)",
                  boxShadow: "0 2px 8px rgba(59, 36, 24, 0.04)",
                  marginTop: "8px",
                }}
              >
                <span style={{ fontSize: "0.78rem", fontWeight: "700", color: "var(--caramel-deep)", display: "block" }}>
                  ☕ Barista Recommendation Tip:
                </span>
                <span style={{ fontSize: "0.82rem", color: "var(--espresso-muted)", marginTop: "2px", display: "block" }}>
                  Try our signature <strong>Caramel Cold Brew ($5.00)</strong> with a warm <strong>Blueberry Muffin ($3.50)</strong>!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid rgba(59, 36, 24, 0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "0.8rem",
            color: "var(--espresso-subtle)",
          }}
        >
          <div>© {new Date().getFullYear()} Daily Brew Coffeehouse. All rights reserved.</div>
          <div style={{ display: "flex", gap: "16px" }}>
            <span>Clean & Modern Business AI Assistant</span>
            <span>•</span>
            <span>7 AM – 9 PM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
