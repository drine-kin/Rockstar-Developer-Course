import { List } from "@mui/material";
import Form from "./Form";
import Item from "./item";

import React from "react";
import { useSelector } from "react-redux";

import { Box, Container } from "@mui/material";

const Home = () => {
	const tasks = useSelector((state) => state.todo.tasks);

	return (
		<Container>
			<Box sx={{ mx: { lg: 20, md: 10 } }}>
				<Form />
				<List sx={{ mt: 4 }}>
					{tasks
						.filter((task) => !task.done)
						.map((task, index) => {
							return <Item key={index} task={task} />;
						})}
				</List>
				<List>
					{tasks
						.filter((task) => task.done)
						.map((task, index) => {
							return <Item key={index} task={task} />;
						})}
				</List>
			</Box>
		</Container>
	);
};

export default Home;
