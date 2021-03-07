import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Box, Divider, Typography } from '@material-ui/core';
import { useStyles } from './NavBarContent.style';
import NavItems from './NavItems';

const user = {
	avatar: '/static/images/avatars/avatar_4.png',
	jobTitle: 'Vendedor',
	name: 'Seu zé',
};

const NavBarContent = () => {
	const classes = useStyles();
	return (
		<Box height="100%" display="flex" flexDirection="column">
			<Box alignItems="center" display="flex" flexDirection="column" p={2}>
				<Avatar className={classes.avatar} component={RouterLink} src={user.avatar} to="/app/account" />
				<Typography className={classes.name} color="textPrimary" variant="h5">
					{user.name}
				</Typography>
				<Typography color="textSecondary" variant="body2">
					{user.jobTitle}
				</Typography>
			</Box>
			<Divider />
			<Box p={2}>
				<NavItems />
			</Box>
			<Box flexGrow={1} />
		</Box>
	);
};

NavBarContent.propTypes = {};

export default NavBarContent;
