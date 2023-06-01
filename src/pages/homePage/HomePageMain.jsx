import privacyCheckImg from "../../assets/privacyCheckImg.png";
import privacyCheckImg2 from "../../assets/privacyCheckImg2.png";
import privacyImg from "../../assets/privacyImg.png";
import securityTipImg from "../../assets/securityTipImg.png";
import ModalPage from "../../components/ModalPage";
import PopUp from "../../components/PopUp";
import ProfilePix from "../../components/ProfilePix";
import SomethingElse from "../../components/SomethingElse";
import TipsComponent from "../../components/TipsComponent";
import WelcomeNote from "../../components/WelcomeNote";
import useZustand from "../../hooks/useZustand";
import useHomeVariables from "./useHomeVariables";
import AnimationOnScroll from "react-animate-on-scroll";

const HomePageMain = () => {
	const {
		message,
		info,
		imageSize,
		heading_1,
		heading_2,
		text,
		linkText,
		heading_1_2,
		heading_2_2,
		text_2,
		linkText_2,
		heading_1_3,
		heading_2_3,
		text_3,
		linkText_3,
		heading,
		link1,
		link2,
		link3,
		text1,
		text2,
		text3,
	} = useHomeVariables();
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
					<AnimationOnScroll animateIn="animate__bounceIn">
						<div className="row g-5 justify-content-center">
							<div className="col-12 col-md-6 col-lg-6 col-xl-6">
								<TipsComponent heading_1={heading_1} heading_2={heading_2} text={text} linkText={linkText} img={privacyImg} />
							</div>
							<div className="col-12 col-md-6 col-lg-6 col-xl-6">
								<TipsComponent heading_1={heading_1_2} heading_2={heading_2_2} text={text_2} linkText={linkText_2} img={securityTipImg} />
							</div>
						</div>
					</AnimationOnScroll>
					<AnimationOnScroll animateIn="animate__bounceIn" animateOut="animate__bounceIn">
						<div className="row my-5 d-none d-sm-block">
							<div className="col-12">
								<TipsComponent
									heading_1={heading_1_3}
									heading_2={heading_2_3}
									text={text_3}
									linkText={linkText_3}
									img={privacyCheckImg}
									marginTop={"mt-4"}
								/>
							</div>
						</div>
						<div className="row my-5 d-block d-sm-none">
							<div className="col-12">
								<TipsComponent
									heading_1={heading_1_3}
									heading_2={heading_2_3}
									text={text_3}
									linkText={linkText_3}
									img={privacyCheckImg2}
									marginTop={"mt-4"}
								/>
							</div>
						</div>
					</AnimationOnScroll>

					<div className="row">
						<div className="col-12">
							<SomethingElse heading={heading} link1={link1} link2={link2} link3={link3} text1={text1} text2={text2} text3={text3} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePageMain;
