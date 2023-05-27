import { MdClose } from "react-icons/md";
import useZustand from "../hooks/useZustand";
const PopUpCloseMessage = () => {
	const { popUpOff, suggestionClosed, suggestionClosedOff } = useZustand();

	return (
		<>
			{suggestionClosed && (
				<div className="suggestionClosedContainer bg-dark text-light">
					<h1 className="fs-4 d-flex align-items-center">
						<span>Suggestion closed. </span>
						<button className="btn text-primary text-underline" onClick={() => popUpOff(true)}>
							Undo
						</button>
					</h1>
					<div className="iconContainer">
						<MdClose className="icon" onClick={() => suggestionClosedOff(false)} />
					</div>
				</div>
			)}
		</>
	);
};

export default PopUpCloseMessage;
