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
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InternalOrderPageProps } from '../Order';

const DessertOrderPage = ({ data, target }: InternalOrderPageProps) => {
  const navigate = useNavigate();

  const [amount, setAmount] = useState(0);

  const toast = useToast();

  const { level } = useTaskStore();
  const { putOrder } = useOrderStore();

  const valid = useMemo(() => {
    if (target.type !== 'dessert') {
      return false;
    }

    if (amount !== target.amount) {
      return false;
    }

    return true;
  }, [amount]);

  if (target.type !== 'dessert') {
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
          disabled={!valid}
          onClick={() => {
            putOrder(target, amount);
            navigate('/cafe');
          }}
        >
          확인
        </Button>
      </GridItem>
    </Wrapper>
  );
};

export default DessertOrderPage;
