"use client"

import "./globals.css";
import { usePathname } from "next/navigation";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FullNavBar from "@/components/layout/full_navbar";
import MiniNavBar from "@/components/layout/mini_navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "SimpliFisc",
  description: "Simplifisc facilite la déclaration d'impôts en France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname(); // Get the current path
  const isUserPath = pathname.startsWith("/user");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {!isUserPath ? <FullNavBar /> : <MiniNavBar />}
        {children}
      </body>
    </html>
  );
}