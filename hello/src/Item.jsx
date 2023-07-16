export default function Item({ user, remove }) {
	return (
		<li>
			{user.name} &nbsp;&nbsp;
			<button onClick={() => remove(user.id)}>Delete</button>
		</li>
	);
}

// export default Item;
