// src/pages/ProductDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail({ products, onAddToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find((p) => p.id === parseInt(id));
    setProduct(found);
  }, [id, products]);

  if (!product) {
    return (
      <div className="text-center py-20 text-xl text-gray-600 dark:text-gray-400">
        Product not found 😕
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        {/* 🖼 Product Image */}
        <img
          src={product.defaultImg}
          alt={`${product.name} - Hoodie Preview`}
          className="w-full md:w-1/2 object-cover rounded-lg shadow-lg transition-transform hover:scale-105"
        />

        {/* 📄 Product Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            {product.name}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            <strong>Color:</strong> {product.color}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            <strong>Sizes:</strong> {product.size.join(", ")}
          </p>

          <p className="text-xl font-semibold text-green-600">
            ${ (product.price * (1 - product.discount)).toFixed(2) }
            <span className="text-sm text-red-500 line-through ml-2">
              ${ product.price.toFixed(2) }
            </span>
          </p>

          <button
            onClick={() => onAddToCart(product)}
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all"
          >
            🛒 Add to Cart
          </button>

          <Link
            to="/"
            className="block mt-6 text-blue-500 hover:underline text-sm"
          >
            ← Back to All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
