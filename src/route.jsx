import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ModalPage from "./components/ModalPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import DataAndPrivacy from "./pages/dataAndPrivacyPage/DataAndPrivacy";
import HomePage from "./pages/homePage/HomePage";
import MainPage from "./pages/mainPage";
import PaymentPage from "./pages/paymentAndSubscriptionPage/PaymentPage";
import PersonalPage from "./pages/personalAndSharingPage/PersonalPage";
import InfoPage from "./pages/personalInfoPage/InfoPage";
import SecurityPage from "./pages/securityPage/SecurityPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "",
				element: <MainPage />,
				children: [
					{ index: true, element: <HomePage /> },
					{ path: "/aboutUs", element: <AboutPage /> },
					{ path: "/payment", element: <PaymentPage /> },
					{ path: "/personal-and-sharing", element: <PersonalPage /> },
					{ path: "/personal-info", element: <InfoPage /> },
					{ path: "/security", element: <SecurityPage /> },
					{ path: "/data-and-privacy", element: <DataAndPrivacy /> },
					{ path: "/modal", element: <ModalPage /> },
				],
			},
		],
	},
]);
export default router;
