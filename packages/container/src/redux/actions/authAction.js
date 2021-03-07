import { AUTH_SET_USER } from './actionTypes';

export const authSetUser = user => ({
	type: AUTH_SET_USER,
	user,
});
