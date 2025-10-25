import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Black Anvil - Penetration Testing Services",
  description: "Professional penetration testing for web, cloud, and mobile applications. Expert security assessments to identify vulnerabilities before attackers do.",
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
