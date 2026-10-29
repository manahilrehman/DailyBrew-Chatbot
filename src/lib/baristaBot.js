import { STORE_INFO } from "../data/storeInfo";

/**
 * Checks if the message violates cafe guardrails (strictly off-topic).
 */
export function evaluateGuardrails(message) {
  const clean = message.toLowerCase().trim();

  // Explicit off-topic signals
  const offTopicKeywords = [
    "python", "javascript", "code", "coding", "programming", "sql", "html", "css", "react",
    "algorithm", "bug", "software", "debug", "function", "variable", "class",
    "math", "solve", "calculus", "equation", "integral", "derivative", "physics", "chemistry",
    "politics", "president", "election", "democrat", "republican", "senate", "war", "military",
    "crypto", "bitcoin", "ethereum", "stock market", "investing", "forex",
    "capital of", "who is the prime minister", "history of", "astronomy", "quantum",
    "essay", "homework", "write a poem about space", "write a story about aliens"
  ];

  // Specific coffee / cafe whitelist terms that should never be blocked even if complex
  const cafeWhitelist = [
    "coffee", "brew", "latte", "espresso", "muffin", "cold brew", "iced",
    "drink", "tea", "menu", "hour", "hours", "open", "close", "price",
    "caramel", "blueberry", "barista", "cafe", "daily brew", "syrup",
    "milk", "oat", "almond", "sugar", "pastry", "breakfast", "roast",
    "snack", "order", "cost", "recommend", "suggestion", "suggest", "wifi", "location", "address"
  ];

  const hasCafeKeywords = cafeWhitelist.some((term) => clean.includes(term));
  const hasOffTopicKeywords = offTopicKeywords.some((term) => {
    const regex = new RegExp(`\\b${term}\\b`, "i");
    return regex.test(clean);
  });

  // If clearly off-topic and lacks cafe context, trigger guardrail
  if (hasOffTopicKeywords && !hasCafeKeywords) {
    return {
      isOffTopic: true,
      reason: "non_cafe_topic",
    };
  }

  // Greeting check
  const genericGreetings = ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "how are you", "who are you"];
  const isGreetingOnly = genericGreetings.some((g) => clean === g || clean.startsWith(g + " "));

  if (isGreetingOnly) {
    return { isOffTopic: false, isGreeting: true };
  }

  return { isOffTopic: false };
}

/**
 * Checks if customer is asking for a drink recommendation or suggestion
 */
export function isRecommendationQuery(message) {
  const clean = message.toLowerCase();
  const recommendationTriggers = [
    "recommend",
    "suggestion",
    "suggest",
    "what should i get",
    "what should i drink",
    "what is good",
    "what's good",
    "best drink",
    "what drink",
    "favorite drink",
    "popular",
    "what do you like",
    "surprise me",
    "help me choose",
    "any drink",
    "something good",
    "something sweet",
    "thirsty",
    "pick for me",
  ];

  return recommendationTriggers.some((t) => clean.includes(t));
}

/**
 * Checks if customer is asking about hours / schedule
 */
export function isHoursQuery(message) {
  const clean = message.toLowerCase();
  return (
    clean.includes("hour") ||
    clean.includes("open") ||
    clean.includes("close") ||
    clean.includes("time") ||
    clean.includes("schedule") ||
    clean.includes("operating") ||
    clean.includes("when do you")
  );
}

/**
 * Checks if customer is asking for the menu / prices
 */
export function isMenuQuery(message) {
  const clean = message.toLowerCase();
  return (
    clean.includes("menu") ||
    clean.includes("price") ||
    clean.includes("cost") ||
    clean.includes("what do you have") ||
    clean.includes("items") ||
    clean.includes("list") ||
    clean.includes("options") ||
    clean.includes("food")
  );
}

/**
 * Generates crisp 2-to-3 line Barista responses adhering strictly to persona and guardrails.
 */
