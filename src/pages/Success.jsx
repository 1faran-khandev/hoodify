import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export default function Success({ onClearCart }) {
  const location = useLocation();
  const { name = "Customer", total = "0.00", itemCount = 0 } = location.state || {};

  useEffect(() => {
    // Save order to localStorage
    const order = {
      id: uuidv4(),
      name,
      total,
      itemCount,
      date: new Date().toISOString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, order]));

    // Clear the cart
    if (onClearCart) {
      onClearCart();
    }
  }, [onClearCart, name, total, itemCount]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white text-center px-6">
      <CheckCircle size={80} className="text-green-500 mb-6" />

      <h1 className="text-3xl md:text-4xl font-bold mb-4">Order Confirmed!</h1>

      <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md mb-2">
        Thank you, <span className="font-semibold">{name}</span>! Your stylish hoodie is on the way.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        <span className="font-medium">{itemCount}</span> item(s) • Total:{" "}
        <span className="font-medium">${parseFloat(total).toFixed(2)}</span>
      </p>

      <Link to="/orders">
        <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          View Your Orders
        </button>
      </Link>
    </section>
  );
}
