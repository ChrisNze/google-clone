import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ModalPage from "./components/ModalPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import DataAndPrivacy from "./pages/dataAndPrivacyPage/DataAndPrivacy";
import ErrorPage from "./pages/errorPage/ErrorPage";
// import HomePage from "./pages/homePage/HomePage";
import PaymentPage from "./pages/paymentAndSubscriptionPage/PaymentPage";
import PersonalPage from "./pages/personalAndSharingPage/PersonalPage";
import InfoPage from "./pages/personalInfoPage/InfoPage";
import SecurityPage from "./pages/securityPage/SecurityPage";
import MainPageMenu from "./pages/MainPageMenu";

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
					{ path: "/", element: <AboutPage /> },
					// { path: "/aboutUs", element: <AboutPage /> },
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
