import { useState } from "react";
import { useEffect } from "react";
import PostCard from "../components/PostCard";
import { Box, CircularProgress, Avatar } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useParams } from "react-router-dom";

const url = "http://localhost:8888/users";

export default function Profile() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	const { handle } = useParams();

	useEffect(() => {
		(async () => {
			const res = await fetch(`${url}/${handle}`);
			const data = await res.json();
			setPosts(data);
			setLoading(false);
		})();
	}, [handle]);

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
				<Box>
					<Box
						sx={{
							background: "grey",
							height: 200,
							display: "flex",
							alignItems: "flex-end",
							justifyContent: "center",
							mb: 12,
						}}>
						<Avatar
							sx={{ background: blue["500"], width: 128, height: 128, mb: -6 }}>
							{handle.charAt(0).toUpperCase()}
						</Avatar>
					</Box>
					{posts.map((post) => {
						return <PostCard key={post._id} post={post} />;
					})}
				</Box>
			)}
		</>
	);
}
