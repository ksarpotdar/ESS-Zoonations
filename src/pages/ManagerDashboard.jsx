import React, { Fragment } from 'react';

// Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Avatar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

// Other Libraries
import { useDispatch, useSelector } from 'react-redux';

// Components
import SidenavManager from '../assets/components/SidenavManager';
import DashboardTitle from '../assets/components/DashboardTitle';
import LiveClock from '../assets/components/LiveClock';
import ManagerNotification from '../assets/components/ManagerNotification';
import TaskSummary from '../assets/components/TaskSummary';
import ManagerTaskSummary from '../assets/components/ManagerTaskSummary';

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
	const allTask = useSelector((state) => state.taskData);
	const employeeData = useSelector((state) => state.employeeData);
	const pendingTask = [];
	const onProgressTask = [];
	const reviewedTask = [];
	const revisionTask = [];
	const doneTask = [];
	const activeUser = [];
	const pendingUser = [];

	if (allTask.length !== 0) {
		for (let i = 0; i < allTask.length; i++) {
			if (allTask[i].status === 'Belum Dikerjakan') {
				pendingTask.push(allTask[i]);
			}
			if (allTask[i].status === 'Sedang Dikerjakan') {
				onProgressTask.push(allTask[i]);
			}
			if (allTask[i].status === 'Sedang Direview') {
				reviewedTask.push(allTask[i]);
			}
			if (allTask[i].status === 'Butuh Direvisi') {
				revisionTask.push(allTask[i]);
			}
			if (allTask[i].status === 'Selesai') {
				doneTask.push(allTask[i]);
			}
		}
	}

	if (employeeData.length != 0) {
		for (let i = 0; i < employeeData.length; i++) {
			if (employeeData[i].status === 'active') {
				activeUser.push(employeeData[i]);
			}
			if (employeeData[i].status === 'pending') {
				pendingUser.push(employeeData[i]);
			}
		}
	}

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
								<LiveClock />
								<ManagerNotification review={reviewedTask.length} />
							</Grid>
							<Grid container item xs={7}>
								<ManagerTaskSummary
									done={doneTask.length}
									onProgress={onProgressTask.length}
									pending={pendingTask.length}
									revision={revisionTask.length}
									pendingUser={pendingUser.length}
									activeUser={activeUser.length}
								/>
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
