import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MD. RIFAT HOSSAIN | Full Stack Developer",
  description: "Full Stack Web Developer & Digital Creator. I build powerful, scalable and modern web applications. Available for freelance work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}