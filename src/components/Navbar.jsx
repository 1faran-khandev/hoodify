import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ cartCount, onCartClick }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-blue-500"
        >
          Hoodify
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 font-semibold text-[15px] uppercase tracking-wide">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-blue-400 font-bold hover:text-blue-800 transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("shop")}
            className="text-blue-400 font-bold hover:text-blue-800 transition"
          >
            Shop
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-blue-400 font-bold hover:text-blue-800 transition"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-blue-400 font-bold hover:text-blue-800 transition"
          >
            Contact
          </button>
          <Link
            to="/orders"
            className="text-blue-400 font-bold hover:text-blue-800 transition"
          >
            Orders
          </Link>
        </nav>

        {/* Cart + Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onCartClick}
            className="relative text-blue-400 hover:text-blue-800 transition"
            aria-label="Cart"
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white px-4 pb-4 space-y-3 text-sm">
          <button
            onClick={() => scrollToSection("hero")}
            className="block w-full text-left hover:text-blue-400 font-semibold"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("shop")}
            className="block w-full text-left hover:text-blue-400 font-semibold"
          >
            Shop
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left hover:text-blue-400 font-semibold"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left hover:text-blue-400 font-semibold"
          >
            Contact
          </button>
          <Link
            to="/orders"
            className="block w-full text-left hover:text-blue-400 font-semibold"
          >
            Orders
          </Link>
        </div>
      )}
    </header>
  );
}
