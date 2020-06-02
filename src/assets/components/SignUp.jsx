import React, { Fragment } from 'react';

//Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
	// formControl: {
	// 	width: '100%'
	// }
}));

export default function SignUp() {
	const classes = useStyles();
	const [ state, setState ] = React.useState({
		age: '',
		name: 'hai'
	});

	const handleChangeSelect = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value
		});
	};

	return (
		<Fragment>
			<Grid container item xs={5}>
				<Grid item xs={12}>
					<Typography component="h2" variant="h4" className={classes.title}>
						Daftar Baru
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Formik
						initialValues={{
							fullName: '',
							email: '',
							password: ''
						}}
						// validate={(values) => {
						// 	const errors = {};
						// 	if (!values.email) {
						// 		errors.email = 'Required';
						// 	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
						// 		errors.email = 'Invalid email address';
						// 	}

						// 	if (!values.password) {
						// 		errors.password = 'Required';
						// 	}

						// 	return errors;
						// }}
						onSubmit={async (values) => {
							// await dispatch(loginUser(values));
							// await history.push('/');
						}}
					>
						{({ handleChange, handleSubmit, values, isSubmitting, errors, touched }) => {
							return (
								<form className={classes.form} noValidate onSubmit={handleSubmit}>
									<Grid container justify="space-around" spacing={1}>
										<Grid item xs={12}>
											<TextField
												variant="outlined"
												margin="dense"
												required
												fullWidth
												id="email"
												label="Nomor Pendaftaran"
												name="email"
												onChange={handleChange}
												values={values.email}
												size="small"
											/>
										</Grid>
									</Grid>
									<Grid container justify="space-around" spacing={1} alignItems="center">
										<Grid item xs={3}>
											<FormControl
												variant="outlined"
												fullWidth
												size="small"
												className={classes.formControl}
											>
												<InputLabel htmlFor="outlined-age-native-simple">Prefix</InputLabel>
												<Select
													native
													value={state.age}
													onChange={handleChangeSelect}
													label="Prefix"
													inputProps={{
														name: 'age',
														id: 'outlined-age-native-simple'
													}}
												>
													<option aria-label="None" value="" />
													<option value={10}>Mr.</option>
													<option value={20}>Mrs.</option>
													<option value={30}>Ms.</option>
												</Select>
											</FormControl>
										</Grid>
										<Grid item xs={9}>
											<TextField
												variant="outlined"
												margin="dense"
												required
												fullWidth
												id="email"
												label="Nama lengkap"
												name="email"
												autoComplete="email"
												onChange={handleChange}
												values={values.email}
												size="small"
											/>
										</Grid>
									</Grid>
									<Grid container justify="space-around" spacing={1}>
										<Grid item xs={6}>
											<TextField
												variant="outlined"
												margin="dense"
												required
												fullWidth
												id="email"
												label="Alamat Email"
												name="email"
												autoComplete="email"
												onChange={handleChange}
												values={values.email}
												size="small"
											/>
										</Grid>
										<Grid item xs={6}>
											<TextField
												variant="outlined"
												margin="dense"
												required
												fullWidth
												name="password"
												label="No Hp"
												type="password"
												id="password"
												autoComplete="current-password"
												onChange={handleChange}
												values={values.password}
												size="small"
											/>
										</Grid>
									</Grid>
									<Grid container justify="space-around" spacing={1}>
										<Grid item xs={6}>
											<TextField
												variant="outlined"
												margin="dense"
												required
												fullWidth
												id="email"
												label="Password"
												name="email"
												autoComplete="email"
												onChange={handleChange}
												values={values.email}
												size="small"
											/>
										</Grid>
										<Grid item xs={6}>
											<TextField
												variant="outlined"
												margin="dense"
												required
												fullWidth
												name="password"
												label="Konfirmasi Password"
												type="password"
												id="password"
												autoComplete="current-password"
												onChange={handleChange}
												values={values.password}
												size="small"
											/>
										</Grid>
									</Grid>

									<Button
										type="submit"
										fullWidth
										variant="contained"
										color="inherit"
										disabled={isSubmitting}
										className={classes.button}
									>
										<b>Daftar</b>
									</Button>
									<Typography component="h3" variant="subtitle2" style={{ paddingTop: '16px' }}>
										<i>Sudah punya SSO?</i>
									</Typography>
									<Link
										color="inherit"
										style={{
											fontFamily: 'Roboto, sans-serif',
											color: '#40403f',
											marginTop: '16px'
										}}
										to="/"
									>
										Klik disini untuk masuk
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
