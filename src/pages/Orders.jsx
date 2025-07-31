import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders.reverse()); // Show latest orders first
  }, []);

  return (
    <section className="min-h-screen px-6 py-16 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-center uppercase tracking-widest">Your Orders</h1>

        {orders.length === 0 ? (
          <p className="text-center text-gray-500">No orders found.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between mb-2">
                  <h2 className="font-semibold">Order ID: <span className="text-sm">{order.id.slice(0, 8)}...</span></h2>
                  <span className="text-sm text-gray-500">{new Date(order.date).toLocaleString()}</span>
                </div>
                <p>
                  <span className="font-medium">Customer:</span> {order.name}
                </p>
                <p>
                  <span className="font-medium">Items:</span> {order.itemCount}
                </p>
                <p>
                  <span className="font-medium">Total:</span> ${parseFloat(order.total).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link to="/">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
