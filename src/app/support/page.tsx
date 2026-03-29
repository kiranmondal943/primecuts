"use client";
import { useState } from 'react';
import { Search, MessageCircle, Truck, RefreshCcw, ShieldCheck, ChevronDown, Phone, Mail } from 'lucide-react';

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "How do you ensure meat freshness?", a: "We maintain a strict 0-4°C cold chain from farm to fork. Our meat is never frozen and is vacuum-packed in medical-grade facilities.", icon: ShieldCheck },
    { q: "What is your delivery time?", a: "We deliver within 90 minutes for express orders. You can also schedule delivery slots that fit your daily routine.", icon: Truck },
    { q: "Can I customize the way my meat is cut?", a: "Yes! Every product page allows you to choose between Cubes, Steaks, Fillets, or Whole cuts at no extra cost.", icon: RefreshCcw }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-[#1D3557] mb-4">How can we <span className="text-[#E63946]">help?</span></h1>
        <p className="text-gray-500 font-medium">Search our knowledge base or chat with our freshness experts.</p>
      </div>

      {/* Action Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          { title: 'Chat Live', icon: MessageCircle, desc: 'Average response: 2 mins', color: 'bg-green-50 text-green-600' },
          { title: 'Call Us', icon: Phone, desc: 'Available 8am - 10pm', color: 'bg-blue-50 text-blue-600' },
          { title: 'Email Support', icon: Mail, desc: '24 hour response time', color: 'bg-[#E63946]/10 text-[#E63946]' }
        ].map((box, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer text-center group">
            <div className={`w-14 h-14 rounded-2xl ${box.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition`}>
              <box.icon size={28} />
            </div>
            <h3 className="font-black text-[#1D3557] mb-1">{box.title}</h3>
            <p className="text-xs text-gray-400 font-medium">{box.desc}</p>
          </div>
        ))}
      </div>

      {/* Smart FAQ Section */}
      <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-black text-[#1D3557] mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-50 last:border-0 pb-4">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-[#E63946]/10 transition">
                    <faq.icon size={20} className="text-[#1D3557] group-hover:text-[#E63946]" />
                  </div>
                  <span className="font-bold text-[#1D3557]">{faq.q}</span>
                </div>
                <ChevronDown className={`text-gray-300 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <div className="px-14 pb-4 animate-in slide-in-from-top-2">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
