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
  addItem: (item: CartItem) => void;
  removeItem: (id: string, cutType: string) => void;
  getTotal: () => number;
  getCartCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => set((state) => {
        // Check if exact same product with same cut and weight is in cart
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

      getTotal: () => {
        return get().items.reduce((total, item) => total + (item.finalPrice * item.quantity), 0);
      },

      getCartCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      }
    }),
    { name: 'primecuts-cart' } // Saves to local storage
  )
);
