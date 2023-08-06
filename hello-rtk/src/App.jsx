import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, del } from "./features/todo/todoSlice";

const App = () => {
	const tasks = useSelector((state) => state.todo.tasks);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Hello RTK</h1>
			<button onClick={() => dispatch(add("Science"))}>Add Item</button>
			<ul>
				{tasks.map((task) => {
					return (
						<li key={task.id}>
							{task.subject}
							<a href="#/" onClick={() => dispatch(del(task.id))}>
								del
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default App;
