import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tasks: [
		{ _id: 1, subject: "Apple", done: true },
		{ _id: 2, subject: "Banana", done: false },
		{ _id: 3, subject: "Kiwi", done: true },
		{ _id: 4, subject: "Watermelon", done: false },
	],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		add: (state, action) => {
			state.tasks = [
				...state.tasks,
				{
					id: state.tasks[state.tasks.length - 1]._id + 1,
					subject: action.payload,
				},
			];
		},
		del: (state, action) => {
			state.tasks = state.tasks.filter((task) => task._id !== action.payload);
		},
		toggle: (state, action) => {
			state.tasks = state.tasks.map((task) => {
				if (task._id === action.payload) task.done = !task.done;
				return task;
			});
		},
		clear: (state) => {
			state.tasks = state.tasks.filter((item) => !item.done);
		},
	},
});

export const { add, del, toggle, clear } = todoSlice.actions;

export default todoSlice.reducer;
