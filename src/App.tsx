import theme from "styles/theme";
import routes from "utils/routes";
import GlobalStyle from "styles/global";

import * as T from './templates'

import { ThemeProvider } from "styled-components";
import { Router, RouteComponentProps, Redirect} from '@reach/router'

function App() {

  const Home = (props: RouteComponentProps) => <T.Home />

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Redirect from={routes.default} to={routes.home} />
        <Home path={routes.home} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
