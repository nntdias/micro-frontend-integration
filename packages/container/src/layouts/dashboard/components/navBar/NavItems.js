import React from 'react';
import { List } from '@material-ui/core';
import { menuItems } from '../../constants/menuConstants';
import NavItem from './NavItem';

const NavItems = () => {
	return (
		<List>
			{menuItems.map(item => (
				<NavItem href={item.href} key={item.title} title={item.title} icon={item.icon} />
			))}
		</List>
	);
};

NavItems.propTypes = {};

export default NavItems;
