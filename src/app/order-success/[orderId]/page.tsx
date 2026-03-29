"use client";
import { CheckCircle, Truck, Package, Printer, MapPin, CreditCard, Mail, ArrowLeft, Download } from 'lucide-react';
import Link from 'next/link';

export default function OrderSuccessPage({ params }: { params: { orderId: string } }) {
  const date = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const items = [
    { name: 'Premium Chicken Breast', cut: 'Cubes', weight: '500g', qty: 1, price: 8.99 },
    { name: 'Norwegian Salmon Fillet', cut: 'Fillet', weight: '300g', qty: 1, price: 14.50 }
  ];

  return (
    // mt-24 ensures we are well below the sticky navbar
    <div className="bg-[#F4F7F6] min-h-screen mt-16 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* TOP BAR ACTIONS */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex items-center gap-3">
             <Link href="/" className="bg-white p-2 rounded-full shadow-sm hover:text-[#E63946] transition">
                <ArrowLeft size={20} />
             </Link>
             <div>
                <h1 className="text-2xl font-black text-[#1D3557]">Order Confirmed</h1>
                <p className="text-sm text-gray-500 font-medium">Order ID: {params.orderId}</p>
             </div>
          </div>
          <div className="flex gap-3">
             <button onClick={() => window.print()} className="bg-white text-[#1D3557] px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm border border-gray-200 flex items-center gap-2 hover:bg-gray-50 transition">
                <Printer size={18} /> Print Invoice
             </button>
             <button className="bg-[#1D3557] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2 hover:bg-opacity-90 transition">
                <Download size={18} /> Download PDF
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: LIVE TRACKING (8 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tracking Card */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
               <h2 className="text-xl font-bold text-[#1D3557] mb-8">Where's your order?</h2>
               
               <div className="space-y-10 relative">
                  {/* The vertical tracking line */}
                  <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-gray-100"></div>

                  <div className="relative flex gap-6">
                    <div className="w-8 h-8 rounded-full bg-[#2A9D8F] flex items-center justify-center text-white ring-4 ring-[#2A9D8F]/10">
                      <CheckCircle size={16} />
                    </div>
                    <div>
                      <p className="font-bold text-[#1D3557]">Order Received</p>
                      <p className="text-sm text-gray-500">Confirmed at 03:09 PM. We're on it!</p>
                    </div>
                  </div>

                  <div className="relative flex gap-6">
                    <div className="w-8 h-8 rounded-full bg-[#E63946] flex items-center justify-center text-white shadow-lg shadow-[#E63946]/30 animate-pulse">
                      <Package size={16} />
                    </div>
                    <div>
                      <p className="font-bold text-[#1D3557]">Premium Hand-Cutting</p>
                      <p className="text-sm text-gray-500">Our master butchers are preparing your custom cuts.</p>
                    </div>
                  </div>

                  <div className="relative flex gap-6 opacity-40">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                      <Truck size={16} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-500">Out for Delivery</p>
                      <p className="text-sm text-gray-400">On its way in a temperature-controlled bag.</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Delivery Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <MapPin className="text-[#E63946] mb-3" size={24} />
                <h3 className="font-bold text-[#1D3557] mb-1">Shipping To</h3>
                <p className="text-sm text-gray-500 leading-relaxed">John Doe<br/>123 Premium Avenue, Fresh City<br/>Building 4, Apt 12B</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <CreditCard className="text-[#2A9D8F] mb-3" size={24} />
                <h3 className="font-bold text-[#1D3557] mb-1">Payment Method</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Cash on Delivery<br/>Amount: $23.49</p>
              </div>
            </div>
          </div>

          {/* RIGHT: PROFESSIONAL PAPER INVOICE (5 Columns) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl shadow-2xl border-t-[10px] border-[#1D3557] overflow-hidden relative">
              {/* Decorative "Hole Punch" look for paper style */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-2 bg-gray-100 rounded-b-full"></div>
              
              <div className="p-8 sm:p-10">
                <div className="flex justify-between items-start mb-10">
                   <div>
                      <h2 className="text-2xl font-black text-[#E63946]">PrimeCuts</h2>
                      <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mt-1">Premium Freshness</p>
                   </div>
                   <div className="text-right">
                      <p className="text-xs font-bold text-[#1D3557]">INVOICE</p>
                      <p className="text-[10px] text-gray-400 font-medium">{date}</p>
                   </div>
                </div>

                <div className="space-y-6 mb-10">
                   {items.map((item, i) => (
                      <div key={i} className="flex justify-between items-start">
                         <div>
                            <p className="text-sm font-bold text-[#1D3557]">{item.name}</p>
                            <p className="text-[11px] text-gray-500">{item.cut} • {item.weight} • Qty {item.qty}</p>
                         </div>
                         <p className="text-sm font-bold text-[#1D3557]">${item.price.toFixed(2)}</p>
                      </div>
                   ))}
                </div>

                <div className="border-t border-gray-100 pt-6 space-y-3">
                   <div className="flex justify-between text-xs font-medium text-gray-500">
                      <span>Subtotal</span>
                      <span>$23.49</span>
                   </div>
                   <div className="flex justify-between text-xs font-medium text-[#2A9D8F]">
                      <span>Shipping Fee</span>
                      <span>FREE</span>
                   </div>
                   <div className="flex justify-between text-xs font-medium text-gray-500">
                      <span>GST (5%)</span>
                      <span>$1.17</span>
                   </div>
                   <div className="flex justify-between items-center pt-4 border-t border-[#1D3557] mt-4">
                      <span className="text-sm font-black text-[#1D3557] uppercase tracking-wider">Total Paid</span>
                      <span className="text-2xl font-black text-[#E63946]">$23.49</span>
                   </div>
                </div>

                <div className="mt-12 text-center">
                   <div className="inline-block p-3 bg-gray-50 rounded-xl mb-4 border border-gray-100">
                      <p className="text-[10px] font-bold text-[#1D3557] leading-tight">SCAN TO TRACK<br/>ON MOBILE</p>
                   </div>
                   <p className="text-[10px] text-gray-400 italic">This is a computer generated invoice. No signature required.</p>
                </div>
              </div>
              
              {/* "Paper Tear" effect at bottom */}
              <div className="h-2 w-full bg-[radial-gradient(circle,_#F4F7F6_5px,_transparent_0)] bg-[length:20px_20px]"></div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 hover:text-[#E63946] transition cursor-pointer group">
              <Mail size={16} />
              <span className="text-xs font-bold uppercase tracking-widest group-hover:underline">Need help? Chat with Support</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
