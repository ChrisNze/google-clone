import privacyImg from "../../assets/privacyImg.png";
import securityTipImg from "../../assets/securityTipImg.png";
import ModalPage from "../../components/ModalPage";
import PopUp from "../../components/PopUp";
import ProfilePix from "../../components/ProfilePix";
import TipsComponent from "../../components/TipsComponent";
import WelcomeNote from "../../components/WelcomeNote";
import useZustand from "../../hooks/useZustand";
import useHomeVariables from "./useHomeVariables";

const HomePageMain = () => {
	const { message, info, imageSize, heading_1, heading_2, text, linkText, heading_1_2, heading_2_2, text_2, linkText_2 } = useHomeVariables();
	const { smShow } = useZustand();
	return (
		<>
			{smShow && <ModalPage />}
			<div className="d-flex align-items-center flex-column col-md-11 col-lg-11 col-xl-12 col-xxl-9 mx-auto mx-xxl-0">
				<div className="mb-5 p-3 p-sm-0">
					<div className="d-flex justify-content-center">
						<ProfilePix imageSize={imageSize} />
					</div>
					<WelcomeNote message={message} info={info} />
					<PopUp />
				</div>

				<div className="container-fluid">
					<div className="row g-5 justify-content-center">
						<div className="col-12 col-md-6 col-lg-6 col-xl-6">
							<TipsComponent heading_1={heading_1} heading_2={heading_2} text={text} linkText={linkText} img={privacyImg} />
						</div>
						<div className="col-12 col-md-6 col-lg-6 col-xl-6">
							<TipsComponent heading_1={heading_1_2} heading_2={heading_2_2} text={text_2} linkText={linkText_2} img={securityTipImg} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePageMain;
