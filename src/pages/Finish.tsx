import StarMain from '@/assets/starMain.svg';
import useTaskStore from '@/stores/taskStore';
import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';

const FinishPage = () => {
  const { level } = useTaskStore();

  return (
    <Center w="100%" h="100%">
      <Center w="834px" h="1194px" bgColor="main">
        <Box w="720px" h="1040px" rounded="10px" bgColor="white">
          <Flex mt="150px" gap="10px">
            {[...Array(level)].map((_, i) => (
              <img key={i} src={StarMain} width="87px" height="87px" />
            ))}
          </Flex>
          <Text mt="40px" textAlign="center" fontSize="64px" fontWeight={400}>
            결제 완료
          </Text>
          <Box
            m="auto"
            mt="100px"
            w="400px"
            border="1px solid"
            borderColor="main"
          />
          <Text
            mt="40px"
            textAlign="center"
            fontSize="32px"
            fontWeight={600}
            letterSpacing="0.05em"
          >
            축하합니다!
            <br />
            미션을 성공하셨습니다.
          </Text>
          <Box
            m="auto"
            mt="40px"
            w="400px"
            border="1px solid"
            borderColor="main"
          />
          <Center mt="120px">
            <Button
              w="380px"
              h="87px"
              fontSize="32px"
              bgColor="white"
              color="main"
              rounded="10px"
              border="1px solid"
              borderColor="main"
            >
              홈으로 돌아가기
            </Button>
          </Center>
        </Box>
      </Center>
    </Center>
  );
};

export default FinishPage;
