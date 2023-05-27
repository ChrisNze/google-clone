import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsList } from "react-icons/bs";
import NavBar from "./NavBar";
import GoogleImg from "./GoogleImg";
import useZustand from "../hooks/useZustand";

const MainMenu = () => {
	const { darkMode, darkModeOff, darkModeColorWhite } = useZustand();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<button className="btn p-0" onClick={handleShow}>
				<BsList className="icon" />
			</button>

			<Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: !darkMode && "#000", color: !darkMode && darkModeColorWhite }}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>
						{/* <GoogleImg /> */}
						<div onClick={handleClose}>
							<GoogleImg />
						</div>
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<div onClick={handleClose}>
						<NavBar />
					</div>
				</Offcanvas.Body>
				<button className="bg-primary text-light py-2" onClick={handleClose}>
					Close
				</button>
			</Offcanvas>
		</>
	);
};

export default MainMenu;
