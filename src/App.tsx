import * as T from "./templates";

import theme from "styles/theme";
import routes from "utils/routes";
import GlobalStyle from "styles/global";

import { ThemeProvider } from "styled-components";
import { Router, RouteComponentProps, Redirect } from "@reach/router";
import { Wrapper } from "components";

function App() {
  const Home = (props: RouteComponentProps) => <T.Home />;
  const Portfolio = (props: RouteComponentProps) => <T.Portfolio />;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Router>
          <Redirect from={routes.default} to={routes.home} />
          <Home path={routes.home} />
          <Portfolio path={routes.portfolio} />
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
