import GlobalStyle from "styles/global";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

import * as C from './components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <C.Header />
      {/* <C.Footer/> */}
    </ThemeProvider>
  );
}

export default App;
