import { useState } from "react";
import Item from "./item";
import Form from "./Form";
import Header from "./Header";

import { Box, Container, List } from "@mui/material";
import MainDrawer from "./MainDrawer";

export default function App() {
	const [tasks, setTasks] = useState([
		{ _id: 1, subject: "Apple", done: true },
		{ _id: 2, subject: "Banana", done: false },
		{ _id: 3, subject: "Kiwi", done: true },
		{ _id: 4, subject: "Watermelon", done: false },
	]);

	const [showDrawer, setShowDrawer] = useState(false);

	const clear = () => {
		setTasks(tasks.filter((task) => !task.done));
	};

	const addTask = (subject) => {
		const _id = tasks[tasks.length - 1]._id + 1;
		setTasks([...tasks, { _id, subject, done: false }]);
	};

	const deleteTask = (_id) => {
		setTasks(tasks.filter((task) => task._id !== _id));
	};

	const toggleTask = (_id) => {
		setTasks(
			tasks.map((task) => {
				if (task._id === _id) {
					task.done = !task.done;
				}
				return task;
			})
		);
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
