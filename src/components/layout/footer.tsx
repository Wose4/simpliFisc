import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 w-screen text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonne 1: Informations sur l'entreprise */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">À propos de nous</h3>
          <p className="text-gray-400 text-sm">
            Nous fournissons des solutions innovantes pour aider les entreprises à atteindre leurs objectifs.
          </p>
        </div>

        {/* Colonne 2: Liens utiles */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Liens utiles</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about">
                <p className="hover:text-white transition">À propos</p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p className="hover:text-white transition">Services</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="hover:text-white transition">Contact</p>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <p className="hover:text-white transition">FAQ</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonne 3: Réseaux sociaux */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Suivez-nous</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;