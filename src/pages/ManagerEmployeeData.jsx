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
import SidenavManager from '../assets/components/SidenavManager';
import DashboardTitle from '../assets/components/DashboardTitle';
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
	content: {
		backgroundColor: '#f3f3f3',
		paddingLeft: '1%',
		paddingTop: '2%'
	}
}));

export default function EmployeeDashboard() {
	const classes = useStyles();

	return (
		<Fragment>
			<div className={classes.root}>
				<Grid container className={classes.base} justify="center">
					<SidenavManager />
					<Grid container item xs={10} className={classes.content} direction="column">
						<Grid container item justify="flex-start" alignItems="flex-start" style={{ height: '20%' }}>
							<DashboardTitle />
						</Grid>
						<Grid container item justify="space-around" style={{ height: '50%' }}>
							<Grid item xs={4}>
								{/* <LiveClock /> */}
								{/* <Notification /> */}
							</Grid>
							<Grid container item xs={7}>
								{/* <TaskSummary /> */}
							</Grid>
						</Grid>
						{/* <Grid item xs={12} style={{ paddingTop: '2%', paddingBottom: '2%', paddingRight: '1%' }}>
							<Paper elevation={5} style={{ height: '100%' }}>
								<Grid item xs={6}>
									<Typography>a</Typography>
								</Grid>
							</Paper>
						</Grid> */}
					</Grid>
				</Grid>
			</div>
		</Fragment>
	);
}
