import MissionHeader from '@/components/MissionHeader';
import AdePanel from '@/panels/AdePanel';
import CoffeePanel from '@/panels/CoffeePanel';
import DessertPanel from '@/panels/DessertPanel';
import JuicePanel from '@/panels/JuicePanel';
import SuggestPanel from '@/panels/SuggestPanel';
import TeaPanel from '@/panels/TeaPanel';
import TrendPanel from '@/panels/TrendPanel';
import useOrderStore from '@/stores/orderStore';
import useTaskStore from '@/stores/taskStore';
import { Beverage, describeBeverage } from '@/types/Beverage';
import { ChevronRightIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Tab,
  TabList,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import beverageData from '../beverageData.json';
import HeaderWhite from '../components/HeaderWhite';
import Wrapper from '../components/Wrapper';

const Cafe = () => {
  const navigate = useNavigate();

  const [selection, setSelection] = useState(0);

  const { task, setTask, level } = useTaskStore();

  if (!task) {
    setTask('cafe', level);
  }

  console.log(task);

  const { orders, deleteOrder } = useOrderStore();

  if (!task) {
    navigate('/home');
    return null;
  }

  let CurrentPanel: React.ReactNode;
  switch (selection) {
    case 0:
      CurrentPanel = (
        <SuggestPanel
          target={task.result as Beverage}
          data={beverageData['suggest']}
        />
      );
      break;
    case 1:
      CurrentPanel = (
        <TrendPanel
          target={task.result as Beverage}
          data={beverageData['trend']}
        />
      );
      break;
    case 2:
      CurrentPanel = (
        <CoffeePanel
          target={task.result as Beverage}
          data={beverageData['coffee']}
        />
      );
      break;
    case 3:
      CurrentPanel = (
        <JuicePanel
          target={task.result as Beverage}
          data={beverageData['juice']}
        />
      );
      break;
    case 4:
      CurrentPanel = (
        <TeaPanel target={task.result as Beverage} data={beverageData['tea']} />
      );
      break;
    case 5:
      CurrentPanel = (
        <AdePanel target={task.result as Beverage} data={beverageData['ade']} />
      );
      break;
    case 6:
      CurrentPanel = (
        <DessertPanel
          target={task.result as Beverage}
          data={beverageData['dessert']}
        />
      );
      break;
  }

  return (
    <Wrapper grid={12}>
      <HeaderWhite />
      <MissionHeader start={101} level={level} />
      <GridItem
        as={Center}
        colStart={1}
        colSpan={12}
        rowStart={231}
        rowSpan={88}
        shadow="menu"
      >
        <Tabs index={selection} onChange={(index) => setSelection(index)}>
          <TabList color="main" border="none">
            <Tab>추천</Tab>
            <Tab>인기</Tab>
            <Tab>커피</Tab>
            <Tab>주스/스무디</Tab>
            <Tab>티</Tab>
            <Tab>에이드</Tab>
            <Tab>빵/디저트</Tab>
          </TabList>
        </Tabs>
      </GridItem>
      {CurrentPanel}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="420px"
        bgColor="main"
      >
        <Grid
          templateColumns={`repeat(12, 1fr)`}
          templateRows={`repeat(auto-fill, 1px)`}
          px="12px"
          py="32px"
          columnGap="24px"
          w="100%"
          h="100%"
        >
          <GridItem colStart={2} colSpan={10} rowStart={1} rowSpan={36}>
            <Text
              fontSize="30px"
              fontWeight={600}
              lineHeight="36px"
              color="white"
            >
              주문 내역
            </Text>
          </GridItem>
          <GridItem
            as={Flex}
            alignItems="center"
            colStart={2}
            colSpan={10}
            rowStart={61}
            rowSpan={58}
            bgColor="white"
            rounded="6px"
            p="16px"
          >
            <Text w="144px" fontWeight={600}>
              {orders.length >= 1 ? orders[0].name : ''}
            </Text>
            <Text flexGrow={1}>
              {orders.length >= 1 ? describeBeverage(orders[0].order) : ''}
            </Text>
            {orders.length >= 1 && <CloseIcon onClick={() => deleteOrder(0)} />}
          </GridItem>
          <GridItem
            as={Flex}
            alignItems="center"
            colStart={2}
            colSpan={10}
            rowStart={141}
            rowSpan={58}
            bgColor="white"
            rounded="6px"
            p="16px"
          >
            <Text w="144px" fontWeight={600}>
              {orders.length >= 2 ? orders[1].name : ''}
            </Text>
            <Text flexGrow={1}>
              {orders.length >= 2 ? describeBeverage(orders[1].order) : ''}
            </Text>
            {orders.length >= 2 && <CloseIcon onClick={() => deleteOrder(1)} />}
          </GridItem>
          <GridItem
            as={Flex}
            alignItems="center"
            colStart={2}
            colSpan={10}
            rowStart={221}
            rowSpan={58}
            bgColor="white"
            rounded="6px"
            p="16px"
          >
            <Text w="144px" fontWeight={600}>
              {orders.length >= 3 ? orders[2].name : ''}
            </Text>
            <Text flexGrow={1}>
              {orders.length >= 3 ? describeBeverage(orders[2].order) : ''}
            </Text>
            {orders.length >= 3 && <CloseIcon onClick={() => deleteOrder(2)} />}
          </GridItem>
          <GridItem
            as={Flex}
            justifyContent="center"
            alignItems="center"
            colStart={10}
            colSpan={2}
            rowStart={311}
            rowSpan={40}
            bgColor="white"
            rounded="6px"
            cursor="pointer"
          >
            <Text fontSize="16px" lineHeight="24px" color="main">
              결제하기
            </Text>
            <ChevronRightIcon w="20px" h="24px" />
          </GridItem>
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default Cafe;