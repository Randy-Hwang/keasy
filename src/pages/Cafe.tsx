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

const Cafe = () => {
  const navigate = useNavigate();

  const [selection, setSelection] = useState(0);

  const { task, setTask, level } = useTaskStore();

  if (!task) {
    setTask('cafe', level);
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
        <SuggestPanel
          targets={task.result as (Beverage & { amount: number })[]}
          data={dataFile['cafe']['suggest']}
        />
      );
      break;
    case 1:
      CurrentPanel = (
        <TrendPanel
          targets={task.result as (Beverage & { amount: number })[]}
          data={dataFile['cafe']['trend']}
        />
      );
      break;
    case 2:
      CurrentPanel = (
        <CoffeePanel
          targets={task.result as (Beverage & { amount: number })[]}
          data={dataFile['cafe']['coffee']}
        />
      );
      break;
    case 3:
      CurrentPanel = (
        <JuicePanel
          targets={task.result as (Beverage & { amount: number })[]}
          data={dataFile['cafe']['juice']}
        />
      );
      break;
    case 4:
      CurrentPanel = (
        <TeaPanel
          targets={task.result as (Beverage & { amount: number })[]}
          data={dataFile['cafe']['tea']}
        />
      );
      break;
    case 5:
      CurrentPanel = (
        <AdePanel
          targets={task.result as (Beverage & { amount: number })[]}
          data={dataFile['cafe']['ade']}
        />
      );
      break;
    case 6:
      CurrentPanel = (
        <DessertPanel
          targets={task.result as (Beverage & { amount: number })[]}
          data={dataFile['cafe']['dessert']}
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
            <Tab>??????</Tab>
            <Tab>??????</Tab>
            <Tab>??????</Tab>
            <Tab>??????/?????????</Tab>
            <Tab>???</Tab>
            <Tab>?????????</Tab>
            <Tab>???/?????????</Tab>
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
              ?????? ??????
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
              for (const result of task.result) {
                let orderMatch = false;
                for (const order of orders) {
                  if (isEqual(order.order, result)) {
                    orderMatch = true;
                    break;
                  }
                }
                fullMatch = fullMatch && orderMatch;
              }

              if (!fullMatch) {
                toast({
                  title: '??????',
                  description: '????????? ??????????????? ????????????',
                  status: 'error',
                });
                return;
              }

              navigate('/finish');
            }}
          >
            <Text fontSize="16px" lineHeight="24px" color="main">
              ????????????
            </Text>
            <ChevronRightIcon w="20px" h="24px" />
          </GridItem>
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default Cafe;
