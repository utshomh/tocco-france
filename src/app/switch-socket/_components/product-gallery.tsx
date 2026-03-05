"use client";

import { useState } from "react";
import { LayoutGrid, List, Grid3X3 } from "lucide-react";

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
import {
  BiLeftArrow,
  BiLeftArrowAlt,
  BiRightArrow,
  BiRightArrowAlt,
} from "react-icons/bi";

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
  const handleAddToCart = (product: Product) => {
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="min-h-screen bg-[#111111] text-gray-300 p-8 font-sans">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-10 text-sm tracking-wider">
        <div className="flex items-center gap-2">
          <span className="hover:text-white cursor-pointer transition-colors">
            Home
          </span>
          <span>/</span>
          <span className="hover:text-white cursor-pointer transition-colors">
            Switch & Socket
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            <span>Show:</span>
            {[9, 12, 18, 24].map((num) => (
              <button
                key={num}
                className={`hover:text-white ${num === 12 ? "text-white font-bold" : ""}`}
              >
                {num}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 border-l border-gray-700 pl-6">
            <LayoutGrid size={20} className="cursor-pointer hover:text-white" />
            <Grid3X3 size={20} className="cursor-pointer text-white" />
            <List size={20} className="cursor-pointer hover:text-white" />
          </div>

          <select className="bg-transparent border-none focus:ring-0 text-white cursor-pointer text-sm">
            <option className="bg-background-3">Default sorting</option>
            <option className="bg-background-3">Price: Low to High</option>
            <option className="bg-background-3">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-x-6">
        {products.map((product, i) => (
          <ProductCard
            key={i}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-20 gap-2">
        <button className="w-8 h-8 flex items-center justify-center hover:text-white cursor-pointer">
          <BiLeftArrowAlt size={20} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-[#003d6b] hover:text-white cursor-pointer">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white cursor-pointer">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center hover:text-white cursor-pointer">
          <BiRightArrowAlt size={20} />
        </button>
      </div>
    </div>
  );
}
