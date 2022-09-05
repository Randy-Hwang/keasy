import { ChevronRightIcon } from '@chakra-ui/icons';
import { AspectRatio, Box, Flex, GridItem, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/keasyLogo.svg';
import Wrapper from '../components/Wrapper';

const Onboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <GridItem colStart={2} colSpan={12} rowStart={104}>
          <Text
            fontSize="64px"
            color="main"
            lineHeight="76px"
            letterSpacing="0.1em"
          >
            <strong>키지</strong>와<br />
            쉽고 편하게
            <br />
            <strong>키오스크 연습</strong>해요!
          </Text>
        </GridItem>
        <GridItem colStart={2} colSpan={4} rowStart={384}>
          <Box w="100%" h="2px" bg="main" />
        </GridItem>
        <GridItem colStart={8} colSpan={7} rowStart={494}>
          <AspectRatio ratio={1} opacity="0.2">
            <img src={Logo} />
          </AspectRatio>
        </GridItem>
        <Flex
          pos="absolute"
          w="100%"
          h="256px"
          bottom="0"
          bgColor="main"
          p="80px"
          justifyContent="end"
          alignItems="center"
          onClick={() => navigate('/home')}
          cursor="pointer"
        >
          <Text fontSize="36px" color="white">
            밀어서 시작하기
          </Text>
          <ChevronRightIcon ml="16px" color="white" w="45px" h="45px" />
        </Flex>
      </Wrapper>
    </>
  );
};

export default Onboard;
