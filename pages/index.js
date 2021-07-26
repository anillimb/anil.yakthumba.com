import React, { useState } from 'react';
import Head from 'next/head';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import styles from './index.module.css';
import Navbar from '../components/Navbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';


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
	gallerySection: {
		display: 'flex',
		justifyContent: 'center',
		paddingTop: '30px',
		// alignItems: 'center',
	},
	gallerySectionTitle: {
		textAlign: 'center',
	},
	pics: {
		'& img': {
			maxWidth: '100%'
		}
	}
}));

const images = [
	{ id: '1', title: 'This is title', content: 'Thie content', img: '/images/image-1.jpg' },
	{ id: '2', title: 'This is title', content: 'Thie content', img: '/images/image-4.jpg' },
	{ id: '3', title: 'This is title', content: 'Thie content', img: '/images/image-6.jpg' },
	{ id: '4', title: 'This is title', content: 'Thie content', img: '/images/image-2.jpg' },
	{ id: '5', title: 'This is title', content: 'Thie content', img: '/images/image-6.jpg' },
	{ id: '6', title: 'This is title', content: 'Thie content', img: '/images/image-5.jpg' },
	{ id: '7', title: 'This is title', content: 'Thie content', img: '/images/image-7.jpg' },

]

const Home = () => {

	const classes = useStyles();
	const [model, setModel] = useState(false);
	const [tempimg, setTempImg] = useState('');

	const getImg = (img) => {
		setTempImg(img);
		setModel(true);
	}

	return (
		<div className={classes.container}>
			<Head>
				<title>My tech web</title>
			</Head>
			<main className={classes.main}>
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
				<section>
					<div className={classes.gallerySection}>
						<div className={classes.gallerySectionTitle}>
							<Typography variant="h2" component="h2">
								Work Space
							</Typography>
							<Typography variant="subtitle2">
								subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
							</Typography>
						</div>
					</div>
					<div className={model ? "model open" : "model"}>
						<img src={tempimg} />
						<CloseIcon onClick={() => setModel(false)} />
					</div>
					<div className={styles.galleryImages}>
						{images.map((item, index) => {
							return (
								<div className={styles.gridTitle} key={index}>
									{/* <Typography variant="subtitle2">
										Title
									</Typography> */}
									<div className={clsx(styles.gridItem, `item-${index+1}`)} onClick={() => getImg(item.img)}>
										<img src={item.img} className={styles.img} />
									</div>
								</div>
							);
						})}
					</div>
				</section>
			</main>
		</div >
	);
}

export default Home;




