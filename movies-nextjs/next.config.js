/** @type {import('next').NextConfig} */

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "image.tmdb.org",
				//   port: '',
				//   pathname: '/account123/**',
			},
		],
	},
};
