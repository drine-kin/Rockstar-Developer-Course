import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, TouchableOpacity } from "react-native";

import { Header, Text, Input, ListItem } from "@rneui/base";

import Ionicons from "@expo/vector-icons/Ionicons";

import { useState, useRef, useEffect } from "react";

const url = "http://192.168.99.128:8080/tasks";

export default function App() {
	const [tasks, setTasks] = useState([]);

	// const fetchTasks = async () => {
	// 	const res = await fetch(url);
	// 	const data = await res.json();
	// 	console.log(data);
	// 	setTasks(data);
	// };

	useEffect(() => {
		(async () => {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
			setTasks(data);
		})();
	}, []);

	const [text, setText] = useState("");
	const inputRef = useRef();

	const addTask = () => {
		if (!text) return false;

		setTasks([
			...tasks,
			{
				_id: tasks.length > 0 ? tasks[tasks.length - 1]._id + 1 : 1,
				subject: text,
				done: false,
			},
		]);

		setText("");
		inputRef.current.focus();
	};

	return (
		<SafeAreaProvider>
			<View>
				<Header
					leftComponent={<Ionicons name="menu" size={32} color="#fff" />}
					centerComponent={
						<Text style={{ fontSize: 21, color: "#fff" }}>Todo Native</Text>
					}
					rightComponent={
						<TouchableOpacity
							onPress={() => {
								setTasks(tasks.filter((task) => !task.done));
							}}>
							<Ionicons name="checkmark-done" size={25} color="#fff" />
						</TouchableOpacity>
					}
				/>

				<View style={{ padding: 20 }}>
					<Input
						placeholder="New Task"
						value={text}
						onChangeText={setText}
						ref={inputRef}
						onSubmitEditing={() => addTask()}
						rightIcon={
							<TouchableOpacity onPress={() => addTask()}>
								<Ionicons name="add" size={24} />
							</TouchableOpacity>
						}
					/>
				</View>
				<View style={{ paddingHorizontal: 20 }}>
					{tasks
						.filter((task) => !task.done)
						.map((item) => {
							return (
								<ListItem key={item._id}>
									<TouchableOpacity
										onPress={() =>
											setTasks(
												tasks.map((task) => {
													if (task._id === item._id) {
														task.done = !task.done;
													}
													return task;
												})
											)
										}>
										<Ionicons name="square-outline" size={24} />
									</TouchableOpacity>
									<ListItem.Content>
										<ListItem.Title>{item.subject}</ListItem.Title>
									</ListItem.Content>
									<TouchableOpacity
										onPress={() => {
											setTasks(tasks.filter((task) => task._id !== item._id));
										}}>
										<Ionicons name="trash" size={24} />
									</TouchableOpacity>
								</ListItem>
							);
						})}
				</View>
				<View style={{ paddingHorizontal: 20 }}>
					{tasks
						.filter((task) => task.done)
						.map((item) => {
							return (
								<ListItem key={item._id}>
									<TouchableOpacity
										onPress={() =>
											setTasks(
												tasks.map((task) => {
													if (task._id === item._id) {
														task.done = !task.done;
													}
													return task;
												})
											)
										}>
										<Ionicons name="checkmark" size={24} color="green" />
									</TouchableOpacity>
									<ListItem.Content>
										<ListItem.Title>{item.subject}</ListItem.Title>
									</ListItem.Content>
									<TouchableOpacity
										onPress={() => {
											setTasks(tasks.filter((task) => task._id !== item._id));
										}}>
										<Ionicons name="trash" size={24} />
									</TouchableOpacity>
								</ListItem>
							);
						})}
				</View>
			</View>
			<StatusBar style="auto" />
		</SafeAreaProvider>
	);
}
