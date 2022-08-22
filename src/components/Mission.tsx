import { ClickedLevel, ClickedValue } from '../states/states';

const Mission = () => {
  const { clickedLevel } = ClickedLevel();
  const { clickedValue } = ClickedValue();

  return (
    <div>
      This is "{clickedValue}" Mission Component, Lv{clickedLevel}
    </div>
  );
};

export default Mission;
