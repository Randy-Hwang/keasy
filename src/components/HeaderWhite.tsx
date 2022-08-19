import { Box, Container, Text } from '@chakra-ui/react';
import Logo from '../assets/keasyLogo.svg';
import House from '../assets/house.svg';
import Info from '../assets/circle-info.svg';
import { useNavigate } from 'react-router-dom';

const HeaderWhite = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        position="absolute"
        w={834}
        h={100}
        left={0}
        top={0}
        bgColor="#FFFFFF"
        borderBottom="1px solid #2C5282"
      />

      <Box position="absolute" top={30} left={396} w={180}>
        <img src={Logo} width="41.67px" height="40px" />
      </Box>
      <Box onClick={() => navigate('/home')} cursor="pointer">
        <Container position="absolute" top={37} left={39}>
          <img src={House} width="24" height="24" />
        </Container>
        <Text
          position="absolute"
          w={140}
          h={53}
          top={34}
          left={79}
          marginLeft={3}
          color="#2C5282"
          fontWeight={500}
          fontSize={20}
        >
          홈으로 돌아가기
        </Text>
      </Box>

      <Box onClick={() => navigate('/how-to-use')} cursor="pointer">
        <Container position="absolute" top={38} left={680}>
          <img src={Info} width="24" height="24" />
        </Container>
        <Text
          position="absolute"
          w={56}
          h={53}
          top={35}
          left={725}
          marginLeft={1}
          color="#2C5282"
          fontWeight={500}
          fontSize={20}
        >
          사용법
        </Text>
      </Box>
    </>
  );
};

export default HeaderWhite;
