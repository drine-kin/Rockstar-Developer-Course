import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";

import { Box, Container, List } from "@mui/material";
import MainDrawer from "./MainDrawer";
import { Outlet } from "react-router-dom";

export default function App() {
	const tasks = useSelector((state) => state.todo.tasks);

	const [showDrawer, setShowDrawer] = useState(false);

	const toggleDrawer = () => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setShowDrawer(!showDrawer);
	};

	return (
		<>
			<Header
				count={tasks.filter((task) => !task.done).length}
				toggleDrawer={toggleDrawer}
			/>
			<MainDrawer showDrawer={showDrawer} toggleDrawer={toggleDrawer} />

			<Outlet />
		</>
	);
}
