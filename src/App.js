import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import Homepage from './pages/Homepage';
import Registration from './pages/Regitration';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/registration" component={Registration} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
