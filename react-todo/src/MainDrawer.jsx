import {
	Avatar,
	Box,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

import {
	Home as HomeIcon,
	AccountCircle as AccountCircleIcon,
	Email as EmailIcon,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

export default function MainDrawer({ showDrawer, toggleDrawer }) {
	return (
		<div>
			<Drawer anchor="left" open={showDrawer} onClose={toggleDrawer()}>
				<Box sx={{ width: 250 }}>
					<Box
						sx={{
							height: 200,
							background: "pink",
							display: "flex",
							alignItems: "end",
						}}>
						<Avatar sx={{ width: 98, height: 98, ml: 3, mb: -5 }}>A</Avatar>
					</Box>
					<List sx={{ mt: 10 }}>
						<Link to="/">
							<ListItem>
								<ListItemButton>
									<ListItemIcon>
										<HomeIcon />
									</ListItemIcon>
									<ListItemText primary="Home" />
								</ListItemButton>
							</ListItem>
						</Link>

						<Link to="/about">
							<ListItem>
								<ListItemButton>
									<ListItemIcon>
										<AccountCircleIcon />
									</ListItemIcon>
									<ListItemText primary="About" />
								</ListItemButton>
							</ListItem>
						</Link>

						<Link to="/contact">
							<ListItem>
								<ListItemButton>
									<ListItemIcon>
										<EmailIcon />
									</ListItemIcon>
									<ListItemText primary="Contact" />
								</ListItemButton>
							</ListItem>
						</Link>
					</List>
				</Box>
			</Drawer>
		</div>
	);
}
