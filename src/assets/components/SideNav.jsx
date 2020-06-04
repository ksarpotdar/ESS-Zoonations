import React, { Fragment } from 'react';

//Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Avatar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

//Other Libraries
import { Link } from 'react-router-dom';

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

	return (
		<Fragment>
			<Grid container item xs={2} direction="column" justify="flex-start" alignItems="center">
				<Grid item className={classes.avatarHolder}>
					<Avatar alt="" src="" className={classes.image} />
				</Grid>
				<Grid item>
					<Typography>Selamat Datang</Typography>
					<Typography>Nama Karyawan</Typography>
				</Grid>
				<Grid item className={classes.sidenavButtonHolder}>
					<Link to="/employee-dashboard">
						<Button className={classes.sidenavButton}>
							<Typography>Halaman Utama</Typography>
						</Button>
					</Link>
					<Link to="/employee-task-management">
						<Button className={classes.sidenavButton}>
							<Typography>Data Tugas</Typography>
						</Button>
					</Link>
					<Button className={classes.sidenavButton}>
						<Typography>Pengaturan Profile</Typography>
					</Button>
					<Button className={classes.sidenavButton}>
						<Typography>Keluar</Typography>
					</Button>
				</Grid>
			</Grid>
		</Fragment>
	);
}
