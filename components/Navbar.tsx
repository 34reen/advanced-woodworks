"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <nav className="bg-[#3e2f23] text-white px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="font-bold text-lg">WoodCraft</h1>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-amber-300 transition">Home</Link>
          <Link href="/about" className="hover:text-amber-300 transition">About</Link>

          {/* Shop Dropdown - fixed */}
          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button className="hover:text-amber-300 transition">Shop</button>
            {shopOpen && (
              <div className="absolute left-0 top-full pt-1">
                <div className="w-48 bg-white text-stone-800 rounded-md shadow-lg py-2">
                  <Link href="/products" className="block px-4 py-2 hover:bg-amber-50">Products</Link>
                  <Link href="/materials" className="block px-4 py-2 hover:bg-amber-50">Materials</Link>
                  <Link href="/custom-orders" className="block px-4 py-2 hover:bg-amber-50">Custom Orders</Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/services" className="hover:text-amber-300 transition">Services</Link>
          <Link href="/contact" className="hover:text-amber-300 transition">Contact</Link>
        </div>

        <div className="hidden md:block">
          <Link href="/site-visit" className="bg-amber-700 hover:bg-amber-800 px-4 py-2 rounded-md transition">
            Site Visit
          </Link>
        </div>

        <div className="md:hidden">
          <button className="text-white">☰</button>
        </div>
      </div>
    </nav>
  );
}