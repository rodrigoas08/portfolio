import routes from './routes';
import * as T from 'templates';
import theme from 'styles/theme';
import GlobalStyle from 'styles/global';
import Wrapper from 'components/Wrapper';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';

const RouterView = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Wrapper>
          <Routes>
            <Route
              path={routes.default}
              element={<Navigate replace to={routes.home} />}
            />
            <Route path={routes.home} element={<T.Home />} />
          </Routes>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
};
export default RouterView;
