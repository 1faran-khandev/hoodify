import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function CartList({
  cartItems,
  onClearCart,
  onCloseCart,
  onRemoveItem,
  onUpdateQuantity,
}) {
  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity * (1 - (item.discount || 0)),
    0
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed right-0 top-0 w-80 sm:w-96 h-full bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col"
      >
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center font-bold text-lg">
          <span>Your Cart</span>
          <button
            onClick={onCloseCart}
            className="text-gray-500 hover:text-black dark:hover:text-white text-xl"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-sm text-center mt-10">
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-start border-b pb-3"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-sm sm:text-base">
                    {item.name}
                  </h4>
                  <div className="text-xs text-gray-500 mt-1">
                    ${item.price.toFixed(2)} × {item.quantity}{" "}
                    {item.discount > 0 && (
                      <span className="text-red-500 ml-1">
                        (-{Math.round(item.discount * 100)}%)
                      </span>
                    )}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, "dec")}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm font-semibold"
                      disabled={item.quantity <= -1}
                    >
                      −
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, "inc")}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm font-semibold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t space-y-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link to="/checkout">
              <button
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded font-semibold transition"
                onClick={onCloseCart}
              >
                Proceed to Checkout
              </button>
            </Link>

            <button
              onClick={onClearCart}
              className="w-full text-sm text-red-500 hover:underline"
            >
              Clear Cart
            </button>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
