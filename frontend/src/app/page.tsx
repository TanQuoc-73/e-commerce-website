"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    { id: 1, name: "Áo Thun Nam", category: "áo", price: "250,000đ", image: "/products/shirt1.jpg" },
    { id: 2, name: "Giày Sneaker", category: "giày", price: "1,200,000đ", image: "/products/shoes1.jpg" },
    { id: 3, name: "Túi Xách", category: "túi", price: "850,000đ", image: "/products/bag1.jpg" },
    { id: 4, name: "Đồng Hồ", category: "phụ kiện", price: "2,400,000đ", image: "/products/watch1.jpg" },
  ];

  const filteredProducts = products.filter((p) => {
    return (
      (selectedCategory === "all" || p.category === selectedCategory) &&
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Banner */}
      <section className="w-full h-64 bg-blue-500 flex items-center justify-center text-white text-3xl font-bold">
        SALE CUỐI MÙA - GIẢM ĐẾN 70%
      </section>

      {/* Search */}
      <div className="flex justify-center mt-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-full px-4 py-2 pl-10 shadow-md"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        {/* Sidebar - Bộ lọc */}
        <aside className="bg-white p-4 rounded-md shadow-md h-fit">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Bộ lọc</h3>
          <div className="space-y-2">
            <button
              className={`block w-full text-left px-3 py-1 rounded ${
                selectedCategory === "all"
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              Tất cả
            </button>
            <button
              className={`block w-full text-left px-3 py-1 rounded ${
                selectedCategory === "áo"
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedCategory("áo")}
            >
              Áo
            </button>
            <button
              className={`block w-full text-left px-3 py-1 rounded ${
                selectedCategory === "giày"
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedCategory("giày")}
            >
              Giày
            </button>
            <button
              className={`block w-full text-left px-3 py-1 rounded ${
                selectedCategory === "túi"
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedCategory("túi")}
            >
              Túi
            </button>
            <button
              className={`block w-full text-left px-3 py-1 rounded ${
                selectedCategory === "phụ kiện"
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedCategory("phụ kiện")}
            >
              Phụ kiện
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="md:col-span-3">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Sản phẩm</h2>
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500">Không tìm thấy sản phẩm nào.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                    <p className="text-blue-600 font-bold">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
