/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./build/*.html', './build/js/*.js'],
	theme: {
		extend: {
			colors: {
				paleGray: '#fafafa',
				green: '#20484f',
				darkGreen: '#072125',
				lightGreen: '#b8e4Da',
				white: '#ffffff',
				red: '#3A1F22',
				darkRed: '#110409',
			},
		},
		screens: {
			xs: '350px',
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		fontFamily: {
			nunito: ['Nunito', 'sans-serif'],
			jakarta: ['Plus Jakarta Sans', 'sans-serif'],
		},
		backgroundImage: {
			hero: "url('../img/bg.jpg')",
			heroH: "url('../img/bg_1.jpg')",
		},
	},
};
