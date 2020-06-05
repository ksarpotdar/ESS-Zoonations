import React, { Fragment } from 'react';

//Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
	paperSummaryBase: {
		width: '100%'
	},
	titleBase: {
		height: '20%'
	},
	title: {
		textAlign: 'center'
	},
	taskSummaryBase: {
		height: '80%'
	},
	taskContent: {
		height: '40%'
	},
	deadlineTitle: {
		textAlign: 'center',
		height: '30%'
	},
	deadlineList: {
		height: '30%'
	}
}));

export default function TaskSummary(props) {
	const classes = useStyles();

	return (
		<Fragment>
			<Paper elevation={5} className={classes.paperSummaryBase}>
				<Grid item xs={12} className={classes.titleBase}>
					<Typography className={classes.title}>Ringkasan Data Penugasan</Typography>
				</Grid>
				<Grid container item xs={12} className={classes.taskSummaryBase}>
					<Grid container item xs={7}>
						<Grid container item xs={12} className={classes.taskContent}>
							<Grid container item xs={6} direction="column" alignItems="center">
								<Typography variant="h4">{props.done}</Typography>
								<Typography>Selesai</Typography>
							</Grid>
							<Grid container item xs={6} direction="column" alignItems="center">
								<Typography variant="h4">{props.onProgress}</Typography>
								<Typography>Sedang Dikerjakan</Typography>
							</Grid>
						</Grid>
						<Grid container item xs={12} className={classes.taskContent}>
							<Grid container item xs={6} direction="column" alignItems="center">
								<Typography variant="h4">{props.reviewed}</Typography>
								<Typography>Sedang Direview</Typography>
							</Grid>
							<Grid container item xs={6} direction="column" alignItems="center">
								<Typography variant="h4">{props.revision}</Typography>
								<Typography>Perlu Direvisi</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Divider orientation="vertical" flexItem />
					<Grid container item xs={4} direction="column" alignItems="center">
						{/* <Typography className={classes.deadlineTitle}>Deadline Terdekat Untuk Direview</Typography>
						<Grid container item className={classes.deadlineList} direction="column" alignItems="center">
							<Typography>Tugas A</Typography>
							<Typography>6/12/2020 16:00</Typography>
						</Grid>
						<Grid container item className={classes.deadlineList} direction="column" alignItems="center">
							<Typography>Tugas B</Typography>
							<Typography>6/20/2020 16:00</Typography>
						</Grid> */}
					</Grid>
				</Grid>
			</Paper>
		</Fragment>
	);
}
