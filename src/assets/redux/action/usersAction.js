import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const addUser = (values) => {
	return (dispatch) => {
		return axios
			.post(`${apiUrl}/users`, values)
			.then((response) => {
				console.log(response);

				// dispatch(addUserSuccess(response.data));
				// dispatch(createStorage(response.data.data._id));
			})
			.catch((error) => {
				// alert(error.response.data);
				throw error;
			});
	};
};

export const login = (values, history) => {
	return (dispatch) => {
		return axios
			.post(`${apiUrl}/users/login`, values)
			.then((response) => {
				localStorage.setItem('token', response.data.token);
				localStorage.setItem('refToken', response.data.refreshToken);
				localStorage.setItem('isLoggedIn', 'true');
				dispatch(loginSuccess(response.data.token, history));
			})
			.catch((error) => {
				alert(error.response.data);
				throw error;
			});
	};
};

export const loginSuccess = (token, history) => {
	return (dispatch) => {
		return axios
			.get(`${apiUrl}/users/id`, {
				headers: { Authorization: `Bearer ${token}` }
			})
			.then((response) => {
				dispatch(addToken(response.data.currentUser._id));
				dispatch(currentUser(response.data.currentUser));
				dispatch(loginRedirect(response.data.currentUser.role, history));
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const loginRedirect = (role, history) => {
	return () => {
		if (role === 'manager') {
			history.push('/manager-dashboard');
		} else if (role === 'employee') {
			history.push('/employee-dashboard');
		}
	};
};

export const getUserData = (token) => {
	return (dispatch) => {
		return axios
			.get(`${apiUrl}/users/id`, {
				headers: { Authorization: `Bearer ${token}` }
			})
			.then((response) => {
				dispatch(currentUser(response.data.currentUser));
			})
			.catch((error) => {
				dispatch(newToken());
			});
	};
};

export const addToken = (id) => {
	return () => {
		return axios
			.put(`${apiUrl}/users/addToken/${id}`, { refreshToken: localStorage.getItem('refToken') })
			.then((response) => {});
	};
};

export const newToken = (token) => {
	return () => {
		return axios
			.post(`${apiUrl}/users/token`, { refreshToken: localStorage.getItem('refToken') })
			.then((response) => {
				localStorage.setItem('token', response.data.token);
			});
	};
};

export const currentUser = (data) => {
	return {
		type: 'GET_USER_BY_ID',
		payload: {
			data
		}
	};
};

export const logout = (id) => {
	return () => {
		return axios.put(`${apiUrl}/users/logout/${id}`, {}).then((response) => {});
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
