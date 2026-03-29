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
    return <div className="p-20 text-center">Loading Invoice...</div>;
  }

  const subtotal = lastOrder.reduce((acc, item) => acc + (item.finalPrice * item.quantity), 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;
  const date = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const handleDownload = () => {
     window.print();
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 print:bg-white print:py-0 print:m-0">
      
      {/* 1. TOP ACTIONS (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#E63946] transition">
          <ArrowLeft size={16} /> Back to Store
        </Link>
        <div className="flex gap-3">
          <button onClick={() => window.print()} className="bg-white border border-gray-200 text-[#1D3557] px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-2 hover:bg-gray-50 shadow-sm">
            <Printer size={16} /> Print
          </button>
          <button onClick={handleDownload} className="bg-[#1D3557] text-white px-4 py-2 rounded-lg font-bold text-xs shadow-md flex items-center gap-2 hover:bg-black">
            <Download size={16} /> Download PDF
          </button>
        </div>
      </div>

      {/* 2. THE ACTUAL INVOICE CONTAINER */}
      {/* The "page-break-inside: avoid;" rule is applied here via the className */}
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-sm overflow-hidden print:shadow-none print:m-0 print:w-full page-break-inside-avoid">
        
        {/* Invoice Header */}
        <div className="p-8 sm:p-12 border-b border-gray-100 flex flex-col sm:flex-row justify-between gap-8 print:gap-4">
          <div>
            <h1 className="text-3xl font-black text-[#E63946] mb-1">PrimeCuts</h1>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-6">Premium Fresh Meat & Seafood</p>
            <div className="text-xs text-gray-500">
              <p className="font-bold text-[#1D3557]">PrimeCuts Logistics Ltd.</p>
              <p>44 Gourmet Plaza, Cold Chain District</p>
              <p>support@primecuts.com</p>
            </div>
          </div>
          <div className="sm:text-right">
            <h2 className="text-4xl font-light text-gray-300 uppercase mb-4">Invoice</h2>
            <p className="text-xs text-gray-400 font-medium uppercase">Order ID</p>
            <p className="font-bold text-[#1D3557] text-xl mb-4">{params.orderId}</p>
            <p className="text-xs text-gray-400 font-medium uppercase">Date</p>
            <p className="font-bold text-[#1D3557]">{date}</p>
          </div>
        </div>

        {/* Customer & Payment Info */}
        <div className="grid grid-cols-2 gap-12 p-8 sm:p-12 bg-gray-50/50 border-b border-gray-100 print:gap-4 print:p-6">
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Bill To</p>
            <p className="text-sm font-bold text-[#1D3557]">John Doe</p>
            <p className="text-xs text-gray-500 mt-1">123 Premium Avenue, Fresh City</p>
          </div>
          <div className="sm:text-right">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Payment</p>
            <p className="text-sm font-bold text-[#1D3557]">Cash on Delivery</p>
            <p className="text-[10px] text-[#2A9D8F] font-bold mt-1">STATUS: UNPAID (DUE ON ARRIVAL)</p>
          </div>
        </div>

        {/* Itemized Table - Using REAL DATA from lastOrder */}
        <div className="p-8 sm:p-12 print:p-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-[#1D3557]">
                <th className="py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Description</th>
                <th className="py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center print:text-left">Qty</th>
                <th className="py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right print:text-left">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {lastOrder.map((item, idx) => (
                <tr key={idx} className="page-break-inside-avoid"> {/* Apply to table rows as well */}
                  <td className="py-6">
                    <p className="text-sm font-bold text-[#1D3557]">{item.name}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{item.cutType} | {item.weight}</p>
                  </td>
                  <td className="py-6 text-sm text-center text-gray-600 print:text-left">{item.quantity}</td>
                  <td className="py-6 text-sm font-bold text-[#1D3557] text-right">${(item.finalPrice * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div className="mt-8 flex justify-end">
            <div className="w-full sm:w-64 space-y-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-[#2A9D8F] font-bold">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Sales Tax (5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-4 border-t-2 border-[#1D3557] mt-4">
                <span className="text-sm font-black text-[#1D3557] uppercase tracking-wider">Total Due</span>
                <span className="text-2xl font-black text-[#E63946]">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="p-8 sm:p-12 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6 print:p-6">
          <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
            <Check className="text-[#2A9D8F]" size={16} />
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Freshness Guaranteed</p>
          </div>
          <p className="text-[9px] text-gray-400 italic text-center sm:text-right">
            This is an electronically generated document.<br />
            For help, contact 1-800-PRIME-CUTS
          </p>
        </div>
      </div>
      
      {/* GLOBAL PRINT STYLES */}
      <style jsx global>{`
        @media print {
          body {
            font-family: 'Inter', sans-serif; /* Ensure consistent font */
            margin: 0;
            padding: 0;
            background-color: white !important;
            display: block !important; /* Ensure body takes up space */
            box-sizing: border-box;
          }
          /* Hide elements that are not part of the print invoice */
          .print-hidden, nav, footer, .max-w-4xl > div:first-child, .max-w-4xl > div:last-child {
            display: none !important;
          }
          /* Ensure the invoice container fills the printable area */
          .max-w-4xl {
            max-width: 100% !important;
            width: 100% !important;
            margin: 0 !important;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important; /* Remove rounded corners for print */
          }
          /* Handle page breaks within the table */
          table, thead, tbody, tr, td, th {
            page-break-inside: avoid !important;
            border-collapse: collapse !important; /* Ensure borders are consistent */
          }
          /* Ensure columns don't collapse unexpectedly */
          th, td {
            padding: 0.5rem !important; /* Adjust padding for print */
          }
          /* Adjust font sizes for readability on paper */
          body * {
            font-size: 10pt !important;
            line-height: 1.4 !important;
          }
          h1, h2, h3 {
            font-size: 14pt !important;
          }
          .text-sm { font-size: 9pt !important; }
          .text-xs { font-size: 8pt !important; }
          .text-[10px] { font-size: 7pt !important; }
          .text-[11px] { font-size: 8.5pt !important; }
          .text-[9px] { font-size: 6.5pt !important; }
          .text-lg { font-size: 12pt !important; }
          .text-xl { font-size: 13pt !important; }
          .text-2xl { font-size: 16pt !important; }
          .text-3xl { font-size: 18pt !important; }
          .text-4xl { font-size: 24pt !important; }
        }
      `}</style>
    </div>
  );
}
