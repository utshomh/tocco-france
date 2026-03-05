"use client";

import { useState } from "react";
import { LayoutGrid, List, Grid3X3 } from "lucide-react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import { Product, ProductCard } from "./product-card";

import product1 from "../assets/1-Gang-1-Way.jpg";
import product2 from "../assets/15-amp-Round-Socket.jpg";
import product3 from "../assets/2-Gang-1-way-1.jpg";
import product4 from "../assets/2-Gang-2-way.jpg";
import product5 from "../assets/2-pin-socket-V02.jpg";
import product6 from "../assets/3-Gang-1-way-1.jpg";
import product7 from "../assets/3-Pin-Socket-with-Double-USB.jpg";
import product8 from "../assets/3-gang-2-way.jpg";
import product9 from "../assets/4-gang-1-way-1.jpg";
import product10 from "../assets/4-gang-2-way.jpg";
import product11 from "../assets/5-Pin-multi-socket.jpg";
import product12 from "../assets/Bell-push-02.jpg";

const products: Array<Product> = [
  { name: "2-Gang Light Switch", price: 420, img: product1 },
  { name: "Universal USB Socket", price: 1850, img: product2 },
  { name: "Motion Sensor Module", price: 2150, img: product3 },
  { name: "13A Multi-Socket Hub", price: 920, img: product4 },
  { name: "Doorbell Push Switch", price: 580, img: product5 },
  { name: "Smart Wi-Fi Dimmer", price: 2400, img: product6 },
  { name: "Floor Pop-up Box", price: 1950, img: product7 },
  { name: "Satellite & TV Port", price: 850, img: product8 },
  { name: "Cooker Control Switch", price: 1600, img: product9 },
  { name: "Modular Blanking Plate", price: 250, img: product10 },
  { name: "Air Con Isolator Switch", price: 1350, img: product11 },
  { name: "Dual Ethernet Data Port", price: 790, img: product12 },
];

export function ProductGallery() {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid3" | "grid2" | "list">("grid3");

  const handleAddToCart = (product: Product) => {
    console.log(`Added ${product.name} to cart`);
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const visibleProducts = products.slice(start, start + itemsPerPage);

  return (
    <div className="min-h-screen bg-[#111111] text-gray-300 p-8 font-sans">
      {/* TOP BAR */}
      <div className="hidden lg:flex justify-between items-center gap-2 mb-10 text-sm tracking-wider">
        <div className="flex items-center gap-2">
          <span className="hover:text-white cursor-pointer">Home</span>
          <span>/</span>
          <span className="hover:text-white cursor-pointer">
            Switch & Socket
          </span>
        </div>

        <div className="flex items-center gap-6">
          {/* SHOW SELECTOR */}
          <div className="flex gap-2">
            <span>Show:</span>

            {[6, 9, 12, 18].map((num) => (
              <button
                key={num}
                onClick={() => {
                  setItemsPerPage(num);
                  setCurrentPage(1);
                }}
                className={`hover:text-white ${
                  itemsPerPage === num ? "text-white font-bold" : ""
                }`}
              >
                {num}
              </button>
            ))}
          </div>

          {/* VIEW MODE */}
          <div className="flex items-center gap-2 border-l border-gray-700 pl-6">
            <LayoutGrid
              size={20}
              onClick={() => setViewMode("grid2")}
              className={`cursor-pointer hover:text-white ${
                viewMode === "grid2" ? "text-white" : ""
              }`}
            />

            <Grid3X3
              size={20}
              onClick={() => setViewMode("grid3")}
              className={`cursor-pointer hover:text-white ${
                viewMode === "grid3" ? "text-white" : ""
              }`}
            />

            <List
              size={20}
              onClick={() => setViewMode("list")}
              className={`cursor-pointer hover:text-white ${
                viewMode === "list" ? "text-white" : ""
              }`}
            />
          </div>

          {/* SORT */}
          <select className="bg-transparent border-none focus:ring-0 text-white cursor-pointer text-sm">
            <option className="bg-background-3">Default sorting</option>
            <option className="bg-background-3">Price: Low to High</option>
            <option className="bg-background-3">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10
          lg:${
            viewMode === "grid3"
              ? "grid-cols-3"
              : viewMode === "grid2"
                ? "grid-cols-2"
                : "grid-cols-1"
          }
        `}
      >
        {visibleProducts.map((product, i) => (
          <ProductCard
            key={i}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-20 gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="w-8 h-8 flex items-center justify-center hover:text-white disabled:opacity-40"
        >
          <BiLeftArrowAlt size={20} />
        </button>

        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;

          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 flex items-center justify-center
              ${
                currentPage === page
                  ? "bg-[#003d6b] text-white"
                  : "hover:text-white"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="w-8 h-8 flex items-center justify-center hover:text-white disabled:opacity-40"
        >
          <BiRightArrowAlt size={20} />
        </button>
      </div>
    </div>
  );
}
