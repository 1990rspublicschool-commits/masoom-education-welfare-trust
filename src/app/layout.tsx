import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Masoom Education & Welfare Trust - Bringing Hope to the Most Vulnerable", template: "%s | Masoom Education & Welfare Trust" },
  description: "Masoom Education & Welfare Trust works toward uplifting underserved communities through practical, direct support.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

