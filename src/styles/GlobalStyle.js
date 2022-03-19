import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`

  ${reset};

  * {
    box-sizing: border-box;
    font-family: 'SUIT', sans-serif;
  }

  body {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    font-family: 'SUIT', sans-serif;
    
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
