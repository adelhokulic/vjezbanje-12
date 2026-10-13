import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Navigation from "./Templates/Navigation";
import { createContext, useReducer } from "react";
import { getUserInitialData, userReducer } from "./Reducers/User";
export const UserContext = createContext();

function App() {
	const [userState, userDispatch] = useReducer(
		userReducer,
		getUserInitialData(),
	);

	return (
		<>
			<BrowserRouter>
				<UserContext.Provider value={{ userState, userDispatch }}>
					<Navigation />
					<Routes>
						<Route path="/login" element={<Login />} />
					</Routes>
				</UserContext.Provider>
			</BrowserRouter>
		</>
	);
}

export default App;
