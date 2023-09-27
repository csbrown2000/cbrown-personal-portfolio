import React from 'react'
import ProjectListItem from './ProjectListItem';


function Projects() {
	const coding_projects = [
		{
			title: 'Spreadsheet Application',
			description: 'A Spreadsheet application similar to excel. Implemented with the ability to provide formulas, etc. Built using C# in a Windows Forms Application',
			img: ''
		},
		{
			title: 'Learning Management System',
			description: 'A learning management system web application backend built using C# and MySql. Using the C# linc library to work with the SQL database.',
			img: ''
		}
	];

	const projList = [];
	
	coding_projects.forEach((projectInfo) => {
		projList.push(
			<ProjectListItem title={projectInfo.title} description={projectInfo.description}
			img={projectInfo.img}/>
		);
	});

	return projList;
}

export default Projects;