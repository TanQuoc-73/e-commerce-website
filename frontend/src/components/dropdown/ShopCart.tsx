"use client";

import { useState, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import clsx from "clsx";

export default function ShopCartDropdown() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1 text-gray-900 hover:text-blue-300">
        <Link href="/cart" className="flex items-center">
        <FaShoppingCart />
        </Link>
      </button>

      <div
        className={clsx(
          "absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-blue-300 z-50 transition-opacity duration-200",
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="p-4 space-y-2">
          <p className="text-sm font-medium text-gray-700">Your cart is empty</p>
        </div>

        
      </div>
    </div>
  );
}
