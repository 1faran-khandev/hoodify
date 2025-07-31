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
  const [toast, setToast] = useState({ message: "", visible: false });

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage on every change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Toast helper
  const showToast = (msg) => {
    setToast({ message: msg, visible: true });
    setTimeout(() => setToast({ message: "", visible: false }), 2000);
  };

  // Add to cart
  const handleAddToCart = (product) => {
  setCart((prevCart) => {
    const exists = prevCart.find((item) => item.id === product.id);
    if (exists) {
      showToast("Increased quantity in cart");
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      showToast(`${product.name} added to cart`);
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });
};


  // Remove single item
  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    showToast("Item removed from cart");
  };

  // Clear entire cart
  const handleClearCart = () => {
    setCart([]);
    showToast("Cart cleared");
  };

  // Quantity change
  const handleUpdateQuantity = (id, action) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: action === "inc" ? item.quantity + 1 : item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white font-sans min-h-screen">
      {/* Toast */}
      <Toast message={toast.message} visible={toast.visible} />

      {/* Navbar */}
      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setShowCart(!showCart)}
      />

      {/* Cart Sidebar */}
      {showCart && (
        <CartList
          cartItems={cart}
          onClearCart={handleClearCart}
          onCloseCart={() => setShowCart(false)}
          onRemoveItem={handleRemoveItem}
          onUpdateQuantity={handleUpdateQuantity}
        />
      )}

      {/* Routes */}
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

        <Route path="/success" element={<Success onClearCart={handleClearCart} />} />
      </Routes>
    </div>
  );
}
