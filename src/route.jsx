import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ModalPage from "./components/ModalPage";
import MainPageMenu from "./pages/MainPageMenu";
import AboutPage from "./pages/aboutPage/AboutPage";
import DataAndPrivacy from "./pages/dataAndPrivacyPage/DataAndPrivacy";
import ErrorPage from "./pages/errorPage/ErrorPage";
import HomePageMain from "./pages/homePage/HomePageMain";
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
				path: "/",
				element: <MainPageMenu />,
				children: [
					{ path: "/", element: <HomePageMain /> },
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
