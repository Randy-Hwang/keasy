import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import {
  Amount,
  CoffeeSweetness,
  IceAmount,
  ShotAmount,
  Size,
  Temperature,
} from '../../states/cafeOptions';

const CafeMenu = () => {
  const [clickedTab, setClickedTab] = useState('recommend');
  const { coffeeSweetness } = CoffeeSweetness();
  const { temperature } = Temperature();
  const { shotAmount } = ShotAmount();
  const { iceAmount } = IceAmount();
  const { amount } = Amount();
  const { size } = Size();

  const coffeeOptions = {
    temperature,
    shotAmount,
    iceAmount,
    amount,
    size,
    coffeeSweetness,
  };

  const coffeeMenuList = [
    {
      name: '아메리카노',
      price: '4,100',
      img: '',
      options: coffeeOptions,
    },
    {
      name: '카페라떼',
      price: '5,000',
      img: '',
      options: coffeeOptions,
    },
    {
      name: '카푸치노',
      price: '5,000',
      img: '',
      options: coffeeOptions,
    },
    {
      name: '바닐라 라떼',
      price: '5,500',
      img: '',
      options: coffeeOptions,
    },
    {
      name: '카페 모카',
      price: '5,500',
      img: '',
      options: coffeeOptions,
    },
    {
      name: '카라멜 마끼아또',
      price: '5,500',
      img: '',
      options: coffeeOptions,
    },
    {
      name: '아인슈페너 블랙',
      price: '6,000',
      img: '',
      options: coffeeOptions,
    },
    {
      name: '아인슈페너 라떼',
      price: '7,000',
      img: '',
      options: coffeeOptions,
    },
    {
      name: '콜드 브루',
      price: '5,000',
      img: '',
      options: coffeeOptions,
    },
    {
      name: '콜드 브루 라떼',
      price: '5,500',
      img: '',
      options: coffeeOptions,
    },
    {
      name: '아포가토',
      price: '5,500',
      img: '',
      options: coffeeOptions,
    },
  ];
  const juiceMenuList = [
    {
      name: '딸기 주스',
      price: '6,000',
      img: '',
      options: {},
    },
    {
      name: '토마토 주스',
      price: '6,000',
      img: '',
      options: {},
    },
    {
      name: '포도 주스',
      price: '6,000',
      img: '',
      options: {},
    },
    {
      name: '믹스베리 스무디',
      price: '6,500',
      img: '',
      options: {},
    },
    {
      name: '블루베리 스무디',
      price: '6,500',
      img: '',
      options: {},
    },
    {
      name: '망고 스무디',
      price: '6,000',
      img: '',
      options: {},
    },
    {
      name: '체리 스무디',
      price: '6,000',
      img: '',
      options: {},
    },
    {
      name: '요거트 스무디',
      price: '6,500',
      img: '',
      options: {},
    },
    {
      name: '초코 스무디',
      price: '6,500',
      img: '',
      options: {},
    },
  ];
  const teaMenuList = [
    {
      name: '녹차 (그린티)',
      price: '6,000',
      img: '',
      options: {},
    },
    {
      name: '홍차 (얼그레이 티)',
      price: '6,000',
      img: '',
      options: {},
    },
    {
      name: '캐모마일 티',
      price: '6,000',
      img: '',
      options: {},
    },
    {
      name: '페퍼민트 티',
      price: '6,500',
      img: '',
      options: {},
    },
    {
      name: '레몬티',
      price: '6,500',
      img: '',
      options: {},
    },
    {
      name: '얼그레이 레몬티',
      price: '6,500',
      img: '',
      options: {},
    },
  ];
  const adeMenuList = [
    {
      name: '레몬 에이드',
      price: '6,000',
      img: '',
      options: {},
    },
    {
      name: '체리 에이드',
      price: '6,500',
      img: '',
      options: {},
    },
  ];
  const breadMenuList = [
    {
      name: '치즈케이크',
      price: '6,000',
      img: '',
      options: {},
    },
    {
      name: '베리 와플',
      price: '6,500',
      img: '',
      options: {},
    },
  ];
  const recommendMenuList = [
    coffeeMenuList[0],
    breadMenuList[1],
    coffeeMenuList[1],
  ];
  const popularMenuList = [teaMenuList[5], breadMenuList[0], juiceMenuList[6]];

  const renderClickedTab = (clickedTab: string) => {
    switch (clickedTab) {
      case 'recommend':
        return recommendMenuList;
      case 'popular':
        return popularMenuList;
      case 'coffee':
        return coffeeMenuList;
      case 'tea':
        return teaMenuList;
      case 'juice':
        return juiceMenuList;
      case 'ade':
        return adeMenuList;
      case 'bread':
        return breadMenuList;
    }
  };

  return (
    <>
      <Box position="absolute" top={400}>
        <Button
          onClick={() => {
            setClickedTab('recommend');
          }}
        >
          추천
        </Button>
        <Button
          onClick={() => {
            setClickedTab('popular');
          }}
        >
          인기
        </Button>
        <Button
          onClick={() => {
            setClickedTab('coffee');
          }}
        >
          커피
        </Button>
        <Button
          onClick={() => {
            setClickedTab('juice');
          }}
        >
          주스/스무디
        </Button>
        <Button
          onClick={() => {
            setClickedTab('tea');
          }}
        >
          티
        </Button>
        <Button
          onClick={() => {
            setClickedTab('ade');
          }}
        >
          에이드
        </Button>
        <Button
          onClick={() => {
            setClickedTab('bread');
          }}
        >
          빵/디저트
        </Button>
      </Box>
      {/* 6개만 렌더. 좌우 화살표 구현 필요 */}
      {renderClickedTab(clickedTab)!.map((menu, idx) => (
        <>
          <Button
            key={idx}
            onClick={() => {
              /* option window 생성 */
            }}
          >
            {/* menu.img render 필요 */}
            {menu.name} : {menu.price}
          </Button>
        </>
      ))}
      {}
    </>
  );
};

export default CafeMenu;
