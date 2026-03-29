import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  basePrice: number;
  finalPrice: number;
  quantity: number;
  cutType: string;
  weight: string;
  image: string;
}

interface CartStore {
  items: CartItem[];
  lastOrder: CartItem[]; // NEW: Stores the items for the invoice
  addItem: (item: CartItem) => void;
  removeItem: (id: string, cutType: string) => void;
  clearCart: () => void;
  getTotal: () => number;
  getCartCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      lastOrder: [],
      addItem: (item) => set((state) => {
        const existingItemIndex = state.items.findIndex(
          (i) => i.id === item.id && i.cutType === item.cutType && i.weight === item.weight
        );
        if (existingItemIndex > -1) {
          const newItems = [...state.items];
          newItems[existingItemIndex].quantity += item.quantity;
          return { items: newItems };
        }
        return { items: [...state.items, item] };
      }),
      removeItem: (id, cutType) => set((state) => ({
        items: state.items.filter((i) => !(i.id === id && i.cutType === cutType))
      })),
      clearCart: () => set((state) => ({ 
        lastOrder: [...state.items], // Save items to lastOrder BEFORE clearing
        items: [] 
      })),
      getTotal: () => get().items.reduce((total, item) => total + (item.finalPrice * item.quantity), 0),
      getCartCount: () => get().items.reduce((count, item) => count + item.quantity, 0)
    }),
    { name: 'primecuts-cart' }
  )
);
