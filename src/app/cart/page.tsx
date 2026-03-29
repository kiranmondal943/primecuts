"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Trash2, ArrowRight, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

export default function CartPage() {
  const { items, removeItem, getTotal } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  // Prevent hydration mismatch by returning a loader until mounted
  if (!isMounted) return <div className="min-h-screen flex items-center justify-center">Loading cart...</div>;

  const total = getTotal();

  // Empty Cart State
  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <div className="bg-gray-100 p-8 rounded-full mb-6 text-gray-400">
          <ShoppingBag size={64} />
        </div>
        <h2 className="text-3xl font-extrabold text-[#1D3557] mb-3">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">Looks like you haven't added any premium cuts to your cart yet.</p>
        <Link href="/" className="bg-[#E63946] text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition shadow-lg flex items-center gap-2">
          Start Shopping <ArrowRight size={20} />
        </Link>
      </div>
    );
  }

  // Active Cart State
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#1D3557] mb-8">Your Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left: Cart Items List */}
        <div className="flex-grow space-y-4">
          {items.map((item, index) => (
            <div key={`${item.id}-${index}`} className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              
              {/* Product Image */}
              <div className="w-full sm:w-32 h-32 rounded-xl bg-gray-100 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }}></div>
              
              {/* Product Details */}
              <div className="flex-grow flex flex-col justify-between w-full h-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-[#1D3557] leading-tight">{item.name}</h3>
                    <div className="flex gap-2 mt-1">
                      <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase">Cut: {item.cutType}</span>
                      <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase">Net: {item.weight}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id, item.cutType)}
                    className="text-gray-400 hover:text-red-500 p-2 transition bg-gray-50 rounded-lg"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                
                <div className="flex justify-between items-end mt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-500">Qty: {item.quantity}</span>
                  </div>
                  <span className="text-xl font-extrabold text-[#1D3557]">${(item.finalPrice * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Cart Summary / Checkout */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
            <h2 className="text-xl font-bold text-[#1D3557] mb-6 border-b pb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span className="text-[#2A9D8F] font-bold text-sm">FREE</span>
              </div>
            </div>

            <div className="flex justify-between text-2xl font-extrabold text-[#1D3557] border-t pt-4 mb-8">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link href="/checkout" className="w-full bg-[#E63946] hover:bg-red-700 text-white py-4 rounded-xl font-bold text-lg transition flex justify-center items-center gap-2 shadow-lg mb-6">
              Proceed to Checkout <ArrowRight size={20} />
            </Link>

            {/* Trust Markers for Conversion */}
            <div className="space-y-4 pt-4 border-t">
              <div className="flex items-center gap-3">
                <div className="bg-[#2A9D8F]/10 p-2 rounded-full"><Truck className="text-[#2A9D8F]" size={20} /></div>
                <p className="text-xs text-gray-600 font-medium">Delivered chilled in 90 minutes.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#1D3557]/10 p-2 rounded-full"><ShieldCheck className="text-[#1D3557]" size={20} /></div>
                <p className="text-xs text-gray-600 font-medium">100% Secure Payment.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
