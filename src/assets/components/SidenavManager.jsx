import React, { Fragment, useEffect } from 'react';

//Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Avatar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

// Other Libraries
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Redux Action
import { logout } from '../redux/action/usersAction';
import { getUserData } from '../redux/action/usersAction';
import { getAllEmployeeData } from '../redux/action/employeeAction';
import { getAllTask } from '../redux/action/taskAction';

const useStyles = makeStyles((theme) => ({
	avatarHolder: {
		paddingTop: '10%',
		paddingBottom: '10%'
	},
	image: {
		width: theme.spacing(15),
		height: theme.spacing(15)
	},
	sidenavButtonHolder: {
		width: '100%',
		marginTop: '10%'
	},
	sidenavButton: {
		width: '100%'
	}
}));

export default function SideNav() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const currentUser = useSelector((state) => state.currentUser);

	const handleLogout = async (id) => {
		await dispatch(logout(id));
		await localStorage.removeItem('token');
		await localStorage.removeItem('refToken');
		await localStorage.removeItem('isLoggedIn');
		await history.push('/');
	};

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			dispatch(getUserData(token));
		}
		dispatch(getAllEmployeeData('employee'));
		dispatch(getAllTask());
	}, []);

	return (
		<Fragment>
			<Grid container item xs={2} direction="column" justify="flex-start" alignItems="center">
				<Grid item className={classes.avatarHolder}>
					<Avatar
						alt={currentUser.length !== 0 ? currentUser.fullname : ''}
						src={currentUser.length !== 0 ? currentUser.avatar : ''}
						className={classes.image}
					/>
				</Grid>
				<Grid item>
					<Typography style={{ textAlign: 'center' }}>Selamat Datang</Typography>
					<Typography style={{ textAlign: 'center' }}>
						{currentUser.length !== 0 ? currentUser.fullname : 'loading'}
					</Typography>
				</Grid>
				<Grid item className={classes.sidenavButtonHolder}>
					<ButtonGroup
						orientation="vertical"
						aria-label="vertical contained primary button group"
						variant="contained"
						fullWidth={true}
					>
						<Link to="/manager-dashboard" style={{ textDecoration: 'none' }}>
							<Button
								style={{
									background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
									width: '100%'
								}}
							>
								Halaman Utama
							</Button>
						</Link>

						<Link to="/manager-employee-data" style={{ textDecoration: 'none' }}>
							<Button
								style={{
									background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
									width: '100%'
								}}
							>
								Data Karyawan
							</Button>
						</Link>

						<Link to="/manager-task-management" style={{ textDecoration: 'none' }}>
							<Button
								style={{
									background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
									width: '100%'
								}}
							>
								Manajemen Tugas
							</Button>
						</Link>

						<Button
							style={{
								background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
								width: '100%'
							}}
							onClick={() => handleLogout(currentUser._id)}
						>
							Keluar
						</Button>
					</ButtonGroup>
				</Grid>
			</Grid>
		</Fragment>
	);
}
