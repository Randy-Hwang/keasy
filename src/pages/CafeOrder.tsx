import useTaskStore from '@/stores/taskStore';
import { Beverage } from '@/types/Beverage';
import { Food } from '@/types/Food';
import { useLocation, useNavigate } from 'react-router-dom';
import dataFile from '../data.json';
import CoffeeOrderPage from './orders/CoffeeOrder';
import DessertOrderPage from './orders/DessertOrder';
import JuiceOrderPage from './orders/JuiceOrder';
import TeaOrderPage from './orders/TeaOrder';

type IndexType = 'ade' | 'coffee' | 'dessert' | 'juice' | 'tea';
export type InternalOrderPageProps = {
  data: { name: string; price: number; temperature: string };
  target: (Beverage | Food) & { amount: number };
};

// 1. 라우터에서 받아온 쿼리 (type & name nullable => null assertion?): 사용자가 선택한 음료 => target
// 2. taskStore에서 받아온 task: 미션들 ({mission, result[]})
// 3. data에서 받아온 정보: 미션에서 확인한 정보
// 보통 1 === 2 === 3임 (여기 들어올 때 확인함)
const CafeOrderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryRawData =
    location.search.length === 0 ? [] : location.search.substring(1).split('&');

  const queryData: { [key: string]: string } = {};
  for (const query of queryRawData) {
    const [key, value] = query.split('=');
    queryData[key] = value;
  }

  const name = decodeURI(queryData.name);
  const type = location.pathname.split('/').pop();

  // Hook must be called always
  const { task } = useTaskStore();

  if (!name || !type) {
    navigate('/home');
    return null;
  }

  // Find one target by name and type
  const data = dataFile['cafe'][type as IndexType].find(
    (item) => item.name === name
  );

  const target = task?.result.find((t) => t.name === name && t.type === type);

  if (!target || !data) {
    navigate('/home');
    return null;
  }

  if (type === 'coffee') {
    if (data.temperature === 'none') {
      return <DessertOrderPage data={data} target={target} />;
    } else {
      return <CoffeeOrderPage data={data} target={target} />;
    }
  }

  if (type === 'juice') {
    return <JuiceOrderPage data={data} target={target} />;
  }

  if (type === 'tea') {
    return <TeaOrderPage data={data} target={target} />;
  }

  if (type === 'dessert') {
    return <DessertOrderPage data={data} target={target} />;
  }

  return null;
};

export default CafeOrderPage;
