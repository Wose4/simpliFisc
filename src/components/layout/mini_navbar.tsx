"use client"

// components/NavBar.jsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const profileMenuItems = [
    { href: "/mon-espace", label: "Mon espace" },
];

const MiniNavBar = () => {

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-2xl rounded-full px-6 py-3 w-[90vw] flex items-center justify-between">
            <div className="flex items-center space-x-6">
                <div className="logo">Logo</div>
            </div>
            <div className="flex items-center space-x-6">
                <div className="border-l h-6 border-gray-300"></div>
                {profileMenuItems.map(
                    (item) =>
                            <Link key={item.href} href={item.href}>
                                <p className="text-sm font-medium text-black hover:text-black flex items-center transition-colors hover:underline">{item.label}</p>
                            </Link>
                )}
                <Link href="/simuler">
                    <Button className="">Simuler</Button>
                </Link>
                <Link href="/chat">
                    <Button className="">Chat</Button>
                </Link>
            </div>
        </nav>
    );
};

export default MiniNavBar;