import HeaderWhite from '../components/HeaderWhite';
import ShowMission from '../components/ShowMission';
import Wrapper from '../components/Wrapper';
import { ClickedLevel, ClickedValue } from '../states/states';

const Cafe = () => {
  const { clickedLevel } = ClickedLevel();
  const { clickedValue } = ClickedValue();

  return (
    <Wrapper>
      <HeaderWhite />
      <ShowMission />
      <div>
        This is "{clickedValue}" Mission Component, Lv{clickedLevel}
      </div>
    </Wrapper>
  );
};

export default Cafe;
