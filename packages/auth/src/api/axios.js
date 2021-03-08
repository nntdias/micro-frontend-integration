import axios from 'axios';

const createInstance = baseURL =>
	axios.create({
		baseURL,
		headers: {
			'Content-Type': 'application/json',
		},
		withCredentials: true,
	});

/**
 * Default instance of axios
 */
export default createInstance();
