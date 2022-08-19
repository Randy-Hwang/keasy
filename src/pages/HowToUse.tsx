import { Box, Container, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import HeaderBlue from '../components/HeaderBlue';
import Wrapper from '../components/Wrapper';

const HowToUse = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <HeaderBlue />
      <Text
        position="absolute"
        w={106}
        h={24}
        top={35}
        left={77}
        color="#FFFFFF"
        fontSize={20}
        letterSpacing="0.1em"
        onClick={() => navigate(-1)}
        cursor="pointer"
      >
        {'<'} 뒤로가기
      </Text>
      <Container position="absolute" w={320} h={159} left={55} top={184}>
        <Text fontWeight={400} fontSize={36} color="#121212">
          쉽고 간편한
        </Text>
        <Text fontWeight={400} fontSize={36} color="#121212">
          키지 사용법!
        </Text>
        <Text fontWeight={400} fontSize={36} color="#121212">
          <strong>네 가지</strong>만 숙지해요.
        </Text>
      </Container>
      <Box
        position="absolute"
        w={251}
        h={186}
        top={170}
        left={515}
        bgColor="#D9D9D9"
      ></Box>

      <Text
        position="absolute"
        w={44}
        h={48}
        top={403}
        left={69}
        fontWeight={600}
        fontSize={40}
      >
        01
      </Text>
      <Text
        position="absolute"
        w={315}
        h={26}
        top={450}
        left={69}
        fontWeight={500}
        fontSize={24}
      >
        상단의 미션을 확인해 주세요
      </Text>
      <Box
        position="absolute"
        w={340}
        h={190}
        top={523}
        left={68}
        bgColor="#D9D9D9"
      ></Box>

      <Text
        position="absolute"
        w={50}
        h={48}
        top={403}
        left={430}
        fontWeight={600}
        fontSize={40}
      >
        02
      </Text>
      <Container position="absolute" w={270} h={68} top={449} left={415}>
        <Text fontWeight={500} fontSize={24}>
          주문 내역에 담을 메뉴를
        </Text>
        <Text fontWeight={500} fontSize={24}>
          가볍게 터치해 주세요
        </Text>
      </Container>
      <Box
        position="absolute"
        w={340}
        h={190}
        top={523}
        left={430}
        bgColor="#D9D9D9"
      ></Box>

      <Text
        position="absolute"
        w={51}
        h={48}
        top={732}
        left={69}
        fontWeight={600}
        fontSize={40}
      >
        03
      </Text>
      <Container position="absolute" w={320} h={68} top={779} left={53}>
        <Text fontWeight={500} fontSize={24}>
          선택한 메뉴를 취소하고 싶다면
        </Text>
        <Text fontWeight={500} fontSize={24}>
          주문 내역 메뉴 우측에
        </Text>
        <Text fontWeight={500} fontSize={24}>
          "취소" 아이콘을 터치해 주세요
        </Text>
      </Container>
      <Box
        position="absolute"
        w={340}
        h={190}
        top={890}
        left={68}
        bgColor="#D9D9D9"
      ></Box>

      <Text
        position="absolute"
        w={52}
        h={48}
        top={732}
        left={427}
        fontWeight={600}
        fontSize={40}
      >
        04
      </Text>
      <Container position="absolute" w={320} h={68} top={779} left={415}>
        <Text fontWeight={500} fontSize={24}>
          중간에 조작법이 헷갈린다면
        </Text>
        <Text fontWeight={500} fontSize={24}>
          화면 우측 상단의 "사용법"
        </Text>
        <Text fontWeight={500} fontSize={24}>
          아이콘을 터치해 주세요.
        </Text>
      </Container>
      <Box
        position="absolute"
        w={340}
        h={190}
        top={890}
        left={428}
        bgColor="#D9D9D9"
      ></Box>
    </Wrapper>
  );
};

export default HowToUse;
