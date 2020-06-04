import React, { Fragment } from 'react';

//Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

//Other Libraries
import Clock from 'react-live-clock';

const useStyles = makeStyles((theme) => ({
	paperClockBase: {
		textAlign: 'center',
		height: '49%',
		marginBottom: '1%'
	},
	clockBase: {
		height: '100%'
	},
	date: {
		fontFamily: 'Ubuntu, sans-serif'
	},
	clock: {
		fontFamily: 'Orbitron, sans-serif'
	}
}));

export default function LiveClock() {
	const classes = useStyles();

	return (
		<Fragment>
			<Paper elevation={5} className={classes.paperClockBase}>
				<Grid container className={classes.clockBase} justify="center" alignItems="center" direction="column">
					<Typography>
						<Clock className={classes.date} format={'dddd, MMM Do yy'} ticking={true} />
					</Typography>
					<Typography variant="h3">
						{' '}
						<Clock className={classes.clock} format={'HH:mm:ss'} ticking={true} />
					</Typography>
				</Grid>
			</Paper>
		</Fragment>
	);
}
