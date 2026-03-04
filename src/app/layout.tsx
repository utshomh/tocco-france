import type { Metadata } from "next";
import { Dancing_Script, Montserrat } from "next/font/google";

import "@/styles/globals.css";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s -  Tocco France",
    default: "Tocco France",
  },
  description: "Luxury Switch and Socket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.variable} ${montserrat.variable} antialiased font-sans bg-background text-text`}
      >
        {children}
      </body>
    </html>
  );
}
