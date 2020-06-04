import React, { Fragment } from 'react';

//Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

//Other Libraries
import Clock from 'react-live-clock';

const useStyles = makeStyles((theme) => ({
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

export default function DashboardTitle() {
	const classes = useStyles();

	return (
		<Fragment>
			<Typography className={classes.zoonations} component="h2" variant="h3">
				Z<img src="https://i.ibb.co/NjSpPSs/paw.png" alt="" style={{ maxHeight: '50px' }} />ONATIONS
			</Typography>
			<Typography className={classes.title} component="h1" variant="h3">
				Employee Self Service
			</Typography>
		</Fragment>
	);
}
