import { Box } from '@chakra-ui/react';

type WrapperProps = {
  children: React.ReactNode | any;
};

const Wrapper = (props: WrapperProps) => {
  return (
    <Box
      position="relative"
      display="flex"
      mx="auto"
      alignItems="center"
      justifyContent="center"
      border="1px solid gray"
      w="834px"
      h="1194px"
    >
      {props.children}
    </Box>
  );
};

export default Wrapper;
