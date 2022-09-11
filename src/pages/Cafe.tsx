import AdePanel from '@/panels/AdePanel';
import CoffeePanel from '@/panels/CoffeePanel';
import DessertPanel from '@/panels/DessertPanel';
import JuicePanel from '@/panels/JuicePanel';
import SuggestPanel from '@/panels/SuggestPanel';
import TeaPanel from '@/panels/TeaPanel';
import TrendPanel from '@/panels/TrendPanel';
import { Beverage } from '@/types/Beverage';
import { ChevronRightIcon } from '@chakra-ui/icons';
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
import { useLocation, useNavigate } from 'react-router-dom';
import StarMain from '../assets/starMain.svg';
import beverageData from '../beverageData.json';
import HeaderWhite from '../components/HeaderWhite';
import Wrapper from '../components/Wrapper';
import missions from '../missions.json';

const findJosa = (target: string) => {
  const lastChar = target.charCodeAt(target.length - 1);
  const hasLastCharacter = (lastChar - 0xac00) % 28;
  return hasLastCharacter ? '을' : '를';
};

const randRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Cafe = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryRawData =
    location.search.length === 0 ? [] : location.search.substring(1).split('&');

  const queryData: { [key: string]: string } = {};
  for (const query of queryRawData) {
    const [key, value] = query.split('=');
    queryData[key] = value;
  }

  const [selection, setSelection] = useState(0);

  const [missionIndex, _] = useState<number>(
    !Object.keys(queryData).includes('level')
      ? 0
      : randRange(0, Number(queryData.level) - 1)
  );

  const [order1, setOrder1] = useState<{
    name: string;
    order: Beverage;
    amount: number;
  } | null>(null);
  const [order2, setOrder2] = useState<{
    name: string;
    order: Beverage;
    amount: number;
  } | null>(null);
  const [order3, setOrder3] = useState<{
    name: string;
    order: Beverage;
    amount: number;
  } | null>(null);

  if (!Object.keys(queryData).includes('level')) {
    navigate('/home');
    return null;
  }

  const mission =
    missions['cafe'][Number(queryData.level) - 1][missionIndex]['mission'];

  let CurrentPanel: React.ReactNode;
  switch (selection) {
    case 0:
      CurrentPanel = <SuggestPanel data={beverageData['suggest']} />;
      break;
    case 1:
      CurrentPanel = <TrendPanel data={beverageData['trend']} />;
      break;
    case 2:
      CurrentPanel = <CoffeePanel data={beverageData['coffee']} />;
      break;
    case 3:
      CurrentPanel = <JuicePanel data={beverageData['juice']} />;
      break;
    case 4:
      CurrentPanel = <TeaPanel data={beverageData['tea']} />;
      break;
    case 5:
      CurrentPanel = <AdePanel data={beverageData['ade']} />;
      break;
    case 6:
      CurrentPanel = <DessertPanel data={beverageData['dessert']} />;
      break;
  }

  return (
    <Wrapper grid={12}>
      <HeaderWhite />
      <GridItem
        as={Center}
        colStart={1}
        colSpan={4}
        rowStart={101}
        rowSpan={130}
        bgColor="#EEE"
      >
        <Box>
          <Flex gap="5px">
            <Text>난이도</Text>
            {[...Array(Number(queryData.level))].map((e) => {
              return <img key={e} src={StarMain} width="11px" />;
            })}
          </Flex>
          <Text
            fontWeight={600}
            fontSize="36px"
            lineHeight="42.96px"
            color="main"
          >
            첫 번째 미션
          </Text>
        </Box>
      </GridItem>

      <GridItem
        as={Flex}
        colStart={5}
        colSpan={8}
        rowStart={100}
        rowSpan={130}
        px="20px"
        alignItems="center"
      >
        <Text
          fontSize="22px"
          lineHeight="30px"
          color="main"
          wordBreak="keep-all"
        >
          <strong>{mission}</strong>
          {findJosa(mission)} 결제해 주세요
        </Text>
      </GridItem>

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
            colStart={2}
            colSpan={10}
            rowStart={61}
            rowSpan={58}
            bgColor="white"
            rounded="6px"
            p="16px"
          >
            <Text w="144px">{order1 ? order1.name : ''}</Text>
            <Text flexGrow={1}>{order1 ? order1.name : ''}</Text>
          </GridItem>
          <GridItem
            as={Flex}
            colStart={2}
            colSpan={10}
            rowStart={141}
            rowSpan={58}
            bgColor="white"
            rounded="6px"
            p="16px"
          >
            <Text w="144px"></Text>
            <Text flexGrow={1}></Text>
          </GridItem>
          <GridItem
            as={Flex}
            colStart={2}
            colSpan={10}
            rowStart={221}
            rowSpan={58}
            bgColor="white"
            rounded="6px"
            p="16px"
          >
            <Text w="144px"></Text>
            <Text flexGrow={1}></Text>
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
