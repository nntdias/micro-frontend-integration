import Cookies from 'js-cookie';

export const removeTokens = () => {
	Cookies.remove(process.env.REACT_APP_TOKEN_KEY);
};
