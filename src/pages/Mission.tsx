import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { ClickedLevel, ClickedValue } from '../states/states';

import HeaderWhite from '../components/HeaderWhite';
import ShowMission from '../components/ShowMission';
import Wrapper from '../components/Wrapper';
import CafeMenu from '../components/cafe/CafeMenu';

const Cafe = () => {
  const { clickedLevel } = ClickedLevel();
  const { clickedValue } = ClickedValue();

  return (
    <Wrapper>
      <HeaderWhite />
      <ShowMission />
      <Box position="absolute" top={300}>
        This is "{clickedValue}" Mission Component, Lv{clickedLevel}
      </Box>
      <CafeMenu />
    </Wrapper>
  );
};

export default Cafe;
