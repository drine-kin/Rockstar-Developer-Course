"use client";
import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

export default function ListPage({ data }) {
	const input = useRef();
	const [items, setItems] = useState(data);

	useEffect(() => {
		(async () => {
			const res = await fetch("http://localhost:8080/tasks");
			const tasksData = await res.json();
			setItems(tasksData);
		})();
	}, [items]);

	const add = () => {
		const subject = input.current.value;
		const newUuid = uuid();
		setItems([...items, { _id: newUuid, subject }]);
	};

	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					add();
				}}>
				<input type="text" ref={input} className="border-black" />
				<button>Add</button>
			</form>
			<ul>
				{items.map((item) => {
					return <li key={item._id}>{item.subject}</li>;
				})}
			</ul>
		</>
	);
}
