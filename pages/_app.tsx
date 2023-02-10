import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return <>
		<Head>
			<title>My Next App</title>
			<link rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href="https://fonts.google.com" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" />
		</Head>
		<Component {...pageProps} />
	</>;
}

export default MyApp;