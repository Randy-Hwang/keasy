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
  clickedLevel:
    localStorage.getItem('clickedLevel') !== null
      ? Number(localStorage.getItem('clickedLevel'))
      : 0,
  setClickedLevel: (clickedLevel: number) => {
    localStorage.setItem('clickedLevel', clickedLevel.toString());
    set({ clickedLevel: clickedLevel });
  },
}));

interface IclickedValue {
  clickedValue: string | null;
  setClickedValue: (clickedValue: string) => void;
}
export const ClickedValue = create<IclickedValue>((set) => ({
  clickedValue:
    localStorage.getItem('clickedValue') !== null
      ? localStorage.getItem('clickedValue')
      : '',
  setClickedValue: (clickedValue: string) => {
    localStorage.setItem('clickedValue', clickedValue);
    set({ clickedValue: clickedValue });
  },
}));
