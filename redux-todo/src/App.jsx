import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";

import MainDrawer from "./MainDrawer";
import { Outlet } from "react-router-dom";
import { fetchTasks } from "./features/todo/todoSlice";

export default function App() {
	const { tasks, loading } = useSelector((state) => state.todo);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTasks());
	}, []);

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

			{loading && (
				<div style={{ textAlign: "center", marginBottom: 20 }}>Loading...</div>
			)}
			<MainDrawer showDrawer={showDrawer} toggleDrawer={toggleDrawer} />

			<Outlet />
		</>
	);
}
