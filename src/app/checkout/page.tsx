"use client";
import { useState, useEffect } from 'react';
import { useCartStore } from '@/store/useCartStore';
import { CheckCircle, Clock, MapPin, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { getTotal, getCartCount } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);
  const [deliverySlot, setDeliverySlot] = useState('90min');

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  const total = getTotal();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <h1 className="text-3xl font-extrabold text-[#1D3557] mb-8">Secure Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* LEFT COLUMN: 1-2 Step Checkout Form */}
        <div className="flex-grow space-y-8">
          
          {/* Step 1: Delivery Address (Auto-filled mockup) */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#1D3557] mb-4 flex items-center gap-2">
              <MapPin className="text-[#E63946]" /> 1. Delivery Address
            </h2>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 relative">
              <div className="absolute top-4 right-4 text-[#2A9D8F] flex items-center gap-1 text-sm font-bold">
                <CheckCircle size={16} /> Selected
              </div>
              <p className="font-bold text-[#1D3557]">Home (Default)</p>
              <p className="text-sm text-gray-600 mt-1">123 Premium Avenue, Fresh City</p>
              <p className="text-sm text-gray-600">Contact: +1 (555) 123-4567</p>
              <button className="mt-3 text-[#E63946] text-sm font-bold hover:underline">Change Address</button>
            </div>
          </div>

          {/* Step 2: Smart Delivery System (Time Slots) */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#1D3557] mb-4 flex items-center gap-2">
              <Clock className="text-[#E63946]" /> 2. Delivery Time Slot
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                onClick={() => setDeliverySlot('90min')}
                className={`p-4 rounded-xl border-2 cursor-pointer transition ${deliverySlot === '90min' ? 'border-[#E63946] bg-red-50' : 'border-gray-200 hover:border-red-200'}`}
              >
                <p className="font-bold text-[#1D3557]">Express Delivery</p>
                <p className="text-sm text-gray-600 mt-1">Delivered in 90 Minutes</p>
                <p className="text-xs font-bold text-[#2A9D8F] mt-2">FREE</p>
              </div>
              <div 
                onClick={() => setDeliverySlot('tomorrow')}
                className={`p-4 rounded-xl border-2 cursor-pointer transition ${deliverySlot === 'tomorrow' ? 'border-[#E63946] bg-red-50' : 'border-gray-200 hover:border-red-200'}`}
              >
                <p className="font-bold text-[#1D3557]">Scheduled: Tomorrow</p>
                <p className="text-sm text-gray-600 mt-1">Morning (9:00 AM - 11:00 AM)</p>
                <p className="text-xs font-bold text-[#2A9D8F] mt-2">FREE</p>
              </div>
            </div>
          </div>

          {/* Step 3: Payment Method */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#1D3557] mb-4 flex items-center gap-2">
              <CreditCard className="text-[#E63946]" /> 3. Payment Method
            </h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer bg-gray-50 border-[#1D3557]">
                <input type="radio" name="payment" defaultChecked className="w-4 h-4 text-[#E63946]" />
                <span className="font-bold text-[#1D3557]">Credit / Debit Card</span>
              </label>
              <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:bg-gray-50">
                <input type="radio" name="payment" className="w-4 h-4 text-[#E63946]" />
                <span className="font-bold text-[#1D3557]">Cash on Delivery</span>
              </label>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Order Summary */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
            <h2 className="text-xl font-bold text-[#1D3557] mb-6 border-b pb-4">Order Summary ({getCartCount()} items)</h2>
            
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
              <span>Total to Pay</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button 
              onClick={() => alert("Order Placed Successfully! Generating Invoice...")}
              className="w-full bg-[#E63946] hover:bg-red-700 text-white py-4 rounded-xl font-bold text-lg transition shadow-lg mb-4"
            >
              Place Order & Pay
            </button>
            <Link href="/cart" className="block text-center text-sm font-bold text-gray-500 hover:text-[#1D3557]">
              Return to Cart
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
