/*eslint-disable*/
import * as T from 'templates';
import theme from 'styles/theme';
import routes from 'utils/routes';
import { Wrapper } from 'components';
import GlobalStyle from 'styles/global';
import { ThemeProvider } from 'styled-components';
import { Router, RouteComponentProps } from '@reach/router';

function App() {
  const Home = (props: RouteComponentProps) => <T.Home />;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Router>
          <Home default path={routes.home} />
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
