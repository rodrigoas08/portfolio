import routes from './routes';
import * as T from 'templates';
import theme from 'styles/theme';
import GlobalStyle from 'styles/global';
import Wrapper from 'components/Wrapper';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RouterView = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Wrapper>
          <Routes>
            <Route path={routes.home} element={<T.Home />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default RouterView;
