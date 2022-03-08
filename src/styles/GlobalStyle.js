import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: 'SUIT-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    font-family: 'SUIT-Regular', sans-serif;
  }

  body {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    font-family: 'SUIT-Regular', sans-serif;
  }

  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    
    &:hover {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  button, 
  input,
  textarea {
    color: ${({ theme }) => theme.colors.black};
    background-color: transparent;
    border: none;
    outline: none;
  }

  textarea {
    resize: none;
  }

  button {
    padding: 0;
    cursor: pointer;
  }
  

`;

export default GlobalStyles;
