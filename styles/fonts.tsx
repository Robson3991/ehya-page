import { css } from 'styled-components';

const fonts = css`
  @font-face {
    font-family: 'HK Grotesk';
    src: url('/fonts/hk-grotesk/HKGrotesk-Bold.otf');
    font-style: bold;
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans/OpenSans-Regular.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans/OpenSans-Semibold.ttf');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans/OpenSans-Bold.ttf');
    font-style: bold;
    font-weight: 600;
    font-display: swap;
  }
`;

export default fonts;
