import { Box } from '@chakra-ui/react';
import LogoWhite from '../assets/logoWhite.svg';

const HeaderBlue = () => {
  return (
    <>
      <Box
        position="absolute"
        w={834}
        h={100}
        left={0}
        top={0}
        bgColor="#2C5282"
      />
      <Box position="absolute" top={30} left={396}>
        <img src={LogoWhite} width="41.67px" height="40px" />
      </Box>
    </>
  );
};

export default HeaderBlue;
