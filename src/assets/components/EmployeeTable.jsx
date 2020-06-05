import React, { Fragment } from 'react';

// Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';

// Other Libraries
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Redux Action
import { changeUserStatus } from '../redux/action/usersAction';

const useStyles = makeStyles((theme) => ({
	table: {
		minWidth: 650
	},
	header: {
		background: 'blue',
		color: 'white'
	}
}));

export default function EmployeeTable() {
	const classes = useStyles();
	const employeeData = useSelector((state) => state.employeeData);
	const dispatch = useDispatch();
	const history = useHistory();

	const changeStatus = (id, status) => {
		const data = {
			status
		};

		if (status === 'pending') {
			data.status = 'active';
		} else if (status === 'active') {
			data.status = 'pending';
		}
		dispatch(changeUserStatus(id, data));
		history.push('/manager-dashboard');
	};

	return (
		<Fragment>
			<TableContainer component={Paper} style={{ marginTop: '5%' }}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell className={classes.header}>Nama Karyawan</TableCell>
							<TableCell className={classes.header} align="right">
								Email
							</TableCell>
							<TableCell className={classes.header} align="right">
								No Hp
							</TableCell>
							<TableCell className={classes.header} align="right">
								Status
							</TableCell>
							<TableCell className={classes.header} align="right">
								Ubah Status
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{employeeData.map((row) => (
							<TableRow key={row._id}>
								<TableCell component="th" scope="row">
									{row.fullname}
								</TableCell>
								<TableCell align="right">{row.email}</TableCell>
								<TableCell align="right">{row.hp}</TableCell>
								<TableCell align="right">{row.status}</TableCell>
								<TableCell align="right">
									<Button size="small" onClick={() => changeStatus(row._id, row.status)}>
										Ubah Status
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Fragment>
	);
}
