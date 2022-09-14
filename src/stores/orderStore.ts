import { Beverage } from '@/types/Beverage';
import create from 'zustand';

type OrderStore = {
  orders: { name: string; order: Beverage; amount: number }[];
  putOrder: (name: string, order: Beverage, amount: number) => void;
  deleteOrder: (index: number) => void;
};

const useOrderStore = create<OrderStore>((set) => ({
  orders: [],
  putOrder: (name, order, amount) => {
    set((state) => {
      const newOrder = [...state.orders];
      newOrder.push({ name, order, amount });
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
}));

export default useOrderStore;
