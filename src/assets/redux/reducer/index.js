import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import employeeReducer from './employeeReducer';
import taskReducer from './taskReducer';

const allReducers = combineReducers({
	currentUser: usersReducer,
	employeeData: employeeReducer,
	taskData: taskReducer
});

export default allReducers;
