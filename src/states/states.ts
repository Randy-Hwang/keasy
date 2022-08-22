import create from 'zustand';

interface IClicked {
  isClicked: boolean;
  setIsClicked: (isClicked: boolean) => void;
}
export const Clicked = create<IClicked>((set) => ({
  isClicked: false,
  setIsClicked: (isClicked) => set({ isClicked: !isClicked }),
}));

interface IclickedLevel {
  clickedLevel: number;
  setClickedLevel: (clickedLevel: number) => void;
}
export const ClickedLevel = create<IclickedLevel>((set) => ({
  clickedLevel: 0,
  setClickedLevel: (clickedLevel: number) =>
    set({ clickedLevel: clickedLevel }),
}));

interface IclickedValue {
  clickedValue: string;
  setClickedValue: (clickedValue: string) => void;
}
export const ClickedValue = create<IclickedValue>((set) => ({
  clickedValue: '',
  setClickedValue: (clickedValue: string) =>
    set({ clickedValue: clickedValue }),
}));
