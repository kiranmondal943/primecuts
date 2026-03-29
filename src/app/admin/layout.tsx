"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, ShoppingCart, Box, Users, BarChart3, Settings, Bell, LogOut } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('isAdminAuthenticated');
    if (auth !== 'true') {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    router.push('/admin/login');
  };

  if (!isAuthenticated) return null; // Prevents "flashing" the dashboard before redirect

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-[#1D3557] text-white hidden lg:flex flex-col sticky top-0 h-screen shadow-2xl">
        <div className="p-8 border-b border-white/5">
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
              className={`flex items-center gap-3 p-4 rounded-xl text-sm font-bold transition-all ${item.active ? 'bg-[#E63946] text-white shadow-lg' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
            >
              <item.icon size={18} /> {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5">
          <button onClick={handleLogout} className="flex items-center gap-3 text-white/40 hover:text-[#E63946] transition text-sm font-bold w-full">
            <LogOut size={18} /> Log Out System
          </button>
        </div>
      </aside>

      {/* Admin Main Content */}
      <main className="flex-grow flex flex-col">
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8">
          <h2 className="font-black text-[#1D3557] text-lg uppercase tracking-widest">Dashboard Overview</h2>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-[#2A9D8F] text-white flex items-center justify-center font-bold text-xs">A</div>
              <p className="text-[10px] font-black text-[#1D3557] uppercase">Store Admin</p>
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
