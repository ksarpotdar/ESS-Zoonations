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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//Components
import SidenavManager from '../assets/components/SidenavManager';
import DashboardTitle from '../assets/components/DashboardTitle';
import ManagerCreateTask from '../assets/components/ManagerCreateTask';
import ManagerTaskList from '../assets/components/ManagerTaskList';
import ReviewTask from '../assets/components/ReviewTask';

//Other Libraries

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
	const [ page, setPage ] = React.useState('1');

	const changePage = (page) => {
		setPage(page);
	};

	return (
		<Fragment>
			<div className={classes.root}>
				<Grid container className={classes.base} justify="center">
					<SidenavManager />
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
									<Button onClick={() => changePage('1')}>Ringkasan Tugas</Button>
									<Button onClick={() => changePage('2')}>Tugas yang Harus direview</Button>
									<Button onClick={() => changePage('3')}>Pemberian Tugas Untuk Karyawan</Button>
								</ButtonGroup>
							</Grid>
						</Grid>
						<Grid container item>
							<Grid container item xs={11} justify="flex-start" spacing={1}>
								{page === '1' ? (
									<ManagerTaskList />
								) : page === '2' ? (
									<ReviewTask />
								) : page === '3' ? (
									<ManagerCreateTask />
								) : (
									''
								)}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</Fragment>
	);
}
