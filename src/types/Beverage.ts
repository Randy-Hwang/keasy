export type Beverage = Coffee | Juice | Tea;
export type Coffee = {
  type: 'coffee';
  temperature: 'hot' | 'cold';
  size: 'small' | 'normal' | 'large';
  iceAmount: 'less' | 'normal' | 'more' | undefined;
  shotAmount: 'normal' | 'less' | 'more';
  syrup: 'hazelnut' | 'none';
};

export type Juice = {
  type: 'juice';
  size: 'small' | 'normal' | 'large';
  sweetness: 'normal' | 'less' | 'more';
};

export type Tea = {
  type: 'tea';
  temperature: 'hot' | 'cold';
  size: 'small' | 'normal' | 'large';
  iceAmount: 'less' | 'normal' | 'more' | undefined;
};

export const SizeDescriptions = {
  small: '작게',
  normal: '기본',
  large: '크게',
};

export const SizeAdjectives = {
  small: '작은',
  normal: '기본',
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
  hazelnut: '헤이즐넛 시럽 추가 +500원',
  none: '기본',
};

export const SyrupAdjectives = {
  hazelnut: '헤이즐넛 시럽이 들어간',
  none: '기본',
};

export const describeBeverage = (beverage: Beverage) => {
  if (beverage.type === 'coffee') {
  }
};
