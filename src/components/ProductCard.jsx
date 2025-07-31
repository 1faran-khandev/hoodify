import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">

      {product.badge && (
        <span className="absolute top-3 left-3 z-20 bg-black text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {product.badge}
        </span>
      )}

      <Link to={`/product/${product.id}`} className="block relative w-full h-72 overflow-hidden">
        <img
          src={product.defaultImg}
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        <img
          src={product.hoverImg}
          alt={`${product.name} hover`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      </Link>

      <div className="p-4 text-black">
        <h3 className="text-lg font-bold truncate">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1 capitalize">Color: {product.color}</p>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-base font-semibold">
            ${(product.price * (1 - product.discount)).toFixed(2)}
          </span>
          {product.discount > 0 && (
            <span className="text-sm text-red-500 line-through">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="mt-4 w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
