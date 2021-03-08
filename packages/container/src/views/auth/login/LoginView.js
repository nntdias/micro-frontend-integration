import React, { useCallback, useEffect, useRef } from 'react';

/**
 * LoginView
 */
const LoginView = props => {
	const ref = useRef(null);
	const refMount = useRef(null);

	const loadModule = useCallback(async () => {
		if (!refMount.current) {
			refMount.current = await import('auth/AuthApp').then(({ mount }) => mount);
		}
		refMount.current(ref.current, props);
	}, [props]);

	useEffect(() => {
		loadModule();
	}, [loadModule]);

	return <div ref={ref} />;
};

export default LoginView;
