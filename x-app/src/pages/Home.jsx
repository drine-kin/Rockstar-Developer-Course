import { useState } from "react";
import { useEffect } from "react";
import PostCard from "../components/PostCard";

const url = "http://localhost:8888/posts";

export default function Home() {
	const [posts, setPosts] = useState([]);

	const fetchPosts = async () => {
		const res = await fetch(url);
		const data = await res.json();
		setPosts(data);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<>
			{posts.map((post) => {
				return <PostCard key={post._id} post={post} />;
			})}
		</>
	);
}
