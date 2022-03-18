import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.family.nunito};
  }
  
  html, body {
    height: auto;
    background: ${({ theme }) => theme.colors.primary}; 
    /* background: linear-gradient(180deg, ${({ theme }) =>
      theme.colors.primary}, ${({ theme }) => theme.colors.blueRibbon}); 
    background: -webkit-linear-gradient(180deg, ${({ theme }) =>
      theme.colors.primary}, ${({ theme }) => theme.colors.blueRibbon}); */

  }
  
  html {
    font-size: 62.5%;
  } 
`;

export default GlobalStyle;
