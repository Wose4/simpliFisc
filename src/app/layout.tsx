"use client"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FullNavBar from "@/components/layout/full_navbar";
import MiniNavBar from "@/components/layout/mini_navbar";
import { useEffect, useState } from 'react';

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
  const [isUserPath, setIsUserPath] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsUserPath(window.location.pathname.startsWith('/user'));
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {!isUserPath && <FullNavBar />}
        {children}
      </body>
    </html>
  );
}