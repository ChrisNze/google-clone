const useHomeVariables = () => {
	const pageInformation = {
		message: "Welcome, Christian Nzeanorue",
		info: "Manage your info, privacy, and security to make Google work better for you.",
	};
	const { message, info } = pageInformation;

	const imageSize = {
		width: "10rem",
		height: "10rem",
	};

	const tipText = {
		heading_1: "Privacy &",
		heading_2: "personalization",
		text: "See the data in your Google Account and choose what activity is saved to personalize your Google experience",
		linkText: "Manage your data & privacy",
	};

	const tipText2 = {
		heading_1_2: "You have security tips",
		heading_2_2: "",
		text_2: "Security tips found in the Security Checkup",
		linkText_2: "Review security tips",
	};

	const tipText3 = {
		heading_1_3: "Privacy suggestions available",
		heading_2_3: "",
		text_3: "Take the Privacy Checkup and choose the settings that are right for you",
		linkText_3: "Review suggestion (1)",
	};

	const { heading_1, heading_2, text, linkText } = tipText;
	const { heading_1_2, heading_2_2, text_2, linkText_2 } = tipText2;
	const { heading_1_3, heading_2_3, text_3, linkText_3 } = tipText3;

	return {
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
	};
};

export default useHomeVariables;
