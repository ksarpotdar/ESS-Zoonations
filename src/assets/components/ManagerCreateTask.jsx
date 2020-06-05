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
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

// Other Libraries
import { Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Redux Action
import { createNewTask } from '../redux/action/taskAction';

const useStyles = makeStyles((theme) => ({
	button: {
		borderRadius: '3px',
		fontFamily: 'Roboto, sans-serif',
		backgroundColor: '#60B6D1',
		color: '#40403f',
		marginTop: theme.spacing(5)
	}
}));

export default function ManagerCreateNewTask() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const employeeData = useSelector((state) => state.employeeData);
	const history = useHistory();

	const [ personName, setPersonName ] = React.useState([]);

	const handleChangeMultiple = (event) => {
		const { options } = event.target;
		const value = [];
		for (let i = 0, l = options.length; i < l; i += 1) {
			if (options[i].selected) {
				value.push(options[i].value);
			}
		}
		setPersonName(value);
	};

	const submitData = (data) => {
		if (personName.length === 0) return alert('Silakan pilih karyawan yang akan diberi tugas');
		if (data.projectName === '') return alert('Silakan isi nama project yang akan diberikan');
		if (data.taskDetails === '') return alert('Silakan isi detail pekerjaan yang akan diberikan');
		if (data.deadline === '') return alert('Silakan isi deadline pekerjaan yang akan diberikan');

		const newTask = {
			userId: personName[0],
			projectName: data.projectName,
			taskDetails: data.taskDetails,
			deadline: data.deadline
		};

		// dispatch(createNewTask(newTask));
		alert('Tugas berhasil diberikan');
		history.push('/manager-dashboard');
	};

	return (
		<Fragment>
			<Grid container item xs={12} direction="column">
				<Typography variant="h5" style={{ textAlign: 'center', marginBottom: '3%' }}>
					Pemberian Tugas Untuk Karyawan
				</Typography>
				<Grid container item justify="space-around">
					<Grid item xs={3}>
						<FormControl className={classes.formControl} style={{ width: '100%' }}>
							<InputLabel shrink htmlFor="select-multiple-native">
								Nama Karyawan
							</InputLabel>
							<Select
								multiple
								native
								value={personName}
								onChange={handleChangeMultiple}
								inputProps={{
									id: 'select-multiple-native'
								}}
							>
								{employeeData.map((name) => (
									<option key={name._id} value={name._id}>
										{name.fullname}
									</option>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={6}>
						<Formik
							initialValues={{
								projectName: '',
								deadline: '',
								taskDetails: ''
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
								submitData(values);
								// register(values);
								// await dispatch(loginUser(values));
								// await history.push('/');
							}}
						>
							{({ handleChange, handleSubmit, values, errors, touched }) => {
								return (
									<form className={classes.form} noValidate onSubmit={handleSubmit}>
										<Grid container justify="space-around" spacing={1}>
											<Grid item xs={6}>
												<TextField
													variant="outlined"
													margin="dense"
													required
													fullWidth
													id="projectName"
													label="Nama Project"
													name="projectName"
													onChange={handleChange}
													values={values.projectName}
													size="small"
												/>
											</Grid>
											<Grid item xs={6}>
												<TextField
													variant="outlined"
													margin="dense"
													required
													fullWidth
													name="deadline"
													label="Deadline"
													defaultValue="2020-06-05"
													type="date"
													id="deadline"
													autoComplete="deadline"
													onChange={handleChange}
													values={values.deadline}
													size="small"
												/>
											</Grid>
										</Grid>
										<Grid container justify="space-around" spacing={1}>
											<Grid item xs={12}>
												<TextField
													variant="outlined"
													margin="dense"
													required
													multiline
													rows={2}
													fullWidth
													id="taskDetails"
													label="Detail Pekerjaan (Max 100 char)"
													name="taskDetails"
													onChange={handleChange}
													values={values.taskDetails}
													size="small"
													inputProps={{ maxlength: '100' }}
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
											<b>Submit</b>
										</Button>
									</form>
								);
							}}
						</Formik>
					</Grid>
				</Grid>
			</Grid>
		</Fragment>
	);
}
