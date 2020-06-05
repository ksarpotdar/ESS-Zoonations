import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import employeeReducer from './employeeReducer';

const allReducers = combineReducers({
	currentUser: usersReducer,
	employeeData: employeeReducer
});

export default allReducers;
