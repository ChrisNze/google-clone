import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiToggleRight } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { MdLockOutline, MdOutlinePeople, MdPayment } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useZustand from "../hooks/useZustand";
const NavBar = () => {
	const { darkMode } = useZustand();

	const links = [
		{ id: 1, name: "Home", link: "/", icon: <FaUserCircle /> },
		{ id: 2, name: "Personal info", link: "/personal-info", icon: <CiCalendarDate /> },
		{ id: 3, name: "Data & privacy", link: "/data-and-privacy", icon: <BiToggleRight /> },
		{ id: 4, name: "Security", link: "/security", icon: <MdLockOutline /> },
		{ id: 5, name: "Personal & sharing", link: "/personal-and-sharing", icon: <MdOutlinePeople /> },
		{ id: 6, name: "Payment & subscription", link: "/payment", icon: <MdPayment /> },
		{ id: 7, name: "About", link: "/aboutUs", icon: <AiOutlineInfoCircle /> },
	];
	return (
		<>
			<ul
				className={`nav-pills ${
					!darkMode && "nav-pills-darkMode"
				} pb-xl-3 ps-xl-0 d-flex justify-content-between align-items-center align-items-lg-stretch flex-column flex-md-row flex-xl-column`}>
				{links.map((items) => (
					<NavLink
						key={items.id}
						className={`${items.name === "About" && "d-xl-none"} ${
							darkMode ? "nav-link" : "nav-link-darkMode"
						} nav-link-more mb-3 mb-md-0 py-xl-3 ps-xl-5 d-flex`}
						to={items.link}>
						<span className="me-4 d-none d-xl-flex align-items-center" style={{ fontSize: "2.5rem" }}>
							{items.icon}
						</span>
						<span className="icon2 pb-2 pb-md-4 pb-xl-0">{items.name}</span>
					</NavLink>
				))}
			</ul>
			<NavLink className="nav-link nav-link-more py-xl-3 ps-xl-5 d-none d-xl-flex" to="/aboutUs">
				<span className="me-4 d-flex align-items-center fs-1">
					<AiOutlineInfoCircle style={{ fontSize: "2.3rem" }} />
				</span>
				<span>About</span>
			</NavLink>
		</>
	);
};

export default NavBar;
