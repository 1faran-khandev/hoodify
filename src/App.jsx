// src/App.jsx
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Toast from "./components/Toast";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductGallery from "./components/ProductGallery";
import About from "./components/About";
import Contact from "./components/Contact";
import CartList from "./components/CartList";
import Footer from "./components/Footer";

import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

import products from "./data/products";

export default function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // ✅ Toast state
  const [toast, setToast] = useState({ message: "", visible: false });

const showToast = (msg) => {
  setToast({ message: msg, visible: true });
  setTimeout(() => setToast({ message: "", visible: false }), 2500);
};

const handleAddToCart = (product) => {
  setCart((prevCart) => {
    const exists = prevCart.find((item) => item.id === product.id);
    if (exists) {
      showToast("Increased quantity in cart 🛒");
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      showToast("Added to cart ✅");
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });

    // ✅ Show toast
    setToast({ message: `${product.name} added to cart 🛒`, visible: true });
    setTimeout(() => {
      setToast({ message: "", visible: false });
    }, 2000);
  };

  // ❌ Remove one item
  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 🔁 Clear all
  const handleClearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    console.log("🛒 Cart Items:", cart);
  }, [cart]);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white font-sans min-h-screen">
      {/* ✅ Toast */}
      <Toast message={toast.message} visible={toast.visible} />

      {/* ✅ Navbar */}
      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setShowCart(!showCart)}
      />

      {/* ✅ Cart Sidebar */}
      {showCart && (
        <CartList
          cartItems={cart}
          onClearCart={handleClearCart}
          onCloseCart={() => setShowCart(false)}
          onRemoveItem={handleRemoveItem}
        />
      )}

      {/* ✅ Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ProductGallery products={products} onAddToCart={handleAddToCart} />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/product/:id"
          element={<ProductDetail products={products} onAddToCart={handleAddToCart} />}
        />

        <Route
          path="/checkout"
          element={<Checkout cartItems={cart} onClearCart={handleClearCart} />}
        />

        <Route
          path="/success"
          element={<Success onClearCart={handleClearCart} />}
        />
      </Routes>
    </div>
  );
}
