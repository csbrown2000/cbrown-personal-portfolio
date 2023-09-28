import React from 'react'

import './Projects.css';


function ProjectListItem(props) {
	const altString = "Project image for " + props.title;
	return ( 
			<div className="list-item">
				<div>
					<h1>{props.title}</h1>
					<p>{props.description}</p>
				</div>
				{typeof props.img === 'object' ? <div/> :
				props.img === '' ? <div/> : <img src={props.img} alt={altString}/>}
				
			</div>
	 );
}

export default ProjectListItem;