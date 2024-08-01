import React from "react";

// CSS
import "./About.css";

function About() {
	return (
		<div className="about">
			<div className="about-title">
				{/* <img src="" alt="" /> */}
				<h1>Collin Brown</h1>
				<h2>Software Developer</h2>
			</div>
			<div className="my-story">
				<h2>My Story</h2>
				<p>
					My name is Collin Brown. I'm an up and coming Software
					Developer with a Computer Science degree from the Kahlert
					School of Computing at the University of Utah.
				</p>
				<p>
					I am originally from Annapolis, Maryland but moved out to
					Utah when I was admitted to The U in 2019. When I am not
					studying or working, I enjoy spending my time outdoors
					skiing/snowboarding, snowmobiling, hiking, and biking.
				</p>
				<p>
					When I was younger I developed a passion for computers and
					games. By this time, I had already started a lawncare
					company, so I took some of the money that I made and built
					my first computer. This was my first hands on experience
					with computer hardware, but this sparked an interest into
					how I can make the hardware do what I want. So I learned to
					code.
				</p>
				<p>
					During the end of my highschool years, I took some
					introductory programming courses where I learned the basics
					of java and some object oriented programming concepts.
					Though my experience with programming was brief, I fell in
					love and decided to persue a degree in Computer Science at
					The University of Utah.
				</p>
				<p>
					As I continued my education, I learned alot about object
					oriented programming, algorithms, data structures, software
					devlopment, mobile devlopment, web development, and
					databases. Building applications with C, C++, C#, Java,
					HTML, and CSS, I was able to build upon my skills and create
					many projects that I am proud of. In my free time I have
					dedicated more time to learning modern web development
					including React, Javascript, Node.js, some Typescript, and
					some Next.js My time at The U has given me some invaluable
					skills that allow me to grow as a person and software
					developer and I look forward to applying these skills to new
					challenges/opportunities in the future.
				</p>
			</div>
		</div>
	);
}

export default About;
