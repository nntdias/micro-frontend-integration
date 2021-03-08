import React, { useCallback } from 'react';
import { Box, Container } from '@material-ui/core';
import Page from 'src/components/Page';
import { signin } from 'src/api/authAPI';
import { useStyles } from './styles';
import LoginForm from './components/LoginForm';

const initialValues = {
	email: 'alguem@anyemail.com',
	password: '12356',
};

/**
 * LoginView
 */
const LoginView = () => {
	const classes = useStyles();

	const onSubmitHandler = useCallback(params => {
		signin(params).then(() => {
			window.location.reload();
		});
	}, []);

	return (
		<Page className={classes.root} title="Login">
			<Box display="flex" flexDirection="column" height="100%" justifyContent="center">
				<Container maxWidth="sm">
					<LoginForm initialValues={initialValues} onSubmit={onSubmitHandler} />
				</Container>
			</Box>
		</Page>
	);
};

LoginView.propTypes = {};

export default LoginView;
