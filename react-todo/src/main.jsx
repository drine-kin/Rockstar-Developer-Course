import React from "react";
import ReactDOM from "react-dom/client";
import ThemeApp from "./ThemeApp.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <ThemeApp />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
