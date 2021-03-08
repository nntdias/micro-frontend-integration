import React, { useCallback, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { removeTokens } from 'src/utils/cookieUtil';
import { AppBar, Badge, Box, Hidden, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from 'src/components/Logo';
import { useStyles } from './TopBar.style';

/**
 * TopBar
 */
const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
	const classes = useStyles();
	const [notifications] = useState([]);

	const onLogout = useCallback(() => {
		removeTokens();
		window.location.reload();
	}, []);

	return (
		<AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
			<Toolbar>
				<RouterLink to="/">
					<Logo />
				</RouterLink>
				<Box flexGrow={1} />
				<Hidden mdDown>
					<IconButton color="inherit">
						<Badge badgeContent={notifications.length} color="primary" variant="dot">
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<IconButton color="inherit" onClick={onLogout}>
						<InputIcon />
					</IconButton>
				</Hidden>
				<Hidden lgUp>
					<IconButton color="inherit" onClick={onMobileNavOpen}>
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

TopBar.propTypes = {
	className: PropTypes.string,
	onMobileNavOpen: PropTypes.func,
};

TopBar.defaultProps = {
	className: null,
	onMobileNavOpen: () => {},
};

export default TopBar;
