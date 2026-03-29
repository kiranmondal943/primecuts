"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Clock, ChefHat, Star, Plus, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

export default function Home() {
  const addToCart = useCartStore((state) => state.addItem);

  const handleQuickAdd = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    addToCart({
      id: product.id, name: product.name, basePrice: product.price, finalPrice: product.price,
      quantity: 1, cutType: 'Cubes', weight: '500g', image: product.image
    });
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="space-y-12 pb-20 overflow-x-hidden">
      
      {/* DYNAMIC HERO SECTION */}
      <section className="relative h-[80vh] flex items-center bg-[#1D3557] overflow-hidden">
        {/* Fixed Hero Image - High Res Meat/Seafood */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" 
            alt="Premium Meat" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D3557] via-[#1D3557]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-[#2A9D8F] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-xl">
              Freshness Guaranteed • 90 Min Delivery
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Premium Cuts,<br/> <span className="text-[#E63946]">Masterfully</span> Sliced.
            </h1>
            <p className="text-lg text-white/80 mb-10 max-w-lg font-medium">
              Experience the finest selection of farm-fresh meat and seafood, hygienically packed and delivered with care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#bestsellers" className="bg-[#E63946] hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-black transition-all shadow-2xl shadow-[#E63946]/30 text-center">
                Shop Best Sellers
              </Link>
              <Link href="/subscriptions" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-2xl font-black transition-all border border-white/20 text-center">
                View Subscriptions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BADGES - Animated */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-8 rounded-[3rem] shadow-2xl border border-gray-100"
        >
          {[{ i: ShieldCheck, t: '100% Traceable', c: 'text-[#E63946]' }, { i: Truck, t: 'Vacuum Packed', c: 'text-[#2A9D8F]' }, { i: ChefHat, t: 'Custom Cuts', c: 'text-[#1D3557]' }, { i: Clock, t: 'Always Fresh', c: 'text-[#2A9D8F]' }].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-2">
              <item.i className={`${item.c} mb-1`} size={32} />
              <h3 className="text-xs font-black text-[#1D3557] uppercase tracking-wider">{item.t}</h3>
            </div>
          ))}
        </motion.div>
      </div>

      {/* BEST SELLERS GRID */}
      <section id="bestsellers" className="max-w-7xl mx-auto px-6 pt-10">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-black text-[#1D3557]">Today's <span className="text-[#E63946]">Deals</span></h2>
          <Link href="/recipes" className="text-sm font-bold text-gray-400 hover:text-[#E63946] flex items-center gap-2">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { id: '1', name: 'Premium Chicken Breast', price: 8.99, img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=500' },
            { id: '2', name: 'Norwegian Salmon Fillet', price: 14.50, img: 'https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=500' }
          ].map((product) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={product.id} 
              className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all group"
            >
              <Link href={`/product/${product.id}`}>
                <div className="h-56 overflow-hidden relative">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-[#1D3557]">-15% OFF</div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#1D3557] mb-1">{product.name}</h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-4 tracking-widest">500g • Freshly Cut</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-black text-[#1D3557]">${product.price}</span>
                    <button 
                      onClick={(e) => handleQuickAdd(e, { id: product.id, name: product.name, price: product.price, image: product.img })}
                      className="bg-[#1D3557] hover:bg-[#E63946] text-white p-3 rounded-xl transition-colors"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
