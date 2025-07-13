import { motion } from "framer-motion";
import hoodieBanner from "../assets/hoodie-hero.jpg";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleScrollToShop = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("shop");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* 🖼️ Background Image */}
      <img
        src={hoodieBanner}
        alt="Premium Winter Hoodies Collection"
        className="w-full h-full object-cover brightness-[.45]"
        loading="lazy"
      />

      {/* 🟩 Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* 🔥 Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white text-4xl md:text-6xl font-extrabold uppercase tracking-widest max-w-3xl"
        >
          Winter Hoodie Drop
        </motion.h1>

        {/* 🧥 Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-white/80 text-base md:text-lg mt-4 max-w-xl"
        >
          Performance meets comfort. Unleash your street game with our boldest hoodie collection yet.
        </motion.p>

        {/* 🛍️ CTA Button - Black background, white text */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={handleScrollToShop}
          className="mt-8 bg-black text-white px-8 py-3 rounded-md text-sm md:text-base font-semibold uppercase tracking-wide border border-white hover:bg-white hover:text-black transition-all"
        >
          Shop Now
        </motion.button>
      </div>
    </section>
  );
}
