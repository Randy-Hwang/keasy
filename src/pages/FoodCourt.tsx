import MissionHeader from '@/components/MissionHeader';
import FoodPanel from '@/panels/FoodPanel';
import useOrderStore from '@/stores/orderStore';
import useTaskStore from '@/stores/taskStore';
import { describeBeverage } from '@/types/Beverage';
import { Food } from '@/types/Food';
import { isEqual } from '@/utils/equal';
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
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderWhite from '../components/HeaderWhite';
import Wrapper from '../components/Wrapper';
import dataFile from '../data.json';

const FoodCourt = () => {
  const navigate = useNavigate();

  const [selection, setSelection] = useState(0);

  const { task, setTask, level } = useTaskStore();

  if (!task) {
    setTask('foodcourt', level);
  }

  const { orders, deleteOrder } = useOrderStore();

  const toast = useToast();

  if (!task) {
    navigate('/home');
    return null;
  }

  let CurrentPanel: React.ReactNode;
  switch (selection) {
    case 0:
      CurrentPanel = (
        <FoodPanel
          targets={task.result as (Food & { amount: number })[]}
          data={dataFile['foodcourt']['korean']}
          category="korean"
          categoryName="한식"
        />
      );
      break;
    case 1:
      CurrentPanel = (
        <FoodPanel
          targets={task.result as (Food & { amount: number })[]}
          data={dataFile['foodcourt']['japanese']}
          category="japanese"
          categoryName="일식"
        />
      );
      break;
    case 2:
      CurrentPanel = (
        <FoodPanel
          targets={task.result as (Food & { amount: number })[]}
          data={dataFile['foodcourt']['western']}
          category="western"
          categoryName="양식"
        />
      );
      break;
    case 3:
      CurrentPanel = (
        <FoodPanel
          targets={task.result as (Food & { amount: number })[]}
          data={dataFile['foodcourt']['beverages']}
          category="beverages"
          categoryName="음료"
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
            <Tab w="176px">한식</Tab>
            <Tab w="176px">일식</Tab>
            <Tab w="176px">양식</Tab>
            <Tab w="176px">음료</Tab>
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
              {orders.length >= 1 ? orders[0].order.name : ''}
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
              {orders.length >= 2 ? orders[1].order.name : ''}
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
              {orders.length >= 3 ? orders[2].order.name : ''}
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
            onClick={() => {
              let fullMatch = true;
              for (const order of orders) {
                let orderMatch = false;
                for (const result of task.result) {
                  if (isEqual(order.order, result)) {
                    orderMatch = true;
                    break;
                  }
                }
                fullMatch = fullMatch && orderMatch;
              }

              if (!fullMatch) {
                toast({
                  title: '주의',
                  description: '주문이 마무리되지 않았어요',
                  status: 'error',
                });
                return;
              }

              navigate('/finish');
            }}
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

export default FoodCourt;
