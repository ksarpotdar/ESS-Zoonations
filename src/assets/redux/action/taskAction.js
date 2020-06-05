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

// export const getDataSuccess = (data) => {
// 	return {
// 		type: 'GET_ALL_EMPLOYEE_DATA',
// 		payload: {
// 			data
// 		}
// 	};
// };
