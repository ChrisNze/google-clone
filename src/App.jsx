import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiHelpCircle, BiToggleRight } from "react-icons/bi";
import { FiArrowLeft } from "react-icons/fi";
import { IoApps } from "react-icons/io5";
import { MdToggleOff } from "react-icons/md";
import { Outlet } from "react-router-dom";
import GoogleImg from "./components/GoogleImg";
import ProfilePix from "./components/ProfilePix";
import MainMenu from "./components/MainMenu";
import useZustand from "./hooks/useZustand";

const App = () => {
	const [search, setSearch] = useState("");
	const [searchOn, setSearchOn] = useState(true);
	const { darkMode, darkModeOff, darkModeColorWhite } = useZustand();

	const containerStyle = {
		backgroundColor: darkMode ? "#fff" : "#000",
		color: !darkMode && darkModeColorWhite,
		minHeight: "100vh",
		width: "100%",
		overflow: "hidden",
		transition: "all .5s",
	};

	const imageSize = {
		width: "4.5rem",
		height: "4.5rem",
	};
	return (
		<div style={containerStyle}>
			<div className="container-fluid py-3">
				<div className="row d-flex px-sm-3">
					{searchOn && (
						<div className="col-2 d-flex align-items-center google" style={{ width: "fit-content" }}>
							{/* Here the width style overwrites the col-2 width of 25%  */}
							<GoogleImg />
						</div>
					)}

					<div className={`col-6 col-xxl-6 ${searchOn ? "d-none" : "d-block"} d-md-block p-0 ms-md-4`}>
						<form action="#" className="formContainer">
							{searchOn ? (
								<AiOutlineSearch className="searchIcon" title="Search Icon" style={{ color: !darkMode && "rgba(48, 47,47, 0.9)" }} />
							) : (
								<FiArrowLeft className="searchIcon" title="Arrow Icon" style={{ color: !darkMode && "rgba(48, 47,47, 0.9)" }} />
							)}
							<input
								type="text"
								className="form-control"
								style={{ padding: "1.2rem 0 1.2rem 4rem" }}
								placeholder="Search Google Account"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
						</form>
					</div>

					<div className="col-2 d-flex justify-content-end ms-auto align-items-center">
						<div className="iconContainer">
							<AiOutlineSearch className="icon heading-icon d-block d-md-none" title="Search Icon" onClick={() => setSearchOn(!searchOn)} />
						</div>

						<div className="iconContainer">
							{darkMode ? (
								<BiToggleRight className="icon heading-icon" title="DarkMode" onClick={darkModeOff} />
							) : (
								<MdToggleOff className="icon heading-icon" title="LightMode" onClick={darkModeOff} />
							)}
						</div>
						<div className="iconContainer">
							<BiHelpCircle className="icon heading-icon" />
						</div>
						<div className="iconContainer">
							<IoApps className="icon heading-icon" />
						</div>
						<ProfilePix imageSize={imageSize} imageSize2="heading-img" />
					</div>
				</div>
			</div>
			<div className="p-0 d-md-none">
				<MainMenu />
			</div>

			<div className="route pb-4">
				<Outlet />
			</div>
		</div>
	);
};

export default App;
