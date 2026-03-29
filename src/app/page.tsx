"use client"; // This tells Next.js to make the page interactive
import Link from 'next/link';
import { ShieldCheck, Truck, Clock, ChefHat, Star, Plus } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

export default function Home() {
  const addToCart = useCartStore((state) => state.addItem);

  // Quick Add function for the homepage buttons
  const handleQuickAdd = (e: React.MouseEvent, product: any) => {
    e.preventDefault(); // Prevents the link from taking you to another page when clicking the button
    addToCart({
      id: product.id,
      name: product.name,
      basePrice: product.price,
      finalPrice: product.price,
      quantity: 1,
      cutType: product.defaultCut,
      weight: product.defaultWeight,
      image: product.image
    });
    // Optional: You can remove this alert later, but it helps confirm it worked!
    alert(`${product.name} added to cart! Check the red bubble on your cart icon.`);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-12 w-full overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative bg-[#1D3557] text-white w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=2070')" }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 flex flex-col items-start">
          <span className="bg-[#2A9D8F] text-white px-3 py-1 rounded text-xs font-bold mb-4 uppercase tracking-widest flex items-center gap-1 shadow-md">
            <Clock size={14} /> Delivered in 90 Minutes
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight max-w-2xl text-shadow-lg">
            Premium Cuts,<br/> Unmatched Freshness.
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-xl text-gray-100 font-medium">
            Hygienically packed, fully traceable fresh meat and seafood delivered directly to your doorstep. Never frozen.
          </p>
          <a href="#bestsellers" className="bg-[#E63946] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-xl transform transition hover:scale-105 w-full sm:w-auto text-center">
            Shop Best Sellers
          </a>
        </div>
      </section>

      {/* TRUST & BRANDING BADGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex flex-col items-center text-center space-y-2 p-2">
            <div className="bg-[#E63946]/10 p-3 rounded-full"><ShieldCheck className="text-[#E63946]" size={28} /></div>
            <h3 className="font-bold text-sm text-[#1D3557]">100% Traceable</h3>
            <p className="text-xs text-gray-500 hidden sm:block">From farm to fork</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 p-2">
            <div className="bg-[#2A9D8F]/10 p-3 rounded-full"><Truck className="text-[#2A9D8F]" size={28} /></div>
            <h3 className="font-bold text-sm text-[#1D3557]">Fast Delivery</h3>
            <p className="text-xs text-gray-500 hidden sm:block">Cold-chain logistics</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 p-2">
            <div className="bg-[#1D3557]/10 p-3 rounded-full"><ChefHat className="text-[#1D3557]" size={28} /></div>
            <h3 className="font-bold text-sm text-[#1D3557]">Custom Cuts</h3>
            <p className="text-xs text-gray-500 hidden sm:block">Sliced to perfection</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 p-2">
            <div className="bg-[#2A9D8F]/10 p-3 rounded-full"><Clock className="text-[#2A9D8F]" size={28} /></div>
            <h3 className="font-bold text-sm text-[#1D3557]">Daily Fresh</h3>
            <p className="text-xs text-gray-500 hidden sm:block">No preservatives</p>
          </div>
        </div>
      </section>

      {/* DYNAMIC CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D3557] mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { name: 'Chicken', img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=400' },
            { name: 'Beef & Mutton', img: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=400' }, // Fixed Image URL
            { name: 'Fresh Fish', img: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=400' },
            { name: 'Seafood', img: 'https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=400' },
            { name: 'Ready to Cook', img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=400' },
          ].map((cat, idx) => (
            <Link href="/product/1" key={idx} className="group cursor-pointer relative rounded-xl overflow-hidden aspect-square shadow-sm hover:shadow-md transition block">
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition duration-500"
                style={{ backgroundImage: `url('${cat.img}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-3 sm:p-4">
                <h3 className="text-white font-bold text-sm sm:text-lg">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TODAY'S DEALS / BEST SELLERS */}
      <section id="bestsellers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D3557]">Today's Best Sellers</h2>
          <span className="text-[#E63946] font-bold text-sm cursor-pointer hover:underline">View All</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* PRODUCT CARD 1 (Now Clickable) */}
          <Link href="/product/1" className="bg-white rounded-xl shadow-sm hover:shadow-xl transition border border-gray-100 overflow-hidden flex flex-col group block">
            <div className="relative h-48 w-full bg-gray-100">
              <div className="absolute top-2 left-2 bg-[#E63946] text-white text-[10px] font-bold px-2 py-1 rounded uppercase z-10">-15% OFF</div>
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-500" style={{backgroundImage: "url('https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=500')"}}></div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-bold text-[#1D3557] text-lg leading-tight mb-1 group-hover:text-[#E63946] transition">Premium Chicken Breast</h3>
              <p className="text-xs text-gray-500 mb-2">Boneless, Skinless | Antibiotic-free</p>
              
              <div className="flex items-center gap-1 mb-3">
                <Star className="text-yellow-400 fill-yellow-400" size={14} />
                <span className="text-xs font-bold">4.8</span>
                <span className="text-xs text-gray-400">(124 reviews)</span>
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between items-center bg-gray-50 p-2 rounded mb-3 border border-gray-100">
                  <span className="text-xs font-semibold text-gray-600">Net: 500g</span>
                  <span className="text-xs font-semibold text-gray-600">Cut: Cubes</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-bold text-[#E63946]">$8.99</span>
                    <span className="text-xs text-gray-400 line-through ml-2">$10.50</span>
                  </div>
                  {/* The Add Button Logic */}
                  <button 
                    onClick={(e) => handleQuickAdd(e, {
                      id: '1', name: 'Premium Chicken Breast', price: 8.99, defaultCut: 'Cubes', defaultWeight: '500g', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=500'
                    })}
                    className="bg-[#1D3557] hover:bg-[#E63946] text-white p-2 rounded-lg transition flex items-center gap-1 shadow-md"
                  >
                    <Plus size={18} /> <span className="text-sm font-bold pr-1">Add</span>
                  </button>
                </div>
              </div>
            </div>
          </Link>

          {/* PRODUCT CARD 2 (Now Clickable) */}
          <Link href="/product/2" className="bg-white rounded-xl shadow-sm hover:shadow-xl transition border border-gray-100 overflow-hidden flex flex-col group block">
            <div className="relative h-48 w-full bg-gray-100">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-500" style={{backgroundImage: "url('https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=500')"}}></div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-bold text-[#1D3557] text-lg leading-tight mb-1 group-hover:text-[#E63946] transition">Norwegian Salmon Fillet</h3>
              <p className="text-xs text-gray-500 mb-2">Rich in Omega-3 | Cleaned</p>
              
              <div className="flex items-center gap-1 mb-3">
                <Star className="text-yellow-400 fill-yellow-400" size={14} />
                <span className="text-xs font-bold">4.9</span>
                <span className="text-xs text-gray-400">(89 reviews)</span>
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between items-center bg-gray-50 p-2 rounded mb-3 border border-gray-100">
                  <span className="text-xs font-semibold text-gray-600">Net: 300g</span>
                  <span className="text-xs font-semibold text-gray-600">Cut: Fillet</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-bold text-[#E63946]">$14.50</span>
                  </div>
                  {/* The Add Button Logic */}
                  <button 
                    onClick={(e) => handleQuickAdd(e, {
                      id: '2', name: 'Norwegian Salmon Fillet', price: 14.50, defaultCut: 'Fillet', defaultWeight: '300g', image: 'https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=500'
                    })}
                    className="bg-[#1D3557] hover:bg-[#E63946] text-white p-2 rounded-lg transition flex items-center gap-1 shadow-md"
                  >
                    <Plus size={18} /> <span className="text-sm font-bold pr-1">Add</span>
                  </button>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </section>
      
    </div>
  );
}
