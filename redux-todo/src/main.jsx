import React from "react";
import ReactDOM from "react-dom/client";
import ThemeApp from "./ThemeApp.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <ThemeApp />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
