"use client";
import { Printer, Download, Mail, ArrowLeft, Check } from 'lucide-react';
import Link from 'next/link';

export default function OrderSuccessPage({ params }: { params: { orderId: string } }) {
  const date = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  const items = [
    { name: 'Premium Chicken Breast', cut: 'Cubes', weight: '500g', qty: 1, price: 8.99 },
    { name: 'Norwegian Salmon Fillet', cut: 'Fillet', weight: '300g', qty: 1, price: 14.50 }
  ];

  const subtotal = 23.49;
  const tax = 1.17;
  const total = subtotal + tax;

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 print:bg-white print:py-0">
      
      {/* 1. TOP ACTIONS (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#E63946] transition">
          <ArrowLeft size={16} /> Back to Store
        </Link>
        <div className="flex gap-3">
          <button 
            onClick={() => window.print()} 
            className="bg-white border border-gray-200 text-[#1D3557] px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-2 hover:bg-gray-50 shadow-sm"
          >
            <Printer size={16} /> Print Invoice
          </button>
          <button className="bg-[#1D3557] text-white px-4 py-2 rounded-lg font-bold text-xs shadow-md">
            Download PDF
          </button>
        </div>
      </div>

      {/* 2. THE FORMAL INVOICE DOCUMENT */}
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-sm overflow-hidden print:shadow-none print:border print:border-gray-100">
        
        {/* Header Section */}
        <div className="p-8 sm:p-12 border-b border-gray-100 flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <h1 className="text-3xl font-black text-[#E63946] mb-1">PrimeCuts</h1>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-6">Premium Fresh Meat & Seafood</p>
            
            <div className="text-xs space-y-1 text-gray-500">
              <p className="font-bold text-[#1D3557]">PrimeCuts Logistics Ltd.</p>
              <p>44 Gourmet Plaza, Cold Chain District</p>
              <p>Fresh City, FC 90210</p>
              <p>support@primecuts.com</p>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <h2 className="text-4xl font-light text-gray-300 uppercase mb-4">Invoice</h2>
            <div className="text-xs space-y-1">
              <p className="text-gray-400 font-medium">Invoice Number</p>
              <p className="font-bold text-[#1D3557] text-lg">{params.orderId}</p>
              <p className="text-gray-400 font-medium mt-4">Date Issued</p>
              <p className="font-bold text-[#1D3557]">{date}</p>
            </div>
          </div>
        </div>

        {/* Billing & Shipping Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 p-8 sm:p-12 bg-gray-50/50">
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Bill To</p>
            <p className="text-sm font-bold text-[#1D3557]">John Doe</p>
            <p className="text-sm text-gray-500 leading-relaxed mt-1">
              123 Premium Avenue, Fresh City<br />
              Building 4, Apt 12B<br />
              Phone: +1 555-0123
            </p>
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Payment Info</p>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-[#2A9D8F]"></div>
              <p className="text-sm font-bold text-[#1D3557]">Cash on Delivery</p>
            </div>
            <p className="text-[11px] text-[#2A9D8F] font-bold uppercase tracking-tight">Status: Unpaid (Due on arrival)</p>
          </div>
        </div>

        {/* Itemized Table */}
        <div className="p-8 sm:p-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-[#1D3557]">
                <th className="py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Description</th>
                <th className="py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Qty</th>
                <th className="py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Unit Price</th>
                <th className="py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {items.map((item, idx) => (
                <tr key={idx}>
                  <td className="py-6">
                    <p className="text-sm font-bold text-[#1D3557]">{item.name}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{item.cut} | {item.weight}</p>
                  </td>
                  <td className="py-6 text-sm text-center text-gray-600">{item.qty}</td>
                  <td className="py-6 text-sm text-right text-gray-600">${item.price.toFixed(2)}</td>
                  <td className="py-6 text-sm font-bold text-[#1D3557] text-right">${(item.price * item.qty).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals Section */}
          <div className="mt-8 flex justify-end">
            <div className="w-full sm:w-64 space-y-3">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-[#2A9D8F] font-bold">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Sales Tax (5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-4 border-t-2 border-[#1D3557]">
                <span className="text-base font-black text-[#1D3557] uppercase tracking-tighter">Total Amount</span>
                <span className="text-2xl font-black text-[#E63946]">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="p-8 sm:p-12 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
            <Check className="text-[#2A9D8F]" size={16} />
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Certified Freshness Guaranteed</p>
          </div>
          <p className="text-[10px] text-gray-400 italic text-center sm:text-right leading-relaxed">
            This is an electronically generated invoice.<br />
            For any discrepancies, contact us within 2 hours of delivery.
          </p>
        </div>
      </div>

      {/* Support (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mt-8 text-center print:hidden">
        <p className="text-sm text-gray-400">
          Having trouble? <Link href="#" className="text-[#E63946] font-bold underline ml-1">Contact Support</Link> or call 1-800-FRESH
        </p>
      </div>
    </div>
  );
}
