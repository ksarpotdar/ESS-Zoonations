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

//Other Libraries
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Redux Action
import { updateTaskStatus } from '../redux/action/taskAction';

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

export default function RevisionTaskList() {
	const classes = useStyles();
	const allTask = useSelector((state) => state.taskData);
	const revisionTask = [];
	const dispatch = useDispatch();
	const history = useHistory();

	if (allTask.length !== 0) {
		for (let i = 0; i < allTask.length; i++) {
			if (allTask[i].status === 'Butuh Direvisi') {
				revisionTask.push(allTask[i]);
			}
		}
	}

	const changeStatus = (id) => {
		const data = {
			status: 'Sedang Direview'
		};
		dispatch(updateTaskStatus(id, data));
		history.push('/employee-dashboard');
	};

	return (
		<Fragment>
			<Grid item xs={12}>
				<Typography variant="h5" style={{ textAlign: 'center', marginBottom: '3%' }}>
					Tugas yang butuh direvisi
				</Typography>
			</Grid>
			{revisionTask.length !== 0 ? (
				revisionTask.map((task) => (
					<Grid item xs={4}>
						<Card className={classes.root} key={task._id}>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									{task.projectName}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									{task.taskDetails}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Deadline : {task.deadline}
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" color="primary" onClick={() => changeStatus(task._id)}>
									Siap Direview
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))
			) : (
				'Tidak ada tugas yang harus direvisi'
			)}
		</Fragment>
	);
}
