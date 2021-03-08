import Cookies from 'js-cookie';

export const signin = ({ email, password }) => {
	if (!password) {
		return Promise.reject(new Error('Wrong password.'));
	}
	const data = {
		email,
		name: 'Jose',
	};
	const fakeJWT = [
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
		btoa(JSON.stringify(data)),
		'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
	];
	const token = fakeJWT.join('.');
	Cookies.set(process.env.REACT_APP_TOKEN_KEY, token, { expires: 1, path: '' });
	return Promise.resolve(token);
};
