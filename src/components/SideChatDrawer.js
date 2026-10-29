"use client";

import { useState, useRef, useEffect } from "react";
import CoffeeCupIcon from "./CoffeeCupIcon";
import ChatMessageBubble from "./ChatMessageBubble";
import ChatInput from "./ChatInput";
import { getBaristaResponse } from "@/lib/baristaBot";
import { STORE_INFO } from "@/data/storeInfo";
import { playSendChime, playReceiveChime } from "@/lib/soundEffects";
import {
  X,
  Minus,
  MessageSquareText,
  Sparkles,
  Volume2,
  VolumeX,
  RotateCcw,
  Clock,
} from "lucide-react";

export default function SideChatDrawer({
  isOpen,
  onClose,
  initialPrompt,
  onClearInitialPrompt,
}) {
  const [messages, setMessages] = useState([
    {
      id: "initial-welcome",
      sender: "bot",
      time: "Just now",
      text: `Hello and welcome to **Daily Brew**! ☕✨ I'm your friendly coffee barista.\nTry our signature **Caramel Cold Brew ($5.00)**, **Iced Latte ($4.50)**, or fresh **Blueberry Muffin ($3.50)**.\nWe're open daily from 7 AM – 9 PM! What can I brew for you today?`,
      type: "greeting",
      suggestedActions: [
        "What do you recommend to drink?",
        "What are your opening hours?",
        "Can you write Python code for me?",
      ],
    },
  ]);

  const [isBrewing, setIsBrewing] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isBrewing, isOpen]);

  // Handle when parent page passes an automatic prompt (e.g. clicking "Ask Barista" on a menu item)
  useEffect(() => {
    if (isOpen && initialPrompt) {
      handleSendMessage(initialPrompt);
      if (onClearInitialPrompt) onClearInitialPrompt();
    }
  }, [isOpen, initialPrompt]);

  const handleSendMessage = async (text) => {
    if (!text || !text.trim() || isBrewing) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
      text: text.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (soundEnabled) playSendChime();
    setIsBrewing(true);

    let botResult = null;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text.trim(),
          history: messages.slice(-6).map((m) => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text,
          })),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.reply) {
          botResult = {
            text: data.reply,
            type: data.type,
            featuredItem: data.featuredItem,
            menuItems: data.menuItems,
            suggestedActions: data.suggestedActions,
          };
        }
      }
    } catch (apiErr) {
      console.warn("API route error, activating instant fallback engine:", apiErr);
    }

    // Direct Barista Intelligence Fallback if API route is ever unreachable
    if (!botResult) {
      try {
        const localResult = await getBaristaResponse(text.trim(), messages);
        botResult = {
          text: localResult.text,
          type: localResult.type,
          featuredItem: localResult.featuredItem,
          menuItems: localResult.menuItems,
          suggestedActions: localResult.suggestedActions,
        };
      } catch (fallbackErr) {
        console.error("Local fallback error:", fallbackErr);
      }
    }

    if (botResult) {
      const botMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
        text: botResult.text,
        type: botResult.type,
        featuredItem: botResult.featuredItem,
        menuItems: botResult.menuItems,
        suggestedActions: botResult.suggestedActions,
      };

      setMessages((prev) => [...prev, botMessage]);
      if (soundEnabled) playReceiveChime();
    } else {
      const defaultReply = {
        id: `bot-def-${Date.now()}`,
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
        text: "I'm right here! ☕ For a top drink, you must try our signature **Caramel Cold Brew ($5.00)** or pair it with our warm **Blueberry Muffin ($3.50)**! We're open 7 AM – 9 PM daily.",
        type: "signature_recommendation",
        featuredItem: STORE_INFO.menu[0],
      };
      setMessages((prev) => [...prev, defaultReply]);
      if (soundEnabled) playReceiveChime();
    }

    setIsBrewing(false);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: "bot",
        time: "Just now",
        text: `Fresh slate! ☕ Welcome back to **Daily Brew**. 

How can your friendly barista assist you today? Looking for our **Caramel Cold Brew ($5.00)** or our store hours?`,
        type: "greeting",
        suggestedActions: [
          "What do you recommend to drink?",
          "What are your opening hours?",
          "Tell me about the Caramel Cold Brew",
        ],
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        backgroundColor: "rgba(59, 36, 24, 0.25)",
        backdropFilter: "blur(4px)",
        display: "flex",
        justifyContent: "flex-end",
      }}
      onClick={onClose}
    >
      {/* Side Taskbar / Drawer Panel */}
      <div
        className="drawer-animate-in"
        style={{
          width: "100%",
          maxWidth: "460px",
          height: "100%",
          backgroundColor: "#FAF7F2",
          borderLeft: "1px solid rgba(200, 112, 25, 0.25)",
          display: "flex",
          flexDirection: "column",
          boxShadow: "-8px 0 32px rgba(59, 36, 24, 0.12)",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: "16px 20px",
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid rgba(59, 36, 24, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            flexShrink: 0,
            boxShadow: "0 1px 4px rgba(59, 36, 24, 0.03)",
          }}
        >
          {/* Barista Profile & Status */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "#FFF7ED",
                border: "1px solid rgba(200, 112, 25, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                boxShadow: "0 2px 6px rgba(200, 112, 25, 0.1)",
              }}
            >
              <CoffeeCupIcon size={24} />
              <span
                style={{
                  position: "absolute",
                  bottom: "1px",
                  right: "1px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#059669",
                  border: "2px solid #FFFFFF",
                }}
                className="pulse-open"
              />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: "700",
                    color: "var(--espresso-dark)",
                  }}
                >
                  Daily Brew Barista
                </span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    padding: "1px 6px",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: "#FFF7ED",
                    color: "var(--caramel-deep)",
                    fontWeight: "700",
                  }}
                >
                  AI
                </span>
              </div>
              <div
                style={{
                  fontSize: "0.76rem",
                  color: "var(--espresso-subtle)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginTop: "1px",
                }}
              >
                <span style={{ color: "#059669", fontWeight: "700" }}>• Online</span>
                <span>Hours: 7 AM – 9 PM</span>
              </div>
            </div>
          </div>

          {/* Action Tools: Sound, Reset, Close */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <button
              onClick={() => setSoundEnabled((prev) => !prev)}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#F5EFE6",
                border: "1px solid rgba(59, 36, 24, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: soundEnabled ? "var(--caramel-primary)" : "var(--espresso-subtle)",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
              title={soundEnabled ? "Mute sound" : "Enable sound"}
              aria-label="Toggle sound"
            >
              {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
            </button>

            {messages.length > 1 && (
              <button
                onClick={handleClearChat}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#F5EFE6",
                  border: "1px solid rgba(59, 36, 24, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--espresso-subtle)",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                <RotateCcw size={13} />
              </button>
            )}

            <button
              onClick={onClose}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#F5EFE6",
                border: "1px solid rgba(59, 36, 24, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--espresso-dark)",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
              title="Close side chat"
              aria-label="Close side chat"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Message Stream */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FAF7F2",
          }}
        >
          {messages.map((message) => (
            <ChatMessageBubble
              key={message.id}
              message={message}
              onSelectPrompt={handleSendMessage}
            />
          ))}

          {/* Brewing Indicator */}
          {isBrewing && (
            <div
              className="animate-message-enter"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "10px 0",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FFF7ED",
                  border: "1px solid rgba(200, 112, 25, 0.25)",
                }}
              >
                <CoffeeCupIcon size={18} />
              </div>
              <div
                style={{
                  padding: "10px 16px",
                  borderRadius: "4px 16px 16px 16px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(200, 112, 25, 0.2)",
                  boxShadow: "0 2px 8px rgba(59, 36, 24, 0.04)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "0.82rem", color: "var(--espresso-muted)", fontWeight: "500" }}>
                  Barista is brewing your reply
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                  <span className="brewing-dot" />
                  <span className="brewing-dot" />
                  <span className="brewing-dot" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Bottom Input Form & Quick Prompt Chips */}
        <ChatInput
          onSendMessage={handleSendMessage}
          isBrewing={isBrewing}
          onSelectPrompt={handleSendMessage}
        />
      </div>
    </div>
  );
}
