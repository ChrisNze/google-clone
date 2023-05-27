import Modal from "react-bootstrap/Modal";
import useZustand from "../hooks/useZustand";

function ModalPage() {
	const { smShow, setSmShow } = useZustand();

	return (
		<Modal size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm">
			<Modal.Header closeButton>
				<Modal.Title id="example-modal-sizes-title-sm">Page Title</Modal.Title>
			</Modal.Header>
			<Modal.Body>Page coming up soon</Modal.Body>
		</Modal>
	);
}

export default ModalPage;
