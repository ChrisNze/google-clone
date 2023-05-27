import { Link } from "react-router-dom";
import icon from "../assets/google_name.png";

const GoogleImg = () => {
	return (
		<>
			<Link to="/" className="gmailText">
				<img src={icon} style={{ width: "7.5rem", marginRight: "0.4rem" }} alt="Gmail_Icon" className="googleImg" />
				<span className="d-inline-block googleName" style={{ fontSize: "2.2rem", transform: "translateY(0.13rem)" }}>
					Account
				</span>
			</Link>
		</>
	);
};

export default GoogleImg;
