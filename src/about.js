import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div className='about'>
			<Navbar/>
			<Footer/>
	</div>
);