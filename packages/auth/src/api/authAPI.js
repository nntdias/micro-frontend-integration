import axios from './axios';

export const signin = ({ email, password }) => {
	const url = `${process.env.REACT_APP_SERVER_API}/auth/signin`;
	const data = {
		email,
		password,
	};
	return axios.post(url, data);
};
