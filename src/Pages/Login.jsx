import {
	Container,
	Form,
	Button,
	Card,
	Alert,
	FloatingLabel,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
import USERS from "../Data/Users.json";
import { UserContext } from "../App";
const Login = () => {
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [loginError, setLoginError] = useState("");
	const { userState, userDispatch } = useContext(UserContext);

	const checkUserExists = () => {
		if (
			username.trim() === "" ||
			password.trim() === "" ||
			username === null ||
			password === null
		) {
			setLoginError("Niste unijeli potrebne kredencijale");
			return;
		}
		const userExists = USERS.some(
			(user) =>
				user.username.trim() === username.trim() &&
				user.password.trim() === password.trim(),
		);

		if (!userExists) {
			setLoginError("Nismo pronašli korisnika sa unijetim kredencijalima");
		} else {
			setLoginError("");
			userDispatch({
				type: "LOGIN",
				payload: {
					username: username,
					loginTime: new Date().getTime(),
				},
			});
		}
	};

	useEffect(() => {
		if (userState.isLoggedIn) {
			localStorage.setItem("userData", JSON.stringify(userState));
		}
	}, [userState]);
	return (
		<>
			{!userState.isLoggedIn && (
				<Container
					fluid
					className="d-flex align-items-center justify-content-center min-vh-100 bg-light"
				>
					<Card
						className="shadow-sm border-0 w-100"
						style={{ maxWidth: "400px" }}
					>
						<Card.Body className="p-4">
							<h2 className="text-center fw-bold mb-1">Login</h2>
							<p className="text-center text-muted mb-4">
								Prijavite se na svoj račun
							</p>

							{loginError && (
								<Alert variant="danger" className="py-2">
									{loginError}
								</Alert>
							)}

							<Form>
								<FloatingLabel
									controlId="username"
									label="Username"
									className="mb-3"
								>
									<Form.Control
										type="text"
										placeholder="Unesite username"
										value={username}
										onChange={(e) => setUserName(e.target.value)}
									/>
								</FloatingLabel>

								<FloatingLabel
									controlId="password"
									label="Password"
									className="mb-4"
								>
									<Form.Control
										type="password"
										placeholder="Unesite password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</FloatingLabel>

								<Button
									onClick={checkUserExists}
									variant="primary"
									type="button"
									size="lg"
									className="w-100"
								>
									Login
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Container>
			)}
		</>
	);
};

export default Login;
