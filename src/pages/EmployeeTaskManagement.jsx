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
import SideNav from '../assets/components/SideNav';
import DashboardTitle from '../assets/components/DashboardTitle';

//Other Libraries
import Clock from 'react-live-clock';

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

	return (
		<Fragment>
			<div className={classes.root}>
				<Grid container className={classes.base} justify="center">
					<SideNav />
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
									<Button>Tugas Baru</Button>
									<Button>Sedang Dikerjakan</Button>
									<Button>Sedang Direview</Button>
									<Button>Butuh Direvisi</Button>
								</ButtonGroup>
							</Grid>
						</Grid>
						<Grid container item>
							<Grid container item xs={11} justify="flex-start" spacing={1}>
								<Grid item xs={4}>
									<Card className={classes.root}>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												Nama Project
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												Keterangan tugas yang akan dikerjakan
											</Typography>
										</CardContent>
										<CardActions>
											<Button size="small" color="primary">
												Kerjakan sekarang
											</Button>
										</CardActions>
									</Card>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</Fragment>
	);
}