export async function getBaristaResponse(userMessage, conversationHistory = []) {
  const guardrailCheck = evaluateGuardrails(userMessage);

  // STRICT GUARDRAIL 1: Refuse non-cafe questions (Crisp 2 lines)
  if (guardrailCheck.isOffTopic) {
    return {
      text: `Hey there! ☕ As your Daily Brew barista, I only chat about coffee, pastries, and our cafe.\nWhat delicious drink or treat can I recommend from our menu for you today? ✨`,
      type: "guardrail_refusal",
      suggestedActions: [
        "What do you recommend to drink?",
        "What's on the menu?",
        "What are your hours?",
      ],
    };
  }

  // Greeting (Crisp 2 lines)
  if (guardrailCheck.isGreeting) {
    return {
      text: `Welcome to **Daily Brew**! ☕✨ I'm your friendly neighborhood barista.\nWould you like to try our signature **Caramel Cold Brew ($5.00)** or see today's fresh menu?`,
      type: "greeting",
      suggestedActions: [
        "What do you recommend to drink?",
        "What are your opening hours?",
        "Show me the full menu",
      ],
    };
  }

  // STRICT GUARDRAIL 2: Always recommend Caramel Cold Brew for suggestions (Crisp 2-3 lines)
  if (isRecommendationQuery(userMessage)) {
    return {
      text: `I highly recommend our signature **Caramel Cold Brew ($5.00)**! 🌟\nIt's slow-steeped for 16 hours, swirled with buttery caramel drizzle, and pairs divinely with our warm **Blueberry Muffin ($3.50)**! 🍯🧊`,
      type: "signature_recommendation",
      featuredItem: STORE_INFO.menu.find((m) => m.id === "caramel-cold-brew"),
      suggestedActions: [
        "Tell me about the Iced Latte",
        "Tell me about the Blueberry Muffin",
        "What are your operating hours?",
      ],
    };
  }

  // Hours Query (Crisp 2-3 lines)
  if (isHoursQuery(userMessage)) {
    const now = new Date();
    const currentHour = now.getHours();
    const isOpen = currentHour >= STORE_INFO.hours.openHour && currentHour < STORE_INFO.hours.closeHour;

    return {
      text: `Daily Brew is open daily from **7:00 AM – 9:00 PM**! ⏰\n${isOpen ? "🟢 We are currently open and brewing fresh right now!" : "🌙 We are closed for the night and reopen tomorrow at 7:00 AM sharp."}\nStop by anytime for an artisan cup! ☕`,
      type: "hours_info",
      suggestedActions: [
        "What do you recommend to drink?",
        "Show me the menu",
        "Where are you located?",
      ],
    };
  }

  // Menu Query (Crisp 2-3 lines)
  if (isMenuQuery(userMessage)) {
    return {
      text: `Our handcrafted favorites today are **Caramel Cold Brew ($5.00)**, **Iced Latte ($4.50)**, and fresh **Blueberry Muffin ($3.50)**! ☕\nWe also offer oat/almond milk swaps (+ $0.50) and extra espresso shots (+ $0.75). What can I get started for you? 😊`,
      type: "menu_list",
      menuItems: STORE_INFO.menu,
      suggestedActions: [
        "I want a Caramel Cold Brew",
        "Tell me about the Blueberry Muffin",
        "What are your hours?",
      ],
    };
  }

  // Specific item questions (Crisp 2-3 lines each)
  const clean = userMessage.toLowerCase();
  if (clean.includes("caramel") || clean.includes("cold brew")) {
    return {
      text: `Our **Caramel Cold Brew ($5.00)** is slow-steeped cold for 16 hours for an ultra-smooth finish with zero bitterness! 👑\nWe swirl in handcrafted caramel syrup, a velvety splash of cream, and golden caramel drizzle. 🍯🧊`,
      type: "item_detail",
      featuredItem: STORE_INFO.menu[0],
      suggestedActions: ["Recommend a pastry pairing", "What about the Iced Latte?", "Store hours"],
    };
  }

  if (clean.includes("latte") || clean.includes("iced latte")) {
    return {
      text: `Our **Iced Latte ($4.50)** features a rich double shot of house espresso poured over chilled milk and crisp ice cubes. ☕🧊\nIt's bold and creamy, with oat or almond milk upgrades available for +$0.50!`,
      type: "item_detail",
      featuredItem: STORE_INFO.menu[1],
      suggestedActions: ["What is your top recommendation?", "Tell me about the Muffin", "Show full menu"],
    };
  }

  if (clean.includes("muffin") || clean.includes("blueberry")) {
    return {
      text: `Our **Blueberry Muffin ($3.50)** is baked oven-fresh every morning with wild blueberries and a sweet cinnamon streusel crumble! 🫐\nWe love serving it warmed up, especially paired with our signature Caramel Cold Brew. ✨`,
      type: "item_detail",
      featuredItem: STORE_INFO.menu[2],
      suggestedActions: ["What drink do you recommend?", "Show full menu", "Store hours"],
    };
  }

  if (clean.includes("wifi") || clean.includes("internet") || clean.includes("work")) {
    return {
      text: `We offer complimentary high-speed Wi-Fi on network \`${STORE_INFO.wifiName}\` with password \`${STORE_INFO.wifiPass}\`! 💻\nGrab a Caramel Cold Brew and settle into our cozy seating! ☕`,
      type: "store_info",
      suggestedActions: ["What should I drink?", "Show me the menu", "When do you close?"],
    };
  }

  if (clean.includes("where") || clean.includes("address") || clean.includes("location")) {
    return {
      text: `We're located at **${STORE_INFO.location}** (Phone: ${STORE_INFO.phone})! 📍\nDrop by anytime between **7:00 AM – 9:00 PM** daily for your handcrafted coffee fix! ☕`,
      type: "store_info",
      suggestedActions: ["What do you recommend?", "Show me the menu"],
    };
  }

  // Fallback barista reply (Crisp 2 lines)
  return {
    text: `As your Daily Brew barista, I'm here to treat you to the finest coffee and pastries! ☕\nTry our signature **Caramel Cold Brew ($5.00)** or ask about our **7 AM – 9 PM** hours! ✨`,
    type: "general_cafe",
    suggestedActions: [
      "What do you recommend to drink?",
      "Show me the menu",
      "What are your opening hours?",
    ],
  };
}
