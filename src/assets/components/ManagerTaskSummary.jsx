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
					<Typography className={classes.title}>Ringkasan Data Penugasan dan Status Akun Karyawan</Typography>
				</Grid>
				<Grid container item xs={12} className={classes.taskSummaryBase}>
					<Grid container item xs={7}>
						<Grid container item xs={12} className={classes.taskContent}>
							<Grid container item xs={6} direction="column" alignItems="center">
								<Typography variant="h4">{props.done}</Typography>
								<Typography style={{ textAlign: 'center' }}>Tugas Selesai</Typography>
							</Grid>
							<Grid container item xs={6} direction="column" alignItems="center">
								<Typography variant="h4">{props.onProgress}</Typography>
								<Typography style={{ textAlign: 'center' }}>Tugas Sedang Dikerjakan</Typography>
							</Grid>
						</Grid>
						<Grid container item xs={12} className={classes.taskContent}>
							<Grid container item xs={6} direction="column" alignItems="center">
								<Typography variant="h4">{props.pending}</Typography>
								<Typography style={{ textAlign: 'center' }}>Tugas Belum Dikerjakan</Typography>
							</Grid>
							<Grid container item xs={6} direction="column" alignItems="center">
								<Typography variant="h4">{props.revision}</Typography>
								<Typography style={{ textAlign: 'center' }}>Tugas Perlu Direvisi</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Divider orientation="vertical" flexItem />
					<Grid container item xs={4} direction="column" alignItems="center" justify="center">
						<Grid container item className={classes.deadlineList} direction="column" alignItems="center">
							<Typography variant="h4">{props.activeUser}</Typography>
							<Typography style={{ textAlign: 'center' }}>Akun Karyawan Aktif</Typography>
						</Grid>
						<Grid container item className={classes.deadlineList} direction="column" alignItems="center">
							<Typography variant="h4">{props.pendingUser}</Typography>
							<Typography style={{ textAlign: 'center' }}>Akun Karyawan Pending</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Fragment>
	);
}
