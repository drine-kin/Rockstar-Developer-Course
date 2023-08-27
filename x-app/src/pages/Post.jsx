import { useState } from "react";
import { useEffect } from "react";
import PostCard from "../components/PostCard";
import { Box, CircularProgress, Avatar } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useParams } from "react-router-dom";

const url = "http://localhost:8888/posts";

export default function Post() {
	const [post, setPost] = useState({});
	const [loading, setLoading] = useState(true);

	const { id } = useParams();

	useEffect(() => {
		(async () => {
			const res = await fetch(`${url}/${id}`);
			const data = await res.json();
			setPost(data);
			setLoading(false);
		})();
	}, [id]);

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
					<PostCard key={post._id} post={post} single={true} primary />

					{post.comments.map((comment) => {
						return <PostCard key={comment._id} post={comment} single />;
					})}
				</Box>
			)}
		</>
	);
}
