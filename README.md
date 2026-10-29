# ☕ Daily Brew — AI Coffee Shop Chatbot

A clean, modern, and responsive Next.js business AI chatbot application built for the artisan coffee shop **Daily Brew**.

---

## ✨ Features & Requirements

### 1. ☕ Role & Persona
- **Friendly Coffee Barista**: Warm, energetic, conversational, and welcoming. Uses coffee emojis (☕, ✨, 🧊, 🫐) and treats every customer with artisan care.

### 2. 🏪 Store Info & Menu
- **Operating Hours**: **7:00 AM – 9:00 PM** every single day.
- **Dynamic Real-Time Status Badge**: Displays "Open Now • Closes 9:00 PM" with a glowing emerald pulse during operating hours, or "Closed Now • Opens 7:00 AM" after hours.
- **Official Menu Items**:
  1. 🌟 **Caramel Cold Brew — $5.00** *(House Signature Specialty! 16-hour slow steep with rich buttery caramel drizzle)*
  2. 🧊 **Iced Latte — $4.50** *(Double shot espresso poured over chilled milk & ice)*
  3. 🫐 **Blueberry Muffin — $3.50** *(Freshly baked daily with wild blueberries & cinnamon streusel)*
- **Add-ons**: Oat/Almond milk swap (+$0.50), extra espresso shot (+$0.75), syrups.

### 3. 🛡️ Guardrails & Business Logic
- **Strict Cafe-Only Policy**: Refuses any questions unrelated to the cafe (e.g. coding, math, general trivia, politics) with a charming, polite barista pivot back to coffee.
- **Mandatory Signature Recommendation**: When customers ask for a recommendation, suggestion, or general drink, the AI barista **always enthusiastically recommends the Caramel Cold Brew ($5.00)**.

### 4. 🎨 UI & Aesthetics
- **Bespoke Coffeehouse Theme**: Warm espresso, velvety dark mocha, crema accents, and golden caramel amber palette.
- **Distinct Message Bubbles**: User (warm mocha pill on the right) vs. Barista (espresso card with animated steaming cup avatar on the left).
- **Interactive Menu Drawer**: Slide-over panel displaying all menu items, nutrition/prep notes, and "Ask Barista" or "Order" buttons.
- **Interactive Action Chips**: Quick suggestion pills (`What do you recommend?`, `Hours`, `Python test`).
- **Sound Effects**: Gentle acoustic pop / cafe chime on message events using the browser Web Audio API (toggleable in header).
- **Smooth Animations**: Steam drift animations, shimmer badges on signature items, and brewing indicator dots.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.17+ or v20+)
- npm

### Installation & Run

1. Navigate to the project directory:
   ```bash
   cd DailyBrew-Chatbot
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at:
   ```
   http://localhost:3000
   ```

### Production Build
To create an optimized production build:
```bash
npm run build
npm start
```

### Running Automated Guardrail & Rule Tests
Run the automated test suite to verify the guardrails, signature recommendations, and menu replies:
```bash
node test-api.js
```

---

## 📂 Project Architecture

```
DailyBrew-Chatbot/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.js       # Next.js App Router Chat API endpoint
│   │   ├── globals.css            # Rich Vanilla CSS coffee theme & micro-animations
│   │   ├── layout.js              # SEO metadata, title, and viewport configuration
│   │   └── page.js                # Main chat application page & state management
│   ├── components/
│   │   ├── ChatHeader.js          # Brand navbar, hours badge, menu & sound triggers
│   │   ├── ChatInput.js           # Sleek input bar, send button & quick prompts
│   │   ├── ChatMessageBubble.js   # User vs AI bubbles, markdown & signature cards
│   │   ├── CoffeeCupIcon.js       # Custom SVG with rising steam animations
│   │   ├── MenuSidebar.js         # Slide-out drawer with official items & add-ons
│   │   ├── QuickPrompts.js        # Horizontal quick action suggestion chips
│   │   └── StoreStatusBadge.js    # Real-time open/closed hours badge
│   ├── data/
│   │   └── storeInfo.js           # Menu items, prices, operating hours & persona prompt
│   └── lib/
│       ├── baristaBot.js          # Barista engine with guardrails & recommendation logic
│       └── soundEffects.js        # Web Audio API acoustic cafe sound chimes
├── jsconfig.json                  # Path aliases (@/* -> ./src/*)
├── next.config.mjs                # Next.js configuration
├── package.json                   # Dependencies (Next.js 15, React 19, Lucide React)
├── test-api.js                    # End-to-end API verification script
└── README.md                      # Documentation
```
