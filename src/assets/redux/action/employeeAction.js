import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getAllEmployeeData = (role) => {
	return (dispatch) => {
		return axios
			.get(`${apiUrl}/users?role=${role}`)
			.then((response) => {
				dispatch(getDataSuccess(response.data));
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const getDataSuccess = (data) => {
	return {
		type: 'GET_ALL_EMPLOYEE_DATA',
		payload: {
			data
		}
	};
};
