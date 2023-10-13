import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";

export function Sidebar({ className, genres }) {
	return (
		<div className={cn("pb-12", className)}>
			<div className="space-y-4 py-4 ">
				<div className="py-2">
					<h2 className="relative px-7 text-lg font-semibold tracking-tight">
						Genres
					</h2>
					<ScrollArea className=" px-1 ">
						<div className="space-y-1 p-2">
							{genres?.map((genre) => (
								<Link href={`/genre/${genre.name}/${genre.id}`}>
									<Button
										key={genre.id}
										variant="ghost"
										className="w-full justify-start font-normal">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="mr-2 h-4 w-4">
											<path d="M21 15V6" />
											<path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
											<path d="M12 12H3" />
											<path d="M16 6H3" />
											<path d="M12 18H3" />
										</svg>
										{genre.name}
									</Button>
								</Link>
							))}
						</div>
					</ScrollArea>
				</div>
			</div>
		</div>
	);
}
