import React, { Fragment } from 'react';

//Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	paperNotifBase: {
		textAlign: 'center',
		height: '49%',
		marginTop: '1%'
	},
	notifBase: {
		height: '100%'
	},
	title: {
		height: '30%'
	},
	content: {
		height: '60%'
	}
}));

export default function Homepage() {
	const classes = useStyles();

	return (
		<Fragment>
			<Paper elevation={5} className={classes.paperNotifBase}>
				<Grid container alignItems="center" className={classes.notifBase} direction="column" justify="center">
					<Typography className={classes.title}>Notifikasi Tugas Baru</Typography>
					<Grid container item className={classes.content}>
						<Grid container item xs={12}>
							<Grid item xs={12}>
								<Typography variant="h4">0</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography>Tugas Baru</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Fragment>
	);
}
