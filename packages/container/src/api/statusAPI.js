import axios from './axios';

export const fetchStatus = () => {
	const url = `${process.env.REACT_APP_SERVER_API}/status`;
	return axios.get(url);
};
