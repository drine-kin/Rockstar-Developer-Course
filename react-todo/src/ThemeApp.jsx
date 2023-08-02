import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App";
import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeApp() {
	const [mode, setMode] = useState("dark");

	const theme = useMemo(() => {
		return createTheme({
			palette: {
				mode,
			},
		});
	}, [mode]);

	return (
		<ThemeContext.Provider value={{ mode, setMode }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}
