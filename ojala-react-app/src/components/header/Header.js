import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import ojala_logo from "assets/ojala_logo.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
	let location = useLocation();
	
	return (
		<Container fluid className="my-1">
			<Row>
				
				<Col
					xs={4}
					md={2}
					xl={1}
					className="text-center d-flex align-self-center"
				>
					<Image className="header-logo" src={ojala_logo} fluid />
				</Col>

				<Col
					xs={8}
					md={10}
					xl={11}
					className="d-flex flex-wrap justify-content-end align-self-center"
				>
					<Button className="me-1">
						{location.pathname === "/" ? (
							<Link
								to={"/contact"}
								className="link-light link-underline-opacity-0"
							>
								Contact
							</Link>
						) : (
							<Link to={"/"} className="link-light link-underline-opacity-0">
								Home
							</Link>
						)}
					</Button>

					<Dropdown>
						<Dropdown.Toggle id="dropdown-basic">
							<i className="bi bi-translate icon-lg"></i>
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Castellano</Dropdown.Item>
							<Dropdown.Item href="#/action-2">عربي</Dropdown.Item>
							<Dropdown.Item href="#/action-3">English</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

				</Col>

			</Row>
		</Container>
	);
}

export default Header;