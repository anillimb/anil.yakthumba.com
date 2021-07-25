import React from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	banner: {
		backgroundColor: '#86d4ab',
		height: '500px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	bannerTitle: {
		textAlign: 'center',
		color: '#fff',
	},
	bannerBtn: {
		marginTop: '13px',
		color: '#fff',
		padding: '15px 46px',
		backgroundColor: '#54b7e9',
		'&:hover': {
			backgroundColor: '#fff',
			color: '#000',
		}
	},
}));

// 549cb8

const Home = () => {

	const classes = useStyles(); 

	return(
		<div className={styles.container}>
		<Head>

		</Head>
		<main className={styles.main}>
			<Navbar />
			<section>
				<div className={classes.banner}>
					<div className={classes.bannerTitle}>
						<Typography variant="h2" component="h2" >
							Frontend Developer
						</Typography>
						<Typography variant="subtitle2">
							subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
						</Typography>
						<Button variant="contained" color="secondary" className={classes.bannerBtn}>
							Read me
						</Button>
					</div>
				</div>
			</section>
		</main>
		</div>
	);
}

export default Home;

