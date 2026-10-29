"use client";

import { STORE_INFO } from "@/data/storeInfo";
import { X, Sparkles, Coffee, Clock, MapPin, Wifi, PlusCircle } from "lucide-react";

export default function MenuSidebar({ isOpen, onClose, onSelectPrompt }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        backgroundColor: "rgba(0, 0, 0, 0.65)",
        backdropFilter: "blur(6px)",
        display: "flex",
        justifyContent: "flex-end",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          height: "100%",
          backgroundColor: "var(--bg-espresso)",
          borderLeft: "1px solid var(--border-warm)",
          display: "flex",
          flexDirection: "column",
          boxShadow: "var(--shadow-md)",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid var(--border-warm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            backgroundColor: "rgba(26, 17, 13, 0.95)",
            backdropFilter: "blur(12px)",
            zIndex: 10,
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.45rem",
                color: "var(--latte-cream)",
                letterSpacing: "-0.01em",
              }}
            >
              Daily Brew Menu
            </h2>
            <p style={{ fontSize: "0.82rem", color: "var(--caramel-primary)", marginTop: "2px" }}>
              Fresh Artisan Roasts & Daily Bakes
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--latte-muted)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Operating Hours Alert */}
          <div
            style={{
              padding: "12px 16px",
              borderRadius: "var(--radius-md)",
              backgroundColor: "rgba(229, 142, 55, 0.12)",
              border: "1px solid var(--border-warm)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Clock size={20} style={{ color: "var(--caramel-primary)", flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: "0.86rem", fontWeight: "600", color: "var(--latte-cream)" }}>
                Operating Hours
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--latte-muted)" }}>
                {STORE_INFO.hours.scheduleText}
              </div>
            </div>
          </div>

          {/* Menu Items Section */}
          <div>
            <div
              style={{
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--latte-subtle)",
                fontWeight: "700",
                marginBottom: "14px",
              }}
            >
              Handcrafted Offerings
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {STORE_INFO.menu.map((item) => (
                <div
                  key={item.id}
                  style={{
                    borderRadius: "var(--radius-lg)",
                    padding: "18px",
                    backgroundColor: item.isSignature
                      ? "rgba(229, 142, 55, 0.08)"
                      : "var(--bg-card-subtle)",
                    border: item.isSignature
                      ? "1px solid var(--caramel-primary)"
                      : "1px solid var(--border-light)",
                    transition: "all 0.2s ease",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "12px",
                      marginBottom: "6px",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                        <span
                          style={{
                            fontSize: "1.05rem",
                            fontWeight: "700",
                            color: "var(--latte-cream)",
                          }}
                        >
                          {item.name}
                        </span>
                        {item.isSignature ? (
                          <span
                            className="shimmer-badge"
                            style={{
                              fontSize: "0.7rem",
                              padding: "2px 8px",
                              borderRadius: "var(--radius-full)",
                            }}
                          >
                            {item.badge}
                          </span>
                        ) : (
                          <span
                            style={{
                              fontSize: "0.7rem",
                              padding: "2px 8px",
                              borderRadius: "var(--radius-full)",
                              backgroundColor: "rgba(255, 255, 255, 0.08)",
                              color: "var(--latte-muted)",
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--latte-subtle)",
                          marginTop: "2px",
                          display: "block",
                        }}
                      >
                        {item.category} • {item.calories}
                      </span>
                    </div>

                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "var(--caramel-primary)",
                      }}
                    >
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--latte-muted)",
                      lineHeight: "1.45",
                      margin: "8px 0 12px",
                    }}
                  >
                    {item.description}
                  </p>

                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <button
                      onClick={() => {
                        onSelectPrompt(`Tell me more about the ${item.name}`);
                        onClose();
                      }}
                      style={{
                        background: "rgba(229, 142, 55, 0.15)",
                        border: "1px solid var(--border-warm)",
                        borderRadius: "var(--radius-full)",
                        padding: "6px 12px",
                        fontSize: "0.75rem",
                        color: "var(--caramel-light)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "all 0.18s ease",
                      }}
                    >
                      <Sparkles size={12} />
                      Ask Barista
                    </button>
                    <button
                      onClick={() => {
                        onSelectPrompt(`I'd like to order a ${item.name}`);
                        onClose();
                      }}
                      style={{
                        background: "var(--caramel-primary)",
                        border: "none",
                        borderRadius: "var(--radius-full)",
                        padding: "6px 12px",
                        fontSize: "0.75rem",
                        color: "#1A110D",
                        fontWeight: "600",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "all 0.18s ease",
                      }}
                    >
                      <PlusCircle size={12} />
                      Order This
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add-ons & Milks */}
          <div
            style={{
              padding: "16px",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--bg-card-subtle)",
              border: "1px solid var(--border-light)",
            }}
          >
            <div
              style={{
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--latte-subtle)",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              Add-ons & Substitutions
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {STORE_INFO.addons.map((addon) => (
                <div
                  key={addon.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "0.85rem",
                  }}
                >
                  <span style={{ color: "var(--latte-muted)" }}>{addon.name}</span>
                  <span style={{ color: "var(--caramel-primary)", fontWeight: "600" }}>
                    +${addon.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities & Location */}
          <div
            style={{
              padding: "16px",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--bg-card-subtle)",
              border: "1px solid var(--border-light)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "0.82rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--latte-cream)" }}>
              <MapPin size={16} style={{ color: "var(--caramel-primary)" }} />
              <span>{STORE_INFO.location}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--latte-cream)" }}>
              <Wifi size={16} style={{ color: "var(--caramel-primary)" }} />
              <span>
                Wi-Fi: <strong style={{ color: "var(--caramel-light)" }}>{STORE_INFO.wifiName}</strong> (Pass: {STORE_INFO.wifiPass})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
