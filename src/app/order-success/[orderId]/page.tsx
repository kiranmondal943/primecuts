"use client";
import { CheckCircle, Truck, Package, ShieldCheck, ArrowRight, Printer } from 'lucide-react';
import Link from 'next/link';

export default function OrderSuccessPage({ params }: { params: { orderId: string } }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      
      {/* 1. HEADER: Success Animation */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2A9D8F]/10 rounded-full mb-4">
          <CheckCircle className="text-[#2A9D8F]" size={48} />
        </div>
        <h1 className="text-4xl font-extrabold text-[#1D3557] mb-2">Order Confirmed!</h1>
        <p className="text-gray-500">Invoice ID: <span className="font-bold text-[#E63946]">{params.orderId}</span></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* 2. LIVE TRACKING SYSTEM (Left 2/3) */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-bold text-[#1D3557] mb-8 flex justify-between items-center">
              Live Order Tracking
              <span className="text-xs bg-[#2A9D8F] text-white px-2 py-1 rounded">ON TIME</span>
            </h2>

            {/* Tracking Steps */}
            <div className="relative space-y-8">
              {/* Vertical Line */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-100"></div>

              <div className="relative flex items-center gap-6">
                <div className="z-10 w-8 h-8 rounded-full bg-[#2A9D8F] flex items-center justify-center text-white">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p className="font-bold text-[#1D3557]">Order Received</p>
                  <p className="text-sm text-gray-500">14:45 PM - We have received your order.</p>
                </div>
              </div>

              <div className="relative flex items-center gap-6">
                <div className="z-10 w-8 h-8 rounded-full bg-[#E63946] flex items-center justify-center text-white animate-pulse">
                  <Package size={16} />
                </div>
                <div>
                  <p className="font-bold text-[#1D3557]">Hygienic Cutting & Packing</p>
                  <p className="text-sm text-gray-500">In Progress - Our experts are custom cutting your meat.</p>
                </div>
              </div>

              <div className="relative flex items-center gap-6 opacity-30">
                <div className="z-10 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                  <Truck size={16} />
                </div>
                <div>
                  <p className="font-bold text-gray-400">Out for Delivery</p>
                  <p className="text-sm text-gray-400">Expected in 45 minutes.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-4 bg-gray-50 rounded-2xl flex items-center gap-4 border border-dashed border-gray-300">
              <ShieldCheck className="text-[#2A9D8F]" size={32} />
              <p className="text-xs text-gray-600">
                Our delivery partner follows strict <span className="font-bold text-[#1D3557]">Contactless Delivery</span> and sanitized cold-chain protocols for your safety.
              </p>
            </div>
          </div>
        </div>

        {/* 3. INVOICE SUMMARY (Right 1/3) */}
        <div className="space-y-6">
          <div className="bg-[#1D3557] text-white p-6 rounded-3xl shadow-xl">
            <h3 className="font-bold text-lg mb-4 border-b border-white/10 pb-2">Digital Invoice</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between opacity-80">
                <span>Items Subtotal</span>
                <span>$23.49</span>
              </div>
              <div className="flex justify-between opacity-80">
                <span>Delivery (Express)</span>
                <span className="text-[#2A9D8F] font-bold">FREE</span>
              </div>
              <div className="pt-3 border-t border-white/10 flex justify-between text-xl font-extrabold">
                <span>Total Paid</span>
                <span>$23.49</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition" onClick={() => window.print()}>
              <Printer size={16} /> Print Receipt
            </button>
          </div>

          <Link href="/" className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-[#1D3557] py-4 rounded-2xl font-bold transition flex items-center justify-center gap-2">
            Back to Home <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </div>
  );
}
