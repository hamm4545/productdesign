import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

import HeroImg01 from "../images/project03/hero.png"
import Colours from "../images/project03/colours.png"
import Icons from "../images/project03/icons.jpg"




const ProjectPage = () => (
	<Layout>
		<div class="content">
			<div class="text-hero text-center">
				<h1> Tether Tenanat App</h1>
				
			</div>  
		</div>
		<div class="content-fullwidth bg-lightgrey">
			<div class="content">
				<div class="hero_img extra-padding-top">
					<img src={HeroImg01} alt="test" />
				</div>
			</div>
		</div>
		
		<div class="content">	
			<main>
				<h2>Introduction</h2>
				<p>Tether is a startup and aims to provide IoT (Internet of things) the solution built specifically for property management companies, and the landlord to monitor and manage the indoor air quality across their property portfolios.</p>
				<p>There are two mobile applications to be an integral part of the Tether solution which is tenant and property manager apps.
				</p>
				<p>The tenant app is the essential mobile app to deliver the quality of the air in each area that a Tether device is installed to the end-users. It also allows users to understand trends across specific metrics and alert when something is wrong with the air quality in a room where Tether devices are installed as well as bringing the tenants to get taught how to fix problems.
				</p>
				<h2>Goal</h2>
				<ol>
					<li>Need to catch the user's attention to deliver the metrics and trends when something is wrong to enhance the quality of air.</li>
					<li>Providing methods on how to fix the air quality issue to avoid dangerous conditions caused by poor air quality.</li>
					<li>Enables tenants to view and manage the air quality daily basis within their property.</li>
				</ol>	

				<h2>Challenges</h2>
				<p>I was requested to do only UI design for the app, and I had to design based on the limited information the client provided. There was no budget to organise user testing.
Moreover, the end-users are a wide range of age range, and most of them might not be tech-savvy. The content of the first version consisted of numbers, metrics and text, and it is hard to attack the user's attention.</p>
				<p>
					Based on the first release, tether provided me informative graphs for the second release so that users can have more information about air quality, and they wouldn't feel a lack of content. With this version, the main challenge was how to structure graphs effectively and allow users to navigate the selection of the charts seamlessly. The critical challenge was the app was required to catch users' eyes so that I can at least start to look at the app and carry on using the app.

				</p>
				
				<h2>Approach</h2>
				<p>While I designed the app for each status of air quality, the problem was that lack of content on the first version. Therefore, I come up with these solutions.
				</p>
				<h3>1. Colour code</h3>
			</main>			
			
		</div>
		
		
		<div class="content-fullwidth bg-lightgrey extra-padding-top">
			<img src={Colours} alt="test" />					
		</div>
		<div class="content">
			<main>
				<p>There are eight different air quality statuses. I used different colours for each condition.
					It helps to explain the overall air quality to end-users. For example, red means very poor, green is good, etc. Each colour sticks users eyes, and it attracts users eyes.
				</p>
				<h3>2. Graph and facial expression Icons</h3>
				<img src={Icons} alt="test" />
				<p>I have used a circular graph with the air quality status and facial expression icons to deliver intuitive information. The icon of the facial expression made the app more friendly and easy to recognise the current air quality. The icons of the component of air quality enhance the user's understanding and help them the insight into the metrics.
				</p>			
			</main>
			
			<main>
				<h2>Results</h2>
				<p>After the first version launched, the users' reviews were very positive. Still, some of them felt the lack of content as using the app and requested more useful information and interactions to know more in-depth for the air quality. After version 1 release, the client came back to me with more content that end-users requested and captured all the feedback and asked me to do UI design version 2.
				</p>
			</main>
			
		</div>
		
		<footer class="content-fullwidth">
			<main>
				<a href="">Back to Top</a>
				<Link to="/grow-workers/">Next</Link>
			</main>
		</footer>
	</Layout>
)

export default ProjectPage