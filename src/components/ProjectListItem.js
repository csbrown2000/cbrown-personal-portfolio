import React from 'react'

import PictureSwitcher from './PictureSwitcher';

import './Projects.css';


function ProjectListItem(props) {
	const altString = "Project image for " + props.title;
	return ( 
			<div className="list-item">
				<div className='item-info'>
					<h1>{props.title}</h1>
					<p>{props.description}</p>
				</div>
				{typeof props.img === 'object' ? <PictureSwitcher img={props.img} /> :
				props.img === '' ? <div/> : <img src={props.img} alt={altString}/>}
				
			</div>
	 );
}

export default ProjectListItem;