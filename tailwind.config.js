const plugin = require('tailwindcss/plugin');
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		fontFamily: {
			source: ['"SourceSansPro-Regular"', 'sans-serif'],
			roboto: ['Roboto-Bold', 'sans-serif'],
		},
		fontSize: {
			sm: ['14px', '20px'],
			base: ['16px', '24px'],
			lg: ['20px', '28px'],
			xl: ['24px', '29px'],
		},

		colors: {
			green: '#3F9F98',
			blue: '#587CBF',
			darkBlue: '#3B5CAB',
			selectedBlue: '#284984',
			white: '#FFFFFF',
			darkGray: '#4A4C54',
			gray: '#616A7E',
			middleGray: '#cdd0d7',
			lightGray: '#F7F8FA',
			lightBlue: '#F3F7FF',
			blueGreen: '#1EA2BB',
			grayBackground: '#F4F6FC',
			hoverGreen: '#308d86',
			lightGreenHover: '#e7f6f4',
			red: '#B61A0A',
			blueGreen: '#1DA1BB',
			disabledGray: '#a4a4b0',
			grayBorder: '#CDD0D7',
			stepperGray: '#A7AEBE',
			bodyColor: '#F4F6FC',
			captionGray: '#616a7f',
			backgroundWelcomePage: '#4d74cb',
			symptomsZone: '#f6f8fa',
			// border
			borderGray: '#ebebeb',
			// liserer
			edgingGray: '#ebeef5',
			// inputField
			crossInputBg: '#ebedf3',
			crossInputSVG: '#616B7D',
			textGray: '#4A4C54',
			// replace
			checkboxGray: '#4A4C54',
			validationGray: '#4A4C54',
		},
		extend: {},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				h1: { fontSize: theme('fontSize.xl') },
				h2: { fontSize: theme('fontSize.lg') },
				p: { fontSize: theme('fontSize.base') },
			});
		}),
	],
};
