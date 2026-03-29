"use client";
import { Package, MapPin, Heart, CreditCard, LogOut, ChevronRight, Repeat } from 'lucide-react';
import Link from 'next/link';

export default function AccountPage() {
  const user = { name: 'John Doe', email: 'john@example.com', memberSince: '2024' };
  
  const recentOrders = [
    { id: 'PC-882910', date: 'March 29, 2026', total: '$23.49', status: 'Delivered' },
    { id: 'PC-771245', date: 'March 15, 2026', total: '$45.10', status: 'Delivered' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        
        {/* SIDEBAR NAVIGATION */}
        <div className="lg:col-span-1 space-y-2">
          <div className="p-6 bg-[#1D3557] rounded-3xl text-white mb-8">
            <p className="text-xs font-bold opacity-60 uppercase tracking-widest mb-1">Welcome back</p>
            <h2 className="text-2xl font-black">{user.name}</h2>
            <p className="text-[10px] opacity-60 mt-4">Member Since: {user.memberSince}</p>
          </div>

          <nav className="space-y-1">
            {[
              { label: 'Order History', icon: Package, active: true },
              { label: 'Address Book', icon: MapPin },
              { label: 'Favorites', icon: Heart },
              { label: 'Payments', icon: CreditCard },
              { label: 'Log Out', icon: LogOut, color: 'text-red-500' }
            ].map((item, i) => (
              <button key={i} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${item.active ? 'bg-white shadow-sm text-[#E63946]' : 'text-[#1D3557] hover:bg-white hover:shadow-sm'}`}>
                <div className={`flex items-center gap-3 font-bold text-sm ${item.color}`}>
                  <item.icon size={18} /> {item.label}
                </div>
                <ChevronRight size={16} className="opacity-30" />
              </button>
            ))}
          </nav>
        </div>

        {/* MAIN CONTENT: Order History */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-black text-[#1D3557] mb-8">Recent Orders</h2>
          
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 group">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#1D3557] group-hover:bg-[#E63946]/10 group-hover:text-[#E63946] transition-colors">
                    <Package size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-[#1D3557]">{order.id}</h3>
                    <p className="text-xs text-gray-400 font-medium">{order.date} • {order.total}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                   <Link href={`/order-success/${order.id}`} className="flex-grow text-center bg-gray-50 hover:bg-gray-100 text-[#1D3557] px-6 py-3 rounded-xl text-xs font-bold transition">
                    View Invoice
                  </Link>
                  <button onClick={() => alert('Order re-added to cart!')} className="flex-grow sm:flex-none bg-[#1D3557] hover:bg-[#E63946] text-white px-6 py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2">
                    <Repeat size={14} /> One-Click Reorder
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* EMPTY ADDRESS SECTION PREVIEW */}
          <div className="mt-12">
             <h2 className="text-2xl font-black text-[#1D3557] mb-8">My Addresses</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border-2 border-dashed border-gray-200 p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:border-[#E63946]/30 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 group-hover:text-[#E63946] transition-colors mb-4">
                    <MapPin size={24} />
                  </div>
                  <p className="text-sm font-bold text-gray-400">Add New Address</p>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
