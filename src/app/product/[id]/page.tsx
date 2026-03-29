"use client";
import { useState, useEffect, use } from 'react'; // Added 'use' for build safety
import { ShieldCheck, Info, Leaf, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

// NEXT.JS 14 BUILD FIX: Explicitly define the props
interface ProductPageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  // Build Fix: Ensure params are unwrapped safely for Next.js 14/15 compatibility
  const resolvedParams = params instanceof Promise ? use(params) : params;
  const productId = resolvedParams.id;

  const [isMounted, setIsMounted] = useState(false);
  const [selectedCut, setSelectedCut] = useState('Fillet');
  const [selectedWeight, setSelectedWeight] = useState(300);
  const [quantity, setQuantity] = useState(1);
  
  const addToCart = useCartStore((state) => state.addItem);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // MOCK DATA (As requested in your spec)
  const product = {
    id: productId || '1',
    name: 'Premium Norwegian Salmon',
    description: 'Fresh, rich in Omega-3, and sourced directly from the cold, clear waters of Norway. Perfect for grilling, baking, or pan-searing. Never frozen, completely hygienic.',
    basePrice: 14.50,
    origin: 'Norwegian Cold Waters',
    nutrition: 'Calories: 208 | Protein: 20g | Omega-3: 2.3g',
    image: 'https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=1000'
  };

  if (!isMounted) return null;

  // PREMIUM PRICING LOGIC
  const weightMultiplier = selectedWeight / 300;
  const cutPremium = selectedCut === 'Cubes' ? 1.50 : selectedCut === 'Slices' ? 2.00 : 0;
  const finalPrice = ((product.basePrice * weightMultiplier) + cutPremium).toFixed(2);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      basePrice: product.basePrice,
      finalPrice: parseFloat(finalPrice),
      quantity: quantity,
      cutType: selectedCut,
      weight: `${selectedWeight}g`,
      image: product.image
    });
    alert('Added to Cart Successfully!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20 bg-white mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* LEFT: HD Image & Trust Badges */}
        <div className="space-y-4">
          <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden bg-gray-100 shadow-xl border border-gray-100">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${product.image}')` }}></div>
            <div className="absolute top-6 left-6 bg-[#2A9D8F] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-widest">Daily Fresh</div>
          </div>
          
          <div className="grid grid-cols-3 gap-3 mt-6">
            <div className="bg-gray-50 p-4 rounded-2xl flex flex-col items-center text-center border border-gray-100">
              <ShieldCheck className="text-[#E63946] mb-2" size={24} />
              <span className="text-[10px] font-black text-[#1D3557] uppercase tracking-tighter">Antibiotic Free</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl flex flex-col items-center text-center border border-gray-100">
              <Info className="text-[#2A9D8F] mb-2" size={24} />
              <span className="text-[10px] font-black text-[#1D3557] uppercase tracking-tighter">{product.origin}</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl flex flex-col items-center text-center border border-gray-100">
              <Leaf className="text-[#1D3557] mb-2" size={24} />
              <span className="text-[10px] font-black text-[#1D3557] uppercase tracking-tighter">100% Natural</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Product Info & Conversion UI */}
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-black text-[#1D3557] mb-4">{product.name}</h1>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed font-medium">{product.description}</p>

          <div className="bg-[#F8F9FA] p-6 rounded-3xl border border-gray-100 mb-8">
            <h3 className="font-black text-[#1D3557] text-xs uppercase tracking-widest mb-2">Nutritional Info (per 100g)</h3>
            <p className="text-xs text-gray-500 font-bold">{product.nutrition}</p>
          </div>

          <div className="space-y-8 mb-12">
            <div>
              <h3 className="font-black text-[#1D3557] text-sm uppercase tracking-widest mb-4 flex justify-between">
                <span>1. Select Cut</span>
                {cutPremium > 0 && <span className="text-[#E63946] text-[10px]">+$ {cutPremium.toFixed(2)} premium</span>}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {['Fillet', 'Cubes', 'Slices'].map((cut) => (
                  <button key={cut} onClick={() => setSelectedCut(cut)} className={`py-3 px-4 rounded-xl border-2 text-xs font-black transition-all ${selectedCut === cut ? 'bg-[#1D3557] text-white border-[#1D3557] shadow-lg' : 'bg-white text-gray-400 border-gray-100 hover:border-gray-200'}`}>
                    {cut}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-black text-[#1D3557] text-sm uppercase tracking-widest mb-4">2. Select Weight</h3>
              <div className="grid grid-cols-3 gap-3">
                {[300, 500, 1000].map((weight) => (
                  <button key={weight} onClick={() => setSelectedWeight(weight)} className={`py-3 px-4 rounded-xl border-2 text-xs font-black transition-all ${selectedWeight === weight ? 'bg-[#E63946] text-white border-[#E63946] shadow-lg' : 'bg-white text-gray-400 border-gray-100 hover:border-gray-200'}`}>
                    {weight >= 1000 ? `${weight/1000}kg` : `${weight}g`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Conversion Bar */}
          <div className="mt-auto bg-white border sm:border-gray-100 p-5 sm:rounded-[2rem] shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 sticky bottom-4 z-40">
            <div className="flex items-center justify-between w-full sm:w-auto gap-8">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Price</span>
                <span className="text-3xl font-black text-[#1D3557]">${finalPrice}</span>
              </div>
              <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-gray-400 hover:text-[#E63946] transition"><Minus size={18} /></button>
                <span className="w-10 text-center font-black text-[#1D3557]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-gray-400 hover:text-[#E63946] transition"><Plus size={18} /></button>
              </div>
            </div>
            <button onClick={handleAddToCart} className="w-full sm:w-auto bg-[#E63946] hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-black text-sm transition-all shadow-xl shadow-[#E63946]/20 flex items-center justify-center gap-3 active:scale-95">
              <ShoppingBag size={20} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
