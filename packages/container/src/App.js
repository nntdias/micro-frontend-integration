import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import routes from './router/routes';
import { fetchStatus } from './api/statusAPI';
import './mixins/chartjs';

const App = () => {
	const routing = useRoutes(routes);

	useEffect(() => {
		fetchStatus();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{routing}
		</ThemeProvider>
	);
};

export default App;
