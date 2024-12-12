import { Button } from "@/components/ui/button";

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Bienvenue sur notre site</h1>
      <p className="text-lg mb-6">Découvrez nos services et solutions personnalisées</p>
      <Button variant="outline" size="lg">
        En savoir plus
      </Button>
    </section>
  );
};