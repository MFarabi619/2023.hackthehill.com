import React, { Component } from "react";
import "./About.css";
import Mascot from "/SVGs/mascot-waving.svg";

class About extends Component {
	render() {
		return (
			<div className="about" id="about">
				<div className="about-text">
					<h1>About Us</h1>
					<p>
						The University of Ottawa and Carleton University STEM Student Organizations are incredibly
						excited to introduce Canada's Capital Hackathon!
						<br></br>
						<br></br>
						Hack the Hill was established to set a new standard for hackathon operations! With a series of
						monthly events, also known as "The Hacker Series," hackathon participants will be provided
						numerous opportunities to brush up on their technical skills, network with peers and even learn
						from notable alumni and business leaders!
						<br></br>
						<br></br>
						Our main event is scheduled for March 3rd to 5th, 2023, and will be free for all participants.
						We look forward to seeing you all at our flagship hackathon and hope you're prepared to compete
						& network with the best!
					</p>
				</div>
				<img className="mascot" src={Mascot} alt="Bea.var, the Hack the Hill Mascot" />
			</div>
		);
	}
}

export default About;
