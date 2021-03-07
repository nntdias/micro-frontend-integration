import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Box, Button, Link, TextField, Typography } from '@material-ui/core';

/**
 * LoginForm
 */
const LoginForm = ({ initialValues, onSubmit }) => {
	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email('Must be a valid email')
			.max(255)
			.required('Email is required'),
		password: Yup.string()
			.max(255)
			.required('Password is required'),
	});

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			{({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
				<form onSubmit={handleSubmit}>
					<Box mb={3}>
						<Typography color="textPrimary" variant="h2">
							Iniciar sessão
						</Typography>
						<Typography color="textSecondary" gutterBottom variant="body2">
							Faça login na plataforma interna
						</Typography>
					</Box>
					<TextField
						error={Boolean(touched.email && errors.email)}
						fullWidth
						helperText={touched.email && errors.email}
						label="Email"
						margin="normal"
						name="email"
						onBlur={handleBlur}
						onChange={handleChange}
						type="email"
						value={values.email}
						variant="outlined"
					/>
					<TextField
						error={Boolean(touched.password && errors.password)}
						fullWidth
						helperText={touched.password && errors.password}
						label="Senha"
						margin="normal"
						name="password"
						onBlur={handleBlur}
						onChange={handleChange}
						type="password"
						value={values.password}
						variant="outlined"
					/>
					<Box my={2}>
						<Button color="primary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained">
							Entrar agora
						</Button>
					</Box>
					<Typography color="textSecondary" variant="body1">
						Ainda não tem uma conta?{' '}
						<Link component={RouterLink} to="/register" variant="h6">
							Inscrever-se
						</Link>
					</Typography>
				</form>
			)}
		</Formik>
	);
};

LoginForm.propTypes = {
	initialValues: PropTypes.shape({}),
	onSubmit: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
	initialValues: {},
};

export default LoginForm;
