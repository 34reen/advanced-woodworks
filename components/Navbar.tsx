"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);

  return (
    <nav className="bg-[#3e2f23] text-white px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="font-bold text-lg">WoodCraft</h1>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-amber-300 transition">Home</Link>
          <Link href="/about" className="hover:text-amber-300 transition">About</Link>

          {/* Shop Dropdown (desktop) */}
          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button className="hover:text-amber-300 transition">Shop</button>
            {shopOpen && (
              <div className="absolute left-0 top-full pt-1">
                <div className="w-48 bg-white text-stone-800 rounded-md shadow-lg py-2">
                  <Link href="/materials" className="block px-4 py-2 hover:bg-amber-50">Materials</Link>
                  <Link href="/products" className="block px-4 py-2 hover:bg-amber-50">Products</Link>
                  <Link href="/custom-orders" className="block px-4 py-2 hover:bg-amber-50">Custom Orders</Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/services" className="hover:text-amber-300 transition">Services</Link>
          <Link href="/contact" className="hover:text-amber-300 transition">Contact</Link>
        </div>

        {/* Desktop Site Visit button */}
        <div className="hidden md:block">
          <Link
            href="/site-visit"
            className="bg-amber-700 hover:bg-amber-800 px-4 py-2 rounded-md transition"
          >
            Site Visit
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Sidebar */}
          <div className="absolute right-0 top-0 h-full w-64 bg-[#3e2f23] shadow-xl p-5 flex flex-col">
            {/* Close button */}
            <button
              className="self-end text-white text-2xl mb-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              ✕
            </button>

            {/* Mobile links */}
            <div className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-300">Home</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-300">About</Link>

              {/* Mobile Shop dropdown (click to expand) */}
              <div>
                <button
                  onClick={() => setMobileShopOpen(!mobileShopOpen)}
                  className="flex justify-between items-center w-full hover:text-amber-300"
                >
                  Shop
                  <span>{mobileShopOpen ? "▲" : "▼"}</span>
                </button>
                {mobileShopOpen && (
                  <div className="ml-4 mt-2 flex flex-col space-y-2 border-l-2 border-amber-700 pl-3">
                    <Link href="/materials" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-300">Materials</Link>
                    <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-300">Products</Link>
                    <Link href="/custom-orders" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-300">Custom Orders</Link>
                  </div>
                )}
              </div>

              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-300">Services</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-300">Contact</Link>

              {/* Mobile Site Visit button */}
              <Link
                href="/site-visit"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-amber-700 hover:bg-amber-800 text-center px-4 py-2 rounded-md transition mt-2"
              >
                Site Visit
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}