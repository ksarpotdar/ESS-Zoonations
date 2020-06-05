import React, { Fragment, useEffect } from 'react';

// Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

// Other Libraries
import { useDispatch, useSelector } from 'react-redux';

// Redux Action
import { getAllEmployeeData } from '../redux/action/employeeAction';

const useStyles = makeStyles((theme) => ({}));

export default function EmployeeNumberSummary() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const employeeData = useSelector((state) => state.employeeData);
	let activeEmployee = 0;
	let pendingEmployee = 0;

	useEffect(() => {
		dispatch(getAllEmployeeData('employee'));
	}, []);

	if (employeeData.length !== 0) {
		for (let i = 0; i < employeeData.length; i++) {
			if (employeeData[i].status === 'active') {
				activeEmployee += 1;
			} else if (employeeData[i].status === 'pending') {
				pendingEmployee += 1;
			}
		}
	}

	return (
		<Fragment>
			<Grid item xs={4}>
				<Paper elevation={5} style={{ height: '100%' }}>
					<Grid
						container
						style={{ height: '100%', padding: '2%' }}
						justify="space-between"
						alignItems="center"
					>
						<Grid item xs={7}>
							<Typography>Jumlah Total Karyawan</Typography>
						</Grid>
						<Grid item xs={2}>
							<Typography>{employeeData.length !== 0 ? employeeData.length : '0'}</Typography>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<Grid item xs={4}>
				<Paper elevation={5} style={{ height: '100%' }}>
					<Grid
						container
						style={{ height: '100%', padding: '2%' }}
						justify="space-between"
						alignItems="center"
					>
						<Grid item xs={7}>
							<Typography>Jumlah Akun Karyawan Aktif</Typography>
						</Grid>
						<Grid item xs={2}>
							<Typography>{activeEmployee}</Typography>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<Grid item xs={4}>
				<Paper elevation={5} style={{ height: '100%' }}>
					<Grid
						container
						style={{ height: '100%', padding: '2%' }}
						justify="space-between"
						alignItems="center"
					>
						<Grid item xs={7}>
							<Typography>Jumlah Akun Karyawan Pending</Typography>
						</Grid>
						<Grid item xs={2}>
							<Typography>{pendingEmployee}</Typography>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Fragment>
	);
}
