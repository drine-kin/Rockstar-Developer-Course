import { MovieArtwork } from "@/components/movie-artwork";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent } from "@/components/ui/tabs";

async function fetchPopular() {
	const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
		headers: {
			Authorization: `Bearer ${process.env.API_KEY}`,
		},
	});

	if (!res.ok) return false;
	const data = await res.json();
	return data.results;
}

async function fetchTopRated() {
	const res = await fetch("https://api.themoviedb.org/3/movie/top_rated", {
		headers: {
			Authorization: `Bearer ${process.env.API_KEY}`,
		},
	});

	if (!res.ok) return false;
	const data = await res.json();
	return data.results;
}

async function fetchUpcoming() {
	const res = await fetch("https://api.themoviedb.org/3/movie/upcoming", {
		headers: {
			Authorization: `Bearer ${process.env.API_KEY}`,
		},
	});

	if (!res.ok) return false;
	const data = await res.json();
	return data.results;
}

export default async function HomePage() {
	const popularMovies = await fetchPopular();
	const topRatedMovies = await fetchTopRated();
	const upcomingMovies = await fetchUpcoming();

	return (
		<>
			<div className="col-span-3 lg:col-span-4 lg:border-l">
				<div className="h-full px-4 py-6 lg:px-8">
					<Tabs defaultValue="music" className="h-full space-y-6">
						<TabsContent value="music" className="border-none p-0 outline-none">
							<div className="flex items-center justify-between">
								<div className="space-y-1">
									<h2 className="text-2xl font-semibold tracking-tight">
										Popular
									</h2>
									<p className="text-sm text-muted-foreground">
										Most popular for the day
									</p>
								</div>
							</div>
							<Separator className="my-4" />
							<div className="relative">
								<ScrollArea>
									<div className="flex space-x-4 pb-4">
										{popularMovies.map((movie) => (
											<MovieArtwork
												key={movie.id}
												movie={movie}
												className="w-[250px] "
												aspectRatio="portrait"
												width={150}
												height={150}
											/>
										))}
									</div>
									<ScrollBar orientation="horizontal" />
								</ScrollArea>
							</div>
							<div className="mt-6 space-y-1">
								<h2 className="text-2xl font-semibold tracking-tight">
									Top Rated
								</h2>
								<p className="text-sm text-muted-foreground">
									Top Rated Movies
								</p>
							</div>
							<Separator className="my-4" />
							<div className="relative">
								<ScrollArea>
									<div className="flex space-x-4 pb-4">
										{topRatedMovies.map((movie) => (
											<MovieArtwork
												key={movie.id}
												movie={movie}
												className="w-[250px] "
												aspectRatio="portrait"
												width={150}
												height={150}
											/>
										))}
									</div>
									<ScrollBar orientation="horizontal" />
								</ScrollArea>
							</div>
							<div className="mt-6 space-y-1">
								<h2 className="text-2xl font-semibold tracking-tight">
									Upcoming
								</h2>
								<p className="text-sm text-muted-foreground">Upcoming Movies</p>
							</div>
							<Separator className="my-4" />
							<div className="relative">
								<ScrollArea>
									<div className="flex space-x-4 pb-4">
										{upcomingMovies.map((movie) => (
											<MovieArtwork
												key={movie.id}
												movie={movie}
												className="w-[250px] "
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
