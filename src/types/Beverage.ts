import { Food } from './Food';

export type Beverage = Coffee | Juice | Tea | Dessert;
export type Coffee = {
  type: 'coffee';
  name: string;
  size: 'small' | 'normal' | 'large';
  temperature: 'hot' | 'cold';
  ice: 'less' | 'normal' | 'more' | undefined;
  shot: 'normal' | 'less' | 'more';
  syrup: 'hazelnut' | 'none';
};

export type Juice = {
  type: 'juice';
  name: string;
  size: 'small' | 'normal' | 'large';
  sweetness: 'normal' | 'less' | 'more';
};

export type Tea = {
  type: 'tea';
  name: string;
  temperature: 'hot' | 'cold';
  size: 'small' | 'normal' | 'large';
  ice: 'less' | 'normal' | 'more' | undefined;
};

export type Dessert = {
  type: 'dessert';
  name: string;
};

export const SizeDescriptions = {
  small: '기본',
  normal: '중간',
  large: '크게',
};

export const SizeAdjectives = {
  small: '기본',
  normal: '중간',
  large: '큰',
};

export const TemperatureAdjectives = {
  hot: '뜨거운',
  cold: '차가운',
};

export const IceAmountDescriptions = {
  less: '적게',
  normal: '기본',
  more: '많이',
};

export const IceAmountAdjectives = {
  less: '적은',
  normal: '기본',
  more: '많은',
};

export const ShotAmountDescriptions = {
  less: '샷 연하게',
  normal: '기본',
  more: '샷 강하게',
};

export const ShotAmountAdjectives = {
  less: '연한',
  normal: '기본',
  more: '진한',
};

export const SyrupDescriptions = {
  hazelnut: '헤이즐넛 시럽 추가',
  none: '기본 시럽',
};

export const SyrupAdjectives = {
  hazelnut: '헤이즐넛 시럽이 들어간',
  none: '기본',
};

export const SweetnessDescriptions = {
  less: '덜 달게',
  normal: '기본 당도',
  more: '더 달게',
};

export const describeBeverage = (beverage: Beverage | Food) => {
  if (beverage.type === 'coffee' && beverage.temperature === 'hot') {
    return `${SizeAdjectives[beverage.size]} 사이즈 / ${
      ShotAmountAdjectives[beverage.shot]
    } 샷 / ${SyrupDescriptions[beverage.syrup]}`;
  }
  if (beverage.type === 'coffee' && beverage.temperature === 'cold') {
    return `${SizeAdjectives[beverage.size]} 사이즈 / ${
      IceAmountAdjectives[beverage.ice!]
    } 얼음양 / ${ShotAmountAdjectives[beverage.shot]} 샷 / ${
      SyrupDescriptions[beverage.syrup]
    }`;
  }
  if (beverage.type === 'juice') {
    return `${SizeAdjectives[beverage.size]} 사이즈 / ${
      SweetnessDescriptions[beverage.sweetness]
    }`;
  }
  if (beverage.type === 'tea' && beverage.temperature === 'hot') {
    return `${SizeAdjectives[beverage.size]} 사이즈`;
  }
  if (beverage.type === 'tea' && beverage.temperature === 'cold') {
    return `${SizeAdjectives[beverage.size]} 사이즈 / ${
      IceAmountAdjectives[beverage.ice!]
    } 얼음양`;
  }
};
