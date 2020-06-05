import React, { Fragment, useEffect } from 'react';

// Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Avatar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

// Components
import DashboardTitle from '../assets/components/DashboardTitle';
import SideNav from '../assets/components/SidenavEmployee';
import LiveClock from '../assets/components/LiveClock';
import Notification from '../assets/components/Notification';
import TaskSummary from '../assets/components/TaskSummary';

//Other Libraries
import { useDispatch, useSelector } from 'react-redux';

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
	const pendingTask = [];
	const onProgressTask = [];
	const reviewedTask = [];
	const revisionTask = [];
	const doneTask = [];

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

	return (
		<Fragment>
			<div className={classes.root}>
				<Grid container className={classes.base} justify="center">
					<SideNav />
					<Grid container item xs={10} className={classes.content} direction="column">
						<Grid container item justify="flex-start" alignItems="flex-start" style={{ height: '20%' }}>
							<DashboardTitle />
						</Grid>
						<Grid container item justify="space-around" style={{ height: '50%' }}>
							<Grid item xs={4}>
								<LiveClock />
								<Notification newTask={pendingTask.length} />
							</Grid>
							<Grid container item xs={7}>
								<TaskSummary
									done={doneTask.length}
									onProgress={onProgressTask.length}
									reviewed={reviewedTask.length}
									revision={revisionTask.length}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</Fragment>
	);
}
