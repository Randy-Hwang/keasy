import StarMain from '../assets/starMain.svg';
import StarWhite from '../assets/starWhite.svg';

import useTaskStore from '@/stores/taskStore';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type DifficulityModalProps = {
  isOpen: boolean;
  onClose: () => void;
  targetName: string;
  target: string;
};

const findJosa = (target: string) => {
  const lastChar = target.charCodeAt(target.length - 1);
  const hasLastCharacter = (lastChar - 0xac00) % 28;
  return hasLastCharacter ? '을' : '를';
};

const DifficultyModal = ({
  isOpen,
  onClose,
  targetName,
  target,
}: DifficulityModalProps) => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState(-1);

  const close = () => {
    setSelection(-1);
    onClose();
  };

  const { setLevel } = useTaskStore();

  return (
    <Modal isOpen={isOpen} onClose={close} isCentered>
      <ModalOverlay />
      <ModalContent rounded="0" maxW="671px" h="790px">
        <ModalBody pt="56px">
          <Text fontSize="36px" lineHeight="53px" textAlign="center">
            <strong>{targetName}</strong>
            {findJosa(targetName)} 연습하시겠어요?
          </Text>
          <Text fontSize="20px" lineHeight="53px" textAlign="center">
            난이도를 선택해 주세요
          </Text>
          <Center
            shadow="difficultyModal"
            mt="2em"
            flexDirection="column"
            gap="10px"
            py="1em"
            bgColor={selection === 1 ? 'main' : 'white'}
            color={selection === 1 ? 'white' : 'black'}
            onClick={() => setSelection(1)}
            cursor="pointer"
          >
            <img src={selection === 1 ? StarWhite : StarMain} width="45px" />
            <Text fontSize="32px" lineHeight="53px">
              레벨 1
            </Text>
          </Center>
          <Center
            shadow="difficultyModal"
            mt="2em"
            py="1em"
            flexDirection="column"
            gap="10px"
            bgColor={selection === 2 ? 'main' : 'white'}
            color={selection === 2 ? 'white' : 'black'}
            onClick={() => setSelection(2)}
            cursor="pointer"
          >
            <Flex>
              <img src={selection === 2 ? StarWhite : StarMain} width="45px" />
              <img src={selection === 2 ? StarWhite : StarMain} width="45px" />
            </Flex>
            <Text fontSize="32px" lineHeight="53px">
              레벨 2
            </Text>
          </Center>
          <Center
            shadow="difficultyModal"
            mt="2em"
            py="1em"
            flexDirection="column"
            gap="10px"
            bgColor={selection === 3 ? 'main' : 'white'}
            color={selection === 3 ? 'white' : 'black'}
            onClick={() => setSelection(3)}
            cursor="pointer"
          >
            <Flex>
              <img src={selection === 3 ? StarWhite : StarMain} width="45px" />
              <img src={selection === 3 ? StarWhite : StarMain} width="45px" />
              <img src={selection === 3 ? StarWhite : StarMain} width="45px" />
            </Flex>
            <Text fontSize="32px" lineHeight="53px">
              레벨 3
            </Text>
          </Center>
          <Flex justifyContent="end" mt="2em" gap="24px">
            <Button onClick={close}>
              <Text>다른 장소 선택할래요</Text>
              <ChevronRightIcon w="20px" h="20px" />
            </Button>
            <Button
              onClick={() => {
                setLevel(selection);
                navigate(target);
              }}
              disabled={selection === -1}
              bgColor={selection === -1 ? 'gray.200' : 'main'}
              color={selection === -1 ? 'rgb(26,34,44)' : 'white'}
              _hover={{
                bgColor: selection === -1 ? 'gray.200' : 'main',
              }}
            >
              <Text>난이도 선택했어요</Text>
              <ChevronRightIcon w="20px" h="20px" />
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DifficultyModal;
