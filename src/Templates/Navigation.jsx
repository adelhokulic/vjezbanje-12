import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";

const Navigation = () => {
	const { userState } = useContext(UserContext);
	const logoutUser = () => {
		localStorage.removeItem("userData");
		window.location.reload();
	};
	return (
		<>
			<Navbar bg="dark" data-bs-theme="dark" expand="sm" className="shadow-sm">
				<Container>
					<Navbar.Brand as={Link} to="/" className="fw-bold">
						User Panel
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="main-navbar" />
					<Navbar.Collapse id="main-navbar">
						<Nav className="ms-auto">
							{!userState.isLoggedIn && (
								<Nav.Link as={Link} to="/login">
									Login
								</Nav.Link>
							)}
							{userState.isLoggedIn && (
								<Nav.Link href="#logout" onClick={logoutUser}>
									Logout
								</Nav.Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
