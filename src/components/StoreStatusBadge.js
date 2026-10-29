"use client";

import { useEffect, useState } from "react";
import { STORE_INFO } from "@/data/storeInfo";
import { Clock } from "lucide-react";

export default function StoreStatusBadge() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    function updateStatus() {
      const now = new Date();
      const currentHour = now.getHours();
      const open =
        currentHour >= STORE_INFO.hours.openHour &&
        currentHour < STORE_INFO.hours.closeHour;
      setIsOpen(open);
    }

    updateStatus();
    const interval = setInterval(updateStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "7px",
        padding: "6px 14px",
        borderRadius: "var(--radius-full)",
        backgroundColor: isOpen ? "#ECFDF5" : "#FFFBEB",
        border: `1px solid ${
          isOpen ? "rgba(5, 150, 105, 0.3)" : "rgba(217, 119, 6, 0.3)"
        }`,
        fontSize: "0.82rem",
        fontWeight: "600",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      }}
      title={`Daily Brew Hours: ${STORE_INFO.hours.scheduleText}`}
    >
      <span
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: isOpen ? "#059669" : "#D97706",
          display: "inline-block",
        }}
        className={isOpen ? "pulse-open" : ""}
      />
      <span style={{ color: isOpen ? "#047857" : "#B45309" }}>
        {isOpen ? "Open Now" : "Closed Now"}
      </span>
      <span style={{ color: "#9CA3AF", margin: "0 2px" }}>•</span>
      <span style={{ color: "#374151", display: "flex", alignItems: "center", gap: "4px" }}>
        <Clock size={12} style={{ color: "var(--caramel-primary)" }} />
        {isOpen ? "Closes 9:00 PM" : "Opens 7:00 AM"}
      </span>
    </div>
  );
}
