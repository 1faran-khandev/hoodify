import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-wide text-blue-400">Hoodify</h2>
          <p className="mt-3 text-sm text-gray-400">
            Premium streetwear built for comfort, confidence, and bold self-expression.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-white">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <button onClick={() => scrollToSection("hero")} className="hover:text-blue-400 transition">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("shop")} className="hover:text-blue-400 transition">
                Shop
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")} className="hover:text-blue-400 transition">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="hover:text-blue-400 transition">
                Contact
              </button>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-bold mb-3 text-white">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Instagram size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>


      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Hoodify — All rights reserved.
      </div>
    </footer>
  );
}
