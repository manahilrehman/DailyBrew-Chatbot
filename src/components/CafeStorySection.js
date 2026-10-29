"use client";

import { Sparkles, Heart, Coffee, Wifi } from "lucide-react";

export default function CafeStorySection({ onOpenChat }) {
  return (
    <section
      id="story"
      style={{
        padding: "70px 24px",
        position: "relative",
        backgroundColor: "#FAF7F2",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "48px",
          alignItems: "center",
        }}
        className="story-grid"
      >
        {/* Story Content */}
        <div>
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
              marginBottom: "14px",
            }}
          >
            <Heart size={13} style={{ color: "var(--caramel-primary)" }} />
            Our Coffee Story
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 3.5vw, 2.7rem)",
              color: "var(--espresso-dark)",
              letterSpacing: "-0.01em",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Crafted for Coffee Lovers, Built for Warm Conversations.
          </h2>

          <p
            style={{
              color: "var(--espresso-muted)",
              fontSize: "1.05rem",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}
          >
            Founded with a passion for genuine hospitality, <strong>Daily Brew</strong> is more than just a quick caffeine stop. We source ethically farmed, single-origin Colombian beans roasted to bring out rich cocoa and toasted hazelnut profiles.
          </p>

          <p
            style={{
              color: "var(--espresso-muted)",
              fontSize: "1.02rem",
              lineHeight: "1.7",
              marginBottom: "28px",
            }}
          >
            Whether you are sinking into our cozy armchairs for a work session over complimentary Wi-Fi, picking up a morning Blueberry Muffin, or chatting with our AI Barista in the side taskbar, you are always treated like family here.
          </p>

          <div
            style={{
              padding: "20px",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "#FFFFFF",
              borderLeft: "4px solid var(--caramel-primary)",
              borderTop: "1px solid rgba(59, 36, 24, 0.08)",
              borderRight: "1px solid rgba(59, 36, 24, 0.08)",
              borderBottom: "1px solid rgba(59, 36, 24, 0.08)",
              boxShadow: "0 4px 14px rgba(59, 36, 24, 0.04)",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--espresso-dark)",
                fontSize: "1.05rem",
                lineHeight: "1.55",
                marginBottom: "8px",
              }}
            >
              &ldquo;Coffee is an art form. From our 16-hour slow-steeped Caramel Cold Brew to our steaming double-shot lattes, we pour joy into every single cup.&rdquo;
            </p>
            <span style={{ fontSize: "0.82rem", color: "var(--caramel-primary)", fontWeight: "700" }}>
              — Head Barista, Daily Brew
            </span>
          </div>
        </div>

        {/* Cafe Atmosphere Card */}
        <div
          style={{
            padding: "36px",
            borderRadius: "var(--radius-xl)",
            backgroundColor: "#FFFFFF",
            border: "1px solid rgba(200, 112, 25, 0.2)",
            boxShadow: "0 8px 32px rgba(59, 36, 24, 0.07)",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.5rem",
              color: "var(--espresso-dark)",
            }}
          >
            The Daily Brew Experience
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  backgroundColor: "#FFF7ED",
                  border: "1px solid rgba(200, 112, 25, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Coffee size={20} style={{ color: "var(--caramel-primary)" }} />
              </div>
              <div>
                <strong style={{ color: "var(--espresso-dark)", fontSize: "0.98rem" }}>
                  16-Hour Cold Steep
                </strong>
                <p style={{ color: "var(--espresso-muted)", fontSize: "0.85rem", marginTop: "3px" }}>
                  Zero acidity, ultra-smooth, and paired with velvety house caramel.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  backgroundColor: "#ECFDF5",
                  border: "1px solid rgba(5, 150, 105, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Wifi size={20} style={{ color: "#059669" }} />
              </div>
              <div>
                <strong style={{ color: "var(--espresso-dark)", fontSize: "0.98rem" }}>
                  High-Speed Guest Wi-Fi
                </strong>
                <p style={{ color: "var(--espresso-muted)", fontSize: "0.85rem", marginTop: "3px" }}>
                  Network: <code style={{ backgroundColor: "#F3ECE3", padding: "2px 6px", borderRadius: "4px" }}>DailyBrew_Guest</code> • Cozy seating with wall outlets.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  backgroundColor: "#FFFBEB",
                  border: "1px solid rgba(217, 119, 6, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Sparkles size={20} style={{ color: "#D97706" }} />
              </div>
              <div>
                <strong style={{ color: "var(--espresso-dark)", fontSize: "0.98rem" }}>
                  Friendly AI Barista Side Taskbar
                </strong>
                <p style={{ color: "var(--espresso-muted)", fontSize: "0.85rem", marginTop: "3px" }}>
                  Click the side taskbar anytime to ask questions, verify hours, or get drink suggestions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .story-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
