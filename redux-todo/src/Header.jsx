import * as React from "react";

import { useDispatch } from "react-redux";
import { clear } from "./features/todo/todoSlice";

import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Badge,
	IconButton,
	Menu,
	MenuItem,
} from "@mui/material";

import {
	Menu as MenuIcon,
	MoreVert as MoreVertIcon,
	LightMode as LightModeIcon,
	DarkMode as DarkModeIcon,
} from "@mui/icons-material";
import { ThemeContext } from "./ThemeApp";
import { useLocation } from "react-router-dom";

export default function Header({ count, toggleDrawer }) {
	const dispatch = useDispatch();

	const { mode, setMode } = React.useContext(ThemeContext);

	const [showMenu, setShowMenu] = React.useState(false);

	const { pathname } = useLocation();

	return (
		<Box sx={{ flexGrow: 1, mb: 3 }}>
			<AppBar position="static">
				<Toolbar>
					<Box sx={{ flexGrow: 1 }}>
						<IconButton onClick={toggleDrawer()}>
							<MenuIcon />
						</IconButton>

						<Badge badgeContent={count} color="error" sx={{ mr: 2 }}>
							<Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
								Todo
							</Typography>
						</Badge>
					</Box>
					{mode === "dark" ? (
						<IconButton onClick={() => setMode("light")}>
							<LightModeIcon />
						</IconButton>
					) : (
						<IconButton onClick={() => setMode("dark")}>
							<DarkModeIcon />
						</IconButton>
					)}
					{pathname == "/" && (
						<>
							<IconButton
								onClick={(e) => {
									setShowMenu(e.currentTarget);
								}}>
								<MoreVertIcon />
							</IconButton>

							<Menu
								anchorEl={showMenu}
								open={Boolean(showMenu)}
								onClose={() => setShowMenu(false)}>
								<MenuItem
									onClick={() => {
										dispatch(clear());
										setShowMenu(false);
									}}
									sx={{ width: 200 }}>
									Clear
								</MenuItem>
							</Menu>
						</>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
