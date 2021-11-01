import dotenv from 'dotenv';
import React from 'react'

import { Header, Main, Services, GoodsStock, GoodsClosed, Teacher, Footer } from './components';

dotenv.config()

const App = () => {
	return (
		<>
			<Header />

			<Main />

			<Services />

			<GoodsStock />

			<GoodsClosed />
			
			<Teacher />

			<Footer />
		</>
	)
}

export default App

