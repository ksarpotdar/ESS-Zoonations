import React, { Fragment } from 'react';

//Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

//Components
import SidenavEmployee from '../assets/components/SidenavEmployee';
import DashboardTitle from '../assets/components/DashboardTitle';
import PendingTaskList from '../assets/components/PendingTaskList';
import OnProgressTaskList from '../assets/components/OnProgressTaskList';
import ReviewedTaskList from '../assets/components/ReviewedTask';
import RevisionTaskList from '../assets/components/RevisionTaskList';

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
		paddingLeft: '1%'
	},
	zoonations: {
		fontFamily: 'Montserrat Subrayada, sans-serif',
		color: '#292928'
	},
	title: {
		paddingLeft: theme.spacing(5),
		fontFamily: 'Ubuntu, sans-serif',
		color: '#40403f'
	},
	content: {
		backgroundColor: '#f3f3f3',
		paddingLeft: '1%',
		paddingTop: '2%'
	},
	card: {
		width: '90%'
	}
}));

export default function EmployeeTaskManagement() {
	const classes = useStyles();
	const allTask = useSelector((state) => state.taskData);
	const pendingTask = [];
	const [ page, setPage ] = React.useState('1');

	const changePage = (page) => {
		setPage(page);
	};

	if (allTask.length !== 0) {
		for (let i = 0; i < allTask.length; i++) {
			if (allTask[i].status === 'Belum Dikerjakan') {
				pendingTask.push(allTask[i]);
			}
		}
	}

	return (
		<Fragment>
			<div className={classes.root}>
				<Grid container className={classes.base} justify="center">
					<SidenavEmployee />
					<Grid container item xs={10} className={classes.content} direction="column">
						<Grid container item justify="flex-start" alignItems="flex-start" style={{ height: '20%' }}>
							<DashboardTitle />
						</Grid>
						<Grid container item style={{ height: '10%' }}>
							<Grid item xs={11}>
								<ButtonGroup
									variant="contained"
									color="primary"
									aria-label="contained primary button group"
									fullWidth={true}
								>
									<Button onClick={() => changePage('1')}>Tugas Baru</Button>
									<Button onClick={() => changePage('2')}>Sedang Dikerjakan</Button>
									<Button onClick={() => changePage('3')}>Sedang Direview</Button>
									<Button onClick={() => changePage('4')}>Butuh Direvisi</Button>
								</ButtonGroup>
							</Grid>
						</Grid>
						<Grid container item>
							<Grid container item xs={11} justify="flex-start" spacing={1}>
								{page === '1' ? (
									<PendingTaskList />
								) : page === '2' ? (
									<OnProgressTaskList />
								) : page === '3' ? (
									<ReviewedTaskList />
								) : page === '4' ? (
									<RevisionTaskList />
								) : (
									''
								)}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</Fragment>
	);
}
