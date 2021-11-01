import dotenv from 'dotenv';
import React from 'react'

import { Header, Main, Services, GoodsStock, Teacher, Footer } from './components';

dotenv.config()

const App = () => {
	return (
		<>
			<Header />

			<Main />

			<Services />

			<GoodsStock />
			
			<Teacher />

			<Footer />
		</>
	)
}

export default App

