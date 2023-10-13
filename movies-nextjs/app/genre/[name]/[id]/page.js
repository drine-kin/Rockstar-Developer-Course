import { MovieArtwork } from "@/components/movie-artwork";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent } from "@/components/ui/tabs";

async function fetchMovies(id) {
	const res = await fetch(
		`https://api.themoviedb.org/3/discover/movie?with_genres=${id}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.API_KEY}`,
			},
		}
	);

	if (!res.ok) return false;
	const data = await res.json();
	return data.results;
}

export default async function GenresPage({ params }) {
	const movies = await fetchMovies(params.id);

	return (
		<>
			<div className="col-span-3 lg:col-span-4 lg:border-l">
				<div className="h-full px-4 py-6 lg:px-8">
					<Tabs defaultValue="music" className="h-full space-y-6">
						<TabsContent value="music" className="border-none p-0 outline-none">
							<div className="flex items-center justify-between">
								<div className="space-y-1 mb-4">
									<h2 className="text-2xl font-semibold tracking-tight">
										{params.name}
									</h2>
								</div>
							</div>
							<div className="relative">
								<ScrollArea>
									<div className="flex flex-wrap space-x-4  pb-4">
										{movies.map((movie) => (
											<MovieArtwork
												key={movie.id}
												movie={movie}
												className="w-[250px] pb-6"
												aspectRatio="portrait"
												width={150}
												height={150}
											/>
										))}
									</div>
									<ScrollBar orientation="horizontal" />
								</ScrollArea>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</>
	);
}
