"use client";

import { useState, useRef } from "react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import clsx from "clsx";
import dynamic from 'next/dynamic';

// Dynamically import AuthModal to avoid SSR issues
const AuthModal = dynamic(
  () => import('@/components/auth/AuthModal'),
  { ssr: false }
);

export default function AccountDropdown() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 100);
  };

  const handleAccountClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalOpen(true);
    setDropdownOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button 
          onClick={handleAccountClick}
          className="flex items-center gap-1 text-gray-900 hover:text-blue-600"
          aria-label="Account"
        >
          <FaUser className="text-xl" />
        </button>

        <div
          className={clsx(
            "absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 transition-all duration-200",
            isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <ul className="py-2">
            <li>
              <button
                onClick={handleAccountClick}
                className="w-full text-left px-4 py-2 hover:bg-blue-100 text-gray-800"
              >
                Sign In / Register
              </button>
            </li>
            <li>
              <Link
                href="/account/orders"
                className="block px-4 py-2 hover:bg-blue-100 text-gray-800"
                onClick={() => setDropdownOpen(false)}
              >
                Your Orders
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
      
      <AuthModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
}
