import React, { useEffect, useRef } from 'react';

let mountModule = null;

const loadModule = async (ref, props) => {
	if (!mountModule) {
		mountModule = await import('auth/AuthApp').then(({ mount }) => mount);
	}
	mountModule(ref.current, props);
};

/**
 * Auth
 */
const Auth = props => {
	const ref = useRef(null);

	useEffect(() => {
		loadModule(ref, props);
	}, [props]);

	return <div ref={ref} />;
};

export default Auth;
