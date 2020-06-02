import React, { Fragment } from 'react';

//Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	welcome: {
		alignSelf: 'center'
	},
	zoonations: {
		fontFamily: 'Montserrat Subrayada, sans-serif',
		color: '#292928'
	},
	title: {
		paddingBottom: theme.spacing(5),
		fontFamily: 'Ubuntu, sans-serif',
		color: '#40403f'
	}
}));

export default function Welcome() {
	const classes = useStyles();

	return (
		<Fragment>
			<Grid item className={classes.welcome} xs={7}>
				<Typography className={classes.zoonations} component="h2" variant="h2">
					Z<img src="https://i.ibb.co/NjSpPSs/paw.png" alt="" style={{ maxHeight: '50px' }} />ONATIONS
				</Typography>
				<Typography className={classes.title} component="h1" variant="h2">
					Employee Self Service
				</Typography>
			</Grid>
		</Fragment>
	);
}
