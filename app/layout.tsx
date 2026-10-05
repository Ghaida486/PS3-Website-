import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gridline | UK University AI Infrastructure",
  description: "An evidence-led review of a shared 25 MW university AI datacentre. Compare costs, test risks, and inspect the investment case.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
