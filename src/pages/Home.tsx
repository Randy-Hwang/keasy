import { Box, Container, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import HeaderBlue from '../components/HeaderBlue';
import Wrapper from '../components/Wrapper';

import { useState } from 'react';

import Subtitle from '../assets/homeAssets/subtitle_img.svg';
import CafeImg from '../assets/homeAssets/cafe.svg';
import FastFoodImg from '../assets/homeAssets/fastfood.svg';

import ChooseDifficulty from '../components/ChooseDifficulty';
import { Clicked, ClickedLevel, ClickedValue } from '../states/states';

const Home = () => {
  const navigate = useNavigate();
  const { isClicked, setIsClicked } = Clicked((state) => state);
  const { clickedValue, setClickedValue } = ClickedValue((state) => state);
  const { clickedLevel, setClickedLevel } = ClickedLevel((state) => state);

  const handleClick = (store: 'cafe' | 'fastfood') => {
    setIsClicked(isClicked);
    setClickedValue(store);
  };

  return (
    <Wrapper>
      <HeaderBlue />
      <Box
        position="absolute"
        w={0}
        h={137.5}
        left={45}
        top={195}
        border="1px solid #2C5282"
      />
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

      <Box position="absolute" top={362}>
        <img src={Subtitle} width="834px" height="336px" />
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
          시작 전, 설명서를
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

      <Box
        position="absolute"
        w={0}
        h={55}
        left={45}
        top={745}
        border="1px solid #2C5282"
      />
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

      <Box position="absolute" left={121} top={832} cursor="pointer">
        <img
          src={CafeImg}
          width="260px"
          height="230px"
          onClick={() => {
            handleClick('cafe');
            setClickedLevel(0);
          }}
        />
      </Box>

      <Box position="absolute" left={446} top={832} cursor="pointer">
        <img
          src={FastFoodImg}
          width="267px"
          height="230px"
          onClick={() => {
            handleClick('fastfood');
            setClickedLevel(0);
          }}
        />
      </Box>

      {isClicked ? <ChooseDifficulty ChoosenStore={clickedValue} /> : null}
    </Wrapper>
  );
};

export default Home;
