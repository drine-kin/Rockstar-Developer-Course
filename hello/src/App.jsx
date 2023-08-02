import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
	return (
		<div>
			Home
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					User
					<ul>
						<li>
							<Link to="/user/alice">Alice</Link>
						</li>
						<li>
							<Link to="/user/Bob">Bob</Link>
						</li>
					</ul>
				</li>
			</ul>
			<hr />
			<Outlet />
		</div>
	);
};

export default App;
