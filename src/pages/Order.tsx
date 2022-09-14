import useTaskStore from '@/stores/taskStore';
import { useNavigate } from 'react-router-dom';
import beverageData from '../beverageData.json';
import CoffeeOrderPage from './orders/CoffeeOrder';
import DessertOrderPage from './orders/DessertOrder';
import JuiceOrderPage from './orders/JuiceOrder';
import TeaOrderPage from './orders/TeaOrder';

// 1. 라우터에서 받아온 쿼리: 사용자가 선택한 음료
// 2. taskStore에서 받아온 task: 미션
// 3. data에서 받아온 정보: 미션에서 확인한 정보
// 보통 1 === 2 === 3임 (여기 들어올 때 확인함)
const OrderPage = () => {
  const navigate = useNavigate();

  const queryRawData =
    location.search.length === 0 ? [] : location.search.substring(1).split('&');

  const queryData: { [key: string]: string } = {};
  for (const query of queryRawData) {
    const [key, value] = query.split('=');
    queryData[key] = value;
  }

  const { task } = useTaskStore();

  if (!task || typeof task.result === 'string' || !queryData['name']) {
    navigate('/home');
    return null;
  }

  const target = task.result;

  const data = beverageData[target.type].find(
    (item) => item.name === target.name
  );

  if (!data) {
    navigate('/home');
    return null;
  }

  if (target.type === 'coffee') {
    if (data.temperature === 'none') {
      return <DessertOrderPage />;
    } else {
      return <CoffeeOrderPage />;
    }
  }

  if (target.type === 'juice') {
    return <JuiceOrderPage />;
  }

  if (target.type === 'tea') {
    return <TeaOrderPage />;
  }

  if (target.type === 'dessert') {
    console.log('dessert');
    return <DessertOrderPage />;
  }

  return null;
};

export default OrderPage;
