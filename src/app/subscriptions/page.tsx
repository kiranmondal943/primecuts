"use client";
import { useState } from 'react';
import { Calendar, Zap, Users, Trophy, Check, ArrowRight, Star } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

export default function SubscriptionsPage() {
  const [billingCycle, setBillingCycle] = useState<'weekly' | 'monthly'>('weekly');
  const addToCart = useCartStore((state) => state.addItem);

  const plans = [
    {
      id: 'sub_starter',
      name: 'Solo/Couple Starter',
      description: 'Ideal for 1-2 people. Essential fresh cuts delivered every week.',
      price: billingCycle === 'weekly' ? 29.99 : 109.99,
      icon: Calendar,
      features: ['2kg Fresh Chicken', '1kg Seafood/Fish', 'Free Delivery', 'Priority Slot'],
      color: 'bg-blue-50 text-blue-600',
      badge: null
    },
    {
      id: 'sub_family',
      name: 'Prime Family Pack',
      description: 'Our most popular pack. Specialized for a family of 4-5.',
      price: billingCycle === 'weekly' ? 59.99 : 219.99,
      icon: Users,
      features: ['4kg Chicken & Meat', '2kg Seafood', '1kg Ready-to-cook', '10% Savings', 'Double Loyalty Points'],
      color: 'bg-[#E63946]/10 text-[#E63946]',
      badge: 'BEST VALUE'
    },
    {
      id: 'sub_protein',
      name: 'The Fitness Box',
      description: 'Ultra-lean cuts for high-protein dietary preferences.',
      price: billingCycle === 'weekly' ? 44.99 : 169.99,
      icon: Trophy,
      features: ['3kg Lean Chicken Breast', '1.5kg White Fish Fillets', 'Nutritional Tracking', 'Keto Friendly'],
      color: 'bg-[#2A9D8F]/10 text-[#2A9D8F]',
      badge: 'FITNESS CHOICE'
    }
  ];

  const handleSubscribe = (plan: any) => {
    addToCart({
      id: plan.id,
      name: `${plan.name} (${billingCycle})`,
      basePrice: plan.price,
      finalPrice: plan.price,
      quantity: 1,
      cutType: 'Subscription Box',
      weight: 'Custom Bundle',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=400'
    });
    alert(`Subscribed to ${plan.name}! Your first box is added to the cart.`);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-[#1D3557] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Never Run Out of <span className="text-[#E63946]">Freshness.</span></h1>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Save up to 15% with recurring orders. Custom-tailored family packs delivered on your schedule.
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex items-center bg-white/10 p-1 rounded-2xl backdrop-blur-sm border border-white/20">
            <button 
              onClick={() => setBillingCycle('weekly')}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${billingCycle === 'weekly' ? 'bg-[#E63946] text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
            >
              Weekly
            </button>
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-[#E63946] text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
            >
              Monthly
            </button>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 flex flex-col relative overflow-hidden group hover:border-[#E63946]/20 transition-all duration-500">
              {plan.badge && (
                <div className="absolute top-6 right-6 bg-[#E63946] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md z-10">
                  {plan.badge}
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-2xl ${plan.color} flex items-center justify-center mb-6`}>
                <plan.icon size={28} />
              </div>

              <h3 className="text-2xl font-black text-[#1D3557] mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-black text-[#1D3557]">${plan.price}</span>
                <span className="text-gray-400 font-bold ml-1">/{billingCycle === 'weekly' ? 'week' : 'mo'}</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-[#1D3557]">
                    <div className="bg-[#2A9D8F]/10 p-1 rounded-full"><Check className="text-[#2A9D8F]" size={14} /></div>
                    {feat}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleSubscribe(plan)}
                className="w-full bg-[#1D3557] hover:bg-[#E63946] text-white py-4 rounded-2xl font-black shadow-lg transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]"
              >
                Choose This Pack <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Loyalty Program Callout */}
        <div className="mt-20 bg-gray-50 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="max-w-xl text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-[#2A9D8F]">
                <Star className="fill-[#2A9D8F]" size={20} />
                <p className="text-sm font-black uppercase tracking-[0.2em]">PrimeCuts Rewards</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1D3557] mb-4">Every order earns you <span className="text-[#2A9D8F]">Loyalty Points</span></h2>
              <p className="text-gray-500 font-medium">Earn 1 point for every $1 spent. Redeem for free cuts, exclusive farm visits, and VIP priority delivery.</p>
           </div>
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center min-w-[280px]">
              <p className="text-5xl font-black text-[#1D3557] mb-2">1,250</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Points to your next reward</p>
              <div className="w-full bg-gray-100 h-2 rounded-full mb-6">
                <div className="bg-[#2A9D8F] w-[65%] h-full rounded-full"></div>
              </div>
              <button className="text-[#E63946] font-bold text-sm hover:underline">View My Rewards</button>
           </div>
        </div>
      </section>
    </div>
  );
}
