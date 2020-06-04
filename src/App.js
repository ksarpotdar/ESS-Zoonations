import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
					<Route path="/employee-dashboard" component={EmployeeDashboard} />
					<Route path="/employee-task-management" component={EmployeeTaskManagement} />
					<Route path="/manager-dashboard" component={ManagerDashboard} />
					<Route path="/manager-employee-data" component={ManagerEmployeeData} />
					<Route path="/manager-task-management" component={ManagerTaskManagement} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
