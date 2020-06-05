import React, { Fragment } from 'react';

//Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Avatar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//Components
import SidenavManager from '../assets/components/SidenavManager';
import DashboardTitle from '../assets/components/DashboardTitle';
import EmployeeNumberSummary from '../assets/components/EmployeeNumberSummary';

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
		paddingLeft: '1%',
		paddingTop: '2%'
	}
}));

export default function EmployeeDashboard() {
	const classes = useStyles();

	function createData(name, calories, fat, carbs, protein) {
		return { name, calories, fat, carbs, protein };
	}

	const rows = [
		createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
		createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
		createData('Eclair', 262, 16.0, 24, 6.0),
		createData('Cupcake', 305, 3.7, 67, 4.3),
		createData('Gingerbread', 356, 16.0, 49, 3.9)
	];

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
							<Grid container item justify="space-around" xs={11} spacing={1} style={{ height: '100%' }}>
								<EmployeeNumberSummary />
								<TableContainer component={Paper}>
									<Table className={classes.table} aria-label="simple table">
										<TableHead>
											<TableRow>
												<TableCell>Dessert (100g serving)</TableCell>
												<TableCell align="right">Calories</TableCell>
												<TableCell align="right">Fat&nbsp;(g)</TableCell>
												<TableCell align="right">Carbs&nbsp;(g)</TableCell>
												<TableCell align="right">Protein&nbsp;(g)</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{rows.map((row) => (
												<TableRow key={row.name}>
													<TableCell component="th" scope="row">
														{row.name}
													</TableCell>
													<TableCell align="right">{row.calories}</TableCell>
													<TableCell align="right">{row.fat}</TableCell>
													<TableCell align="right">{row.carbs}</TableCell>
													<TableCell align="right">{row.protein}</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
							</Grid>
						</Grid>
						{/* <Grid item xs={12} style={{ paddingTop: '2%', paddingBottom: '2%', paddingRight: '1%' }}>
							<Paper elevation={5} style={{ height: '100%' }}>
								<Grid item xs={6}>
									<Typography>a</Typography>
								</Grid>
							</Paper>
						</Grid> */}
					</Grid>
				</Grid>
			</div>
		</Fragment>
	);
}
