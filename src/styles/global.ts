import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body, input, textarea, button {
    font-family: ${({theme}) => theme.font.family};
  }
`

export default GlobalStyle
