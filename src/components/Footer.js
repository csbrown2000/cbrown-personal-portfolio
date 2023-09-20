// React specific imports
import React from 'react';

// CSS styling
import './Footer.css'

function Footer(){
	return(
		<footer>
			<ul className='footer-list'>
				<li className='footer-links'>
					
					<a className='github' href="https://www.github.com" alt='Github link'>
						<img src={require('../resources/github-logo.png')} alt="Github Logo" />
					</a>
					<a className='linkedin' href="www.linkedin.com">
						<img src={require('../resources/linkedin-logo.png')} alt="Linkedin Logo" />
					</a>
				</li>
			</ul>
			<div>
				<p>© 2023 Collin Brown</p>
			</div>
		</footer>
	);
}

export default Footer;