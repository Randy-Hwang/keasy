import { Beverage } from '@/types/Beverage';
import { Food } from '@/types/Food';
import create from 'zustand';

type OrderStore = {
  orders: { order: Beverage | Food; amount: number }[];
  putOrder: (order: Beverage | Food, amount: number) => void;
  deleteOrder: (index: number) => void;
  clearOrder: () => void;
};

const useOrderStore = create<OrderStore>((set) => ({
  orders: [],
  putOrder: (order, amount) => {
    set((state) => {
      const newOrder = [...state.orders];
      newOrder.push({ order, amount });
      return { orders: newOrder };
    });
  },
  deleteOrder: (index) => {
    set((state) => {
      const ordersData = [...state.orders];

      ordersData.splice(index, 1);

      return { orders: ordersData };
    });
  },
  clearOrder: () => {
    set({ orders: [] });
  },
}));

export default useOrderStore;
