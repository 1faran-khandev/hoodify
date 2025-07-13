import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGallery({ products, onAddToCart }) {
  return (
    <section
      id="shop"
      className="py-20 px-4 sm:px-6 lg:px-12 bg-white text-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* 🧥 Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest">
            Our Hoodie Line
          </h2>
          <p className="mt-4 text-md md:text-lg text-gray-700 max-w-xl mx-auto tracking-wide">
            Engineered for performance. Designed for streetwear.
          </p>
        </div>

        {/* 📦 Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
