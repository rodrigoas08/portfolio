import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.family.roboto};
  }
  
  body {
    height: auto;
    overflow-x: hidden;
    background-color: black;
      
    ::-webkit-scrollbar {
      width: 0.3rem;
    }

    
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.black};
    }

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
