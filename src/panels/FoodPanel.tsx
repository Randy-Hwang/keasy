import useOrderStore from '@/stores/orderStore';
import { Food } from '@/types/Food';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Flex,
  GridItem,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type FoodPanelProps = {
  data: { name: string; price: number; image: string }[];
  targets: (Food & { amount: number })[];
  category: string;
  categoryName: string;
};

const FoodPanel = ({
  data,
  targets,
  category,
  categoryName,
}: FoodPanelProps) => {
  const pageCount = Math.ceil(data.length / 4);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const toast = useToast();
  const { orders } = useOrderStore();

  useEffect(() => {
    setPage(1);
  }, [categoryName]);

  const PrevBar =
    page > 1 ? (
      <GridItem
        as={Center}
        colStart={1}
        rowStart={401}
        rowSpan={350}
        bgColor="#EFEFEF"
        cursor="pointer"
        onClick={() => setPage(page - 1)}
      >
        <ChevronLeftIcon w="36px" h="36px" color="main" />
      </GridItem>
    ) : null;

  const NextBar =
    page < pageCount ? (
      <GridItem
        as={Center}
        colStart={12}
        rowStart={401}
        rowSpan={350}
        bgColor="#EFEFEF"
        cursor="pointer"
        onClick={() => setPage(page + 1)}
      >
        <ChevronRightIcon w="36px" h="36px" color="main" />
      </GridItem>
    ) : null;

  return (
    <>
      <GridItem colStart={2} colSpan={4} rowStart={340} rowSpan={40}>
        <Heading
          as="h1"
          fontSize="32px"
          fontWeight={600}
          lineHeight="38px"
          color="main"
        >
          {categoryName}
        </Heading>
      </GridItem>
      <GridItem
        as={Flex}
        flexDirection="row"
        gap="24px"
        flexWrap="wrap"
        colStart={2}
        colSpan={10}
        rowStart={401}
        rowSpan={350}
      >
        {data.slice((page - 1) * 4, page * 4).map((item) => (
          <Box
            key={item.name}
            w="322px"
            cursor="pointer"
            onClick={() => {
              if (!targets.find((tgt) => tgt.name === item.name)) {
                toast({
                  title: '주의',
                  description: '상단의 미션에서 메뉴를 다시 확인해 주세요',
                  status: 'error',
                });
                return;
              }
              if (orders.find((order) => order.order.name === item.name)) {
                toast({
                  title: '주의',
                  description:
                    '이미 주문 내역에 담은 메뉴입니다. 미션을 다시 확인해 주세요',
                  status: 'error',
                });
                return;
              }
              navigate(`/foodcourt/${category}?name=${item.name}`);
            }}
          >
            <img src={item.image} width="100%" height="100%" />
            <Box shadow="cafe" w="100%" h="68px" p="14px">
              <Text fontSize="20px" fontWeight={700} lineHeight="24px">
                {item.name}
              </Text>
              <Text fontSize="16px" fontWeight={400} lineHeight="19px">
                {item.price.toLocaleString('ko-KR')}원
              </Text>
            </Box>
          </Box>
        ))}
      </GridItem>
      {PrevBar}
      {NextBar}
    </>
  );
};

export default FoodPanel;
