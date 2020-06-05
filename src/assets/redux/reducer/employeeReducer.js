const employeeReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_ALL_EMPLOYEE_DATA':
			return action.payload.data;
		default:
			return state;
	}
};

export default employeeReducer;
