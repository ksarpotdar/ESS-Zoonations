import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

const allReducers = combineReducers({
	currentUser: usersReducer
});

export default allReducers;
