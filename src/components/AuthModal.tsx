"use client";
import { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1D3557]/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-[#E63946]">
          <X size={20} />
        </button>

        <div className="p-8 sm:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#1D3557] mb-2">
              {isLogin ? 'Welcome Back' : 'Join PrimeCuts'}
            </h2>
            <p className="text-sm text-gray-500 font-medium">
              {isLogin ? 'Fresh cuts are just a login away.' : 'Sign up for 100% traceable freshness.'}
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E63946]/20 focus:border-[#E63946] transition-all" />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="email" placeholder="Email Address" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E63946]/20 focus:border-[#E63946] transition-all" />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="password" placeholder="Password" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E63946]/20 focus:border-[#E63946] transition-all" />
            </div>
          </div>

          <button onClick={() => window.location.href = '/account'} className="w-full mt-8 bg-[#E63946] hover:bg-red-700 text-white py-4 rounded-2xl font-bold shadow-lg shadow-[#E63946]/20 transition-all transform active:scale-95 flex items-center justify-center gap-2">
            {isLogin ? 'Log In' : 'Create Account'} <ArrowRight size={18} />
          </button>

          <div className="mt-8 text-center">
            <button onClick={() => setIsLogin(!isLogin)} className="text-xs font-bold text-[#1D3557] hover:text-[#E63946] transition-colors uppercase tracking-widest">
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
            </button>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-[10px] font-bold text-[#2A9D8F] uppercase tracking-tighter">
            <ShieldCheck size={14} />
            Secure & Encrypted 256-bit Connection
          </div>
        </div>
      </div>
    </div>
  );
}
