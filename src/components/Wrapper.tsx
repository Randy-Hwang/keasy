import { Center, Grid } from '@chakra-ui/react';

type WrapperProps = {
  grid?: number;
  gap?: number;
  margin?: number;
  children: React.ReactNode | any;
};

const Wrapper = (props: WrapperProps) => {
  const grid = props.grid || 15;
  const gap = props.gap || 24;
  const margin = props.margin || 12;

  return (
    <Center w="100%" h="100%">
      <Grid
        pos="relative"
        templateColumns={`repeat(${grid}, 1fr)`}
        templateRows={`repeat(auto-fill, 1px)`}
        px={`${margin}px`}
        columnGap={`${gap}px`}
        border="1px solid gray"
        w="100%"
        h="100%"
        maxW="834px"
        maxH="1194px"
      >
        {props.children}
      </Grid>
    </Center>
  );
};

export default Wrapper;
