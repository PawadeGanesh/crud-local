const defaultState = {
	isLoading: false,
};

export const customerReducer = (state = defaultState, action) => {
	console.log('customerReducer', action.payload);
	switch (action.type) {
		case 'REQUEST_POST_CUSTOMER':
			return { ...state, isLoading: true };
		case 'RECEIVE_POST_CUSTOMER':
			return { ...state, isLoadin: false, state: action.payload };
		case 'FAIL_POST_CUSTOMER':
			return { ...state, isLoading: false };

		case 'REQUEST_GET_CUSTOMER':
			return { ...state, isLoading: true };
		case 'RECEIVE_GET_CUSTOMER':
			return { ...state, isLoading: false, state: action.payload };
		case 'FAIL_GET_CUSTOMER':
			return { ...state, isLoading: false };

		case 'REQUEST_GETID_CUSTOMER':
			return { ...state, isLoading: true };
		case 'RECEIVE_GETID_CUSTOMER':
			return { ...state, isLoading: false, state: action.payload };
		case 'FAIL_GETID_CUSTOMER':
			return { ...state, isLoading: false };

		case 'REQUEST_UPDATE_CUSTOMER':
			return { ...state, isLoading: true };
		case 'RECEIVE_UPDATE_CUSTOMER':
			return { ...state, isLoading: false, state: action.payload };
		case 'FAIL_UPDATE_CUSTOMER':
			return { ...state, isLoading: false };

		default:
			return { ...state };
	}
};
