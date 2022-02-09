import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    height: 100vh;
    background-image: linear-gradient(
        90deg,
      rgb(85 120 230 / 46%) 0%,
      rgb(85 120 230 / 46%) 14.286%,
      rgb(90 110 232 / 46%) 14.286%,
      rgb(90 110 232 / 46%) 28.572%,
      rgb(95 100 234 / 46%) 28.572%,
      rgb(95 100 234 / 46%) 42.858%,
      rgb(100 105 236 / 46%) 42.858%,
      rgb(100 105 236 / 46%) 57.144%,
      rgb(105 100 238 / 46%) 57.144%,
      rgb(105 100 238 / 46%) 71.43%,
      rgb(110 110 240 / 46%) 71.43%,
      rgb(110 110 240 / 46%) 85.716%,
      rgb(115 120 242 / 46%) 85.716%,
      rgb(115 120 242 / 46%) 100.002%),
      linear-gradient(
        90deg,
      #49baf5 0%,
      #49baf5 14.286%,
      #40aae2 14.286%,
      #40aae2 28.572%,
      #379ace 28.572%,
      #379ace 42.858%,
      #2e8abb 42.858%,
      #2e8abb 57.144%,
      #2579a8 57.144%,
      #2579a8 71.43%,
      #1c6994 71.43%,
      #1c6994 85.716%,
      #135981 85.716%,
      #135981 100.002%)  
      
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
