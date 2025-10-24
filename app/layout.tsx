import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Black Anvil - Professional Web Development",
  description: "Modern web development and consulting services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
