import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

import HeroImg from "../components/img-a-hero02"
import SearchImg from "../images/project02/CM-Search-dropdown.jpg"
import Workflow from "../images/project02/workflow.png"
import PatternLibrary from "../images/project01/pattern-library.jpg"
import Composition from "../images/project02/Composition.png"



const ProjectPage = () => (
	<Layout>
		<div class="content">
			<div class="text-hero text-center">
				<h1> Grow@ Mobile App for Managers</h1>
				
			</div>  
		</div>
		<div class="content-fullwidth bg-darkgrey">
			<div class="content">
				<div class="hero_img extra-padding-top">
					<HeroImg></HeroImg>
				</div>
			</div>
		</div>
		
		<div class="content">	
			<main>
				<h2>Introduction</h2>
				<p>Grow@ enables the contract manager workflow faster and efficient.</p>
				<p>
					Commercial cleaning industry turnover is speedy, and many workers come and go as well. Moreover, it is a low margin business, and 80% of the costs of cleaning contractors are labour.  Therefore, anything that makes recruitment and utilisation of work more efficient should lead to significant savings.
				</p>
				<p>
					Creating a well-designed app enables commercial cleaning workflow much more efficient and offers more job opportunities for cleaners, along with making the contract manager work faster and more productive. 
				</p>

				<h2>Goals</h2>
				<p>Grow@ desires to give the contract managers access to workers who have already accepted the times, locations and wage rates of the job type they are recruiting for. They can even use the system to access their company’s existing workers who are willing to work additional hours at certain times and in specific locations. As a result, this has the potential to lower staff turnover as workers are given more opportunities to increase their hours. Through the seamless flow of the search enables managers to find the available candidates easier and faster.  </p>
				
				<h2>Challenges</h2>
				<ol>
					<li>Make sure two different apps to interact with each other seamlessly. </li>
					<li>Need to provide clear steps to verify the hiring process.</li>
					<li>Email can’t be used to verify when signed up.</li>
					<li>Consistent look and feel across candidates and managers apps.</li>
					<li>The Contract Manager is a supervisor of the cleaner. 40 - 60 years old, majority female, mirror the community of the cleaners.</li>
				</ol>
				<h2>Approach</h2>
				<p>As the business will be able to expand to other industries, I added the dropdown to choose other industries for hiring for the future on the search screen.</p>
				
				<img src={SearchImg} class="bg-lightgrey" alt="test" />
			
				
				<p>Fundamental search values sit on the landing screen so that enabling a manager to quickly find workers available to work at a specific start time or in a specified time window. The rest of the search fields are in the advanced search as a link. Once it's triggered, open as a full screen modal. It enables the users to set the significant criteria associated with each job type without any distractions.</p>
				<p>There are steps to go through to hire the right candidate. The app should reflect the interactions between the manager and candidate app so that the manager can see the hiring status at a glance. Therefore, I have created small job boxes with different colours in a job card on my job screen as well as the progress bar on the bottom of the card. It summarises the current work progress for each job. Like the candidate app, icons help the app be more friendly and easy to inform the tasks and main features. </p>

			</main>
		</div>
		<div class="content-fullwidth bg-lightgrey extra-padding-top">
			<img src={Workflow} alt="test" />
		</div>
		<div class="content">
			<main>
				<h2>Visual Designs</h2>
				<p>
					I ensured two apps relevant and consistent look and feel with each other. But, the manager app should look more professional and reliable, so I chose blue for the primary theme colour to look more professional. Through using the same UI design approach like workers' app,  It allows saving significant time to develop the manager app.
				</p>
				<img class="bg-lightgrey" src={PatternLibrary} alt="test" />
			</main>
		</div>
		
		<div class="content-fullwidth short-height">
			<main>
				<img src={Composition} alt="test" />
			</main>			
		</div>
		<div class="content">
			<main>
				<h2>Results</h2>
				<p>It has successfully landed, and more commercial cleaning companies join the app.
				The app is being used without extra training. Over 900 candidates signed up the app and over 2300 transactions were made within a short time.			</p>
				<p>
					I'm glad about the result. I think it is a result of keeping questioning myself during a design session along with internal user testing. For example, ' Does it make sense?' ' Does it really help the end-users usability?'.
				</p>
				<p>
					Since the product launched, I am confident that this product would make the managers work efficiency better and their life more comfortable.
				</p>
			</main>
		</div>
		
		<footer>
			<div class="content">				
				<div class="row">
					<a href="">Back to Top</a>
					<Link to="/tether/">Next <i class="right"></i></Link>
				</div>							
			</div>			
		</footer>
	</Layout>
)

export default ProjectPage