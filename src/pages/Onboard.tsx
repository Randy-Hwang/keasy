import { ChevronRightIcon } from '@chakra-ui/icons';
import { AspectRatio, Box, Flex, GridItem, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/keasyLogo.svg';
import Wrapper from '../components/Wrapper';

const Onboard = () => {
  const navigate = useNavigate();

  // If colStart + colSpan > grid, it will generate a gutter after the last column.
  return (
    <>
      <Wrapper grid={12}>
        <GridItem colStart={2} colSpan={10} rowStart={157}>
          <Text color="main" textStyle="onboarding.title">
            <strong>키지</strong>와<br />
            쉽고 편하게
            <br />
            <strong>키오스크 연습</strong>해요!
          </Text>
        </GridItem>
        <GridItem colStart={2} colSpan={3} rowStart={435}>
          <Box w="100%" h="2px" bg="main" />
        </GridItem>
        <GridItem colStart={7} colSpan={5} rowStart={550}>
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
          justifyContent="end"
          alignItems="center"
          onClick={() => navigate('/home')}
          cursor="pointer"
        >
          {/* Cannot use GridItem in Flex */}
          <Flex
            p="20px 35px"
            ml="500px"
            justifyContent="end"
            alignItems="center"
          >
            <Text textStyle="onboarding.touch" color="white">
              터치하여 시작하기
            </Text>
            <ChevronRightIcon color="white" w="40px" h="40px" />
          </Flex>
        </Flex>
      </Wrapper>
    </>
  );
};

export default Onboard;
