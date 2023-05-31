import useZustand from "../hooks/useZustand";
import Accordion from "react-bootstrap/Accordion";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChatLeftText } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";

const SomethingElse = () => {
	const { darkMode, darkModeColorWhite } = useZustand();
	return (
		<div className="tipContainer pt-4 " style={{ borderColor: !darkMode && "rgba(255, 255, 255, 0.3)" }}>
			<h1 style={{ fontSize: "2.2rem", fontWeight: "400" }} className="ps-4 ps-sm-5">
				Looking for something else?
			</h1>

			<div className="mt-5 mb-2">
				<Accordion flush>
					<Accordion.Item eventKey="0" style={{ backgroundColor: !darkMode && "#000", color: !darkMode && darkModeColorWhite }}>
						<Accordion.Header>
							<AiOutlineSearch className="icon2" />
							<span>Search Google Account</span>
						</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1" style={{ backgroundColor: !darkMode && "#000", color: !darkMode && darkModeColorWhite }}>
						<Accordion.Header>
							<BiHelpCircle className="icon2" />
							<span>See help options</span>
						</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2" style={{ backgroundColor: !darkMode && "#000", color: !darkMode && darkModeColorWhite }}>
						<Accordion.Header>
							<BsChatLeftText className="icon2" />
							<span>Send feedback</span>
						</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
		</div>
	);
};

export default SomethingElse;
