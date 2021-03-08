import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.dark,
		height: '100%',
		paddingBottom: theme.spacing(3),
		paddingTop: theme.spacing(3),
	},
}));
