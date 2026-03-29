"use client"; // Required for interactive elements like buttons and state
import { useState } from 'react';
import { ShieldCheck, Info, Leaf, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

export default function ProductPage({ params }: { params: { id: string } }) {
  // Mock Data (In the future, this is fetched from the database using params.id)
  const product = {
    id: params.id || '1',
    name: 'Premium Norwegian Salmon',
    description: 'Fresh, rich in Omega-3, and sourced directly from the cold, clear waters of Norway. Perfect for grilling, baking, or pan-searing. Never frozen, completely hygienic.',
    basePrice: 14.50,
    origin: 'Norwegian Cold Waters',
    nutrition: 'Calories: 208 | Protein: 20g | Omega-3: 2.3g',
    image: 'https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=1000'
  };

  // Interactive State
  const [selectedCut, setSelectedCut] = useState('Fillet');
  const [selectedWeight, setSelectedWeight] = useState(300); // in grams
  const [quantity, setQuantity] = useState(1);
  
  const addToCart = useCartStore((state) => state.addItem);

  // Pricing Logic (Weight multiplier + Cut type premium)
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* LEFT: HD Image & Trust Badges */}
        <div className="space-y-4">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-md">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${product.image}')` }}></div>
            <div className="absolute top-4 left-4 bg-[#2A9D8F] text-white text-xs font-bold px-3 py-1 rounded shadow">Daily Fresh</div>
          </div>
          
          {/* Transparency Badges */}
          <div className="grid grid-cols-3 gap-2 mt-6">
            <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center justify-center text-center border border-gray-100">
              <ShieldCheck className="text-[#E63946] mb-1" size={24} />
              <span className="text-xs font-bold text-[#1D3557]">Antibiotic Free</span>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center justify-center text-center border border-gray-100">
              <Info className="text-[#2A9D8F] mb-1" size={24} />
              <span className="text-xs font-bold text-[#1D3557]">{product.origin}</span>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center justify-center text-center border border-gray-100">
              <Leaf className="text-[#1D3557] mb-1" size={24} />
              <span className="text-xs font-bold text-[#1D3557]">100% Natural</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Product Info & Conversion UI */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1D3557] mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-6 text-sm leading-relaxed">{product.description}</p>

          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-6">
            <h3 className="font-bold text-[#1D3557] text-sm mb-1">Nutritional Info (per 100g)</h3>
            <p className="text-xs text-gray-600">{product.nutrition}</p>
          </div>

          <div className="mb-8 space-y-6">
            {/* Cut Selection */}
            <div>
              <h3 className="font-bold text-[#1D3557] mb-3 flex justify-between">
                <span>1. Choose your cut</span>
                {cutPremium > 0 && <span className="text-[#E63946] text-xs">+${cutPremium.toFixed(2)} premium</span>}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {['Fillet', 'Cubes', 'Slices'].map((cut) => (
                  <button
                    key={cut}
                    onClick={() => setSelectedCut(cut)}
                    className={`py-2 px-4 rounded-lg border text-sm font-bold transition ${
                      selectedCut === cut 
                        ? 'bg-[#1D3557] text-white border-[#1D3557] shadow-md' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#1D3557]'
                    }`}
                  >
                    {cut}
                  </button>
                ))}
              </div>
            </div>

            {/* Weight Selection */}
            <div>
              <h3 className="font-bold text-[#1D3557] mb-3">2. Choose exact weight</h3>
              <div className="grid grid-cols-3 gap-3">
                {[300, 500, 1000].map((weight) => (
                  <button
                    key={weight}
                    onClick={() => setSelectedWeight(weight)}
                    className={`py-2 px-4 rounded-lg border text-sm font-bold transition ${
                      selectedWeight === weight 
                        ? 'bg-[#E63946] text-white border-[#E63946] shadow-md' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#E63946]'
                    }`}
                  >
                    {weight >= 1000 ? `${weight/1000}kg` : `${weight}g`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky/Fixed Bottom Add to Cart Area */}
          <div className="mt-auto bg-white border-t sm:border border-gray-200 p-4 sm:rounded-2xl shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] sm:shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-40">
            
            <div className="flex items-center justify-between w-full sm:w-auto gap-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 font-medium">Total Price</span>
                <span className="text-3xl font-extrabold text-[#1D3557]">${finalPrice}</span>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-gray-600 hover:text-[#E63946]"><Minus size={18} /></button>
                <span className="w-8 text-center font-bold text-[#1D3557]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-gray-600 hover:text-[#E63946]"><Plus size={18} /></button>
              </div>
            </div>

            <button 
              onClick={handleAddToCart}
              className="w-full sm:w-auto bg-[#E63946] hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <ShoppingBag size={22} /> Add to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
