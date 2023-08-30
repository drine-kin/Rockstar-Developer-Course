import {
	Box,
	Drawer,
	Avatar,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";

import {
	Home as HomeIcon,
	Login as LoginIcon,
	PersonAddAlt as PersonAddAltIcon,
	Person as UserIcon,
	Logout as LogoutIcon,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../ThemedApp";

export default function MainDrawer({ showDrawer, toggleDrawer }) {
	const navigate = useNavigate();

	const { auth, setAuth, authUser, setAuthUser } = useContext(AuthContext);

	console.log(auth, "  ", authUser);

	return (
		<div>
			<Drawer anchor="left" open={showDrawer} onClose={toggleDrawer}>
				<Box sx={{ width: 300 }}>
					<Box
						sx={{
							height: 180,
							background: "#345",
							display: "flex",
							alignItems: "end",
						}}>
						<Avatar
							sx={{
								width: 98,
								height: 98,
								ml: 3,
								mb: -5,
								background: "#59f",
							}}>
							{auth ? authUser.handle.charAt(0).toUpperCase() : "U"}
						</Avatar>
						{auth && (
							<>
								<Typography variant="p" sx={{ ml: 3, mt: 3, color: "grey" }}>
									{auth ? authUser.name : "U"}
								</Typography>
								<Typography variant="p" sx={{ ml: 1, color: "grey" }}>
									@{auth && authUser.handle}
								</Typography>
							</>
						)}
					</Box>

					<List sx={{ mt: 10 }}>
						{auth && (
							<>
								<ListItem>
									<ListItemButton
										onClick={() => {
											navigate("/");
											toggleDrawer();
										}}>
										<ListItemIcon>
											<HomeIcon />
										</ListItemIcon>
										<ListItemText primary="Home" />
									</ListItemButton>
								</ListItem>
								<ListItem>
									<ListItemButton
										onClick={() => {
											navigate(`/profile/${auth && authUser.handle}`);
											toggleDrawer();
										}}>
										<ListItemIcon>
											<UserIcon />
										</ListItemIcon>
										<ListItemText primary={auth && authUser.handle} />
									</ListItemButton>
								</ListItem>
								<ListItem>
									<ListItemButton
										onClick={() => {
											//navigate("/");
											setAuth(false);
											setAuthUser(null);
											toggleDrawer();
										}}>
										<ListItemIcon>
											<LogoutIcon />
										</ListItemIcon>
										<ListItemText primary="Logout" />
									</ListItemButton>
								</ListItem>
							</>
						)}
						{!auth && (
							<>
								<ListItem>
									<ListItemButton
										onClick={() => {
											navigate("/login");
											toggleDrawer();
										}}>
										<ListItemIcon>
											<LoginIcon />
										</ListItemIcon>
										<ListItemText primary="Login" />
									</ListItemButton>
								</ListItem>
								<ListItem>
									<ListItemButton
										onClick={() => {
											navigate("/register");
											toggleDrawer();
										}}>
										<ListItemIcon>
											<PersonAddAltIcon />
										</ListItemIcon>
										<ListItemText primary="Register" />
									</ListItemButton>
								</ListItem>
							</>
						)}
					</List>
				</Box>
			</Drawer>
		</div>
	);
}
