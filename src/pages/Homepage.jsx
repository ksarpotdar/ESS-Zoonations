import React, { Fragment } from 'react';

//Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

//Components
import Welcome from '../assets/components/Welcome';
import SignIn from '../assets/components/SignIn';

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
		height: '50%'
	}
}));

export default function Homepage() {
	const classes = useStyles();

	return (
		<Fragment>
			<div className={classes.root}>
				<Grid container className={classes.base} alignItems="center" justify="center">
					<Grid container item className={classes.mainContent} xs={11}>
						<Welcome />
						<Divider orientation="vertical" flexItem />
						<SignIn />
					</Grid>
				</Grid>
			</div>
		</Fragment>
	);
}
