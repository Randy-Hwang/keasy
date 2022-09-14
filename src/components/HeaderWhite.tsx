import useOrderStore from '@/stores/orderStore';
import useTaskStore from '@/stores/taskStore';
import { Flex, GridItem, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import Info from '../assets/circle-info.svg';
import House from '../assets/house.svg';
import Logo from '../assets/keasyLogo.svg';

const HeaderWhite = () => {
  const navigate = useNavigate();
  const { clear } = useTaskStore();
  const { clearOrder } = useOrderStore();

  return (
    <GridItem
      as={Flex}
      colStart={1}
      colSpan={12}
      rowStart={1}
      rowSpan={100}
      bgColor="white"
      justifyContent="space-between"
      alignItems="center"
      px="20px"
    >
      <Flex
        w="160px"
        onClick={() => {
          clear();
          clearOrder();
          navigate('/home');
        }}
        cursor="pointer"
      >
        <img src={House} width="24" height="24" />
        <Text fontSize="16px" lineHeight="24px" color="subText" ml="8px">
          홈으로 돌아가기
        </Text>
      </Flex>
      <img src={Logo} width="41.67px" height="40px" />
      <Flex
        w="160px"
        justifyContent="end"
        onClick={() => navigate('/how-to-use')}
        cursor="pointer"
      >
        <img src={Info} width="24" height="24" />
        <Text fontSize="16px" lineHeight="24px" color="subText" ml="8px">
          사용법
        </Text>
      </Flex>
    </GridItem>
  );
};

export default HeaderWhite;
