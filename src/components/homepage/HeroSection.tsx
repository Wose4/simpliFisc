import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Bienvenue sur SimpliFisc</h1>
      <p className="text-lg mb-6">Découvrez nos services et solutions personnalisées</p>
      <div className="flex space-x-4">
        <Link href="/simuler">
          <Button className="">Simuler</Button>
        </Link>
        <Link href="/chat">
          <Button className="">Chat</Button>
        </Link>
      </div>
    </section>
  );
};