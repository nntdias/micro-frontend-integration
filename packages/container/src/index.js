import 'core-js/features/object/assign';
import 'core-js/features/number/is-nan';
import 'core-js/features/promise';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { history } from './router/history';
import store from './redux/store/store';

ReactDOM.render(
	<Provider store={store}>
		<HashRouter history={history}>
			<App />
		</HashRouter>
	</Provider>,
	document.getElementById('root')
);
