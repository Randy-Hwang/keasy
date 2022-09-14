import missions from '../missions.json';

import { Beverage } from '@/types/Beverage';
import create from 'zustand';

type TaskStore = {
  task: {
    mission: string;
    result: (Beverage & { amount: number })[];
  } | null;
  level: number;
  setTask: (type: 'cafe' | 'foodcourt', level: number) => void;
  setLevel: (level: number) => void;
  clear: () => void;
};

const randRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const useTaskStore = create<TaskStore>((set) => ({
  task: null,
  level: 0,
  setLevel: (level) => set({ level }),
  setTask: (type: 'cafe' | 'foodcourt', level: number) => {
    const selection = randRange(0, missions[type][level - 1].length - 1);

    const mission = missions[type][level - 1][selection];
    set({
      task: {
        mission: mission.mission,
        result: mission.result as (Beverage & { amount: number })[],
      },
    });
  },
  clear: () => {
    set({
      task: null,
    });
  },
}));

export default useTaskStore;
