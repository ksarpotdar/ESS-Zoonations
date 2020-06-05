const taskReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_ALL_TASK_DATA':
			return action.payload.data;
		default:
			return state;
	}
};

export default taskReducer;
