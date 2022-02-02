import GlobalStyle from "styles/global";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

import Header from "components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
