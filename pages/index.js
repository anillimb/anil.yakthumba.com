import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {

	return(
		<div className={styles.container}>
		<Head>
			<title>Create Next App</title>
		</Head>
		<main className={styles.main}>
			<h1>This is next.js project</h1>
		</main>
		</div>
	);
}

export default Home;

