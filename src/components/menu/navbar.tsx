// components/NavBar.jsx
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-2xl rounded-full px-6 py-3 flex items-center space-x-6">
      <Link href="/">
        <p className="text-sm font-medium text-gray-700 hover:text-black">Accueil</p>
      </Link>
      <Link href="/ressources">
        <p className="text-sm font-medium text-gray-700 hover:text-black">Ressources</p>
      </Link>
      <Link href="/contact">
        <p className="text-sm font-medium text-gray-700 hover:text-black">Contact</p>
      </Link>
      <div className="border-l h-6 border-gray-300"></div>
      <Link href="/mon-espace">
        <p className="text-sm font-medium text-gray-700 hover:text-black">Mon espace</p>
      </Link>
      <Link href="/simuler">
        <p className="text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition">Simuler</p>
      </Link>
      <Link href="/chat">
        <p className="text-sm font-medium text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-full transition">Chat</p>
      </Link>
    </nav>
  );
};

export default NavBar;