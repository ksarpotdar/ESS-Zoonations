import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const addUser = (values) => {
	return (dispatch) => {
		return axios
			.post(`${apiUrl}/users`, values)
			.then((response) => {
				// dispatch(addUserSuccess(response.data));
				// dispatch(createStorage(response.data.data._id));
			})
			.catch((error) => {
				// alert(error.response.data);
				throw error;
			});
	};
};

export const login = (values) => {
	return (dispatch) => {
		return axios.post(`${apiUrl}/users/login`, values).then((response) => {}).catch((error) => {
			throw error;
		});
	};
};

// export const createStorage = (userId) => {
// 	return () => {
// 		return axios
// 			.post(`${apiUrl}/foodStorage`, { userId: userId })
// 			.then((response) => {
// 				console.log(response);
// 			})
// 			.catch((error) => {});
// 	};
// };

// export const addUserSuccess = (data) => {
// 	return {
// 		type: 'POST_USER',
// 		payload: { data }
// 	};
// };
