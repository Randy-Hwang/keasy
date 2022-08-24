// 커피가 가져야 할 state : temperature, amount, size, iceAmount(차가울때), shotAmount, sweetness
// 주스/스무디/에이드 : amount, size, sweetness
// 티 : temperature, amount, size, iceAmount(차가울때)
import create from 'zustand/react';

interface ITemperature {
  temperature: 'hot' | 'cold' | 'none';
  setTemperature: (temperature: 'hot' | 'cold' | 'none') => void;
}
export const temperature = create<ITemperature>((set) => ({
  temperature: 'none',
  setTemperature: (temperature: 'hot' | 'cold' | 'none') =>
    set({ temperature: temperature }),
}));
