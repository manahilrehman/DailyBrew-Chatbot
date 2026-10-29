"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import QuickPrompts from "./QuickPrompts";

export default function ChatInput({ onSendMessage, isBrewing, onSelectPrompt }) {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isBrewing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isBrewing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim() || isBrewing) return;
    onSendMessage(inputText.trim());
    setInputText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div
      style={{
        position: "sticky",
        bottom: 0,
        backgroundColor: "rgba(250, 247, 242, 0.98)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(59, 36, 24, 0.1)",
        padding: "12px 18px 16px",
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Quick Suggestion Chips */}
        <QuickPrompts onSelectPrompt={onSelectPrompt} disabled={isBrewing} />

        {/* Input Form Box */}
        <form
          onSubmit={handleSubmit}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            border: "1.5px solid rgba(200, 112, 25, 0.3)",
            borderRadius: "var(--radius-xl)",
            padding: "5px 6px 5px 18px",
            boxShadow: "0 3px 12px rgba(59, 36, 24, 0.05)",
            transition: "all 0.2s ease",
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              isBrewing
                ? "Barista is brewing your reply..."
                : "Ask about our menu, hours, or get a drink recommendation..."
            }
            disabled={isBrewing}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              color: "var(--espresso-dark)",
              fontSize: "0.94rem",
              padding: "8px 0",
              outline: "none",
            }}
          />

          <button
            type="submit"
            disabled={!inputText.trim() || isBrewing}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor:
                inputText.trim() && !isBrewing
                  ? "var(--caramel-primary)"
                  : "#F3ECE3",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: inputText.trim() && !isBrewing ? "#FFFFFF" : "var(--espresso-subtle)",
              cursor: inputText.trim() && !isBrewing ? "pointer" : "not-allowed",
              transition: "all 0.2s ease",
              flexShrink: 0,
            }}
            aria-label="Send message"
          >
            <Send size={17} />
          </button>
        </form>

        {/* Footer Barista Note */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginTop: "8px",
            fontSize: "0.72rem",
            color: "var(--espresso-subtle)",
          }}
        >
          <span>Daily Brew Coffeehouse • Hours: 7 AM – 9 PM Daily • Caramel Cold Brew is our Signature! ☕</span>
        </div>
      </div>
    </div>
  );
}
