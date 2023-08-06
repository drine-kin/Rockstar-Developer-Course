import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tasks: [
		{ id: 1, subject: "English" },
		{ id: 2, subject: "Math" },
		{ id: 3, subject: "Myanmar" },
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
					id: state.tasks[state.tasks.length - 1].id + 1,
					subject: action.payload,
				},
			];
		},
		del: (state, action) => {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload);
		},
	},
});

export const { add, del } = todoSlice.actions;

export default todoSlice.reducer;
