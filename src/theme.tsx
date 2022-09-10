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
    home: {
      fontSize: '36px',
      fontWeight: 400,
      lineHeight: '53px',
    },
  },
  shadows: {
    home: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    howtouse: '0px 5px 8px -4px rgba(0, 0, 0, 0.25)',
    difficultyModal: '0px 4px 6px -4px rgba(0, 0, 0, 0.25);',
  },
  fonts: { body: `Pretendard, sans-serif` },
});

export default theme;
