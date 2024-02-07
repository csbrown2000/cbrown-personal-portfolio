import React from 'react'
import ProjectListItem from './ProjectListItem';

// Spreadsheet pictures
import spreadsheetAppPic from '../resources/Spreadsheet-Application.png'
// Lifestyle App pictures
import lifestyleApp1 from '../resources/Lifestyle App Home Screen.png'
import lifestyleApp2 from '../resources/Lifestyle App Profile Screen.png'
import lifestyleApp3 from '../resources/Lifestyle App Weather Screen.png'
// Tank Wars Game pictures
import tankWarsGame1 from '../resources/Tank Wars Game.png'
// Chess Browser App
import chessBrowser1 from '../resources/Chess Browser Database.png'
// LMS Web App
import lms1 from '../resources/assignment.png'
import lms2 from '../resources/assignments.png'
import lms3 from '../resources/login.png'
import lms4 from '../resources/profile-wide.png'
import lms5 from '../resources/submissions.png'
// Backseat DJ
import bsdj1 from '../resources/BSDJ-Screenshot-Queue.png'
import bsdj2 from '../resources/BSDJ-Screenshot-Player.png'
import bsdj3 from '../resources/BSDJ-Screenshot-Search.png'
import bsdj4 from '../resources/BSDJ-Screenshot-Profile.png'
import bsdj5 from '../resources/BSDJ-Screenshot-Settings.png'
import bsdj6 from '../resources/BSDJ-Screenshot-Login.png'
import bsdj7 from '../resources/BSDJ-Screenshot-Welcome.png'




function Projects() {
	const coding_projects = [
		{
			title: 'Learning Management System',
			description: 'A learning management system which tracks assignments, users (students/professors), grades, and submissions. This project was part of a class assignment. One version was just a backend using C# and mySQL which was integrated into a prebuilt frontend. The other assignment was built using HTML, CSS, and Django. This version (pictured) was a full stack web application built during my Web Development I class.',
			img: [lms1, lms2, lms3, lms4, lms5]
		},
		{
			title: 'BackseatDJ App *in-progress*',
			description: 'Imagine you\'re on a road trip with a bunch of your friends and you just can\'t stand the music the driver is playing. That is where BackseatDJ comes in. BackseatDJ allows users to connect and share a music queue regardless of their preferred streaming service. BackseatDJ features integration with Spotify, Soundcloud, Apple Music, and Youtube to allow the host of the room to connect their streaming service. From their all of your passengers can join the room, using a unique room code, and add songs, upvote, and downvote music in the queue. This allows the driver to focus on the road while your passengers control the music. \n This app is currently in development using Expo, React Native, Node.js, Express, mySQL, and deployment using AWS. This is my capstone project for my CS degree from The University of Utah.',
			img: [bsdj1, bsdj2, bsdj3, bsdj4, bsdj5, bsdj6, bsdj7]
		},
		{
			title: 'Tank Wars Game',
			description: 'This project is a Tankwars game built in C#. As a class assignment we worked with a partner in a pair-programming environment. Part of this assignment we built the server architechture to handle the specifications of the (sample) client. We then used our server to build our own version client. Additionally, we handled projectile movements, projectile and tank collisions, and created bots that you can play against. Our server was built to handle mulitple clients and uses json to communicate back and fourth with the client(s). Likewise, the client was able to communicate back and fourth with the server via json, but all logic, projectiles, and collisions were handled on the server-side',
			img: tankWarsGame1
		},
		{
			title: 'Chess Browser Database',
			description: 'A backend database built using MySQL and C#\' Linq library to query the database. This app allowed users to upload a PGN formatted file which would be parsed and added into the database. Additionally, users could insert filters which would adjust queries on the backend and result in data displayed on the frontend.',
			img: chessBrowser1
		},
		{
			title: 'Spreadsheet Application',
			description: 'A Spreadsheet application similar to excel. Built using C#, the goal of this project was to learn how to work with a GUI, handle events such as clicking and typing, and to implement backend logic that would handle formulas. The formulas allowed users to add, subtract, multiply, and divide values within a specific block and output this data to another block. There is also support for additional formulas such as calculating averages and other more complex operations.',
			img: spreadsheetAppPic
		},
		{
			title: 'Lifestyle Android App',
			description: 'A lifestyle app created to track BMR and caloric intake. The app also allowed users to see nearby hikes on a map, create and adjust user health information on their profile, and see nearby weather data which was pulled from an external API. This project was an assignment as part of a Mobile App Development class in which we worked in a team of four. The main goal of this project was to work with application lifecycles, query databases, implement external API\'s, learn kotlin, and make use of device specific components such as the camera.',
			img: [lifestyleApp1, lifestyleApp2, lifestyleApp3]
		},
		
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