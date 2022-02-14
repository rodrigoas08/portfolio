import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    height: auto;
    /* background-image: linear-gradient( 109.6deg,  rgba(61,121,176,1) 11.3%, rgba(35,66,164,1) 91.1% );      */
    background: #396afc; 
    background: -webkit-linear-gradient(180deg, #2948ff, #396afc);
    background: linear-gradient(180deg, #2948ff, #396afc); 


  }
  
  html {
    font-size: 62.5%;
  }

  body, input, textarea  {
    font-family: ${({ theme }) => theme.font.family.inter};
  }

  button {   
    background-color: transparent;
  }
 
`;

export default GlobalStyle;
