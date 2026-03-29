import './globals.css';
import { ShoppingBag, User, Menu } from 'lucide-react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primeRed">Prime<span className="text-primeDark">Cuts</span></h1>
            <div className="flex gap-4">
              <User className="text-primeDark" />
              <ShoppingBag className="text-primeDark" />
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
