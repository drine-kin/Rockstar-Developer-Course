import {
	IconButton,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import {
	Delete as DeleteIcon,
	CheckBoxOutlineBlank as TodoIcon,
	Check as CheckIcon,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { del, toggle } from "./features/todo/todoSlice";

export default function Item({ task }) {
	const dispatch = useDispatch();
	return (
		<ListItem>
			<ListItemIcon>
				<IconButton onClick={() => dispatch(toggle(task._id))}>
					{task.done ? <CheckIcon color="success" /> : <TodoIcon />}
				</IconButton>
			</ListItemIcon>

			<ListItemText primary={task.subject} />

			<ListItemIcon>
				<IconButton onClick={() => dispatch(del(task._id))}>
					<DeleteIcon color="error" />
				</IconButton>
			</ListItemIcon>
		</ListItem>
	);
}
