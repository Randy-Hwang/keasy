import { Box } from '@chakra-ui/react';
import { ClickedLevel, ClickedValue } from '../states/states';

import HeaderWhite from '../components/HeaderWhite';
import ShowMission from '../components/ShowMission';
import Wrapper from '../components/Wrapper';
import CafeMenu from '../components/cafe/CafeMenu';
import FoodCourtMenu from '../components/foodcourt/FoodCourtMenu';

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
      {clickedValue === 'cafe' ? <CafeMenu /> : <FoodCourtMenu />}
    </Wrapper>
  );
};

export default Cafe;
