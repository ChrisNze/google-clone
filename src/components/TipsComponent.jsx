import { Link } from "react-router-dom";
import useZustand from "../hooks/useZustand";
const TipsComponent = ({ heading_1, heading_2, text, linkText, img, marginTop }) => {
	const { setSmShow, darkMode } = useZustand();
	return (
		<Link to="/" onClick={() => setSmShow(true)}>
			<div
				className="pt-4 tipContainer h-100 d-flex flex-column justify-content-between"
				style={{ borderColor: !darkMode && "rgba(255, 255, 255, 0.3)" }}>
				<div className="d-flex px-4 px-sm-5 justify-content-between">
					<div className="me-4">
						<h1 style={{ fontSize: "2.2rem", fontWeight: "400" }}>
							<span className="d-block">{heading_1}</span>
							<span className="d-block">{heading_2}</span>
						</h1>
						<p className="py-2" style={{ fontSize: "1.4rem" }}>
							{text}
						</p>
					</div>
					<div className="iconContainer">
						<img src={img} alt="privacyImgage" className="tipImages" />
					</div>
				</div>
				<div className={`py-3 px-5 ${marginTop} tipContainer_sub`} style={{ borderTopColor: !darkMode && "rgba(255, 255, 255, 0.3)" }}>
					<p className="text-primary">{linkText}</p>
				</div>
			</div>
		</Link>
	);
};

export default TipsComponent;
