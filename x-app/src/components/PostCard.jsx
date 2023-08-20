import React from "react";
import {
	Card,
	CardActionArea,
	CardContent,
	Box,
	Typography,
	Avatar,
} from "@mui/material";

const PostCard = ({ post }) => {
	return (
		<Card sx={{ mb: 1 }} variant="outlined">
			<CardActionArea>
				<CardContent sx={{ display: "flex", p: 2 }}>
					<Box sx={{ mr: 3 }}>
						<Avatar
							alt="Profile Picture"
							sx={{
								width: 64,
								height: 64,
								bgcolor: "green",
							}}
						/>
					</Box>
					<Box>
						<Box sx={{ mb: 1 }}>
							<Typography sx={{ mr: 1 }} component="span">
								<b>{post.user && post.user[0].name}</b>
							</Typography>

							<Typography component="span" sx={{ color: "grey" }}>
								@{post.user && post.user[0].handle}
							</Typography>

							<Typography component="span" sx={{ ml: 1, color: "green" }}>
								<small>{post.created}</small>
							</Typography>
						</Box>

						<Typography variant="subtitle1" color="text.secondary">
							{post.body}
						</Typography>
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default PostCard;
