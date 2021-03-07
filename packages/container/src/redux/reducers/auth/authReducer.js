import * as actionTypes from '../../actions/actionTypes';

const initialState = {
	user: {},
};

const authSetUser = (state, action) => ({
	...state,
	user: action.user,
});

/**
 * Reducer
 * @param {*} state
 * @param {*} action
 */
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_SET_USER:
			return authSetUser(state, action);
		default:
			break;
	}
	return state;
};

export default reducer;
