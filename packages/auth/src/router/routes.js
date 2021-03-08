import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import LoginView from 'src/views/auth/login/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import RegisterView from 'src/views/auth/register/RegisterView';

const routes = [
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{ path: 'login', element: <LoginView /> },
			{ path: 'register', element: <RegisterView /> },
			{ path: '404', element: <NotFoundView /> },
			{ path: '/', element: <Navigate to="/login" /> },
			{ path: '*', element: <Navigate to="/login" /> },
		],
	},
];

export default routes;
