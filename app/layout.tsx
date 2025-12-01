import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vital Enterprises | AI Solutions for Portland",
  description: "Secure, practical AI solutions for Portland's regional economy. Sovereign AI, AEO Strategy, and Automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased bg-cascadia-light text-cascadia-green`}
      >
        {children}
      </body>
    </html>
  );
}
