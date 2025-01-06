"use client";

// components/NavBar.jsx
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

const MiniNavBar = () => {
  return (
    <nav className="fixed top-[5%] left-[93%] z-[9999]">
      <Link href="/">
        <button className="flex items-center justify-center h-12 w-12 border-none
         rounded-xl bg-white/90 shadow-md p-3 hover:bg-gray-50 
         transition-colors duration-300 ease-in-out">
          <AiFillHome size={50} className="text-blue-600" />
        </button>
      </Link>
    </nav>
  );
};

export default MiniNavBar;
