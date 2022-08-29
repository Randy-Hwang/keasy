// 커피가 가져야 할 state : temperature, amount, size, iceAmount(차가울때), shotAmount, sweetness
// 주스/스무디/에이드 : amount, size, sweetness
// 티 : temperature, amount, size, iceAmount(차가울때)
import create from 'zustand';

interface ITemperature {
  temperature: 'hot' | 'cold' | 'none';
  setTemperature: (temperature: 'hot' | 'cold' | 'none') => void;
}
export const Temperature = create<ITemperature>((set) => ({
  temperature: 'none',
  setTemperature: (temperature: 'hot' | 'cold' | 'none') =>
    set({ temperature: temperature }),
}));

interface IAmount {
  amount: number;
  setAmount: (amount: number) => void;
}
export const Amount = create<IAmount>((set) => ({
  amount: 0,
  setAmount: (amount: number) => set({ amount: amount }),
}));

interface ISize {
  size: 'small' | 'medium' | 'large';
  setSize: (size: 'small' | 'medium' | 'large') => void;
}
export const Size = create<ISize>((set) => ({
  size: 'small',
  setSize: (size: 'small' | 'medium' | 'large') => set({ size: size }),
}));

interface IIceAmount {
  iceAmount: 'less' | 'normal' | 'more';
  setIceAmount: (iceAmount: 'less' | 'normal' | 'more') => void;
}
export const IceAmount = create<IIceAmount>((set) => ({
  iceAmount: 'normal',
  setIceAmount: (iceAmount: 'less' | 'normal' | 'more') =>
    set({ iceAmount: iceAmount }),
}));

interface IShotAmount {
  shotAmount: 'normal' | 'less' | 'more';
  setShotAmount: (shotAmount: 'normal' | 'less' | 'more') => void;
}
export const ShotAmount = create<IShotAmount>((set) => ({
  shotAmount: 'normal',
  setShotAmount: (shotAmount: 'normal' | 'less' | 'more') =>
    set({ shotAmount: shotAmount }),
}));

interface ICoffeeSweetness {
  coffeeSweetness: 'hazelnut' | 'none' | 'cinnamon';
  setCoffeeSweetness: (sweetness: 'hazelnut' | 'none' | 'cinnamon') => void;
}
export const CoffeeSweetness = create<ICoffeeSweetness>((set) => ({
  coffeeSweetness: 'none',
  setCoffeeSweetness: (coffeeSweetness: 'hazelnut' | 'none' | 'cinnamon') =>
    set({ coffeeSweetness: coffeeSweetness }),
}));

interface ISweetness {
  sweetness: 'normal' | 'less' | 'cinnamon';
  setSweetness: (sweetness: 'normal' | 'less' | 'cinnamon') => void;
}
export const Sweetness = create<ISweetness>((set) => ({
  sweetness: 'normal',
  setSweetness: (sweetness: 'normal' | 'less' | 'cinnamon') =>
    set({ sweetness: sweetness }),
}));
