import './globals.css';
import Link from 'next/link';
import { ShoppingBag, User, Menu, Search, MapPin } from 'lucide-react';

export const metadata = {
  title: 'PrimeCuts | Premium Fresh Meat & Seafood',
  description: '100% Traceable, freshly cut meat delivered in 90 minutes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#F8F9FA] text-[#1D3557] font-sans antialiased">
        {/* Topbar: Delivery Location & Offers */}
        <div className="bg-[#1D3557] text-white text-xs py-2 px-4 flex justify-between items-center hidden sm:flex">
          <div className="flex items-center gap-2 max-w-7xl mx-auto w-full px-4">
            <MapPin size={14} className="text-[#E63946]" />
            <span>Delivering to: <span className="font-bold cursor-pointer hover:text-[#E63946]">Select Location</span></span>
            <span className="ml-auto bg-[#E63946] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Use code PRIME20 for 20% off</span>
          </div>
        </div>

        {/* Main Sticky Navbar */}
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
            
            {/* Logo & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button className="lg:hidden text-[#1D3557] hover:text-[#E63946] transition">
                <Menu size={24} />
              </button>
              <Link href="/" className="text-2xl font-extrabold tracking-tight text-[#E63946]">
                Prime<span className="text-[#1D3557]">Cuts</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 text-sm font-semibold text-[#1D3557]">
              <Link href="#" className="hover:text-[#E63946] transition">Chicken</Link>
              <Link href="#" className="hover:text-[#E63946] transition">Meat</Link>
              <Link href="#" className="hover:text-[#E63946] transition">Seafood</Link>
              <Link href="#" className="hover:text-[#E63946] transition">Ready-to-cook</Link>
              <Link href="#" className="text-[#E63946] hover:text-red-700 transition">Offers</Link>
              <Link href="#" className="hover:text-[#E63946] transition">Recipes</Link>
              <Link href="#" className="hover:text-[#E63946] transition">Subscriptions</Link>
            </div>

            {/* Actions: Search, Account, Cart */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button className="hidden sm:block text-[#1D3557] hover:text-[#E63946] transition">
                <Search size={20} />
              </button>
              <button className="text-[#1D3557] hover:text-[#E63946] transition flex items-center gap-1">
                <User size={20} />
                <span className="hidden sm:inline text-sm font-medium">Log In</span>
              </button>
              <button className="relative text-[#1D3557] hover:text-[#E63946] transition bg-gray-50 p-2 rounded-full">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-[#E63946] text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">0</span>
              </button>
            </div>
          </div>
        </nav>

        <main className="min-h-screen">{children}</main>

        {/* Simple Footer */}
        <footer className="bg-[#1D3557] text-white py-12 mt-12 text-center text-sm">
          <p>© 2024 PrimeCuts. Premium Fresh Meat & Seafood. Fully Traceable.</p>
        </footer>
      </body>
    </html>
  );
}
