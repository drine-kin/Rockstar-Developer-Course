import { Avatar, Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function About() {
	return (
		<>
			<Container>
				<Box sx={{ mx: { lg: 20, md: 10 } }}>
					<Typography variant="h1">About Us</Typography>
					<Typography variant="p">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ab a
						illum. Fuga soluta perferendis mollitia consequuntur aliquid facilis
						enim obcaecati ad rem labore, cum asperiores molestiae tempore
						quidem distinctio. Accusamus consequuntur quasi vero est sunt eum
						distinctio minima, laboriosam error officia reiciendis velit facilis
						ea fuga! Animi cumque numquam error eum, voluptatum quasi, rem ut
						adipisci cupiditate saepe voluptatibus. Totam dolorem doloribus
						delectus atque voluptate porro maiores ducimus neque velit
						temporibus perspiciatis error asperiores in explicabo, architecto
						provident rem quaerat qui sed laudantium minus eaque at! Repellat,
						fugit fuga!
					</Typography>
					<Box sx={{ display: "flex", my: 3 }}>
						<Avatar>A</Avatar>
						<Avatar>B</Avatar>
						<Avatar>C</Avatar>
					</Box>
					<Link to="/">Home</Link>
				</Box>
			</Container>
		</>
	);
}
