import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core';
import LoginView from 'src/views/auth/login/LoginView';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import { fetchStatus } from './api/statusAPI';

const App = () => {
	useEffect(() => {
		fetchStatus();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<LoginView />
		</ThemeProvider>
	);
};

export default App;
