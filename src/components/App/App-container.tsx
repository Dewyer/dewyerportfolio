import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutPageContainer from '../AboutPage';
import MainMenuContainer from '../MainMenu';

//fab library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import SkillsPage from '../SkillsPage';

library.add(fab);

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<MainMenuContainer>
				<Switch>
					<Route exact path="/" component={AboutPageContainer}/>
					<Route exact path="/skills" component={SkillsPage} />
				</Switch>
			</MainMenuContainer>
		</BrowserRouter>
	);
}

export default App;
