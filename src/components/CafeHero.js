"use client";

import { MessageSquareText, ArrowRight, Sparkles, Clock, Heart, Award } from "lucide-react";
import CoffeeCupIcon from "./CoffeeCupIcon";
import { STORE_INFO } from "@/data/storeInfo";

export default function CafeHero({ onOpenChat }) {
  return (
    <section
      style={{
        position: "relative",
        padding: "56px 24px 44px",
        overflow: "hidden",
      }}
    >
      {/* Soft warm ambient background glow accents */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "8%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200, 112, 25, 0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(223, 130, 38, 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "48px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* Left Column: Hero Content */}
        <div style={{ maxWidth: "680px" }}>
          {/* Welcome Tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "var(--radius-full)",
              backgroundColor: "#FFF7ED",
              border: "1px solid rgba(200, 112, 25, 0.25)",
              marginBottom: "18px",
              boxShadow: "0 1px 4px rgba(200, 112, 25, 0.08)",
            }}
          >
            <Sparkles size={14} style={{ color: "var(--caramel-primary)" }} />
            <span style={{ fontSize: "0.82rem", fontWeight: "700", color: "var(--caramel-deep)" }}>
              Daily Brew Artisan Coffeehouse
            </span>
            <span style={{ color: "var(--espresso-subtle)" }}>•</span>
            <span style={{ fontSize: "0.82rem", fontWeight: "600", color: "var(--espresso-muted)" }}>
              Open 7 AM – 9 PM Daily
            </span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.3rem, 4.8vw, 3.6rem)",
              fontWeight: "700",
              lineHeight: "1.16",
              color: "var(--espresso-dark)",
              marginBottom: "18px",
              letterSpacing: "-0.02em",
            }}
          >
            Where Artisan Coffee Meets Warm, Cozy Moments.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.65",
              color: "var(--espresso-muted)",
              marginBottom: "30px",
            }}
          >
            Step into Daily Brew — your neighborhood sanctuary for velvety espresso, 
            oven-fresh blueberry muffins, and our famous 16-hour slow-steeped{" "}
            <strong style={{ color: "var(--caramel-primary)" }}>Caramel Cold Brew ($5.00)</strong>. 
            Have a question or want a personalized drink suggestion? Our friendly AI Barista is always ready by your side!
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="#menu"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 26px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--caramel-primary)",
                color: "#FFFFFF",
                fontSize: "0.95rem",
                fontWeight: "700",
                textDecoration: "none",
                boxShadow: "0 4px 18px rgba(200, 112, 25, 0.35)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--caramel-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--caramel-primary)")}
            >
              <span>Explore Our Menu</span>
              <ArrowRight size={16} />
            </a>

            <button
              onClick={() => onOpenChat("What do you recommend to drink?")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 24px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(200, 112, 25, 0.3)",
                color: "var(--espresso-dark)",
                fontSize: "0.95rem",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(59, 36, 24, 0.05)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FFF7ED";
                e.currentTarget.style.borderColor = "var(--caramel-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
                e.currentTarget.style.borderColor = "rgba(200, 112, 25, 0.3)";
              }}
            >
              <MessageSquareText size={17} style={{ color: "var(--caramel-primary)" }} />
              <span>Ask AI Barista (Side Taskbar)</span>
            </button>
          </div>

          {/* Fast Highlights Badges */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "36px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(59, 36, 24, 0.1)",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  backgroundColor: "#FFF7ED",
                  border: "1px solid rgba(200, 112, 25, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Award size={18} style={{ color: "var(--caramel-primary)" }} />
              </div>
              <div>
                <div style={{ fontSize: "0.88rem", fontWeight: "700", color: "var(--espresso-dark)" }}>
                  House Signature
                </div>
                <div style={{ fontSize: "0.76rem", color: "var(--espresso-muted)" }}>
                  Caramel Cold Brew $5.00
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  backgroundColor: "#ECFDF5",
                  border: "1px solid rgba(5, 150, 105, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Clock size={18} style={{ color: "#059669" }} />
              </div>
              <div>
                <div style={{ fontSize: "0.88rem", fontWeight: "700", color: "var(--espresso-dark)" }}>
                  Open Daily
                </div>
                <div style={{ fontSize: "0.76rem", color: "var(--espresso-muted)" }}>
                  7:00 AM – 9:00 PM
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  backgroundColor: "#FDF2F8",
                  border: "1px solid rgba(219, 39, 119, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Heart size={18} style={{ color: "#DB2777" }} />
              </div>
              <div>
                <div style={{ fontSize: "0.88rem", fontWeight: "700", color: "var(--espresso-dark)" }}>
                  Oven-Fresh Bakes
                </div>
                <div style={{ fontSize: "0.76rem", color: "var(--espresso-muted)" }}>
                  Blueberry Muffin $3.50
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Signature Spotlight Cafe Card */}
        <div style={{ position: "relative" }} className="hero-card-col">
          <div
            style={{
              borderRadius: "var(--radius-xl)",
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(200, 112, 25, 0.3)",
              padding: "32px",
              boxShadow: "0 12px 36px rgba(59, 36, 24, 0.08)",
              position: "relative",
            }}
          >
            {/* Signature Floating Badge */}
            <div
              className="shimmer-badge"
              style={{
                position: "absolute",
                top: "-14px",
                right: "24px",
                padding: "6px 16px",
                borderRadius: "var(--radius-full)",
                fontSize: "0.76rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                boxShadow: "0 4px 12px rgba(200, 112, 25, 0.2)",
              }}
            >
              <Sparkles size={12} />
              <span>MUST TRY • BARISTA FAVORITE</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "18px" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "16px",
                  backgroundColor: "#FFF7ED",
                  border: "1px solid rgba(200, 112, 25, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(200, 112, 25, 0.1)",
                }}
              >
                <CoffeeCupIcon size={34} />
              </div>
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--caramel-primary)",
                    fontWeight: "700",
                  }}
                >
                  Daily Brew Signature Specialty
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.65rem",
                    color: "var(--espresso-dark)",
                    margin: "2px 0 0",
                  }}
                >
                  Caramel Cold Brew
                </h3>
              </div>
            </div>

            <p
              style={{
                fontSize: "0.92rem",
                lineHeight: "1.6",
                color: "var(--espresso-muted)",
                marginBottom: "20px",
              }}
            >
              Single-origin Colombian beans steeped cold for a full 16 hours. Layered with handcrafted buttery caramel, silky half-and-half, and topped with golden caramel drizzle.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                padding: "16px",
                borderRadius: "var(--radius-md)",
                backgroundColor: "#FDF8F3",
                border: "1px solid rgba(200, 112, 25, 0.15)",
                marginBottom: "20px",
              }}
            >
              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--espresso-subtle)" }}>Handcrafted Price</div>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.9rem",
                    fontWeight: "700",
                    color: "var(--caramel-primary)",
                  }}
                >
                  $5.00
                </div>
              </div>
              <div style={{ textAlign: "right", fontSize: "0.78rem", color: "var(--espresso-muted)" }}>
                <div>16-Hour Cold Steep</div>
                <div style={{ color: "#059669", fontWeight: "700", marginTop: "2px" }}>
                  Available All Day (7 AM – 9 PM)
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenChat("Tell me about the Caramel Cold Brew!")}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--caramel-primary)",
                color: "#FFFFFF",
                border: "none",
                fontSize: "0.92rem",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                boxShadow: "0 3px 12px rgba(200, 112, 25, 0.25)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--caramel-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--caramel-primary)")}
            >
              <MessageSquareText size={16} />
              <span>Ask Barista in Side Taskbar →</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
