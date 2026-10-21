export const initialUserData = {
	username: "",
	isLoggedIn: false,
	loginTime: null,
};

export const getUserInitialData = () => {
	const userData = localStorage.getItem("userData");

	if (!userData) {
		return initialUserData;
	}

	try {
		return JSON.parse(userData);
	} catch (error) {
		localStorage.removeItem("userData");
		return initialUserData;
	}
};

export const userReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				username: action.payload.username,
				loginTime: action.payload.loginTime,
				isLoggedIn: true,
			};
		default:
			return state;
	}
};
