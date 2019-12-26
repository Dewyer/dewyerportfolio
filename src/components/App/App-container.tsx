import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutPageContainer from '../AboutPage';
import MainMenuContainer from '../MainMenu';

//fab library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

const App: React.FC = () => {
	return (
		<MainMenuContainer>
			<BrowserRouter>
				<Switch>
					<Route path="/" component={AboutPageContainer}/>
				</Switch>
			</BrowserRouter>
		</MainMenuContainer>
	);
}

export default App;
