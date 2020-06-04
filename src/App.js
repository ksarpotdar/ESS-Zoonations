import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployeeTaskManagement from './pages/EmployeeTaskManagement';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/registration" component={Registration} />
					<Route path="/employee-dashboard" component={EmployeeDashboard} />
					<Route path="/employee-task-management" component={EmployeeTaskManagement} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
