import Cafe from '@/assets/homeAssets/cafe.svg';
import FoodCourt from '@/assets/homeAssets/foodcourt.svg';
import Subtitle from '@/assets/homeAssets/subtitle_img.svg';
import HeaderBlue from '@/components/HeaderBlue';
import Wrapper from '@/components/Wrapper';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, GridItem, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Clicked, ClickedLevel, ClickedValue } from '../states/states';

const Home = () => {
  const navigate = useNavigate();
  const { isClicked, setIsClicked } = Clicked((state) => state);
  const { setClickedValue } = ClickedValue((state) => state);
  const { setClickedLevel } = ClickedLevel((state) => state);

  const handleClick = (store: 'cafe' | 'foodcourt') => {
    setIsClicked(isClicked);
    setClickedValue(store);
  };

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
          안녕하세요!
          <br />
          저는 키오스크 시뮬레이터
          <br />
          <Text as="strong" color="main">
            키지
          </Text>
          에요.
        </Text>
      </GridItem>
      <Box position="absolute" top={362}>
        <img src={Subtitle} width="834px" height="336px" />
      </Box>
      <GridItem colEnd={15} colSpan={5} rowStart={420} zIndex={1}>
        <Text color="black" fontSize="36px" lineHeight="56px" textAlign="end">
          <strong>잠깐만요!</strong>
          <br />
          시작 전, 설명서를
          <br />
          <Text as="strong" color="main">
            꼭 읽어주세요!
          </Text>
        </Text>
      </GridItem>
      <GridItem colEnd={15} colSpan={4} rowStart={608} rowSpan={40} zIndex={1}>
        <Box
          bgColor="main"
          rounded="20px"
          as={Flex}
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          onClick={() => {
            navigate('/how-to-use');
          }}
        >
          <Text
            color="white"
            fontSize="20px"
            fontWeight={600}
            lineHeight="40px"
          >
            확인하러 가기
          </Text>
          <ChevronRightIcon w="35px" h="35px" color="white" />
        </Box>
      </GridItem>
      <GridItem colStart={2} colSpan={12} rowStart={745}>
        <Text
          color="black"
          fontSize="36px"
          lineHeight="56px"
          px="calc((min(100vw, 834px) - 320px) / 15)"
          borderLeftWidth="2px"
          borderLeftColor="main"
        >
          저와 어느 장소를 연습하고 싶으신가요?
        </Text>
      </GridItem>
      <GridItem
        colStart={3}
        colSpan={5}
        rowStart={962}
        shadow="0px 5px 10px -4px rgba(0, 0, 0, 0.25)"
        rounded="10px"
        as={Flex}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        onClick={() => {
          navigate('/cafe');
        }}
      >
        <img src={Cafe} width="100%" />
      </GridItem>
      <GridItem
        colStart={9}
        colSpan={5}
        rowStart={962}
        shadow="0px 5px 10px -4px rgba(0, 0, 0, 0.25)"
        rounded="10px"
        as={Flex}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        onClick={() => {
          navigate('/foodcourt');
        }}
      >
        <img src={FoodCourt} width="100%" />
      </GridItem>
    </Wrapper>
  );
};

export default Home;
