import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.Saira}, sans-serif;
  }
  
  body {
    height: auto;
    overflow-x: hidden;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
      
    ::-webkit-scrollbar {
      width: 0.5rem;
    }

    
    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.black};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 0.1rem;
      background-image: linear-gradient(
        to bottom,
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => theme.colors.secondary}
      );
    }

  }
  
  html {
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
