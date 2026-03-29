"use client";
import { Printer, Download, ArrowLeft, Check } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import { useEffect, useState } from 'react';

export default function OrderSuccessPage({ params }: { params: { orderId: string } }) {
  const lastOrder = useCartStore((state) => state.lastOrder);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || lastOrder.length === 0) {
    return <div className="p-20 text-center">Loading...</div>;
  }

  const subtotal = lastOrder.reduce((acc, item) => acc + (item.finalPrice * item.quantity), 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;
  const date = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="bg-gray-100 min-h-screen sm:py-10 print:bg-white print:p-0">
      
      {/* 1. TOP ACTIONS (Hidden on Print) */}
      <div className="max-w-[800px] mx-auto mb-6 flex justify-between items-center px-4 print:hidden">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#E63946]">
          <ArrowLeft size={16} /> Back
        </Link>
        <div className="flex gap-2">
          <button onClick={() => window.print()} className="bg-[#1D3557] text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md flex items-center gap-2">
            <Printer size={16} /> Print Single Page
          </button>
        </div>
      </div>

      {/* 2. THE COMPACT INVOICE (Guaranteed Single Page) */}
      <div id="printable-invoice" className="max-w-[800px] mx-auto bg-white shadow-xl print:shadow-none print:w-full print:m-0">
        
        {/* Header Section */}
        <div className="p-8 border-b border-gray-100 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-black text-[#E63946]">PrimeCuts</h1>
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-4">Premium Freshness</p>
            <div className="text-[11px] text-gray-500 space-y-0.5">
              <p className="font-bold text-[#1D3557]">PrimeCuts Logistics Ltd.</p>
              <p>44 Gourmet Plaza, Fresh City</p>
              <p>support@primecuts.com</p>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-3xl font-light text-gray-300 uppercase mb-2">Invoice</h2>
            <p className="text-[10px] text-gray-400 font-bold">NO: {params.orderId}</p>
            <p className="text-[10px] text-gray-400 font-bold">DATE: {date}</p>
          </div>
        </div>

        {/* Customer Details */}
        <div className="grid grid-cols-2 gap-4 p-8 bg-gray-50/50 border-b border-gray-100">
          <div>
            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 text-[#E63946]">Ship To</p>
            <p className="text-sm font-bold text-[#1D3557]">John Doe</p>
            <p className="text-[11px] text-gray-500 leading-tight">123 Premium Avenue, Fresh City<br/>Building 4, Apt 12B</p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 text-[#E63946]">Payment</p>
            <p className="text-sm font-bold text-[#1D3557]">Cash on Delivery</p>
            <p className="text-[10px] text-[#2A9D8F] font-bold uppercase mt-1">Status: Unpaid</p>
          </div>
        </div>

        {/* Compact Table */}
        <div className="p-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-[#1D3557]">
                <th className="py-2 text-[10px] font-black text-gray-400 uppercase">Description</th>
                <th className="py-2 text-[10px] font-black text-gray-400 uppercase text-center">Qty</th>
                <th className="py-2 text-[10px] font-black text-gray-400 uppercase text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {lastOrder.map((item, idx) => (
                <tr key={idx}>
                  <td className="py-4">
                    <p className="text-sm font-bold text-[#1D3557]">{item.name}</p>
                    <p className="text-[10px] text-gray-400">{item.cutType} | {item.weight}</p>
                  </td>
                  <td className="py-4 text-sm text-center text-gray-600">{item.quantity}</td>
                  <td className="py-4 text-sm font-bold text-[#1D3557] text-right">${(item.finalPrice * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals Section (Tighter) */}
          <div className="mt-6 flex justify-end">
            <div className="w-48 space-y-1.5 border-t pt-4">
              <div className="flex justify-between text-[11px] text-gray-500">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[11px] text-[#2A9D8F] font-bold">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="flex justify-between text-[11px] text-gray-500">
                <span>Tax (5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#1D3557] mt-2">
                <span className="text-xs font-black text-[#1D3557]">TOTAL</span>
                <span className="text-xl font-black text-[#E63946]">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-2 opacity-50">
            <Check size={12} />
            <span className="text-[9px] font-bold uppercase tracking-widest">Hygienically Packed</span>
          </div>
          <p className="text-[9px] text-gray-400 italic">Electronic Invoice - No Signature Required</p>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          /* 1. HIDE ALL WEB ELEMENTS */
          nav, footer, .print-hidden, button, header {
            display: none !important;
            height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          /* 2. REMOVE BROWSER MARGINS/HEADER/FOOTER */
          @page {
            margin: 0mm;
            size: auto;
          }

          /* 3. RESET BODY FOR PRINT */
          body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact;
          }

          /* 4. FORCE INVOICE TO TOP */
          #printable-invoice {
            position: absolute;
            top: 0;
            left: 0;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
          }
        }
      `}</style>
    </div>
  );
}
