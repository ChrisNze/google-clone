import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainPage = () => {
	return (
		<>
			<div className="container-fluid mt-3 p-0">
				<div className="row g-0 g-xl-5">
					<div className="col-12 col-xl-3 pages_container d-none d-md-block">
						<NavBar />
					</div>
					<div className="col-12 col-xl-9 p-xl-5 p-xxl-0">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default MainPage;
