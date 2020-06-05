import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const createNewTask = (values) => {
	return (dispatch) => {
		return axios.post(`${apiUrl}/tasks`, values).then((response) => {}).catch((error) => {
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
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const getTaskByUserId = (token) => {
	return (dispatch) => {
		return axios
			.get(`${apiUrl}/tasks/id`, {
				headers: { Authorization: `Bearer ${token}` }
			})
			.then((response) => {
				dispatch(getDataSuccess(response.data.task));
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

export const updateTaskStatus = (id, status) => {
	return (dispatch) => {
		return axios
			.put(`${apiUrl}/tasks/${id}`, status)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);

				throw error;
			});
	};
};
