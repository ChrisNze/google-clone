import { Link } from "react-router-dom";
import useZustand from "../hooks/useZustand";

const WelcomeNote = ({ message, info }) => {
	const { setSmShow } = useZustand();
	return (
		<div className="text-center mt-3">
			<h1 className="display-4 px-5 px-sm-0 mb-4" style={{ fontWeight: "400" }}>
				{message}
			</h1>
			<p>
				<span>{info} </span>
				<Link
					// to="/modal"
					onClick={() => {
						setSmShow(true);
					}}
					className="text-primary">
					Learn more
				</Link>
			</p>
		</div>
	);
};

export default WelcomeNote;
