import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import useZustand from "../hooks/useZustand";
import MainMenu from "../components/MainMenu";

const MainPageMenu = () => {
	const { setSearchOn } = useZustand();
	return (
		<>
			<div className="container-fluid mt-0 mt-md-3 p-0" onClick={() => setSearchOn(true)}>
				<div className="p-0 d-md-none">
					<MainMenu />
				</div>
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

export default MainPageMenu;
