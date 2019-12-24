import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage';
import MainMenuContainer from '../MainMenu';

const App: React.FC = () => {
	return (
		<MainMenuContainer>
			<BrowserRouter>
				<Switch>
					<Route path="/" component={LandingPage}/>
				</Switch>
			</BrowserRouter>
		</MainMenuContainer>
	);
}

export default App;
