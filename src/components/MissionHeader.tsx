import useTaskStore from '@/stores/taskStore';
import { Box, Center, Flex, GridItem, Text } from '@chakra-ui/react';
import StarMain from '../assets/starMain.svg';

type MissionHeaderProps = {
  start: number;
  level: number;
};

const findJosa = (target: string) => {
  const lastChar = target.charCodeAt(target.length - 1);
  const hasLastCharacter = (lastChar - 0xac00) % 28;
  return hasLastCharacter ? '을' : '를';
};

const MissionHeader = ({ start, level }: MissionHeaderProps) => {
  const { task } = useTaskStore();

  if (task === null) {
    return null;
  }

  return (
    <>
      <GridItem
        as={Center}
        colStart={1}
        colSpan={4}
        rowStart={start}
        rowSpan={130}
        bgColor="#EEE"
      >
        <Box>
          <Flex gap="5px">
            <Text>난이도</Text>
            {[...Array(level)].map((e) => {
              return <img key={e} src={StarMain} width="11px" />;
            })}
          </Flex>
          <Text
            fontWeight={600}
            fontSize="36px"
            lineHeight="42.96px"
            color="main"
          >
            첫 번째 미션
          </Text>
        </Box>
      </GridItem>

      <GridItem
        as={Flex}
        colStart={5}
        colSpan={8}
        rowStart={start}
        rowSpan={130}
        px="20px"
        alignItems="center"
      >
        <Text
          fontSize="22px"
          lineHeight="30px"
          color="main"
          wordBreak="keep-all"
        >
          <strong>{task.mission}</strong>
          {findJosa(task.mission)} 결제해 주세요
        </Text>
      </GridItem>
    </>
  );
};

export default MissionHeader;
