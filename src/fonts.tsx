import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    @import url("//cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css");

    body {
      font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif;
    }
    `}
  />
);

export default Fonts;
