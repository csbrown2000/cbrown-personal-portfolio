// React specific imports
import React from 'react';

// CSS styling
import './Navbar.css'


function Navbar(){
	return (
		// navbar div
		<div>
			<ul>
				<li>
					<a className='Navbar-a-li' href="./about">
						<strong>About</strong>
					</a>
				</li>
				<li>
					<a className='Navbar-a-li' href="./video"><strong>Video Editing</strong></a>
				</li>
				<li>
					<a className='Navbar-a-li' href="./programming"><strong>Programming</strong></a>
				</li>
				<li>
					<a className='Navbar-a-li' href="./index"><strong>Home</strong></a>
				</li>
					<h1 className='Navbar-name-logo'>Collin<br/> Brown</h1>

			</ul>
		</div>
	);
};     

export default Navbar;