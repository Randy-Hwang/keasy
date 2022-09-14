import MissionHeader from '@/components/MissionHeader';
import Wrapper from '@/components/Wrapper';
import useOrderStore from '@/stores/orderStore';
import useTaskStore from '@/stores/taskStore';
import { Coffee } from '@/types/Beverage';
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
import { useNavigate } from 'react-router-dom';
import { InternalOrderPageProps } from '../CafeOrder';

const CoffeeOrderPage = ({ data, target }: InternalOrderPageProps) => {
  const navigate = useNavigate();

  const [hot, setHot] = useState(0);
  const [cold, setCold] = useState(0);
  const [current, setCurrent] = useState<Partial<Coffee>>({ type: 'coffee' });

  const toast = useToast();

  const { level } = useTaskStore();
  const { putOrder } = useOrderStore();

  const valid = useMemo(() => {
    // Type Guard
    if (target.type !== 'coffee') {
      return false;
    }

    let currentData: Partial<Coffee> & { amount?: number } = current;
    currentData.name = target.name;
    if (hot > 0) {
      delete currentData.ice;
    }
    currentData.amount = hot !== 0 ? hot : cold;
    currentData.temperature = target.temperature;
    return isEqual(currentData, target);
  }, [hot, cold, current]);

  if (target.type !== 'coffee') {
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
            뜨거운 음료
          </Text>
          <Flex gap="6px" justifyContent="center" alignItems="center">
            <Button
              disabled={!['all', 'hot'].includes(data.temperature)}
              bgColor={
                !['all', 'hot'].includes(data.temperature) ? '#4A4A4A' : 'main'
              }
              color="white"
              _hover={{
                bgColor: !['all', 'hot'].includes(data.temperature)
                  ? '#4A4A4A'
                  : 'main',
              }}
              _disabled={{ bgColor: '#4A4A4A' }}
              onClick={() => {
                setHot(hot === 0 ? 0 : hot - 1);
              }}
            >
              -
            </Button>
            <Text w="124px" textAlign="center">
              {!['all', 'hot'].includes(data.temperature) ? '-' : hot}
            </Text>
            <Button
              disabled={!['all', 'hot'].includes(data.temperature)}
              bgColor={
                !['all', 'hot'].includes(data.temperature) ? '#4A4A4A' : 'main'
              }
              color="white"
              _hover={{
                bgColor: !['all', 'hot'].includes(data.temperature)
                  ? '#4A4A4A'
                  : 'main',
              }}
              _disabled={{ bgColor: '#4A4A4A' }}
              onClick={() => {
                if (cold !== 0) {
                  return;
                }
                if (target.temperature !== 'hot') {
                  toast({
                    title: '주의',
                    description: '상단에 미션에서 메뉴를 다시 확인해주세요.',
                    status: 'error',
                  });
                  return;
                }
                if (hot >= target.amount) {
                  toast({
                    title: '주의',
                    description: '상단에 미션에서 메뉴를 다시 확인해주세요.',
                    status: 'error',
                  });
                  return;
                }
                setHot(hot + 1);
              }}
            >
              +
            </Button>
          </Flex>
        </Flex>

        <Flex gap="7" direction="column">
          <Text fontSize="24px" fontWeight={700} w="254px" textAlign="center">
            차가운 음료
            {!['all', 'cold'].includes(data.temperature) ? ' 불가' : ''}
          </Text>
          <Flex gap="6px" justifyContent="center" alignItems="center">
            <Button
              disabled={!['all', 'cold'].includes(data.temperature)}
              bgColor={
                !['all', 'cold'].includes(data.temperature) ? '#4A4A4A' : 'main'
              }
              color="white"
              _hover={{
                bgColor: !['all', 'cold'].includes(data.temperature)
                  ? '#4A4A4A'
                  : 'main',
              }}
              _disabled={{ bgColor: '#4A4A4A' }}
              onClick={() => {
                setCold(cold === 0 ? 0 : cold - 1);
              }}
            >
              -
            </Button>
            <Text w="124px" textAlign="center">
              {!['all', 'cold'].includes(data.temperature) ? '-' : cold}
            </Text>
            <Button
              disabled={!['all', 'cold'].includes(data.temperature)}
              bgColor={
                !['all', 'cold'].includes(data.temperature) ? '#4A4A4A' : 'main'
              }
              color="white"
              _hover={{
                bgColor: !['all', 'cold'].includes(data.temperature)
                  ? '#4A4A4A'
                  : 'main',
              }}
              _disabled={{ bgColor: '#4A4A4A' }}
              onClick={() => {
                if (hot !== 0) {
                  return;
                }
                if (target.temperature !== 'cold') {
                  toast({
                    title: '주의',
                    description: '상단에 미션에서 메뉴를 다시 확인해주세요.',
                    status: 'error',
                  });
                  return;
                }
                if (cold >= target.amount) {
                  toast({
                    title: '주의',
                    description: '상단에 미션에서 메뉴를 다시 확인해주세요.',
                    status: 'error',
                  });
                  return;
                }
                setCold(cold + 1);
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
        display={hot === 0 && cold === 0 ? 'none' : 'block'}
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
              <Radio value="small" minW="110px">
                기본
              </Radio>
              <Radio value="normal" minW="110px">
                중간
              </Radio>
              <Radio value="large" minW="110px">
                크게
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Flex
          gap="10px"
          px="22px"
          py="17px"
          direction="column"
          shadow="cafe"
          display={cold > 0 ? 'flex' : 'none'}
        >
          <Text fontSize="24px" fontWeight={400}>
            얼음양
          </Text>
          <RadioGroup
            onChange={(item) => {
              if (item !== target.ice) {
                toast({
                  title: '주의',
                  description: '상단에 미션에서 메뉴를 다시 확인해주세요.',
                  status: 'error',
                });
              }
              const data = {
                ...current,
                ice: item as 'less' | 'normal' | 'more' | undefined,
              };
              setCurrent(data);
            }}
          >
            <Stack direction="row" gap="5px">
              <Radio value="normal" minW="110px">
                기본
              </Radio>
              <Radio value="less" minW="110px">
                적게
              </Radio>
              <Radio value="more" minW="110px">
                많이
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Flex gap="10px" px="22px" py="17px" direction="column" shadow="cafe">
          <Text fontSize="24px" fontWeight={400}>
            샷 양
          </Text>
          <RadioGroup
            onChange={(item) => {
              if (item !== target.shot) {
                toast({
                  title: '주의',
                  description: '상단에 미션에서 메뉴를 다시 확인해주세요.',
                  status: 'error',
                });
              }
              const data = {
                ...current,
                shot: item as 'less' | 'normal' | 'more',
              };
              setCurrent(data);
            }}
          >
            <Stack direction="row" gap="5px">
              <Radio value="normal" minW="110px">
                기본
              </Radio>
              <Radio value="more" minW="110px">
                샷 추가 +500원
              </Radio>
              <Radio value="less" minW="110px">
                샷 연하게
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Flex gap="10px" px="22px" py="17px" direction="column" shadow="cafe">
          <Text fontSize="24px" fontWeight={400}>
            시럽
          </Text>
          <RadioGroup
            onChange={(item) => {
              if (item !== target.syrup) {
                toast({
                  title: '주의',
                  description: '상단에 미션에서 메뉴를 다시 확인해주세요.',
                  status: 'error',
                });
              }
              const data = {
                ...current,
                syrup: item as 'hazelnut' | 'none',
              };
              setCurrent(data);
            }}
          >
            <Stack direction="row" gap="5px">
              <Radio value="none" minW="110px">
                없음
              </Radio>
              <Radio value="hazelnut" minW="110px">
                헤이즐넛 시럽 추가 +500원
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
            putOrder(target, hot || cold);
            navigate('/cafe');
          }}
        >
          확인
        </Button>
      </GridItem>
    </Wrapper>
  );
};

export default CoffeeOrderPage;
