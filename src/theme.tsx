import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    main: '#2C5282',
    text: '#121212',
  },
  textStyles: {
    onboarding: {
      title: {
        fontSize: '64px',
        fontWeight: 400,
        lineHeight: '76px',
        letterSpacing: '0.1em',
      },
      touch: {
        fontSize: '30px',
        fontWeight: 400,
        lineHeight: '28px',
      },
    },
  },
  fonts: { body: `Pretendard, sans-serif` },
});

export default theme;
