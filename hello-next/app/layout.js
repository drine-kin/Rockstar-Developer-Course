import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Hello Next",
	description: "This is next js example",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="m-auto mt-4 w-[800px]">
					<nav className="mb-6">
						<ul className="flex space-x-4">
							<li className="text-pink-500">
								<Link href="/">Home</Link>
							</li>
							<li className="text-pink-500">
								<Link href="/about">About</Link>
							</li>
							<li className="text-pink-500">
								<Link href="/contact">Contact</Link>
							</li>
							<li className="text-pink-500">
								<DropdownMenu>
									<DropdownMenuTrigger>Profile</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuItem>
											<Link href="/users/Alice">Alice</Link>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Link href="/users/Bob">Bob</Link>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</li>
						</ul>
					</nav>
					{children}
				</div>
			</body>
		</html>
	);
}
