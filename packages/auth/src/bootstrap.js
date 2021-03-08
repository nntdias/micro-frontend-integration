import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el, props = {}) => {
	ReactDOM.render(<App {...props} />, el);
};

export { mount };
