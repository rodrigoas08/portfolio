import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.family.montserrat};
  }
  
  html, body {
    height: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    background-color: black;
    /* background: linear-gradient(180deg, ${({ theme }) =>
      theme.colors.primary}, ${({ theme }) => theme.colors.blueRibbon}); 
    background: -webkit-linear-gradient(180deg, ${({ theme }) =>
      theme.colors.primary}, ${({ theme }) => theme.colors.blueRibbon}); */
      
    ::-webkit-scrollbar {
      width: 0.3rem;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.black};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      border-radius: 0.1rem;
      background: ${({ theme }) => theme.colors.primary};
    }

  }
  
  html {
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
