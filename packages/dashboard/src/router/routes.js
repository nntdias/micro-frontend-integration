import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/dashboard/DashboardLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import ProductListView from 'src/views/product/ProductListView';
import SettingsView from 'src/views/settings/SettingsView';

const routes = [
	{
		path: 'app',
		element: <DashboardLayout />,
		children: [
			{ path: 'account', element: <AccountView /> },
			{ path: 'customers', element: <CustomerListView /> },
			{ path: 'dashboard', element: <DashboardView /> },
			{ path: 'products', element: <ProductListView /> },
			{ path: 'settings', element: <SettingsView /> },
		],
	},
	{
		path: '/',
		element: null,
		children: [
			{ path: '/', element: <Navigate to="app/dashboard" /> },
			{ path: '*', element: <Navigate to="app/dashboard" /> },
		],
	},
];

export default routes;
