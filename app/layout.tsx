import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Don't Overbook Me",
  description:
    "A weekly schedule planning dashboard for balancing work, study, plans, and rest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
