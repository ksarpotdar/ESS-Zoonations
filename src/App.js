import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './assets/helper/PrivateRoute';

//Pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployeeTaskManagement from './pages/EmployeeTaskManagement';
import ManagerDashboard from './pages/ManagerDashboard';
import ManagerEmployeeData from './pages/ManagerEmployeeData';
import ManagerTaskManagement from './pages/ManagerTaskManagement';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/registration" component={Registration} />
					<PrivateRoute path="/employee-dashboard" component={EmployeeDashboard} />
					<PrivateRoute path="/employee-task-management" component={EmployeeTaskManagement} />
					<PrivateRoute path="/manager-dashboard" component={ManagerDashboard} />
					<PrivateRoute path="/manager-employee-data" component={ManagerEmployeeData} />
					<PrivateRoute path="/manager-task-management" component={ManagerTaskManagement} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
