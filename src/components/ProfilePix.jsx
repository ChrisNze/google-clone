import acctImage from "../assets/myPix.jpg";
const ProfilePix = ({ imageSize, imageSize2 }) => {
	return (
		<div className="iconContainer">
			<img src={acctImage} alt="acctImage" className={`acctImage ${imageSize2}`} style={imageSize} />
		</div>
	);
};

export default ProfilePix;
