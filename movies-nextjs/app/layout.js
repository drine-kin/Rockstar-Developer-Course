import "./globals.css";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import { Menu } from "@/components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Movies Nextjs",
	description: "nextjs movie app with shadcn",
};

async function fetchGenres() {
	const res = await fetch("https://api.themoviedb.org/3/genre/movie/list", {
		headers: {
			Authorization: `Bearer ${process.env.API_KEY}`,
		},
	});

	if (!res.ok) return false;
	const data = await res.json();
	return data.genres;
}

export default async function RootLayout({ children }) {
	const genres = await fetchGenres();

	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="hidden md:block">
					<Menu />
					<div className="border-t">
						<div className="bg-background">
							<div className="grid lg:grid-cols-5">
								<Sidebar genres={genres} className="hidden lg:block" />
								{children}
							</div>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
