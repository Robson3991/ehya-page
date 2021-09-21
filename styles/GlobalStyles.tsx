import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import variables from './variables';
import fonts from './fonts';
import { up } from 'styled-breakpoints';

const GlobalStyle = createGlobalStyle`

  ${colors}
  ${variables}
  ${fonts}

  * {
    box-sizing: border-box;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%; /* 1rem === 10px */
  }

  body {
    margin: 0;
    font-family: var(--font-primary);
    font-size: 1.8rem;
    font-weight: 400;
    color: var(--color-primary);
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  ul {
      margin: 0;
      padding: 0;
      list-style: none;
  }

  h1 {
    font-family: var(--font-headings);
    font-size: 3.2rem;
    line-height: ${68 / 56};
    letter-spacing: 0.2px;

    ${up('md')} {
    font-size: 5.6rem;
    }
  }

  p {
    color: var(--color-grey);
    font-size: 1.6rem;
    line-height: ${36 / 20};

    ${up('md')} {
      color: var(--color-primary);
      font-size: 2rem;
    }
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyle;
