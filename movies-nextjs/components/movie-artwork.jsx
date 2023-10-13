"use client";

import Image from "next/image";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSeparator,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from "@radix-ui/react-context-menu";
import Link from "next/link";

// import { Album } from "../data/albums";
// import { playlists } from "../data/playlists";

export function MovieArtwork({
	movie,
	aspectRatio = "portrait",
	width,
	height,
	className,
	...props
}) {
	const img_path = "http://image.tmdb.org/t/p/" + "w342";

	return (
		<div className={cn("space-y-3", className)} {...props}>
			<Link href={`/detail/${movie.id}`}>
				<div className="overflow-hidden rounded-md">
					<Image
						src={`${img_path}${movie.poster_path}`}
						alt={movie.title}
						width={width}
						height={height}
						priority={true}
						className={cn(
							"h-auto w-auto object-cover transition-all hover:scale-105",
							aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
						)}
					/>
				</div>

				<div className="space-y-1 text-sm mt-3">
					<h3 className="font-medium leading-none">{movie.title}</h3>
				</div>
			</Link>
		</div>
	);
}
