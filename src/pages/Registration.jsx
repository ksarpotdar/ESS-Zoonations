import React, { Fragment } from 'react';

//Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';

//Components
import SignUp from '../assets/components/SignUp';
import Instruction from '../assets/components/Instruction';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		flexGrow: 1
	},
	base: {
		height: '100%',
		backgroundImage: `url(${'https://i.ibb.co/rxxDLrc/homepage-background.jpg'})`
	},
	mainContent: {
		height: '70%'
	},
	topSection: {
		padding: theme.spacing(2)
	},
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

export default function Registration() {
	const classes = useStyles();

	return (
		<Fragment>
			<div className={classes.root}>
				<Grid container className={classes.base} alignItems="flex-start" justify="center">
					<Grid container item className={classes.topSection} xs={11} justify="center" alignItems="center">
						<Typography className={classes.zoonations} component="h2" variant="h3">
							Z<img src="https://i.ibb.co/NjSpPSs/paw.png" alt="" style={{ maxHeight: '50px' }} />ONATIONS
						</Typography>
						<Typography className={classes.title} component="h1" variant="h3">
							Employee Self Service
						</Typography>
					</Grid>
					<Grid container item className={classes.mainContent} xs={11} spacing={5}>
						<SignUp />
						<Divider orientation="vertical" flexItem />
						<Instruction />
					</Grid>
				</Grid>
			</div>
		</Fragment>
	);
}
