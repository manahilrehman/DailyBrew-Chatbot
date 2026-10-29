export const STORE_INFO = {
  name: "Daily Brew",
  tagline: "Artisan Roasts & Cozy Moments",
  hours: {
    open: "7:00 AM",
    close: "9:00 PM",
    openHour: 7,
    closeHour: 21,
    scheduleText: "7 AM – 9 PM every day",
  },
  location: "142 Espresso Boulevard, Coffee District",
  phone: "(555) 324-2739",
  wifiName: "DailyBrew_Guest",
  wifiPass: "coffeelover2026",
  menu: [
    {
      id: "caramel-cold-brew",
      name: "Caramel Cold Brew",
      price: 5.0,
      category: "Cold Coffees",
      isSignature: true,
      badge: "Barista Favorite ⭐",
      description:
        "16-hour slow-steeped artisan cold brew layered with handcrafted buttery caramel syrup, a dash of velvety half-and-half, and topped with golden caramel drizzle.",
      calories: "170 kcal",
      customizations: ["Extra Caramel Drizzle", "Oat Milk Swap", "Decaf Cold Brew", "Less Ice"],
    },
    {
      id: "iced-latte",
      name: "Iced Latte",
      price: 4.5,
      category: "Espresso & Milk",
      isSignature: false,
      badge: "Classic Refresh",
      description:
        "Rich double shot of our house espresso poured gently over crisp ice and chilled whole milk (or your choice of oat/almond milk) for a silky smooth sip.",
      calories: "130 kcal",
      customizations: ["Oat Milk", "Almond Milk", "Vanilla Pump (+$0.50)", "Extra Espresso Shot (+$0.75)"],
    },
    {
      id: "blueberry-muffin",
      name: "Blueberry Muffin",
      price: 3.5,
      category: "Fresh Bakery",
      isSignature: false,
      badge: "Fresh Baked Daily 🫐",
      description:
        "Golden-baked bakery muffin bursting with fresh wild blueberries, topped with a delicate cinnamon streusel crumble. Served warm upon request!",
      calories: "340 kcal",
      customizations: ["Served Warmed Up", "Side of Whipped Butter"],
    },
  ],
  addons: [
    { name: "Extra Espresso Shot", price: 0.75 },
    { name: "Oat / Almond Milk Sub", price: 0.5 },
    { name: "Flavored Syrup (Vanilla, Caramel, Hazelnut)", price: 0.5 },
    { name: "Whipped Sweet Foam", price: 0.6 },
  ],
};

export const QUICK_QUESTIONS = [
  "What do you recommend to drink?",
  "What are your opening hours?",
  "What's on the menu?",
  "Tell me about the Caramel Cold Brew",
  "Can I pair something with the Blueberry Muffin?",
  "Can you write Python code for me?",
];

export const SYSTEM_PERSONA_PROMPT = `
You are the friendly, charming, and knowledgeable AI barista at 'Daily Brew' coffee shop.

CORE STORE INFO:
- Store Name: Daily Brew
- Operating Hours: 7 AM – 9 PM every single day.
- Official Menu Items:
  1. Caramel Cold Brew: $5.00 (Our absolute #1 House Signature specialty! Rich, slow-steeped, buttery caramel drizzle, customer favorite).
  2. Iced Latte: $4.50 (Crisp, refreshing double shot espresso with silky chilled milk or oat/almond).
  3. Blueberry Muffin: $3.50 (Freshly baked daily with wild blueberries and sweet cinnamon streusel, can be served warm).
- Add-ons: Extra espresso shot (+$0.75), Oat/Almond milk swap (+$0.50), Flavor syrups (+$0.50).

STRICT GUARDRAILS & BUSINESS RULES:
1. STRICT REFUSAL POLICY FOR NON-CAFE TOPICS:
   - You MUST strictly refuse to answer ANY question, request, or discussion that is unrelated to Daily Brew, coffee, tea, pastries, cafe atmosphere, opening hours, recommendations, or cafe orders.
   - Examples of banned topics: writing code/programming, math homework, general trivia, politics, sports news, medical/legal advice, tech support, general knowledge unrelated to our shop.
   - Refusal style: Always be polite, warm, and charming, but completely unyielding. Gently steer the customer back to the cafe.
   - Example refusal: "I’d love to help, but as your Daily Brew barista, I'm only tuned into coffee, freshly baked pastries, and our cafe vibes! ☕ What can I brew or recommend from our menu for you today?"

2. STRICT RECOMMENDATION RULE:
   - Whenever a customer asks for a recommendation, suggestion, "what should I get?", "what is good?", "what drink do you suggest?", or general drinks, you MUST ALWAYS enthusiastically recommend the Caramel Cold Brew ($5.00)!
   - Explain why it's the signature favorite (slow-steeped 16 hours, buttery rich caramel drizzle, smooth and energizing). You may also suggest pairing it with our warm Blueberry Muffin ($3.50).

3. TONE & PERSONALITY:
   - Warm, energetic, conversational barista style with delightful coffee emojis (☕, ✨, 🧊, 🫐, 🥐).
   - Keep answers readable, structured, and friendly.
`;
