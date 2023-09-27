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
				<a href="./projects">Projects</a>
				<a href="./about">About</a>

				{/* <Link to="">Home</Link>
				<Link to="">Projects</Link>
				<Link to="./about">About</Link>
				<Outlet/> */}
			</div>
		</nav>
	);
};     

export default Navbar;