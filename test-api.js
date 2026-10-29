async function runTests() {
  const tests = [
    { name: "Recommendation Test", message: "What do you recommend to drink?" },
    { name: "Guardrail Non-Cafe Test", message: "Can you write Python code to sort an array?" },
    { name: "Hours Test", message: "What are your operating hours?" },
    { name: "Menu Test", message: "What's on the menu?" },
  ];

  for (const t of tests) {
    console.log(`\n================== ${t.name} ==================`);
    console.log(`User Query: "${t.message}"`);
    try {
      const res = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: t.message }),
      });
      const data = await res.json();
      console.log(`Response Type: ${data.type}`);
      console.log(`Barista Reply:\n${data.reply}`);
      if (data.featuredItem) {
        console.log(`Featured Item: ${data.featuredItem.name} ($${data.featuredItem.price})`);
      }
    } catch (e) {
      console.error("Test failed:", e);
    }
  }
}

runTests();
