import HeaderBlue from '@/components/HeaderBlue';
import Wrapper from '@/components/Wrapper';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, GridItem, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import Inst1 from '@/assets/howToUseAssets/inst1.svg';
import Inst2 from '@/assets/howToUseAssets/inst2.svg';
import Inst3 from '@/assets/howToUseAssets/inst3.svg';
import Inst4 from '@/assets/howToUseAssets/inst4.svg';
import Image from '@/components/Image';

const HowToUse = () => {
  const navigate = useNavigate();

  return (
    <Wrapper grid={12}>
      <HeaderBlue />
      <GridItem
        colStart={1}
        rowStart={167}
        rowSpan={138}
        borderRightWidth="2px"
        borderRightStyle="solid"
        borderRightColor="main"
      />
      <GridItem colStart={2} colSpan={6} rowStart={153}>
        <Text color="black" fontSize="36px" lineHeight="53px">
          쉽고 편한 키지 사용법!
          <br />
          <Text as="strong" color="main">
            네 가지
          </Text>
          만 숙지하고
          <br />
          연습해 보세요!
        </Text>
      </GridItem>
      <GridItem
        colStart={2}
        colSpan={5}
        rowStart={320}
        rowSpan={327}
        shadow="howtouse"
      >
        <Flex w="290px" h="257px" m="auto" direction="column" gap="50px">
          <Box>
            <Text
              color="text"
              fontSize="40px"
              fontWeight={600}
              lineHeight="48px"
            >
              01
            </Text>
            <Text
              color="text"
              fontSize="20px"
              lineHeight="34px"
              letterSpacing="-0.03em"
            >
              상단에서 미션을 확인해 주세요
            </Text>
          </Box>
          <Image m="auto" src={Inst1} />
        </Flex>
      </GridItem>
      <GridItem
        colStart={7}
        colSpan={5}
        rowStart={320}
        rowSpan={327}
        shadow="howtouse"
      >
        <Flex w="290px" h="257px" m="auto" direction="column" gap="50px">
          <Box>
            <Text
              color="black"
              fontSize="40px"
              fontWeight={600}
              lineHeight="48px"
            >
              02
            </Text>
            <Text
              color="black"
              fontSize="20px"
              lineHeight="34px"
              letterSpacing="-0.03em"
            >
              담을 메뉴를 가볍게 터치해 주세요
            </Text>
          </Box>
          <Image m="auto" src={Inst2} />
        </Flex>
      </GridItem>
      <GridItem
        colStart={2}
        colSpan={5}
        rowStart={680}
        rowSpan={400}
        shadow="howtouse"
      >
        <Flex w="290px" h="257px" m="auto" direction="column" gap="50px">
          <Box>
            <Text
              color="text"
              fontSize="40px"
              fontWeight={600}
              lineHeight="48px"
            >
              03
            </Text>
            <Text
              color="text"
              fontSize="20px"
              lineHeight="34px"
              letterSpacing="-0.03em"
            >
              선택한 메뉴를 취소하고 싶다면 주문 내역에서 취소할 메뉴 우측에
              ‘취소' 아이콘을 터치해 주세요.
            </Text>
          </Box>
          <Image m="auto" src={Inst3} />
        </Flex>
      </GridItem>
      <GridItem
        colStart={7}
        colSpan={5}
        rowStart={680}
        rowSpan={400}
        shadow="howtouse"
      >
        <Flex w="290px" h="257px" m="auto" direction="column" gap="85px">
          <Box>
            <Text
              color="black"
              fontSize="40px"
              fontWeight={600}
              lineHeight="48px"
            >
              02
            </Text>
            <Text
              color="black"
              fontSize="20px"
              lineHeight="34px"
              letterSpacing="-0.03em"
            >
              조작법이 헷갈린다면 화면 우측 상단 ‘사용법' 아이콘을 터치해
              주세요.
            </Text>
          </Box>
          <Image m="auto" src={Inst4} />
        </Flex>
      </GridItem>
      <GridItem colStart={9} colSpan={3} rowStart={1115}>
        <Center
          height="40px"
          rounded="5px"
          bgColor="main"
          cursor="pointer"
          onClick={() => navigate('/home')}
        >
          <Text
            color="white"
            fontWeight={600}
            fontSize="16px"
            lineHeight="24px"
            letterSpacing="0.05em"
          >
            다 확인했어요
          </Text>
          <ChevronRightIcon color="white" w="35px" h="35px" />
        </Center>
      </GridItem>
    </Wrapper>
  );
};

export default HowToUse;
