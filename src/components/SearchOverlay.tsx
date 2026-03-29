"use client";
import { useState, useEffect } from 'react';
import { X, Search, TrendingUp, History, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  
  if (!isOpen) return null;

  const trending = [
    { name: 'Antibiotic-free Chicken', link: '/product/1' },
    { name: 'Fresh Atlantic Salmon', link: '/product/2' },
    { name: 'Marinated BBQ Wings', link: '/product/1' },
  ];

  return (
    <div className="fixed inset-0 z-[110] bg-white animate-in slide-in-from-top duration-300">
      <div className="max-w-4xl mx-auto px-6 pt-20">
        
        {/* Search Input Area */}
        <div className="flex items-center gap-4 border-b-2 border-[#1D3557] pb-4 mb-12">
          <Search size={32} className="text-gray-300" />
          <input 
            autoFocus
            type="text" 
            placeholder="Search for meat, fish, or recipes..." 
            className="w-full text-2xl md:text-4xl font-bold focus:outline-none placeholder:text-gray-200"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400">
            <X size={32} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Trending Searches */}
          <div>
            <h3 className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">
              <TrendingUp size={14} /> Trending Now
            </h3>
            <div className="space-y-4">
              {trending.map((item, i) => (
                <Link 
                  key={i} 
                  href={item.link} 
                  onClick={onClose}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-[#E63946]/5 hover:text-[#E63946] transition-all group"
                >
                  <span className="font-bold text-[#1D3557] group-hover:text-[#E63946]">{item.name}</span>
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h3 className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">
              <History size={14} /> Browse Categories
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Chicken', 'Seafood', 'Mutton', 'Steaks', 'Ready to Cook', 'Marinated'].map((cat) => (
                <button key={cat} className="px-5 py-3 rounded-full border border-gray-100 bg-white text-sm font-bold text-[#1D3557] hover:border-[#E63946] hover:text-[#E63946] transition shadow-sm">
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-[#1D3557] rounded-[2.5rem] text-white">
               <p className="text-xs font-bold text-[#2A9D8F] mb-2 uppercase">Member Exclusive</p>
               <h4 className="text-xl font-black mb-4">First order? Use code FRESH20</h4>
               <Link href="/" onClick={onClose} className="inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4 decoration-[#E63946]">
                Shop Today's Deals
               </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
