import Cookies from 'js-cookie';

export const hasValidCookie = () => {
	return !!Cookies.get(process.env.REACT_APP_TOKEN_KEY);
};
