import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsList } from "react-icons/bs";
import NavBar from "./NavBar";
import GoogleImg from "./GoogleImg";
import useZustand from "../hooks/useZustand";
import { MdClose } from "react-icons/md";

const MainMenu = () => {
	const { darkMode, darkModeColorWhite } = useZustand();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<button className="btn p-0" onClick={handleShow}>
				<BsList className="icon" style={{ color: !darkMode && darkModeColorWhite }} />
			</button>

			<Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: !darkMode && "#000", color: !darkMode && darkModeColorWhite }}>
				<Offcanvas.Header>
					<Offcanvas.Title>
						{/* The div with onClick is to close the offCanvas when we click on any link*/}
						<div onClick={handleClose}>
							<GoogleImg />
						</div>
					</Offcanvas.Title>
					<div>
						<MdClose className="icon" onClick={handleClose} />
					</div>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<div>
						<NavBar close={handleClose} />
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
