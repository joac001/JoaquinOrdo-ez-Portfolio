/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'experience': ' 10px -10px 0px 0px #90A6FF',
				'technologies': '10px -10px 0px 0px #72BF8C',
				'projects': '10px -10px 0px 0px #D3A83D',
				'contact': '10px -10px 0px 0px #909D8C',
			},
		},
		colors: {
			'background': '#1D1E1E',
			'white': '#ffffff',
			'gray': '#A0AEC0',
			'primary': '#7DBFC2',
			'secondary': '#303030',

			'experience': '#90A6FF',
			'technologies': '#72BF8C',
			'projects': '#D3A83D',
			'contact': '#909D8C',
		},
		backgroundImage: {
			'primary-background': 'linear-gradient(to top right, #2d3748, #1e293b, #1a202c)',
			'secondary-background': 'linear-gradient(to bottom right, #2d3748, #1e293b, #1a202c)',
		},
	},
	plugins: [],
}
