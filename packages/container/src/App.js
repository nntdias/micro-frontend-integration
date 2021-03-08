import React from 'react';
import Dashboard from './containers/Dashboard/Dashboard';
import Auth from './containers/Auth/Auth';
import { hasValidCookie } from './utils/cookieUtil';

const App = () => {
	return hasValidCookie() ? <Dashboard /> : <Auth />;
};

export default App;
