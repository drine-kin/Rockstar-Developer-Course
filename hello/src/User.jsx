import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const User = () => {
	const { name } = useParams();
	const navigate = useNavigate();

	return (
		<div>
			<h1>User Profile</h1>
			<p>{name}</p>
			<a href="#/" onClick={() => navigate("/")}>
				&laquo; Go Back
			</a>
		</div>
	);
};

export default User;
