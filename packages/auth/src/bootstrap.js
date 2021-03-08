import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { history } from './router/history';

const mount = (el, props = {}) => {
	ReactDOM.render(
		<HashRouter history={history}>
			<App {...props} />
		</HashRouter>,
		el
	);
};

export { mount };
