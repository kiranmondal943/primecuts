"use client";
import Link from 'next/link';
import { LayoutDashboard, ShoppingCart, Box, Users, BarChart3, Settings, Bell } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-[#1D3557] text-white hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="p-8 border-b border-white/10">
          <p className="text-[10px] font-black text-[#2A9D8F] tracking-[0.3em] uppercase mb-1">Business Hub</p>
          <h1 className="text-xl font-black">Prime<span className="text-[#E63946]">Cuts</span> Admin</h1>
        </div>
        
        <nav className="flex-grow p-6 space-y-2">
          {[
            { label: 'Overview', icon: LayoutDashboard, active: true, href: '/admin' },
            { label: 'Orders', icon: ShoppingCart, href: '#' },
            { label: 'Inventory', icon: Box, href: '#' },
            { label: 'Customers', icon: Users, href: '#' },
            { label: 'Analytics', icon: BarChart3, href: '#' },
          ].map((item, i) => (
            <Link 
              key={i} 
              href={item.href} 
              className={`flex items-center gap-3 p-4 rounded-xl text-sm font-bold transition-all ${item.active ? 'bg-[#E63946] text-white shadow-lg' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
            >
              <item.icon size={18} /> {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-white/10">
          <button className="flex items-center gap-3 text-white/40 hover:text-white transition text-sm font-bold">
            <Settings size={18} /> Settings
          </button>
        </div>
      </aside>

      {/* Admin Main Content */}
      <main className="flex-grow flex flex-col">
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8">
          <h2 className="font-black text-[#1D3557] text-lg uppercase tracking-widest">Dashboard Overview</h2>
          <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-[#E63946] transition">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#E63946] rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2A9D8F]/10 text-[#2A9D8F] flex items-center justify-center font-bold">A</div>
              <p className="text-xs font-bold text-[#1D3557]">Store Admin</p>
            </div>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
