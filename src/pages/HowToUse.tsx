import HeaderBlue from '@/components/HeaderBlue';
import Wrapper from '@/components/Wrapper';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Center, GridItem, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import Inst1 from '@/assets/howToUseAssets/inst1.svg';
import Inst2 from '@/assets/howToUseAssets/inst2.svg';
import Inst3 from '@/assets/howToUseAssets/inst3.svg';
import Inst4 from '@/assets/howToUseAssets/inst4.svg';

const HowToUse = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <HeaderBlue />
      <GridItem colStart={2} colSpan={9} rowStart={153}>
        <Text
          color="black"
          fontSize="36px"
          lineHeight="56px"
          px="calc((min(100vw, 834px) - 320px) / 15)"
          borderLeftWidth="2px"
          borderLeftColor="main"
        >
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
      <GridItem colStart={2} colSpan={6} rowStart={347}>
        <Text color="black" fontSize="40px" fontWeight={600} lineHeight="48px">
          01
        </Text>
        <Text
          color="black"
          fontSize="24px"
          lineHeight="34px"
          letterSpacing="-0.03em"
        >
          상단에서 미션을 확인해 주세요
          <br />
          &nbsp;
        </Text>
        <img src={Inst1} />
      </GridItem>
      <GridItem colEnd={15} colSpan={6} rowStart={347}>
        <Text color="black" fontSize="40px" fontWeight={600} lineHeight="48px">
          02
        </Text>
        <Text
          color="black"
          fontSize="24px"
          lineHeight="34px"
          letterSpacing="-0.03em"
        >
          주문 내역에 담을 메뉴를 <br />
          가볍게 터치해 주세요
        </Text>
        <img src={Inst2} />
      </GridItem>
      <GridItem colStart={2} colSpan={6} rowStart={694}>
        <Text color="black" fontSize="40px" fontWeight={600} lineHeight="48px">
          03
        </Text>
        <Text
          color="black"
          fontSize="24px"
          lineHeight="34px"
          letterSpacing="-0.03em"
        >
          선택한 메뉴를 취소하고 싶다면
          <br />
          주문 내역에서 취소할 메뉴 우측에
          <br />
          “취소" 아이콘을 터치해 주세요.
        </Text>
        <img src={Inst3} />
      </GridItem>
      <GridItem colEnd={15} colSpan={6} rowStart={694}>
        <Text color="black" fontSize="40px" fontWeight={600} lineHeight="48px">
          04
        </Text>
        <Text color="black" fontSize="24px" lineHeight="34px">
          중간에 조작법이 헷갈린다면
          <br />
          화면 우측 상단에 “사용법”
          <br />
          아이콘을 터치해 주세요.
        </Text>
        <img src={Inst4} />
      </GridItem>
      <GridItem colStart={11} colSpan={4} rowStart={1078}>
        <Center
          height="60px"
          rounded="30px"
          bgColor="main"
          cursor="pointer"
          onClick={() => navigate('/home')}
        >
          <Text
            color="white"
            fontWeight={600}
            fontSize="22px"
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
