"use client";
import Link from 'next/link';
import { motion } from 'framer-motion'; // For the "Dynamic" non-static feel
import { ShieldCheck, Truck, Clock, ChefHat, Star, Plus, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

export default function Home() {
  const addToCart = useCartStore((state) => state.addItem);

  // Your specific Quick Add logic preserved 100%
  const handleQuickAdd = (e: React.MouseEvent, product: any) => {
    e.preventDefault(); 
    addToCart({
      id: product.id,
      name: product.name,
      basePrice: product.price,
      finalPrice: product.price,
      quantity: 1,
      cutType: product.defaultCut || 'Cubes',
      weight: product.defaultWeight || '500g',
      image: product.image
    });
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-20 w-full overflow-x-hidden">
      
      {/* DYNAMIC HERO SECTION (Fixed Static Look & Missing Image) */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center bg-[#1D3557] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" 
            alt="Premium Fresh Meat" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D3557] via-[#1D3557]/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-[#2A9D8F] text-white px-3 py-1 rounded text-[10px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-1 shadow-md w-fit">
              <Clock size={14} /> Delivered in 90 Minutes
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 leading-tight max-w-2xl text-white">
              Premium Cuts,<br/> <span className="text-[#E63946]">Unmatched</span> Freshness.
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 max-w-xl text-gray-100 font-medium">
              Hygienically packed, fully traceable fresh meat and seafood delivered directly to your doorstep. Never frozen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#bestsellers" className="bg-[#E63946] hover:bg-red-700 text-white font-bold py-4 px-10 rounded-2xl shadow-xl transform transition hover:scale-105 text-center">
                Shop Best Sellers
              </a>
              <Link href="/subscriptions" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-4 px-10 rounded-2xl border border-white/20 transition text-center">
                Subscription Packs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST & BRANDING BADGES (Animated) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 sm:p-8 rounded-[2.5rem] shadow-2xl border border-gray-100"
        >
          <div className="flex flex-col items-center text-center space-y-2 p-2">
            <div className="bg-[#E63946]/10 p-3 rounded-full"><ShieldCheck className="text-[#E63946]" size={28} /></div>
            <h3 className="font-black text-[10px] sm:text-xs uppercase tracking-widest text-[#1D3557]">100% Traceable</h3>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 p-2">
            <div className="bg-[#2A9D8F]/10 p-3 rounded-full"><Truck className="text-[#2A9D8F]" size={28} /></div>
            <h3 className="font-black text-[10px] sm:text-xs uppercase tracking-widest text-[#1D3557]">Fast Delivery</h3>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 p-2">
            <div className="bg-[#1D3557]/10 p-3 rounded-full"><ChefHat className="text-[#1D3557]" size={28} /></div>
            <h3 className="font-black text-[10px] sm:text-xs uppercase tracking-widest text-[#1D3557]">Custom Cuts</h3>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 p-2">
            <div className="bg-[#2A9D8F]/10 p-3 rounded-full"><Clock className="text-[#2A9D8F]" size={28} /></div>
            <h3 className="font-black text-[10px] sm:text-xs uppercase tracking-widest text-[#1D3557]">Daily Fresh</h3>
          </div>
        </motion.div>
      </section>

      {/* DYNAMIC CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-black text-[#1D3557] mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { name: 'Chicken', img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=400' },
            { name: 'Beef & Mutton', img: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=400' },
            { name: 'Fresh Fish', img: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=400' },
            { name: 'Seafood', img: 'https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=400' },
            { name: 'Ready to Cook', img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=400' },
          ].map((cat, idx) => (
            <Link href="/product/1" key={idx} className="group cursor-pointer relative rounded-3xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all block">
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition duration-700"
                style={{ backgroundImage: `url('${cat.img}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-black text-sm sm:text-lg">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TODAY'S DEALS / BEST SELLERS (High Fidelity Preserved) */}
      <section id="bestsellers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1D3557]">Today's Best Sellers</h2>
          <Link href="/recipes" className="text-[#E63946] font-black text-xs uppercase tracking-widest hover:underline flex items-center gap-2">
            View All <ArrowRight size={14} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* PRODUCT CARD 1 */}
          <motion.div whileHover={{ y: -10 }} className="bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 overflow-hidden flex flex-col group">
            <Link href="/product/1">
              <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
                <div className="absolute top-4 left-4 bg-[#E63946] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase z-10 shadow-lg">-15% OFF</div>
                <img 
                  src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=500" 
                  alt="Chicken" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-black text-[#1D3557] text-lg leading-tight mb-1 group-hover:text-[#E63946] transition">Premium Chicken Breast</h3>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Boneless | Antibiotic-free</p>
                
                <div className="flex items-center gap-1 mb-4">
                  <Star className="text-yellow-400 fill-yellow-400" size={14} />
                  <span className="text-xs font-black text-[#1D3557]">4.8</span>
                  <span className="text-[10px] text-gray-400 font-bold ml-1">(124 reviews)</span>
                </div>
                
                <div className="mt-auto">
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl mb-4 border border-gray-100">
                    <span className="text-[10px] font-black text-gray-500 uppercase">Net: 500g</span>
                    <span className="text-[10px] font-black text-gray-500 uppercase">Cut: Cubes</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-xl font-black text-[#E63946]">$8.99</span>
                      <span className="text-[10px] text-gray-400 line-through font-bold">$10.50</span>
                    </div>
                    <button 
                      onClick={(e) => handleQuickAdd(e, {
                        id: '1', name: 'Premium Chicken Breast', price: 8.99, defaultCut: 'Cubes', defaultWeight: '500g', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=500'
                      })}
                      className="bg-[#1D3557] hover:bg-[#E63946] text-white p-3 rounded-2xl transition-all shadow-lg active:scale-95"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* PRODUCT CARD 2 */}
          <motion.div whileHover={{ y: -10 }} className="bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 overflow-hidden flex flex-col group">
            <Link href="/product/2">
              <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=500" 
                  alt="Salmon" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-black text-[#1D3557] text-lg leading-tight mb-1 group-hover:text-[#E63946] transition">Norwegian Salmon Fillet</h3>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Omega-3 | Cold Chain Fresh</p>
                
                <div className="flex items-center gap-1 mb-4">
                  <Star className="text-yellow-400 fill-yellow-400" size={14} />
                  <span className="text-xs font-black text-[#1D3557]">4.9</span>
                  <span className="text-[10px] text-gray-400 font-bold ml-1">(89 reviews)</span>
                </div>
                
                <div className="mt-auto">
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl mb-4 border border-gray-100">
                    <span className="text-[10px] font-black text-gray-500 uppercase">Net: 300g</span>
                    <span className="text-[10px] font-black text-gray-500 uppercase">Cut: Fillet</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-xl font-black text-[#E63946]">$14.50</span>
                    </div>
                    <button 
                      onClick={(e) => handleQuickAdd(e, {
                        id: '2', name: 'Norwegian Salmon Fillet', price: 14.50, defaultCut: 'Fillet', defaultWeight: '300g', image: 'https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=500'
                      })}
                      className="bg-[#1D3557] hover:bg-[#E63946] text-white p-3 rounded-2xl transition-all shadow-lg active:scale-95"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ADMIN LINK (As Requested) */}
      <div className="max-w-7xl mx-auto px-4 text-center pb-10">
        <Link href="/admin" className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] hover:text-[#E63946] transition-colors">
          PrimeCuts Business Hub • Admin Access
        </Link>
      </div>
      
    </div>
  );
}
