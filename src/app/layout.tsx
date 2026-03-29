import './globals.css';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { MapPin, Facebook, Instagram, Twitter, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'PrimeCuts | Premium Fresh Meat, Fish & Seafood Delivery',
  description: 'Order 100% traceable, antibiotic-free fresh meat and seafood. Custom cuts, hygienic packing, and 90-minute delivery.',
  keywords: 'fresh meat, seafood delivery, organic chicken, mutton, fish delivery, custom meat cuts, fresh salmon',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#F8F9FA] text-[#1D3557] font-sans antialiased flex flex-col min-h-screen">
        
        {/* TOPBAR */}
        <div className="bg-[#1D3557] text-white text-[10px] sm:text-xs py-2 px-4 sticky top-0 z-[60] border-b border-white/10">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#E63946]" />
              <span className="font-medium text-[10px] sm:text-xs">Delivering to: <span className="font-bold cursor-pointer hover:text-[#E63946] transition underline decoration-dotted">Select Location</span></span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span className="bg-[#E63946] px-2 py-0.5 rounded font-black uppercase tracking-widest shadow-sm animate-pulse-custom text-[10px]">PRIME20</span>
              <span className="font-bold text-[10px]">Use code for 20% OFF your first order!</span>
            </div>
          </div>
        </div>

        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        {/* FULL FOOTER MENU */}
        <footer className="bg-[#1D3557] text-white pt-16 pb-8 border-t border-white/5 print:hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16 text-left">
              
              <div className="col-span-2 lg:col-span-1 space-y-6">
                <Link href="/" className="text-3xl font-black text-[#E63946]">
                  Prime<span className="text-white">Cuts</span>
                </Link>
                <p className="text-[11px] text-white/50 leading-relaxed font-medium">
                  The highest standard of fresh meat, fish, and seafood. 100% traceable from source to your doorstep.
                </p>
                <div className="flex gap-4">
                  <Instagram size={18} className="text-white/60 hover:text-[#E63946] cursor-pointer" />
                  <Facebook size={18} className="text-white/60 hover:text-[#E63946] cursor-pointer" />
                  <Twitter size={18} className="text-white/60 hover:text-[#E63946] cursor-pointer" />
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-black text-[#2A9D8F] uppercase tracking-[0.2em] mb-6 text-left">Categories</h4>
                <ul className="space-y-3 text-xs font-bold text-white/70">
                  <li><Link href="/" className="hover:text-[#E63946]">Chicken</Link></li>
                  <li><Link href="/" className="hover:text-[#E63946]">Meat (Beef & Lamb)</Link></li>
                  <li><Link href="/" className="hover:text-[#E63946]">Fresh Fish</Link></li>
                  <li><Link href="/" className="hover:text-[#E63946]">Seafood</Link></li>
                  <li><Link href="/" className="hover:text-[#E63946]">Ready-to-Cook</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-black text-[#2A9D8F] uppercase tracking-[0.2em] mb-6 text-left">Quick Links</h4>
                <ul className="space-y-3 text-xs font-bold text-white/70">
                  <li><Link href="/" className="hover:text-[#E63946]">Offers & Deals</Link></li>
                  <li><Link href="/recipes" className="hover:text-[#E63946]">Interactive Recipes</Link></li>
                  <li><Link href="/subscriptions" className="hover:text-[#E63946]">Subscriptions</Link></li>
                  <li><Link href="/support" className="hover:text-[#E63946]">About Quality</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-black text-[#2A9D8F] uppercase tracking-[0.2em] mb-6 text-left">Support</h4>
                <ul className="space-y-3 text-xs font-bold text-white/70">
                  <li><Link href="/account" className="hover:text-[#E63946]">My Account</Link></li>
                  <li><Link href="/cart" className="hover:text-[#E63946]">Shopping Cart</Link></li>
                  <li><Link href="/support" className="hover:text-[#E63946]">Live Chat</Link></li>
                  <li><Link href="/support" className="hover:text-[#E63946]">Smart FAQ</Link></li>
                </ul>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                  <ShieldCheck className="text-[#2A9D8F] mb-3" size={32} />
                  <p className="text-[10px] font-bold text-white mb-2 uppercase">Quality Certified</p>
                  <p className="text-[9px] text-white/40 leading-relaxed italic text-left">
                    All PrimeCuts products are processed in ISO certified hygienic facilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold text-white/30 uppercase tracking-widest">
              <p>© 2024 PrimeCuts Application. All Rights Reserved.</p>
              <div className="flex gap-6">
                <span>Fast Performance</span>
                <span>Secure Payments</span>
                <span>Cold-Chain Logistics</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
