"use client";

import { useState } from "react";
import { Coffee, User, Sparkles, Copy, Check, ShieldAlert, PlusCircle } from "lucide-react";
import CoffeeCupIcon from "./CoffeeCupIcon";

export default function ChatMessageBubble({ message, onSelectPrompt }) {
  const isUser = message.sender === "user";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Format markdown: simple parser for **bold**, *italic*, bullets, and line breaks
  const formatText = (text) => {
    const lines = text.split("\n");
    return lines.map((line, lineIdx) => {
      // Bullet list items
      if (line.trim().startsWith("•") || line.trim().startsWith("-") || line.trim().startsWith("* ")) {
        const content = line.trim().replace(/^([•\-\*]\s*)/, "");
        return (
          <li key={lineIdx} style={{ marginLeft: "18px", marginBottom: "4px" }}>
            {parseInline(content)}
          </li>
        );
      }

      // Empty line / paragraph break
      if (!line.trim()) {
        return <div key={lineIdx} style={{ height: "6px" }} />;
      }

      return (
        <p key={lineIdx} style={{ marginBottom: "4px", lineHeight: "1.55" }}>
          {parseInline(line)}
        </p>
      );
    });
  };

  const parseInline = (str) => {
    const parts = [];
    const regex = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g;
    let match;
    let lastIndex = 0;

    while ((match = regex.exec(str)) !== null) {
      if (match.index > lastIndex) {
        parts.push(str.substring(lastIndex, match.index));
      }

      const matchedText = match[0];
      if (matchedText.startsWith("**") && matchedText.endsWith("**")) {
        parts.push(
          <strong key={match.index} style={{ color: isUser ? "#FFF" : "var(--espresso-dark)", fontWeight: "700" }}>
            {matchedText.slice(2, -2)}
          </strong>
        );
      } else if (matchedText.startsWith("`") && matchedText.endsWith("`")) {
        parts.push(
          <code
            key={match.index}
            style={{
              backgroundColor: isUser ? "rgba(0, 0, 0, 0.2)" : "#F3ECE3",
              color: isUser ? "#FFF" : "var(--caramel-deep)",
              padding: "2px 6px",
              borderRadius: "4px",
              fontSize: "0.85em",
              fontWeight: "600",
            }}
          >
            {matchedText.slice(1, -1)}
          </code>
        );
      } else if (matchedText.startsWith("*") && matchedText.endsWith("*")) {
        parts.push(<em key={match.index}>{matchedText.slice(1, -1)}</em>);
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < str.length) {
      parts.push(str.substring(lastIndex));
    }

    return parts.length > 0 ? parts : str;
  };

  return (
    <div
      className="animate-message-enter"
      style={{
        display: "flex",
        flexDirection: isUser ? "row-reverse" : "row",
        alignItems: "flex-start",
        gap: "12px",
        margin: "12px 0",
        maxWidth: "100%",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          background: isUser
            ? "linear-gradient(135deg, #C87019 0%, #DF8226 100%)"
            : "#FFF7ED",
          border: isUser
            ? "1px solid rgba(200, 112, 25, 0.3)"
            : "1px solid rgba(200, 112, 25, 0.25)",
          boxShadow: "0 2px 6px rgba(59, 36, 24, 0.06)",
        }}
      >
        {isUser ? (
          <User size={18} style={{ color: "#FFF" }} />
        ) : (
          <CoffeeCupIcon size={20} />
        )}
      </div>

      {/* Bubble Container */}
      <div
        style={{
          maxWidth: "84%",
          display: "flex",
          flexDirection: "column",
          alignItems: isUser ? "flex-end" : "flex-start",
        }}
      >
        {/* Name and Timestamp Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "4px",
            padding: "0 4px",
            fontSize: "0.75rem",
            color: "var(--espresso-subtle)",
          }}
        >
          <span style={{ fontWeight: "700", color: isUser ? "var(--espresso-muted)" : "var(--caramel-deep)" }}>
            {isUser ? "You" : "Daily Brew Barista ☕"}
          </span>
          <span>•</span>
          <span>{message.time || "Just now"}</span>
        </div>

        {/* Message Bubble Card */}
        <div
          style={{
            position: "relative",
            padding: "13px 17px",
            borderRadius: isUser
              ? "18px 4px 18px 18px"
              : "4px 18px 18px 18px",
            background: isUser
              ? "var(--user-bubble-bg)"
              : "#FFFFFF",
            color: isUser ? "#FFFFFF" : "var(--espresso-dark)",
            border: isUser ? "none" : "1px solid rgba(200, 112, 25, 0.2)",
            boxShadow: isUser
              ? "0 3px 12px rgba(200, 112, 25, 0.25)"
              : "0 2px 10px rgba(59, 36, 24, 0.05)",
            fontSize: "0.93rem",
            wordBreak: "break-word",
          }}
        >
          {/* Guardrail badge banner if triggered */}
          {message.type === "guardrail_refusal" && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "3px 10px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "#FEF2F2",
                border: "1px solid #FECACA",
                color: "#DC2626",
                fontSize: "0.72rem",
                fontWeight: "700",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <ShieldAlert size={12} />
              Cafe Guardrail: Daily Brew topics only
            </div>
          )}

          {/* Formatted Text Content */}
          <div style={{ color: isUser ? "#FFFFFF" : "var(--espresso-dark)" }}>
            {formatText(message.text)}
          </div>

          {/* Featured Item Highlight Card (e.g. Caramel Cold Brew signature) */}
          {message.featuredItem && (
            <div
              style={{
                marginTop: "12px",
                padding: "12px 14px",
                borderRadius: "var(--radius-md)",
                backgroundColor: "#FFFBF5",
                border: "1px solid var(--caramel-primary)",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    className={message.featuredItem.isSignature ? "shimmer-badge" : ""}
                    style={{
                      fontSize: "0.68rem",
                      padding: "2px 8px",
                      borderRadius: "var(--radius-full)",
                    }}
                  >
                    {message.featuredItem.badge}
                  </span>
                  <span style={{ fontWeight: "700", color: "var(--espresso-dark)", fontSize: "0.95rem" }}>
                    {message.featuredItem.name}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.15rem",
                    fontWeight: "700",
                    color: "var(--caramel-primary)",
                  }}
                >
                  ${message.featuredItem.price.toFixed(2)}
                </span>
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--espresso-muted)" }}>
                {message.featuredItem.description}
              </p>
              <div style={{ display: "flex", gap: "6px", marginTop: "2px" }}>
                <button
                  onClick={() => onSelectPrompt(`I'd like to order a ${message.featuredItem.name}`)}
                  style={{
                    background: "var(--caramel-primary)",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "var(--radius-full)",
                    padding: "5px 12px",
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    boxShadow: "0 2px 6px rgba(200, 112, 25, 0.2)",
                  }}
                >
                  <PlusCircle size={12} />
                  Order ${message.featuredItem.price.toFixed(2)}
                </button>
              </div>
            </div>
          )}

          {/* Copy Button */}
          {!isUser && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "6px",
                paddingTop: "6px",
                borderTop: "1px solid rgba(59, 36, 24, 0.06)",
              }}
            >
              <button
                onClick={handleCopy}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--espresso-subtle)",
                  fontSize: "0.72rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  cursor: "pointer",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  fontWeight: "600",
                }}
                title="Copy message"
              >
                {copied ? <Check size={12} style={{ color: "#059669" }} /> : <Copy size={12} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          )}
        </div>

        {/* Suggested Action Chips below AI Message */}
        {!isUser && message.suggestedActions && message.suggestedActions.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              marginTop: "8px",
            }}
          >
            {message.suggestedActions.map((action, idx) => (
              <button
                key={idx}
                onClick={() => onSelectPrompt(action)}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(200, 112, 25, 0.3)",
                  borderRadius: "var(--radius-full)",
                  padding: "5px 12px",
                  fontSize: "0.76rem",
                  color: "var(--espresso-dark)",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  boxShadow: "0 1px 4px rgba(59, 36, 24, 0.04)",
                  transition: "all 0.15s ease",
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
                <Sparkles size={11} style={{ color: "var(--caramel-primary)" }} />
                {action}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
