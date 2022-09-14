import MissionHeader from '@/components/MissionHeader';
import Wrapper from '@/components/Wrapper';
import useOrderStore from '@/stores/orderStore';
import useTaskStore from '@/stores/taskStore';
import { Juice } from '@/types/Beverage';
import { isEqual } from '@/utils/equal';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  GridItem,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import beverageData from '../../beverageData.json';

// 자 정리
// 1. 라우터에서 받아온 쿼리: 사용자가 선택한 음료
// 2. taskStore에서 받아온 task: 미션
// 3. data에서 받아온 정보: 미션에서 확인한 정보
// 보통 1 === 2 === 3임 (여기 들어올 때 확인함)
const JuiceOrderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [amount, setAmount] = useState(0);
  const [current, setCurrent] = useState<Partial<Juice>>({ type: 'juice' });

  const toast = useToast();

  const queryRawData =
    location.search.length === 0 ? [] : location.search.substring(1).split('&');

  const queryData: { [key: string]: string } = {};
  for (const query of queryRawData) {
    const [key, value] = query.split('=');
    queryData[key] = value;
  }

  const { task, level } = useTaskStore();
  const { orders, putOrder } = useOrderStore();

  const valid = useMemo(() => {
    if (task === null) return false;
    if (typeof task.result === 'string') return false;
    if (task.result.type !== 'juice') return false;

    const target = task.result;

    if (!target) {
      return false;
    }

    // TODO: Check amount
    if (amount !== 1) {
      return false;
    }

    let currentData = current;
    currentData.name = target.name;
    return isEqual(currentData, target);
  }, [amount, current, task]);

  if (!task || typeof task.result === 'string' || !queryData['name']) {
    navigate('/home');
    return null;
  }

  const target = task.result as Juice;

  const data = beverageData[target.type].find(
    (item) => item.name === target.name
  );

  if (!data) {
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
            뜨거운 음료 불가
          </Text>
          <Flex gap="6px" justifyContent="center" alignItems="center">
            <Button
              disabled={true}
              bgColor={'#4A4A4A'}
              color="white"
              _hover={{ bgColor: '#4A4A4A' }}
              _disabled={{ bgColor: '#4A4A4A' }}
            >
              -
            </Button>
            <Text w="124px" textAlign="center">
              -
            </Text>
            <Button
              disabled
              bgColor={'#4A4A4A'}
              color="white"
              _hover={{ bgColor: '#4A4A4A' }}
              _disabled={{ bgColor: '#4A4A4A' }}
            >
              +
            </Button>
          </Flex>
        </Flex>

        <Flex gap="7" direction="column">
          <Text fontSize="24px" fontWeight={700} w="254px" textAlign="center">
            차가운 음료
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
                //TODO: Check Amount here
                if (amount >= 1) {
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

      <GridItem
        as={Flex}
        colStart={2}
        colSpan={10}
        rowStart={425}
        rowSpan={75}
        justifyContent="space-between"
        alignItems="center"
        px="20px"
        py="35px"
        bgColor="main"
      >
        <Text fontSize="24px" fontWeight={400} color="white">
          선택한 음료의 옵션
        </Text>
        <ChevronRightIcon width="24px" height="24px" color="white" />
      </GridItem>
      <GridItem
        colStart={2}
        colSpan={10}
        rowStart={512}
        rowSpan={500}
        display={amount === 0 ? 'none' : 'block'}
      >
        <Flex gap="10px" px="22px" py="17px" direction="column" shadow="cafe">
          <Text fontSize="24px" fontWeight={400}>
            크기
          </Text>
          <RadioGroup
            onChange={(item) => {
              if (item !== target.size) {
                toast({
                  title: '주의',
                  description: '상단에 미션에서 메뉴를 다시 확인해주세요.',
                  status: 'error',
                });
              }
              const data = {
                ...current,
                size: item as 'small' | 'normal' | 'large',
              };
              setCurrent(data);
            }}
          >
            <Stack direction="row" gap="5px">
              <Radio value="normal" minW="110px">
                기본
              </Radio>
              <Radio value="small" minW="110px">
                중간
              </Radio>
              <Radio value="large" minW="110px">
                크게
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Flex gap="10px" px="22px" py="17px" direction="column" shadow="cafe">
          <Text fontSize="24px" fontWeight={400}>
            당도
          </Text>
          <RadioGroup
            onChange={(item) => {
              if (item !== target.sweetness) {
                toast({
                  title: '주의',
                  description: '상단에 미션에서 메뉴를 다시 확인해주세요.',
                  status: 'error',
                });
              }
              const data = {
                ...current,
                sweetness: item as 'less' | 'normal' | 'more',
              };
              setCurrent(data);
            }}
          >
            <Stack direction="row" gap="5px">
              <Radio value="normal" minW="110px">
                기본
              </Radio>
              <Radio value="more" minW="110px">
                달게
              </Radio>
              <Radio value="less" minW="110px">
                덜 달게
              </Radio>
            </Stack>
          </RadioGroup>
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
            putOrder(target.name, target, amount);
            navigate('/cafe');
          }}
        >
          확인
        </Button>
      </GridItem>
    </Wrapper>
  );
};

export default JuiceOrderPage;
