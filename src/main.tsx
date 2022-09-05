import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Fonts from './fonts';
import App from './router';

import './assets/global.css';

const theme = extendTheme({
  colors: {
    main: '#2C5282',
    text: '#121212',
  },
  fonts: { body: `Pretendard-Regular, sans-serif` },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
