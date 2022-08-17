import { Global } from '@emotion/react';

const Fonts = () => {
  <Global
    styles={`
    @font-face {
        font-family: 'Pretendard-Regular';
        font-weight: 400;
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    }`}
  />;
};

export default Fonts;
