/*eslint-disable*/
import * as T from 'templates';
import theme from 'styles/theme';
import routes from 'utils/routes';
import GlobalStyle from 'styles/global';
import { Wrapper } from 'components';
import { ThemeProvider } from 'styled-components';
import { Router, RouteComponentProps, Redirect } from '@reach/router';

function App() {
  const Home = (props: RouteComponentProps) => <T.Home />;
  const Curriculum = (props: RouteComponentProps) => <T.Curriculum />;
  const Works = (props: RouteComponentProps) => <T.Works />;
  const Store = (props: RouteComponentProps) => <T.Store />;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Router>
          <Redirect from={routes.default} to={routes.home} />
          <Home default path={routes.home} />
          <Works path={routes.works} />
          <Store path={routes.store} />
        <Curriculum path={routes.curriculum} />
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
