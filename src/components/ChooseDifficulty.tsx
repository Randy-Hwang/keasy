import { Box, Text } from '@chakra-ui/react';

import { Clicked, ClickedLevel } from '../states/states';
import { useNavigate } from 'react-router-dom';

import Lv1_unselected from '../assets/difficultyAssets/lv1_unselected.svg';
import Lv2_unselected from '../assets/difficultyAssets/lv2_unselected.svg';
import Lv3_unselected from '../assets/difficultyAssets/lv3_unselected.svg';
import Lv1_selected from '../assets/difficultyAssets/lv1_selected.svg';
import Lv2_selected from '../assets/difficultyAssets/lv2_selected.svg';
import Lv3_selected from '../assets/difficultyAssets/lv3_selected.svg';

interface IProps {
  ChoosenStore: string;
}

const ChooseDifficulty = (ChoosenStore: IProps) => {
  const { isClicked, setIsClicked } = Clicked((state) => state);
  const { clickedLevel, setClickedLevel } = ClickedLevel((state) => state);
  const navigate = useNavigate();

  return (
    <>
      <Box
        position="absolute"
        w={761}
        h={746}
        margin="auto"
        top={219}
        bgColor="#FFFFFF"
        border="1px solid gray"
      />

      {ChoosenStore.ChoosenStore === 'cafe' ? (
        <Text
          w={338}
          h={53}
          margin="auto"
          top={274}
          position="absolute"
          fontWeight={400}
          fontSize={36}
          lineHeight="53px"
        >
          <strong>카페</strong>를 연습하시겠어요?
        </Text>
      ) : (
        <Text
          w={480}
          h={53}
          margin="auto"
          top={274}
          position="absolute"
          fontWeight={400}
          fontSize={36}
          lineHeight="53px"
        >
          <strong>패스트 푸드점</strong>을 연습하시겠어요?
        </Text>
      )}

      <Text
        position="absolute"
        w={275}
        h={53}
        left={310}
        top={322}
        fontSize={23}
      >
        난이도를 선택해주세요
      </Text>

      <Box position="absolute" left={9} top={448} cursor="pointer">
        <img
          src={clickedLevel === 1 ? Lv1_selected : Lv1_unselected}
          width="254"
          height="406"
          onClick={() => {
            setClickedLevel(1);
          }}
        />
      </Box>
      <Box position="absolute" left={290} top={447} cursor="pointer">
        <img
          src={clickedLevel === 2 ? Lv2_selected : Lv2_unselected}
          width="254"
          height="406"
          onClick={() => {
            setClickedLevel(2);
          }}
        />
      </Box>
      <Box position="absolute" left={540} top={448} cursor="pointer">
        <img
          src={clickedLevel === 3 ? Lv3_selected : Lv3_unselected}
          width="254"
          height="406"
          onClick={() => {
            setClickedLevel(3);
          }}
        />
      </Box>

      <Box
        position="absolute"
        w={240}
        h={59}
        left={237}
        top={880}
        borderRadius={30}
        dropShadow="0px 4px 4px"
        bgColor="#EFEFEF"
        cursor="pointer"
      />
      <Text
        position="absolute"
        w={194}
        h={53}
        left={265}
        top={893}
        fontWeight={400}
        cursor="pointer"
        fontSize={22}
        onClick={() => {
          setIsClicked(isClicked);
        }}
      >
        다른 장소 선택할래요
      </Text>

      <Box
        position="absolute"
        w={265}
        h={59}
        left={499}
        top={879}
        borderRadius={30}
        dropShadow="0px 4px 4px"
        bgColor="#2C5282"
        cursor="pointer"
      />
      <Text
        position="absolute"
        w={180}
        h={53}
        left={545}
        top={893}
        fontWeight={400}
        fontSize={22}
        cursor="pointer"
        color="#FFFFFF"
        onClick={() => {
          clickedLevel === 0 ? undefined : setIsClicked(isClicked);
          navigate('/mission');
        }}
      >
        난이도 선택했어요 {'>'}
      </Text>
    </>
  );
};

export default ChooseDifficulty;
