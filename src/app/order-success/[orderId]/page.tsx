"use client";
import { CheckCircle, Truck, Package, ShieldCheck, ArrowRight, Printer, MapPin, CreditCard, Mail } from 'lucide-react';
import Link from 'next/link';

export default function OrderSuccessPage({ params }: { params: { orderId: string } }) {
  // Mock data for a professional look - In a real app, this comes from the DB
  const date = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const items = [
    { name: 'Premium Chicken Breast', cut: 'Cubes', weight: '500g', qty: 1, price: 8.99 },
    { name: 'Norwegian Salmon Fillet', cut: 'Fillet', weight: '300g', qty: 1, price: 14.50 }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* SUCCESS MESSAGE AREA */}
        <div className="text-center mb-10 pt-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2A9D8F] rounded-full mb-4 shadow-lg shadow-[#2A9D8F]/20">
            <CheckCircle className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-extrabold text-[#1D3557] mb-1">Order Confirmed!</h1>
          <p className="text-gray-500 text-sm">Thank you for choosing PrimeCuts. Your fresh order is being processed.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: LIVE TRACKING & DETAILS */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tracking Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg font-bold text-[#1D3557]">Delivery Status</h2>
                <span className="text-[10px] font-bold bg-[#2A9D8F]/10 text-[#2A9D8F] px-2 py-1 rounded-full uppercase tracking-wider">Estimated: 90 Mins</span>
              </div>

              <div className="relative space-y-8 ml-2">
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gray-100"></div>
                <div className="relative flex items-center gap-6">
                  <div className="z-10 w-6 h-6 rounded-full bg-[#2A9D8F] flex items-center justify-center text-white"><CheckCircle size={14} /></div>
                  <p className="text-sm font-bold text-[#1D3557]">Order Placed <span className="text-xs font-normal text-gray-400 ml-2">14:45 PM</span></p>
                </div>
                <div className="relative flex items-center gap-6">
                  <div className="z-10 w-6 h-6 rounded-full bg-[#E63946] flex items-center justify-center text-white animate-pulse"><Package size={14} /></div>
                  <p className="text-sm font-bold text-[#1D3557]">Quality Check & Custom Cutting</p>
                </div>
                <div className="relative flex items-center gap-6 opacity-40">
                  <div className="z-10 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-400"><Truck size={14} /></div>
                  <p className="text-sm font-bold text-gray-400">Out for Delivery</p>
                </div>
              </div>
            </div>

            {/* Address & Payment Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-[#E63946]">
                  <MapPin size={18} />
                  <h3 className="text-xs font-extrabold uppercase tracking-widest">Delivery To</h3>
                </div>
                <p className="text-sm font-bold text-[#1D3557]">John Doe</p>
                <p className="text-xs text-gray-500 leading-relaxed">123 Premium Avenue, Fresh City<br/>Building 4, Apt 12B</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-[#E63946]">
                  <CreditCard size={18} />
                  <h3 className="text-xs font-extrabold uppercase tracking-widest">Payment</h3>
                </div>
                <p className="text-sm font-bold text-[#1D3557]">Cash on Delivery</p>
                <p className="text-xs text-gray-500 leading-relaxed italic">Pay at your doorstep after inspecting the freshness.</p>
              </div>
            </div>
          </div>

          {/* RIGHT: THE ACTUAL INVOICE */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col h-full">
              <div className="bg-[#1D3557] p-6 text-white text-center">
                <p className="text-[10px] font-bold opacity-60 uppercase tracking-[0.2em] mb-1">Official Invoice</p>
                <h3 className="text-xl font-bold">{params.orderId}</h3>
                <p className="text-[10px] opacity-60 mt-1">{date}</p>
              </div>

              <div className="p-6 flex-grow">
                <div className="space-y-4 mb-6">
                  {items.map((item, i) => (
                    <div key={i} className="flex justify-between text-xs">
                      <div className="max-w-[140px]">
                        <p className="font-bold text-[#1D3557]">{item.name}</p>
                        <p className="text-gray-400">{item.cut} | {item.weight}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#1D3557]">${item.price}</p>
                        <p className="text-gray-400 italic">Qty: {item.qty}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-dashed border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-xs text-gray-500 font-medium">
                    <span>Subtotal</span>
                    <span>$23.49</span>
                  </div>
                  <div className="flex justify-between text-xs text-[#2A9D8F] font-bold">
                    <span>Delivery Fee</span>
                    <span>FREE</span>
                  </div>
                  <div className="flex justify-between text-lg font-extrabold text-[#1D3557] pt-2">
                    <span>Total Paid</span>
                    <span>$23.49</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 border-t border-gray-100 space-y-2">
                <button onClick={() => window.print()} className="w-full flex items-center justify-center gap-2 text-xs font-bold text-[#1D3557] hover:text-[#E63946] transition py-2">
                  <Printer size={14} /> Print This Receipt
                </button>
                <Link href="/" className="w-full flex items-center justify-center gap-2 bg-[#E63946] text-white py-3 rounded-xl text-xs font-bold hover:bg-red-700 transition">
                  Shop More Freshness <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Support Link */}
            <div className="flex items-center justify-center gap-2 text-gray-400 hover:text-[#1D3557] transition cursor-pointer">
              <Mail size={14} />
              <span className="text-xs font-medium underline">Need help with this order?</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
