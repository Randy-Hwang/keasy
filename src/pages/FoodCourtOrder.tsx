import MissionHeader from '@/components/MissionHeader';
import Wrapper from '@/components/Wrapper';
import useOrderStore from '@/stores/orderStore';
import useTaskStore from '@/stores/taskStore';
import {
  Button,
  Flex,
  GridItem,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import dataFile from '../data.json';

type IndexType = 'korean' | 'japanese' | 'western' | 'beverages';

const FoodCourtOrderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [amount, setAmount] = useState(0);

  const toast = useToast();

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
  const { task, level } = useTaskStore();
  const { putOrder } = useOrderStore();

  if (!name || !type) {
    navigate('/home');
    return null;
  }

  // Find one target by name and type
  const data = dataFile['foodcourt'][type as IndexType].find(
    (item) => item.name === name
  );

  const target = task?.result.find((t) => t.name === name);

  if (!target || !data) {
    navigate('/home');
    return null;
  }

  return (
    <Wrapper>
      <MissionHeader start={13} level={level} />
      <GridItem
        as={Flex}
        flexDirection="column"
        gap="8px"
        colStart={2}
        colSpan={10}
        rowStart={185}
        rowSpan={10}
      >
        <Heading as="h1" fontSize="36px" fontWeight={700} textAlign="center">
          {data.name}
        </Heading>
        <Text textAlign="center">{data.price.toLocaleString('ko-KR')}원</Text>
      </GridItem>

      <GridItem
        as={Flex}
        colStart={1}
        colSpan={12}
        rowStart={288}
        rowSpan={92}
        justifyContent="center"
      >
        <Flex gap="7" direction="column">
          <Text fontSize="24px" fontWeight={700} w="254px" textAlign="center">
            수량
          </Text>
          <Flex gap="6px" justifyContent="center" alignItems="center">
            <Button
              bgColor="main"
              color="white"
              _hover={{ bgColor: 'main' }}
              onClick={() => {
                setAmount(amount === 0 ? 0 : amount - 1);
              }}
            >
              -
            </Button>
            <Text w="124px" textAlign="center">
              {amount}
            </Text>
            <Button
              bgColor="main"
              color="white"
              _hover={{ bgColor: 'main' }}
              onClick={() => {
                if (amount >= target.amount) {
                  toast({
                    title: '주의',
                    description: '상단에 미션에서 메뉴를 다시 확인해주세요.',
                    status: 'error',
                  });
                  return;
                }
                setAmount(amount + 1);
              }}
            >
              +
            </Button>
          </Flex>
        </Flex>
      </GridItem>

      <GridItem colStart={2} colSpan={5} rowStart={1088} rowSpan={55}>
        <Button w="100%" h="100%" onClick={() => navigate(-1)}>
          취소
        </Button>
      </GridItem>
      <GridItem colStart={7} colSpan={5} rowStart={1088} rowSpan={55}>
        <Button
          w="100%"
          h="100%"
          disabled={amount !== target.amount}
          onClick={() => {
            putOrder(target, amount);
            navigate('/foodcourt');
          }}
        >
          확인
        </Button>
      </GridItem>
    </Wrapper>
  );
};

export default FoodCourtOrderPage;
