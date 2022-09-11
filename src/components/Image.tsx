import { chakra } from '@chakra-ui/system';

const Image = chakra('img', {
  shouldForwardProp: (prop) => ['src'].includes(prop),
});

export default Image;
