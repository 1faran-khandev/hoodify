import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout({ cartItems, onClearCart }) {
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = cartItems.reduce((sum, item) => sum + item.price * item.quantity * (item.discount || 0), 0);
  const shipping = cartItems.length > 0 ? 4.99 : 0;
  const total = subtotal - discount + shipping;

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    navigate("/success", {
      state: {
        name: form.name,
        total: total.toFixed(2),
        itemCount,
      },
    });

    onClearCart();
  };

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/*  Order Summary */}
        <div>
          <h2 className="text-2xl font-bold uppercase mb-6 tracking-widest">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex justify-between border-b pb-2">
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-semibold">
                    ${(item.price * item.quantity * (1 - item.discount)).toFixed(2)}
                  </p>
                </div>
              ))
            )}

            {cartItems.length > 0 && (
              <div className="space-y-2 mt-4 pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-red-500">
                  <span>Discount:</span>
                  <span>- ${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping:</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/*  Shipping Form */}
        <div>
          <h2 className="text-2xl font-bold uppercase mb-6 tracking-widest">Shipping Info</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleInput}
              className="w-full border px-4 py-2 rounded bg-white dark:bg-gray-900 dark:border-gray-700"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleInput}
              className="w-full border px-4 py-2 rounded bg-white dark:bg-gray-900 dark:border-gray-700"
              required
            />
            <textarea
              name="address"
              placeholder="Shipping Address"
              value={form.address}
              onChange={handleInput}
              rows={4}
              className="w-full border px-4 py-2 rounded bg-white dark:bg-gray-900 dark:border-gray-700"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded font-semibold tracking-wide hover:bg-gray-800 transition w-full"
              disabled={!form.name || !form.email || !form.address}
            >
              Place Order
            </button>
          </form>

          <button
            onClick={() => navigate("/")}
            className="mt-4 w-full bg-gray-200 text-black px-6 py-2 rounded font-medium hover:bg-gray-300 transition"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}
