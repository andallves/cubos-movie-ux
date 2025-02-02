import {mauve, mauveDark, purple, purpleDark} from "@radix-ui/colors";
export interface ThemeColors {
	white: string;
	gray10: string;
	gray20: string;
	gray30: string;
	gray40: string;
	gray50: string;
	gray60: string;
}

export interface ThemeFonts {
	family: {
		default: string;
		primary: string;
		secondary: string;
	};
	sizes: {
		xsmall: string;
		small: string;
		medium: string;
		large: string;
		xlarge: string;
		xxlarge: string;
		huge: string;
		xhuge: string;
	};
	types: {
		regular: number;
		bold: number;
	};
}

export interface ThemeMedia {
	lteMedium: string;
}

export interface ThemeSpacings {
	xsmall: string;
	small: string;
	medium: string;
	large: string;
	xlarge: string;
	xxlarge: string;
	huge: string;
	xhuge: string;
}

export interface Theme {
	colors: ThemeColors;
	fonts: ThemeFonts;
	media: ThemeMedia;
	spacings: ThemeSpacings;
}

export const lightTheme: Theme = {
	colors: {
		...purple,
		...mauve,
		white: '#FFFFFF',
		gray10: '#EEEEF0',
		gray20: '#8D8D99',
		gray30: '#6F6D78',
		gray40: '#323228',
		gray50: '#1A191B',
		gray60: '#1A191B'
	},
	fonts: {
		family: {
			default: "'Montserrat', sans-serif",
			primary: "'Roboto', sans-serif",
			secondary: "'Inter', sans-serif"

		},
		sizes: {
			xsmall: '1.6rem',
			small: '2rem',
			medium: '2.4rem',
			large: '3.2rem',
			xlarge: '4.0rem',
			xxlarge: '4.8rem',
			huge: '5.6rem',
			xhuge: '6.4rem',
		},
		types: {
			regular: 400,
			bold: 700,
		}
	},
	media: {
		lteMedium: '(max-width: 768px)',
	},
	spacings: {
		xsmall: '1.6rem',
		small: '2rem',
		medium: '2.4rem',
		large: '3.2rem',
		xlarge: '4.0rem',
		xxlarge: '4.8rem',
		huge: '5.6rem',
		xhuge: '6.4rem',
	},
};

export const darkTheme: Theme = {
	colors: {
		...purpleDark,
		...mauveDark,
		white: '#FFFFFF',
		gray10: '#EEEEEE',
		gray20: '#B4B4B4',
		gray30: '#6F6D78',
		gray40: '#323228',
		gray50: '#1A191B',
		gray60: '#1A191B'
	},
	fonts: {
		family: {
			default: "'Montserrat', sans-serif",
			primary: "'Roboto', sans-serif",
			secondary: "'Inter', sans-serif"
		},
		sizes: {
			xsmall: '1.6rem',
			small: '2rem',
			medium: '2.4rem',
			large: '3.2rem',
			xlarge: '4.0rem',
			xxlarge: '4.8rem',
			huge: '5.6rem',
			xhuge: '6.4rem',
		},
		types: {
			regular: 400,
			bold: 700,
		}
	},
	media: {
		lteMedium: '(max-width: 768px)',
	},
	spacings: {
		xsmall: '1.6rem',
		small: '2rem',
		medium: '2.4rem',
		large: '3.2rem',
		xlarge: '4.0rem',
		xxlarge: '4.8rem',
		huge: '5.6rem',
		xhuge: '6.4rem',
	},
};