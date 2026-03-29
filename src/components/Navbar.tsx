"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, User, Menu, Search } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import AuthModal from './AuthModal'; // Step 1: Import the AuthModal

export default function Navbar() {
  const getCartCount = useCartStore((state) => state.getCartCount);
  const [isMounted, setIsMounted] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false); // Step 2: Modal State
  
  useEffect(() => setIsMounted(true), []);
  const cartCount = isMounted ? getCartCount() : 0;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden text-[#1D3557] hover:text-[#E63946] transition">
            <Menu size={24} />
          </button>
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-[#E63946]">
            Prime<span className="text-[#1D3557]">Cuts</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-5 text-sm font-semibold text-[#1D3557]">
          <Link href="/" className="hover:text-[#E63946] transition">Chicken</Link>
          <Link href="/" className="hover:text-[#E63946] transition">Meat</Link>
          <Link href="/" className="hover:text-[#E63946] transition">Seafood</Link>
          <Link href="/" className="hover:text-[#E63946] transition">Ready-to-cook</Link>
          <span className="text-gray-300">|</span>
          <Link href="/" className="text-[#E63946] hover:text-red-700 transition">Offers</Link>
          <Link href="/recipes" className="hover:text-[#E63946] transition">Recipes</Link>
          <Link href="#" className="hover:text-[#E63946] transition">Subscriptions</Link>
          <Link href="#" className="hover:text-[#E63946] transition">About</Link>
          <Link href="#" className="hover:text-[#E63946] transition">Blog</Link>
        </div>

        {/* Actions: Search, Account, Cart */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button className="hidden sm:block text-[#1D3557] hover:text-[#E63946] transition">
            <Search size={20} />
          </button>
          
          {/* Step 3: Updated Log In Button to open the Modal */}
          <button 
            onClick={() => setIsAuthOpen(true)}
            className="text-[#1D3557] hover:text-[#E63946] transition flex items-center gap-1 focus:outline-none"
          >
            <User size={20} />
            <span className="hidden xl:inline text-sm font-medium">Log In</span>
          </button>
          
          {/* CART BUTTON */}
          <Link href="/cart" className="relative text-[#1D3557] hover:text-[#E63946] transition bg-gray-50 p-2 rounded-full border border-gray-200 shadow-sm hover:shadow-md">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E63946] text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full animate-pulse shadow-md">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Step 4: Render the Modal component */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </nav>
  );
}
