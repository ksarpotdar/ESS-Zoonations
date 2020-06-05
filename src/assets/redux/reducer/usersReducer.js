const usersReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_USER_BY_ID':
			return action.payload.data;
		default:
			return state;
	}
};

export default usersReducer;
