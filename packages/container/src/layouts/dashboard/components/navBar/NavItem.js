import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Button, ListItem } from '@material-ui/core';
import { useStyles } from './NavItem.style';

/**
 * NavItem
 */
const NavItem = ({ className, href, icon: Icon, title, ...rest }) => {
	const classes = useStyles();
	return (
		<ListItem className={clsx(classes.item, className)} disableGutters {...rest}>
			<Button activeClassName={classes.active} className={classes.button} component={RouterLink} to={href}>
				{Icon && <Icon className={classes.icon} size="20" />}
				<span className={classes.title}>{title}</span>
			</Button>
		</ListItem>
	);
};

NavItem.propTypes = {
	className: PropTypes.string,
	href: PropTypes.string,
	icon: PropTypes.elementType,
	title: PropTypes.string,
};

NavItem.defaultProps = {
	className: null,
	href: null,
	icon: null,
	title: null,
};

export default NavItem;
