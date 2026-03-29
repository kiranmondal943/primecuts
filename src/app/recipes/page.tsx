"use client";
import { PlayCircle, Clock, Utensils, ArrowRight, Plus } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';

export default function RecipesPage() {
  const addToCart = useCartStore((state) => state.addItem);

  const recipes = [
    {
      id: 'rec1',
      title: 'Butter Garlic Lemon Salmon',
      time: '20 Mins',
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800',
      description: 'Pan-seared Norwegian salmon with a zesty garlic butter glaze.',
      mainIngredient: {
        id: '2',
        name: 'Norwegian Salmon Fillet',
        price: 14.50,
        image: 'https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=500',
        cut: 'Fillet',
        weight: '300g'
      }
    },
    {
      id: 'rec2',
      title: 'Classic Roast Chicken',
      time: '45 Mins',
      difficulty: 'Medium',
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=800',
      description: 'Golden, juicy whole chicken roasted with Mediterranean herbs.',
      mainIngredient: {
        id: '1',
        name: 'Premium Chicken Breast',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=500',
        cut: 'Whole',
        weight: '1kg'
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-black text-[#1D3557] mb-2">PrimeCuts <span className="text-[#E63946]">Kitchen</span></h1>
          <p className="text-gray-500">Master the art of cooking fresh meat and seafood with our chef-curated recipes.</p>
        </div>
        <div className="flex gap-4">
          <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-xs font-bold text-[#1D3557] cursor-pointer hover:bg-gray-50">All Recipes</span>
          <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-xs font-bold text-gray-400 cursor-not-allowed">Cooking Videos</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
            {/* Image & Play Button */}
            <div className="relative h-72 w-full overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url('${recipe.image}')` }}></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircle className="text-white w-16 h-16 drop-shadow-2xl" />
              </div>
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-[#1D3557] uppercase tracking-widest flex items-center gap-1">
                  <Clock size={12} /> {recipe.time}
                </span>
                <span className="bg-[#2A9D8F] px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                  {recipe.difficulty}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-[#1D3557] mb-3 group-hover:text-[#E63946] transition-colors">{recipe.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{recipe.description}</p>
              
              {/* Product-to-Recipe Link (The Shop Feature) */}
              <div className="bg-[#F8F9FA] p-5 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Required Ingredients</p>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-cover bg-center shadow-sm" style={{ backgroundImage: `url('${recipe.mainIngredient.image}')` }}></div>
                    <div>
                      <p className="text-sm font-bold text-[#1D3557]">{recipe.mainIngredient.name}</p>
                      <p className="text-[11px] text-gray-500">{recipe.mainIngredient.weight} | {recipe.mainIngredient.cut}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      addToCart({
                        id: recipe.mainIngredient.id,
                        name: recipe.mainIngredient.name,
                        basePrice: recipe.mainIngredient.price,
                        finalPrice: recipe.mainIngredient.price,
                        quantity: 1,
                        cutType: recipe.mainIngredient.cut,
                        weight: recipe.mainIngredient.weight,
                        image: recipe.mainIngredient.image
                      });
                      alert('Added to cart! Get ready to cook.');
                    }}
                    className="bg-white hover:bg-[#E63946] hover:text-white text-[#E63946] p-3 rounded-xl border border-[#E63946] transition-all flex items-center gap-2 font-bold text-xs"
                  >
                    <Plus size={16} /> Shop Ingredient
                  </button>
                </div>
              </div>

              <button className="mt-8 flex items-center gap-2 text-sm font-bold text-[#1D3557] hover:gap-4 transition-all group/btn">
                View Full Recipe <ArrowRight size={18} className="text-[#E63946]" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Blog/Content Section Preview */}
      <div className="mt-24 border-t border-gray-100 pt-16">
        <h2 className="text-2xl font-bold text-[#1D3557] mb-8">From the Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'The Science of Dry-Aging', cat: 'NUTRITION' },
            { title: 'Why Cold Chain Delivery Matters', cat: 'QUALITY' },
            { title: 'Essential Seafood Seasonings', cat: 'COOKING' }
          ].map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="h-48 bg-gray-200 rounded-2xl mb-4 overflow-hidden">
                <div className="w-full h-full bg-gray-300 group-hover:scale-110 transition-transform duration-500"></div>
              </div>
              <p className="text-[10px] font-black text-[#2A9D8F] tracking-widest mb-2 uppercase">{post.cat}</p>
              <h3 className="text-lg font-bold text-[#1D3557] group-hover:text-[#E63946] transition">{post.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
