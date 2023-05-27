import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const errorMessage = useRouteError();
	const message = isRouteErrorResponse(errorMessage);
	return (
		<div className="w-50 mx-auto mt-5">
			<h1 className="display-1">Oops................</h1>
			<h1 className="display-2">{message ? "Page Not Found" : "Unexpected Error"}</h1>
			<button className="btn btn-primary mt-5">
				<Link to="/" className="text-light">
					Go back
				</Link>
			</button>
		</div>
	);
};

export default ErrorPage;
