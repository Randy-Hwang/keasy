import { Beverage } from '@/types/Beverage';
import { Box, Flex, GridItem, Heading, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

type SuggestPanelProps = {
  data: { name: string; type: string; price: number; image: string }[];
  target: Beverage;
};

const SuggestPanel = ({ data, target }: SuggestPanelProps) => {
  const navigate = useNavigate();
  const toast = useToast();

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
          추천 메뉴
        </Heading>
      </GridItem>
      <GridItem
        as={Flex}
        flexDirection="column"
        colStart={2}
        colSpan={5}
        rowStart={401}
        rowSpan={350}
        cursor="pointer"
        onClick={() => {
          if (data[0].name !== target.name) {
            toast({
              title: '주의',
              description: '상단의 미션에서 메뉴를 다시 확인해 주세요',
              status: 'error',
            });
            return;
          }
          navigate('/cafe/' + data[0].type + '?name=' + data[0].name);
        }}
      >
        <img src={data[0].image} width="100%" height="100%" />
        <Box shadow="cafe" w="100%" h="100%" flexGrow={1} p="15px">
          <Text fontSize="24px" fontWeight={700} lineHeight="28.64px">
            {data[0].name}
          </Text>
          <Text fontSize="20px" fontWeight={400} lineHeight="23.87px">
            {data[0].price.toLocaleString('ko-KR')}원
          </Text>
        </Box>
      </GridItem>
      <GridItem
        as={Flex}
        flexDirection="row"
        colStart={7}
        colSpan={5}
        rowStart={401}
        rowSpan={165}
        cursor="pointer"
        onClick={() => {
          if (data[1].name !== target.name) {
            toast({
              title: '주의',
              description: '상단의 미션에서 메뉴를 다시 확인해 주세요',
              status: 'error',
            });
            return;
          }
          navigate('/cafe/' + data[1].type + '?name=' + data[1].name);
        }}
      >
        <img src={data[1].image} width="100%" height="100%" />
        <Box shadow="cafe" w="100%" h="100%" flexGrow={1} p="15px">
          <Text fontSize="24px" fontWeight={700} lineHeight="28.64px">
            {data[1].name}
          </Text>
          <Text fontSize="20px" fontWeight={400} lineHeight="23.87px">
            {data[1].price.toLocaleString('ko-KR')}원
          </Text>
        </Box>
      </GridItem>
      <GridItem
        as={Flex}
        flexDirection="row"
        colStart={7}
        colSpan={5}
        rowStart={586}
        rowSpan={165}
        cursor="pointer"
        onClick={() => {
          if (data[2].name !== target.name) {
            toast({
              title: '주의',
              description: '상단의 미션에서 메뉴를 다시 확인해 주세요',
              status: 'error',
            });
            return;
          }
          navigate('/cafe/' + data[2].type + '?name=' + data[2].name);
        }}
      >
        <img src={data[2].image} width="100%" height="100%" />
        <Box shadow="cafe" w="100%" h="100%" flexGrow={1} p="15px">
          <Text fontSize="24px" fontWeight={700} lineHeight="28.64px">
            {data[2].name}
          </Text>
          <Text fontSize="20px" fontWeight={400} lineHeight="23.87px">
            {data[2].price.toLocaleString('ko-KR')}원
          </Text>
        </Box>
      </GridItem>
    </>
  );
};

export default SuggestPanel;
