"use client";
import { TrendingUp, Package, Users, DollarSign, Clock } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Revenue', value: '$12,840', trend: '+12%', icon: DollarSign, color: 'text-green-600 bg-green-50' },
    { label: 'Active Orders', value: '42', trend: '8 Pending', icon: Package, color: 'text-[#E63946] bg-red-50' },
    { label: 'Total Customers', value: '1,204', trend: '+48 this week', icon: Users, color: 'text-blue-600 bg-blue-50' },
    { label: 'Avg. Delivery Time', value: '82 min', trend: '-5 min', icon: Clock, color: 'text-orange-600 bg-orange-50' },
  ];

  return (
    <div className="space-y-10">
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className="text-[10px] font-black text-gray-400 uppercase">{stat.trend}</span>
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black text-[#1D3557]">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex justify-between items-center">
          <h3 className="font-black text-[#1D3557]">Recent Orders</h3>
          <button className="text-xs font-bold text-[#E63946] hover:underline uppercase tracking-widest">View All Orders</button>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
              <th className="px-8 py-4">Order ID</th>
              <th className="px-8 py-4">Customer</th>
              <th className="px-8 py-4">Amount</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[
              { id: 'PC-882910', name: 'John Doe', amount: '$23.49', status: 'Packing' },
              { id: 'PC-882911', name: 'Sarah Smith', amount: '$54.20', status: 'Shipped' },
              { id: 'PC-882912', name: 'Mike Ross', amount: '$12.99', status: 'Delivered' },
            ].map((order, i) => (
              <tr key={i} className="text-xs">
                <td className="px-8 py-6 font-bold text-[#1D3557]">{order.id}</td>
                <td className="px-8 py-6 text-gray-500 font-medium">{order.name}</td>
                <td className="px-8 py-6 font-bold text-[#1D3557]">{order.amount}</td>
                <td className="px-8 py-6">
                  <span className={`px-3 py-1 rounded-full font-black text-[9px] uppercase tracking-tighter ${
                    order.status === 'Packing' ? 'bg-orange-50 text-orange-600' :
                    order.status === 'Shipped' ? 'bg-blue-50 text-blue-600' :
                    'bg-green-50 text-green-600'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-8 py-6 text-right font-black text-[#E63946] cursor-pointer hover:underline">Update</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
