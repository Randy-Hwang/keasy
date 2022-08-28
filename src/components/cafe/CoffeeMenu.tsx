const CoffeeMenu = () => {
  const menuList = [
    {
      name: '아메리카노',
      price: '4,100',
      img: '',
      options: {},
    },
    {
      name: '카페라떼',
      price: '5,000',
      img: '',
      options: {},
    },
    {
      name: '카푸치노',
      price: '5,000',
      img: '',
      options: {},
    },
    {
      name: '바닐라 라떼',
      price: '5,500',
      img: '',
      options: {},
    },
    {
      name: '카페 모카',
      price: '5,500',
      img: '',
      options: {},
    },
  ];

  return (
    <div>
      <h1>Coffee</h1>
      {menuList.map((menu) => (
        <>
          <div>{menu.name}</div>
          <div>{menu.price}</div>
        </>
      ))}
    </div>
  );
};

export default CoffeeMenu;
