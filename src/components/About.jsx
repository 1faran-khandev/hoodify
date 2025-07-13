import { Rocket, Leaf, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-brand.black text-brand.white py-20 px-6"
    >
      {/* 🧠 Vision Statement */}
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest mb-6">
          The <span className="text-accent">Hoodify</span> Vision
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
          At <span className="font-bold text-brand.white">Hoodify</span>, we don’t just make hoodies — we craft
          performance-driven streetwear designed for motion, comfort, and bold expression.
          Built for <span className="font-semibold text-accent">everyday athletes</span>, creatives, and those who move with intent.
        </p>

        <div className="mt-10 border-t border-gray-700 w-20 mx-auto" />
      </motion.div>

      {/* 🌟 Brand Mission Cards */}
      <motion.div
        className="grid md:grid-cols-3 gap-10 mt-16 max-w-5xl mx-auto text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
          hidden: {},
        }}
      >
        {/* Cards */}
        {[
          {
            icon: <Rocket size={40} className="text-accent mb-4" />,
            title: "Performance",
            desc: "Engineered for flexibility, comfort, and all-day motion."
          },
          {
            icon: <Leaf size={40} className="text-accent mb-4" />,
            title: "Sustainability",
            desc: "Eco-conscious materials. Ethical production. Minimal impact."
          },
          {
            icon: <Flame size={40} className="text-accent mb-4" />,
            title: "Style Impact",
            desc: "Urban-ready. Creator-approved. Built to stand out."
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center md:items-start transition-transform hover:-translate-y-1"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {item.icon}
            <h4 className="text-xl font-bold uppercase mb-2 tracking-wide">{item.title}</h4>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* 🛍️ Call To Action */}
      <motion.div
        className="text-center mt-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a href="#shop">
          <button className="px-6 py-3 bg-accent text-black rounded-lg font-semibold hover:brightness-125 transition shadow-md shadow-accent/30">
            Shop Our Hoodies
          </button>
        </a>
      </motion.div>
    </section>
  );
}
