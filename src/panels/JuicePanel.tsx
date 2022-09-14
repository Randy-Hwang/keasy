import { Beverage } from '@/types/Beverage';
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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type JuicePanelProps = {
  data: { name: string; price: number; image: string }[];
  target: Beverage;
};

const JuicePanel = ({ data, target }: JuicePanelProps) => {
  const pageCount = Math.ceil(data.length / 6);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const toast = useToast();

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
          lineHeight="38.19px"
          color="main"
        >
          주스/스무디
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
        {data.slice((page - 1) * 6, page * 6).map((item) => (
          <Box
            key={item.name}
            width="204px"
            cursor="pointer"
            onClick={() => {
              if (item.name !== target.name) {
                toast({
                  title: '주의',
                  description: '상단의 미션에서 메뉴를 다시 확인해 주세요',
                  status: 'error',
                });
                return;
              }
              navigate('/cafe/juice?name=' + item.name);
            }}
          >
            <img src={item.image} width="100%" height="100%" />
            <Box shadow="cafe" w="100%" p="15px">
              <Text fontSize="20px" fontWeight={700} lineHeight="28.64px">
                {item.name}
              </Text>
              <Text fontSize="16px" fontWeight={400} lineHeight="23.87px">
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

export default JuicePanel;
