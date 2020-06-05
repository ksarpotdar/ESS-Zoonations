import React, { Fragment } from 'react';

// Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// Other Libraries
import { Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Redux Actions
import { addUser } from '../redux/action/usersAction';

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
	const dispatch = useDispatch();
	const history = useHistory();
	const [ prefix, setPrefix ] = React.useState('');

	const handleChangeSelect = (event) => {
		setPrefix(event.target.value);
	};

	const register = (formData) => {
		if (formData.password !== formData.passwordConfirm)
			return alert('Masukkan password yang sama pada kolom konfirmasi password');

		const registrationData = {
			prefix: prefix,
			fullname: formData.fullname,
			email: formData.email,
			hp: formData.hp,
			password: formData.password
		};

		dispatch(addUser(registrationData));
		history.push('/');
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
							fullname: '',
							email: '',
							hp: '',
							password: '',
							passwordConfirm: ''
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
						onSubmit={(values) => {
							register(values);

							// await dispatch(loginUser(values));
							// await history.push('/');
						}}
					>
						{({ handleChange, handleSubmit, values, errors, touched }) => {
							return (
								<form className={classes.form} noValidate onSubmit={handleSubmit}>
									<Grid container justify="space-around" spacing={1}>
										{/* <Grid item xs={12}>
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
										</Grid> */}
									</Grid>
									<Grid container justify="space-around" spacing={1} alignItems="center">
										<Grid item xs={3}>
											<FormControl
												variant="outlined"
												className={classes.formControl}
												fullWidth
												size="small"
											>
												<InputLabel id="demo-simple-select-outlined-label">Prefix</InputLabel>
												<Select
													labelId="demo-simple-select-outlined-label"
													id="demo-simple-select-outlined"
													value={prefix}
													onChange={handleChangeSelect}
													label="Prefix"
												>
													<MenuItem value="">None</MenuItem>
													<MenuItem value="Mr.">Mr.</MenuItem>
													<MenuItem value="Mrs.">Mrs.</MenuItem>
													<MenuItem value="Ms.">Ms.</MenuItem>
												</Select>
											</FormControl>
										</Grid>
										<Grid item xs={9}>
											<TextField
												variant="outlined"
												margin="dense"
												required
												fullWidth
												id="fullname"
												label="Nama lengkap"
												name="fullname"
												autoComplete="fullname"
												onChange={handleChange}
												values={values.fullname}
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
												name="hp"
												label="No Hp"
												id="hp"
												autoComplete="hp"
												onChange={handleChange}
												values={values.hp}
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
												id="password"
												label="Password"
												name="password"
												type="password"
												onChange={handleChange}
												values={values.password}
												size="small"
											/>
										</Grid>
										<Grid item xs={6}>
											<TextField
												variant="outlined"
												margin="dense"
												required
												fullWidth
												name="passwordConfirm"
												label="Konfirmasi Password"
												type="password"
												id="passwordConfirm"
												onChange={handleChange}
												values={values.passwordConfirm}
												size="small"
											/>
										</Grid>
									</Grid>

									<Button
										type="submit"
										fullWidth
										variant="contained"
										color="inherit"
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
