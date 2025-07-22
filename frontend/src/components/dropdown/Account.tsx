"use client";

import { useState, useRef } from "react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import clsx from "clsx";

export default function AccountDropdown() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 100);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1 text-gray-900 hover:text-blue-600">
        <FaUser className="text-xl" />
      </button>

      <div
        className={clsx(
          "absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 transition-all duration-200",
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <ul className="py-2">
          <li>
            <Link
              href="/account/profile"
              className="block px-4 py-2 hover:bg-blue-100 text-gray-800"
            >
              Your Profile
            </Link>
          </li>
          <li>
            <Link
              href="/account/orders"
              className="block px-4 py-2 hover:bg-blue-100 text-gray-800"
            >
              Cart
            </Link>
          </li>
          <li>
            <button
              onClick={() => console.log("Logout")}
              className="w-full text-left px-4 py-2 hover:bg-blue-100 text-gray-800"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
