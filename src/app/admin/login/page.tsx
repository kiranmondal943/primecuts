"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, ArrowRight, ShieldAlert } from 'lucide-react';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // SECURE CREDENTIALS (Mock for now, would use Database/NextAuth in production)
    if (email === 'admin@primecuts.com' && password === 'admin123') {
      localStorage.setItem('isAdminAuthenticated', 'true');
      router.push('/admin');
    } else {
      setError('Invalid Administrative Credentials');
    }
  };

  return (
    <div className="min-h-screen bg-[#1D3557] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden p-10 md:p-14">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E63946]/10 rounded-2xl mb-6">
            <ShieldAlert className="text-[#E63946]" size={32} />
          </div>
          <h1 className="text-3xl font-black text-[#1D3557] mb-2">Admin Portal</h1>
          <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Authorized Access Only</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
            <input 
              type="email" 
              placeholder="Admin Email" 
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#E63946]/20 focus:border-[#E63946] outline-none transition-all font-medium"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
            <input 
              type="password" 
              placeholder="Security Password" 
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#E63946]/20 focus:border-[#E63946] outline-none transition-all font-medium"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-xs text-[#E63946] font-bold text-center mt-2">{error}</p>}

          <button type="submit" className="w-full bg-[#1D3557] hover:bg-[#E63946] text-white py-4 rounded-2xl font-black shadow-xl transition-all flex items-center justify-center gap-2 mt-8">
            Enter Dashboard <ArrowRight size={18} />
          </button>
        </form>

        <div className="mt-10 text-center border-t border-gray-100 pt-6">
          <button onClick={() => router.push('/')} className="text-[10px] font-black text-gray-400 hover:text-[#E63946] uppercase tracking-[0.2em] transition-colors">
            Return to Public Store
          </button>
        </div>
      </div>
    </div>
  );
}
