import * as T from "templates";
import theme from "styles/theme";
import routes from "utils/routes";
import GlobalStyle from "styles/global";

import { ThemeProvider } from "styled-components";
import { Router, RouteComponentProps, Redirect } from "@reach/router";
import { Wrapper } from "components";

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
					<Home path={routes.home} />
					<Curriculum path={routes.curriculum} />
					<Works path={routes.works} />
					<Store path={routes.store} />
				</Router>
			</Wrapper>
		</ThemeProvider>
	);
}

export default App;
