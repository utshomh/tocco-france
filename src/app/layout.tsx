import type { Metadata } from "next";
import { Dancing_Script, Montserrat, Open_Sans } from "next/font/google";

import "@/styles/globals.css";
import Navbar from "@/app/_components/navbar/navbar";

const dancingScript = Dancing_Script({
  variable: "--font-script",
});

const montserrat = Montserrat({
  variable: "--font-sans",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Tocco France",
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
        className={`dark ${dancingScript.variable} ${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
