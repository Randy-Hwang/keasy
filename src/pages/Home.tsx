import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, GridItem, Text, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cafe from '../assets/homeAssets/cafe.svg';
import FoodCourt from '../assets/homeAssets/foodcourt.svg';
import Subtitle from '../assets/homeAssets/subtitle_img.svg';
import HeaderBlue from '../components/HeaderBlue';
import Wrapper from '../components/Wrapper';
import DifficultyModal from '../modals/DifficulityModal';

const Home = () => {
  const navigate = useNavigate();

  const {
    isOpen: isDifficultyDialogOpen,
    onOpen: openDifficultyDialog,
    onClose: closeDifficultyDialog,
  } = useDisclosure();
  const [selectionName, setSelectionName] = useState('');
  const [selection, setSelection] = useState('');

  return (
    <>
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
        <GridItem colStart={2} colSpan={10} rowStart={153}>
          <Text color="text" textStyle="home">
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
        <GridItem colStart={8} colSpan={4} rowStart={420} zIndex={1}>
          <Text color="black" textStyle="home" textAlign="end">
            <strong>잠깐만요!</strong>
            <br />
            시작 전, 설명서를
            <br />
            <Text as="strong" color="main">
              꼭 읽어주세요!
            </Text>
          </Text>
        </GridItem>
        <GridItem
          colStart={9}
          colSpan={3}
          rowStart={608}
          rowSpan={40}
          zIndex={1}
        >
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
        <GridItem
          colStart={1}
          rowStart={745}
          rowSpan={55}
          borderRightWidth="2px"
          borderRightStyle="solid"
          borderRightColor="main"
        />
        <GridItem colStart={2} colSpan={10} rowStart={745}>
          <Text color="text" fontSize="36px" lineHeight="56px">
            저와 어느 장소를 연습하고 싶으신가요?
          </Text>
        </GridItem>
        <GridItem
          colStart={2}
          colSpan={5}
          rowStart={960}
          shadow="0px 5px 10px -4px rgba(0, 0, 0, 0.25)"
          rounded="10px"
          as={Flex}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          onClick={() => {
            setSelectionName('푸드코트');
            setSelection('/foodcourt');
            openDifficultyDialog();
          }}
        >
          <img src={FoodCourt} width="100%" />
        </GridItem>
        <GridItem
          colStart={7}
          colSpan={5}
          rowStart={960}
          shadow="0px 5px 10px -4px rgba(0, 0, 0, 0.25)"
          rounded="10px"
          as={Flex}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          onClick={() => {
            setSelectionName('카페');
            setSelection('/cafe');
            openDifficultyDialog();
          }}
        >
          <img src={Cafe} width="100%" />
        </GridItem>
      </Wrapper>
      <DifficultyModal
        isOpen={isDifficultyDialogOpen}
        onClose={closeDifficultyDialog}
        targetName={selectionName}
        target={selection}
      />
    </>
  );
};

export default Home;
