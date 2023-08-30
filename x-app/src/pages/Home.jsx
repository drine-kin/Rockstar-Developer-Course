import { useState } from "react";
import { useEffect } from "react";
import PostCard from "../components/PostCard";
import { Box, CircularProgress } from "@mui/material";

const url = "http://localhost:8888/posts";

export default function Home() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const token = localStorage.getItem("token");

			const res = await fetch(url, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const data = await res.json();
			setPosts(data);
			setLoading(false);
		})();
	}, []);

	return (
		<>
			{loading ? (
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "80vh",
					}}>
					<CircularProgress disableShrink />
				</Box>
			) : (
				posts.map((post) => {
					return <PostCard key={post._id} post={post} />;
				})
			)}
		</>
	);
}
