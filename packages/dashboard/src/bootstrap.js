import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { history } from './router/history';
import store from './redux/store/store';

const mount = (el, props = {}) => {
	ReactDOM.render(
		<Provider store={store}>
			<HashRouter history={history}>
				<App {...props} />
			</HashRouter>
		</Provider>,
		el
	);
};

export { mount };
