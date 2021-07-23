import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {

	return(
		<div className={styles.container}>
		<Head>
			<title>Create Next App</title>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
		</Head>
		<main className={styles.main}>
			<h1>This is next.js project</h1>
		</main>
		</div>
	);
}

export default Home;

