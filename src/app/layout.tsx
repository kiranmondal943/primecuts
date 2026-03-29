import './globals.css';
import Navbar from '@/components/Navbar';
import { MapPin } from 'lucide-react';

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
            <span className="ml-auto bg-[#E63946] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm">Use code PRIME20 for 20% off</span>
          </div>
        </div>

        {/* Dynamic Client Navbar */}
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <footer className="bg-[#1D3557] text-white py-12 mt-12 text-center text-sm">
          <p>© 2024 PrimeCuts. Premium Fresh Meat & Seafood. Fully Traceable.</p>
        </footer>
      </body>
    </html>
  );
}
