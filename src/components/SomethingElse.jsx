import useZustand from "../hooks/useZustand";
import Accordion from "react-bootstrap/Accordion";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChatLeftText } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";

const SomethingElse = ({ heading, link1, link2, link3, text1, text2, text3 }) => {
	const { darkMode, darkModeColorWhite } = useZustand();
	return (
		<div className="tipContainer pt-4 " style={{ borderColor: !darkMode && "rgba(255, 255, 255, 0.3)" }}>
			<h1 style={{ fontSize: "2.2rem", fontWeight: "400" }} className="ps-4 ps-sm-5">
				{heading}
			</h1>

			<div className="mt-5 mb-2">
				<Accordion flush>
					<Accordion.Item eventKey="0" style={{ backgroundColor: !darkMode && "#000", color: !darkMode && darkModeColorWhite }}>
						<Accordion.Header>
							<AiOutlineSearch className="icon2" />
							<span>{link1}</span>
						</Accordion.Header>
						<Accordion.Body>{text1} </Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1" style={{ backgroundColor: !darkMode && "#000", color: !darkMode && darkModeColorWhite }}>
						<Accordion.Header>
							<BiHelpCircle className="icon2" />
							<span>{link2}</span>
						</Accordion.Header>
						<Accordion.Body>{text2}</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2" style={{ backgroundColor: !darkMode && "#000", color: !darkMode && darkModeColorWhite }}>
						<Accordion.Header>
							<BsChatLeftText className="icon2" />
							<span>{link3}</span>
						</Accordion.Header>
						<Accordion.Body>{text3}</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
		</div>
	);
};

export default SomethingElse;
