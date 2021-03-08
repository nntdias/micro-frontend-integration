import {
	BarChart as BarChartIcon,
	Settings as SettingsIcon,
	ShoppingBag as ShoppingBagIcon,
	User as UserIcon,
	Users as UsersIcon,
} from 'react-feather';

export const menuItems = [
	{
		href: '/app/dashboard',
		icon: BarChartIcon,
		title: 'Dashboard',
	},
	{
		href: '/app/customers',
		icon: UsersIcon,
		title: 'Customers',
	},
	{
		href: '/app/products',
		icon: ShoppingBagIcon,
		title: 'Products',
	},
	{
		href: '/app/account',
		icon: UserIcon,
		title: 'Account',
	},
	{
		href: '/app/settings',
		icon: SettingsIcon,
		title: 'Settings',
	},
];
