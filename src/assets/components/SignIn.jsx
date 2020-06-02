import React, { Fragment } from 'react';

//Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

//Other Libraries
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	loginForm: {
		paddingLeft: theme.spacing(5)
	},
	title: {
		textAlign: 'center',
		fontFamily: 'Ubuntu, sans-serif',
		// fontFamily: 'Open Sans Condensed, sans-serif',
		color: '#40403f'
	},
	button: {
		borderRadius: '3px',
		fontFamily: 'Roboto, sans-serif',
		backgroundColor: '#60B6D1',
		color: '#40403f',
		marginTop: theme.spacing(5)
	}
}));

export default function SignIn() {
	const classes = useStyles();

	return (
		<Fragment>
			<Grid container item className={classes.loginForm} xs={4}>
				<Grid item xs={12}>
					<Typography component="h2" variant="h4" className={classes.title}>
						Masuk dengan SSO
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Formik
						initialValues={{
							email: '',
							password: ''
						}}
						validate={(values) => {
							const errors = {};
							if (!values.email) {
								errors.email = 'Required';
							} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
								errors.email = 'Invalid email address';
							}

							if (!values.password) {
								errors.password = 'Required';
							}

							return errors;
						}}
						onSubmit={async (values) => {
							// await dispatch(loginUser(values));
							// await history.push('/');
						}}
					>
						{({ handleChange, handleSubmit, values, isSubmitting, errors, touched }) => {
							return (
								<form className={classes.form} noValidate onSubmit={handleSubmit}>
									<TextField
										variant="outlined"
										margin="dense"
										required
										fullWidth
										id="email"
										label="SSO Email Address"
										name="email"
										autoComplete="email"
										onChange={handleChange}
										values={values.email}
										size="small"
									/>
									<TextField
										variant="outlined"
										margin="dense"
										required
										fullWidth
										name="password"
										label="Password"
										type="password"
										id="password"
										autoComplete="current-password"
										onChange={handleChange}
										values={values.password}
										size="small"
									/>
									<Button
										type="submit"
										fullWidth
										variant="contained"
										color="inherit"
										disabled={isSubmitting}
										className={classes.button}
									>
										<b>Masuk</b>
									</Button>
									<Typography component="h3" variant="subtitle2" style={{ paddingTop: '16px' }}>
										<i>Belum punya SSO?</i>
									</Typography>
									<Link
										color="inherit"
										style={{
											fontFamily: 'Roboto, sans-serif',
											color: '#40403f',
											marginTop: '16px'
										}}
										to="/registration"
									>
										Klik disini untuk daftar baru
									</Link>
								</form>
							);
						}}
					</Formik>
				</Grid>
			</Grid>
		</Fragment>
	);
}
