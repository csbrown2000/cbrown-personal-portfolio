// React specific imports
import React from 'react';

// CSS styling
import './Navbar.css'


function Navbar(){
	return (
		// navbar div
		<nav>
			<h1>Collin Brown</h1>
			<div className='page-nav'>
				<a href="./">Home</a>
				<a href="./">Projects</a>
				<a href="./">About</a>
			</div>
		</nav>
	);
};     

export default Navbar;