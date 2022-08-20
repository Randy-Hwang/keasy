import { Box, Text } from '@chakra-ui/react';
import Wrapper from '../components/Wrapper';
import Logo from '../assets/keasyLogo.svg';
import { useNavigate } from 'react-router-dom';

const Onboard = () => {
  const navigate = useNavigate();
  const DEFAULTCOLOR: string = '#2C5282';

  return (
    <>
      <Wrapper>
        <Box
          position="absolute"
          w={532}
          h={228}
          top={104}
          left={88}
          color={DEFAULTCOLOR}
        >
          <Text fontSize="64px" lineHeight="76px" letterSpacing="0.01em">
            <strong>키지</strong>와
          </Text>
          <Text fontSize="64px" lineHeight="76px" letterSpacing="0.01em">
            쉽고 편하게
          </Text>
          <Text fontSize="64px" lineHeight="76px" letterSpacing="0.01em">
            <strong>키오스크 연습</strong>해요!
          </Text>
        </Box>
        <Box
          position="absolute"
          w={183}
          h={0}
          left={95}
          top={379}
          border="2px solid #2C5282"
        />
        <Box position="absolute" opacity="0.2" left={339} top={467}>
          <img src={Logo} width="407px" height="408px" />
        </Box>
        <Box
          position="absolute"
          w={834}
          h={256}
          left={0}
          top={938}
          bgColor={DEFAULTCOLOR}
        />
        <Text
          position="absolute"
          w={256}
          h={43}
          fontWeight={400}
          left={520}
          top={1046}
          color="#FFFFFF"
          fontSize="34px"
          lineHeight="43px"
          onClick={() => navigate('/home')}
          cursor="pointer"
        >
          밀어서 시작하기 {'>'}
        </Text>
      </Wrapper>
    </>
  );
};

export default Onboard;
