import React from "react";

export default function Toast({ message, visible }) {
  return (
    <div
      className={`fixed bottom-6 right-6 px-5 py-3 rounded-lg shadow-lg text-white font-medium transition-all duration-500 z-[9999]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        bg-green-600`}
    >
      {message}
    </div>
  );
}
