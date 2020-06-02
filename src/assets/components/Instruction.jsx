import React, { Fragment } from 'react';

//Styling - Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	title: {
		textAlign: 'center',
		fontFamily: 'Ubuntu, sans-serif',
		color: '#40403f',
		paddingBottom: theme.spacing(5)
	},
	body: {
		fontFamily: 'Open Sans Condensed, sans-serif',
		color: '#40403f',
		paddingBottom: theme.spacing(2)
	}
}));

export default function Instruction() {
	const classes = useStyles();

	return (
		<Fragment>
			<Grid container item xs={6}>
				<Grid item xs={12}>
					<Typography component="h2" variant="h4" className={classes.title}>
						Petunjuk Pendaftaran
					</Typography>
					<Typography component="h2" variant="body1" className={classes.body}>
						1. Isi data diri pada form disamping dengan benar, pastikan email dan no. Hp aktif, nomor
						pendaftaran berisi nomor yang tertera pada surat penerimaan
					</Typography>
					<Typography component="h2" variant="body1" className={classes.body}>
						2. Setelah memastikan data diisi dengan benar, klik "DAFTAR" untuk mengirim data
					</Typography>
					<Typography component="h2" variant="body1" className={classes.body}>
						3. Setelah data berhasil dikirim, admin bagian IT akan mengevaluasi informasi yang diterima,
						proses evaluasi maksimal 1 hari kerja
					</Typography>
					<Typography component="h2" variant="body1" className={classes.body}>
						4. Apabila informasi yang dimasukkan sesuai, Anda akan dikirimi email yang berisi akun SSO
						beserta password default
					</Typography>
					<Typography component="h2" variant="body1" className={classes.body}>
						5. Setelah mendapat akun SSO, Anda dapat login melalui halaman utama
					</Typography>
					<Typography component="h2" variant="body1" className={classes.body}>
						6. Apabila terdapat ketidaksesuaian informasi, Anda akan dihubungi oleh admin bagian IT melalui
						email atau No.Hp
					</Typography>
				</Grid>
			</Grid>
		</Fragment>
	);
}
