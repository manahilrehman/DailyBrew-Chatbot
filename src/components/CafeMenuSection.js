"use client";

import { STORE_INFO } from "@/data/storeInfo";
import { MessageSquareText, Sparkles, Coffee, Plus } from "lucide-react";

export default function CafeMenuSection({ onOpenChat }) {
  return (
    <section
      id="menu"
      style={{
        padding: "60px 24px",
        backgroundColor: "#F7F2EC",
        borderTop: "1px solid rgba(59, 36, 24, 0.08)",
        borderBottom: "1px solid rgba(59, 36, 24, 0.08)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Heading */}
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 44px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "5px 14px",
              borderRadius: "var(--radius-full)",
              backgroundColor: "#FFF7ED",
              border: "1px solid rgba(200, 112, 25, 0.25)",
              color: "var(--caramel-deep)",
              fontSize: "0.8rem",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "12px",
            }}
          >
            <Coffee size={14} />
            Handcrafted Cafe Menu
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 3.5vw, 2.7rem)",
              color: "var(--espresso-dark)",
              letterSpacing: "-0.01em",
              marginBottom: "14px",
            }}
          >
            Fresh Artisan Roasts & Morning Bakes
          </h2>
          <p style={{ color: "var(--espresso-muted)", fontSize: "1.02rem", lineHeight: "1.6" }}>
            Every drink is pulled to order, every cold brew slow-steeped for 16 hours, and every muffin baked warm right here at Daily Brew.
          </p>
        </div>

        {/* 3 Main Menu Offerings */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            marginBottom: "36px",
          }}
        >
          {STORE_INFO.menu.map((item) => (
            <div
              key={item.id}
              style={{
                borderRadius: "var(--radius-lg)",
                backgroundColor: "#FFFFFF",
                border: item.isSignature
                  ? "2px solid var(--caramel-primary)"
                  : "1px solid rgba(59, 36, 24, 0.1)",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: item.isSignature
                  ? "0 8px 24px rgba(200, 112, 25, 0.12)"
                  : "0 4px 16px rgba(59, 36, 24, 0.05)",
                transition: "all 0.25s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(59, 36, 24, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = item.isSignature
                  ? "0 8px 24px rgba(200, 112, 25, 0.12)"
                  : "0 4px 16px rgba(59, 36, 24, 0.05)";
              }}
            >
              <div>
                {/* Header with name and price */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "8px" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.35rem",
                          color: "var(--espresso-dark)",
                        }}
                      >
                        {item.name}
                      </h3>
                      {item.isSignature ? (
                        <span
                          className="shimmer-badge"
                          style={{
                            fontSize: "0.68rem",
                            padding: "2px 8px",
                            borderRadius: "var(--radius-full)",
                          }}
                        >
                          {item.badge}
                        </span>
                      ) : (
                        <span
                          style={{
                            fontSize: "0.68rem",
                            padding: "2px 8px",
                            borderRadius: "var(--radius-full)",
                            backgroundColor: "#F3ECE3",
                            color: "var(--espresso-muted)",
                            fontWeight: "600",
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span style={{ fontSize: "0.78rem", color: "var(--espresso-subtle)", marginTop: "2px", display: "block" }}>
                      {item.category} • {item.calories}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.6rem",
                      fontWeight: "700",
                      color: "var(--caramel-primary)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.55",
                    color: "var(--espresso-muted)",
                    margin: "12px 0 16px",
                  }}
                >
                  {item.description}
                </p>

                {/* Customization pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {item.customizations.map((c, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: "0.72rem",
                        padding: "3px 9px",
                        borderRadius: "var(--radius-full)",
                        backgroundColor: "#F5EFE6",
                        border: "1px solid rgba(59, 36, 24, 0.08)",
                        color: "var(--espresso-muted)",
                        fontWeight: "500",
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons to open in Side Chat */}
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => onOpenChat(`Tell me all about the ${item.name} at Daily Brew`)}
                  style={{
                    flex: 1,
                    padding: "9px 14px",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: "#FFF7ED",
                    border: "1px solid rgba(200, 112, 25, 0.35)",
                    color: "var(--caramel-deep)",
                    fontSize: "0.82rem",
                    fontWeight: "700",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    transition: "all 0.18s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FDE8D3")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFF7ED")}
                >
                  <MessageSquareText size={14} style={{ color: "var(--caramel-primary)" }} />
                  <span>Ask Barista</span>
                </button>

                <button
                  onClick={() => onOpenChat(`I would like to order a ${item.name}`)}
                  style={{
                    padding: "9px 16px",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: "var(--caramel-primary)",
                    color: "#FFFFFF",
                    border: "none",
                    fontSize: "0.82rem",
                    fontWeight: "700",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    boxShadow: "0 2px 8px rgba(200, 112, 25, 0.25)",
                    transition: "all 0.18s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--caramel-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--caramel-primary)")}
                >
                  <Plus size={14} />
                  <span>Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons & Milk Customization Bar */}
        <div
          style={{
            padding: "20px 24px",
            borderRadius: "var(--radius-lg)",
            backgroundColor: "#FFFFFF",
            border: "1px solid rgba(200, 112, 25, 0.2)",
            boxShadow: "0 4px 14px rgba(59, 36, 24, 0.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <span style={{ fontSize: "0.88rem", fontWeight: "700", color: "var(--espresso-dark)" }}>
              Customizations & Milks Available:
            </span>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "4px", fontSize: "0.82rem", color: "var(--espresso-muted)" }}>
              <span>• Oat / Almond Milk Swap: <strong style={{ color: "var(--caramel-primary)" }}>+$0.50</strong></span>
              <span>• Extra Espresso Shot: <strong style={{ color: "var(--caramel-primary)" }}>+$0.75</strong></span>
              <span>• Caramel / Vanilla Syrup: <strong style={{ color: "var(--caramel-primary)" }}>+$0.50</strong></span>
            </div>
          </div>

          <button
            onClick={() => onOpenChat("What customizations or milk alternatives do you offer?")}
            style={{
              padding: "8px 16px",
              borderRadius: "var(--radius-full)",
              backgroundColor: "#FFF7ED",
              border: "1px solid rgba(200, 112, 25, 0.3)",
              color: "var(--caramel-deep)",
              fontSize: "0.82rem",
              fontWeight: "700",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Sparkles size={13} style={{ color: "var(--caramel-primary)" }} />
            Ask About Customizations
          </button>
        </div>
      </div>
    </section>
  );
}
