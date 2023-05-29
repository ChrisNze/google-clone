import { MdClose } from "react-icons/md";
import popUpImg from "../assets/popUpImg.png";
import useZustand from "../hooks/useZustand";
import PopUpCloseMessage from "./PopUpCloseMessage";
const PopUp = () => {
	const { darkMode, popUp, popUpOff, setSmShow } = useZustand();
	return (
		<>
			{popUp ? (
				<div
					className="col-11 col-sm-7 col-xl-8 col-xxl-7 pt-3 pb-5 px-4 px-sm-5 mx-auto mt-5 popUpContainer"
					style={{ border: !darkMode && "1px solid rgba(255, 255, 255, 0.3)" }}>
					<div className="d-flex justify-content-between align-items-center mb-3">
						<h1 className="" style={{ fontSize: "2.3rem" }}>
							Safer sign-in with Google
						</h1>
						<div className="iconContainer">
							<MdClose className="icon" onClick={() => popUpOff(false)} />
						</div>
					</div>
					<div className="d-flex">
						<div className="iconContainer">
							<img src={popUpImg} alt="acctImage" className="acctImage" />
						</div>
						<p className="ps-4">Explore how Google helps you easily and securely sign in to the apps and services you love</p>
					</div>
					<div className="d-flex justify-content-end">
						<button className="btn btn-primary" style={{ padding: ".6rem 2.5rem" }} onClick={() => setSmShow(true)}>
							Learn more
						</button>
					</div>
				</div>
			) : (
				<PopUpCloseMessage />
			)}
		</>
	);
};

export default PopUp;
