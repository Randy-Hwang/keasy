import { Box, Container, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import HeaderBlue from '../components/HeaderBlue';
import Wrapper from '../components/Wrapper';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <HeaderBlue />
      <Container position="absolute" w={370} h={159} left={51} top={184}>
        <Text
          fontWeight={500}
          fontSize={33}
          textColor="#121212"
          lineHeight="53px"
          fontStyle="normal"
        >
          안녕하세요!
        </Text>
        <Text
          fontWeight={500}
          fontSize={33}
          textColor="#121212"
          lineHeight="53px"
          fontStyle="normal"
        >
          저는 키오스크 시뮬레이터
        </Text>
        <Text
          fontWeight={500}
          fontSize={33}
          textColor="#121212"
          lineHeight="53px"
          fontStyle="normal"
        >
          <strong>키지</strong>에요.
        </Text>
      </Container>
      <Box
        position="absolute"
        w={251}
        h={186}
        left={512}
        top={170}
        bgColor="#D9D9D9"
      >
        Img should be here
      </Box>

      <Box
        position="absolute"
        w={251}
        h={261}
        top={413}
        left={68}
        bgColor="#D9D9D9"
      >
        Img should be here
      </Box>
      <Container position="absolute" w={370} h={159} left={410} top={427}>
        <Text
          fontWeight={600}
          fontSize={36}
          textAlign="right"
          color="#121212"
          lineHeight="53px"
        >
          <strong>잠깐만요!</strong>
        </Text>
        <Text
          fontWeight={500}
          fontSize={36}
          textAlign="right"
          color="#121212"
          lineHeight="53px"
        >
          시작하기 전 제 설명서를
        </Text>
        <Text
          fontWeight={600}
          fontSize={36}
          textAlign="right"
          color="#2C5282"
          lineHeight="53px"
        >
          <strong>꼭 읽어주세요!</strong>
        </Text>
      </Container>
      <Box
        position="absolute"
        w={183}
        h="40px"
        left={580}
        top={615}
        bgColor="#2C5282"
        borderRadius={20}
        cursor="pointer"
        onClick={() => navigate('/how-to-use')}
      ></Box>
      <Text
        position="absolute"
        fontWeight={400}
        fontSize={20}
        letterSpacing="0.05em"
        color="#FFFFFF"
        left={600}
        top={620}
        w={145}
        h={53}
        cursor="pointer"
        onClick={() => navigate('/how-to-use')}
      >
        확인하러 가기 &gt;
      </Text>

      <Text
        position="absolute"
        w={530}
        h={53}
        top={744}
        left={85}
        textColor="#121212"
        fontWeight={400}
        fontSize={36}
      >
        오늘 저와 어느 장소를 연습해 볼까요?
      </Text>

      <Box
        position="absolute"
        w={319}
        h={261}
        top={826}
        left={68}
        bgColor="#D9D9D9"
        cursor="pointer"
        onClick={() => navigate('/cafe')}
      ></Box>
      <Text
        position="absolute"
        w={70}
        h={48}
        top={933}
        left={192}
        fontWeight={600}
        fontSize={40}
        color="#000000"
        cursor="pointer"
        onClick={() => navigate('/cafe')}
      >
        카페
      </Text>

      <Box
        position="absolute"
        w={319}
        h={261}
        top={826}
        left={444}
        bgColor="#D9D9D9"
      ></Box>
      <Text
        position="absolute"
        w={217}
        h={48}
        top={933}
        left={495}
        fontWeight={600}
        fontSize={40}
        color="#000000"
      >
        패스트 푸드점
      </Text>
    </Wrapper>
  );
};

export default Home;
