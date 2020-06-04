import React, { Fragment } from 'react';

//Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Avatar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';

//Components
import SideNav from '../assets/components/SideNav';
import LiveClock from '../assets/components/LiveClock';
import Notification from '../assets/components/Notification';
import TaskSummary from '../assets/components/TaskSummary';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		flexGrow: 1
	},
	base: {
		height: '100%',
		backgroundImage: `url(${'https://i.ibb.co/rxxDLrc/homepage-background.jpg'})`
	},
	zoonations: {
		fontFamily: 'Montserrat Subrayada, sans-serif',
		color: '#292928'
	},
	title: {
		paddingLeft: theme.spacing(5),
		fontFamily: 'Ubuntu, sans-serif',
		color: '#40403f'
	}
}));

export default function EmployeeDashboard() {
	const classes = useStyles();

	return (
		<Fragment>
			<div className={classes.root}>
				<Grid container className={classes.base} justify="center">
					<SideNav />
					<Grid container item style={{ backgroundColor: '#f3f3f3', paddingLeft: '1%' }} xs={10}>
						<Grid container item xs={11} justify="center" alignItems="center">
							<Typography className={classes.zoonations} component="h2" variant="h3">
								Z<img
									src="https://i.ibb.co/NjSpPSs/paw.png"
									alt=""
									style={{ maxHeight: '50px' }}
								/>ONATIONS
							</Typography>
							<Typography className={classes.title} component="h1" variant="h3">
								Employee Self Service
							</Typography>
						</Grid>
						<Grid container item xs={12} spacing={1}>
							<Grid item xs={4}>
								<LiveClock />
								<Notification />
							</Grid>
							<Grid container item xs={8}>
								<TaskSummary />
							</Grid>
						</Grid>
						<Grid item xs={12} style={{ paddingTop: '2%', paddingBottom: '2%', paddingRight: '1%' }}>
							{/* <Paper elevation={5} style={{ height: '100%' }}>
								<Grid item xs={6}>
									<Typography>a</Typography>
								</Grid>
							</Paper> */}
						</Grid>
					</Grid>
				</Grid>
			</div>
		</Fragment>
	);
}
