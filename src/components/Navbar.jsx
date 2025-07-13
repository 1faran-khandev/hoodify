import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ cartCount, onCartClick }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    } else {
      // Navigate to homepage and scroll after load
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 text-white backdrop-blur-md shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">

        {/* 🧢 Brand Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide text-accent">
          Hoodify
        </Link>

        {/* 🔗 Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 font-semibold text-sm uppercase tracking-wider">
          <button onClick={() => scrollToSection("hero")} className="hover:text-accent transition">Home</button>
          <button onClick={() => scrollToSection("shop")} className="hover:text-accent transition">Shop</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-accent transition">About</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-accent transition">Contact</button>
        </nav>

        {/* 🛒 Cart + Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* 🛒 Cart Icon */}
          <button
            onClick={onCartClick}
            className="relative text-white hover:text-accent transition"
            aria-label="Cart"
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                {cartCount}
              </span>
            )}
          </button>

          {/* ☰ Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white px-4 pb-4 space-y-3 text-sm">
          <button onClick={() => scrollToSection("hero")} className="block w-full text-left hover:text-accent">Home</button>
          <button onClick={() => scrollToSection("shop")} className="block w-full text-left hover:text-accent">Shop</button>
          <button onClick={() => scrollToSection("about")} className="block w-full text-left hover:text-accent">About</button>
          <button onClick={() => scrollToSection("contact")} className="block w-full text-left hover:text-accent">Contact</button>
        </div>
      )}
    </header>
  );
}
