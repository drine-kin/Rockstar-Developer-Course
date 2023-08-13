import { useState } from "react";
import Item from "./item";
import Form from "./Form";
import Header from "./Header";

import { Box, Container, List } from "@mui/material";
import MainDrawer from "./MainDrawer";
import { useEffect } from "react";

const url = "http://localhost:8080/tasks";

export default function App() {
	const [tasks, setTasks] = useState([]);

	const [showDrawer, setShowDrawer] = useState(false);

	const [isLoading, setIsLoading] = useState(true);

	const [isError, setIsError] = useState(false);

	const fetchData = async () => {
		const res = await fetch(url);
		if (res.ok) {
			const data = await res.json();
			setTasks(data);
			setIsError(false);
			setIsLoading(false);
		} else {
			setIsError(true);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const addTask = async (subject) => {
		const res = await fetch(url, {
			method: "POST",
			body: JSON.stringify({ subject }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (res.ok) {
			const data = await res.json();
			setTasks([...tasks, data]);
		}
	};

	const deleteTask = async (_id) => {
		const res = await fetch(`${url}/${_id}`, {
			method: "DELETE",
		});

		if (res.ok) {
			setTasks(tasks.filter((task) => task._id !== _id));
		}
	};

	const toggleTask = async (_id) => {
		const res = await fetch(`${url}/${_id}/toggle`, {
			method: "PUT",
		});
		if (res.ok) {
			setTasks(
				tasks.map((task) => {
					if (task._id === _id) {
						task.done = !task.done;
					}
					return task;
				})
			);
		}
	};

	const clear = async () => {
		const res = await fetch(url, { method: "DELETE" });
		if (res.ok) {
			setTasks(tasks.filter((task) => !task.done));
		}
	};

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
				clear={clear}
				toggleDrawer={toggleDrawer}
			/>
			<MainDrawer showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
			<Container>
				{isLoading && <Box sx={{ textAlign: "center", py: 4 }}>Loading...</Box>}
				{isError && <Box sx={{ textAlign: "center", py: 4 }}>Error</Box>}
				<Box sx={{ mx: { lg: 20, md: 10 } }}>
					<Form addTask={addTask} />
					<List sx={{ mt: 4 }}>
						{tasks
							.filter((task) => !task.done)
							.map((task) => {
								return (
									<Item
										key={task._id}
										task={task}
										deleteTask={deleteTask}
										toggleTask={toggleTask}
									/>
								);
							})}
					</List>
					<List>
						{tasks
							.filter((task) => task.done)
							.map((task) => {
								return (
									<Item
										key={task._id}
										task={task}
										deleteTask={deleteTask}
										toggleTask={toggleTask}
									/>
								);
							})}
					</List>
				</Box>
			</Container>
		</>
	);
}
