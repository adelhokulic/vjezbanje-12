export const initialUserData = {
	username: "",
	isLoggedIn: false,
	loginTime: null,
};

export const getUserInitialData = () => {
	const userData = localStorage.getItem("userData");

	return userData ? JSON.parse(userData) : initialUserData;
};

export const userReducer = (state, action) => {
	switch (action.type) {
		case "SET_USERNAME":
			return { ...state, username: action.payload };
		case "SET_IS_LOGEDIN":
			return { ...state, isLoggedIn: action.payload };
		case "SET_LOGIN_TIME":
			return { ...state, loginTime: action.payload };
		default:
			return state;
	}
};
