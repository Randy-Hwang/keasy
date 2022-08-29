import { Button } from '@chakra-ui/react';
import {
  Amount,
  CoffeeSweetness,
  IceAmount,
  ShotAmount,
  Size,
  Temperature,
} from '../../states/cafeOptions';

const CoffeeMenu = () => {
  const { coffeeSweetness, setCoffeeSweetness } = CoffeeSweetness(
    (state) => state
  );
  const { temperature, setTemperature } = Temperature((state) => state);
  const { shotAmount, setShotAmount } = ShotAmount((state) => state);
  const { iceAmount, setIceAmount } = IceAmount((state) => state);
  const { amount, setAmount } = Amount((state) => state);
  const { size, setSize } = Size((state) => state);

  const coffeeOptions = { temperature, shotAmount, iceAmount, amount, size };

  const menuList = [
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
  ];

  console.log(menuList);

  return (
    <div>
      <h1>Coffee</h1>
      {menuList.map((menu, idx) => (
        <>
          <Button key={idx}>
            {menu.name} : {menu.price}
          </Button>
        </>
      ))}
    </div>
  );
};

export default CoffeeMenu;
