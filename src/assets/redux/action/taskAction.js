import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const createNewTask = (values) => {
	return (dispatch) => {
		return axios
			.post(`${apiUrl}/tasks`, values)
			.then((response) => {
				// console.log(response);
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const getAllTask = () => {
	return (dispatch) => {
		return axios
			.get(`${apiUrl}/tasks`)
			.then((response) => {
				dispatch(getDataSuccess(response.data.data));
				// console.log(response.data);
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const getDataSuccess = (data) => {
	return {
		type: 'GET_ALL_TASK_DATA',
		payload: {
			data
		}
	};
};
