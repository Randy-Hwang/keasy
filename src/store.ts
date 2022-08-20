import create from 'zustand';

interface ITemperature {
  temperature: 'hot' | 'cold';
  setTemperatureCold: () => void;
  setTemperatureHot: () => void;
}

export const Temperature = create<ITemperature>((set) => ({
  temperature: 'hot',
  setTemperatureCold: () => set({ temperature: 'cold' }),
  setTemperatureHot: () => set({ temperature: 'hot' }),
}));
