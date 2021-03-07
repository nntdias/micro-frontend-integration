import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
	palette: {
		background: {
			dark: '#F4F6F8',
			default: colors.common.white,
			paper: colors.common.white,
		},
		primary: {
			main: '#00838F',
		},
		secondary: {
			main: '#607D8B',
		},
		text: {
			primary: '#212121',
			secondary: '#757575',
		},
	},
	shadows,
	typography,
});

export default theme;
