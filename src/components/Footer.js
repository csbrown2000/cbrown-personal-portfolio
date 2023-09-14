// React specific imports
import React from 'react';

// CSS styling
import './Footer.css'

function Footer(){
	return(
		<footer>
			<ul className='footer-list'>
				<li className='footer-links'>
					<a href="www.github.com">Github</a>
					<a href="www.linkedin.com">LinkedIn</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;