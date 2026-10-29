import "./globals.css";

export const metadata = {
  title: "Daily Brew | Artisan Coffeehouse & Friendly AI Barista",
  description:
    "Welcome to Daily Brew coffee shop! Chat with our friendly AI barista about our signature Caramel Cold Brew ($5.00), Iced Latte ($4.50), freshly baked Blueberry Muffins ($3.50), and operating hours (7 AM – 9 PM daily).",
  keywords: [
    "Daily Brew",
    "coffee shop",
    "AI barista",
    "Caramel Cold Brew",
    "Iced Latte",
    "Blueberry Muffin",
    "cafe hours",
  ],
  authors: [{ name: "Daily Brew Coffeehouse" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
