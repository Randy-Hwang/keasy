import missions from '../missions.json';

import { Beverage, Coffee, Dessert, Juice, Tea } from '@/types/Beverage';
import create from 'zustand';

type TaskStore = {
  task: {
    mission: string;
    result: Beverage | string;
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
    if (!['coffee', 'juice', 'tea', 'dessert'].includes(mission.result.type)) {
      return;
    }

    if (mission.result.type === 'coffee') {
      set({
        task: {
          mission: mission.mission,
          result: mission.result as unknown as Coffee,
        },
      });

      return;
    }

    if (mission.result.type === 'juice') {
      set({
        task: {
          mission: mission.mission,
          result: mission.result as unknown as Juice,
        },
      });

      return;
    }

    if (mission.result.type === 'tea') {
      set({
        task: {
          mission: mission.mission,
          result: mission.result as unknown as Tea,
        },
      });

      return;
    }

    if (mission.result.type === 'dessert') {
      set({
        task: {
          mission: mission.mission,
          result: mission.result as unknown as Dessert,
        },
      });

      return;
    }
  },
  clear: () => {
    set({
      task: null,
    });
  },
}));

export default useTaskStore;
