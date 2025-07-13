import { Rocket, Leaf, Flame } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="about"
      className="bg-black text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest mb-6">
          The <span className="text-blue-400">Hoodify</span> Vision
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
          At <span className="font-bold text-white">Hoodify</span>, we don't just make hoodies — we craft performance-driven streetwear made for movement, comfort, and bold expression.
          Built for <span className="font-semibold text-white">everyday athletes</span>, creators, and rebels who move with intent.
        </p>

        <div className="mt-10 border-t border-gray-700 w-20 mx-auto" />
      </div>

      {/* Brand Values */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto text-left">
        {[
          {
            icon: <Rocket size={36} className="text-blue-400 mb-4" />,
            title: "Performance",
            desc: "Engineered for flexibility, comfort, and all-day energy.",
          },
          {
            icon: <Leaf size={36} className="text-blue-400 mb-4" />,
            title: "Sustainability",
            desc: "Made with eco-conscious fabrics and ethical practices.",
          },
          {
            icon: <Flame size={36} className="text-blue-400 mb-4" />,
            title: "Bold Style",
            desc: "Statement pieces for streetwear lovers and lifestyle icons.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center md:items-start transition-transform duration-300 ${
              hoveredIndex === index ? 'transform -translate-y-1' : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item.icon}
            <h4 className="text-xl font-bold uppercase mb-2 tracking-wide">
              {item.title}
            </h4>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-14">
        <a href="#shop">
          <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition">
            Shop Our Hoodies
          </button>
        </a>
      </div>
    </section>
  );
}