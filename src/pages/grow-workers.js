import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import "../styles/styles.scss"

import HeroImg from "../components/img-a-hero01"

import Wireframe from "../images/project01/wireframe-candidates.jpg"
import Availability from "../images/project01/Availability.jpg"
import PatternLibrary from "../images/project01/pattern-library.jpg"
import Composition from "../images/project01/Composition02-candidates.png"



const ProjectPage = () => (
	<Layout>
		<div className="content">
			<div className="text-hero text-center ">
				<h1> Grow@ Mobile App for Worker</h1>

			</div>
		</div>
		<div className="content-fullwidth bg-darkgrey">
			<div className="content">
				<div className="hero_img extra-padding-top">
					<HeroImg></HeroImg>

				</div>
			</div>
		</div>

		<div className="content">
			<main>
				<h2>Introduction</h2>
				<p>Grow@ wanted to provide a platform to match desires between cleaners and contract managers to find the job or right candidates in an efficient way.</p>
				<p>
					Commercial cleaning industry turnover is speedy, and many workers come and go as well. Moreover, it is a low margin business, and 80% of the costs of cleaning contractors are labour.  Therefore, anything that makes recruitment and utilisation of work more efficient should lead to significant savings.
				</p>
				<p>
					Creating a well-designed app enables commercial cleaning workflow much more efficient and offers more job opportunities for cleaners, along with making the contract manager work faster and more productive.
				</p>

				<h2>Challenges</h2>
				<p>The biggest challenge for me was accessibility for the target user. Notably, the majority of people were middle and elderly age who are not tech-savvy. When the user registers the app, using an email account is one of the most common ways to do that. However, the target users don’t have an email account so the mobile number was only available to verify users during the signup journey. It was costly, depending on the number of usages. </p>
				<p>
					Also, the User’s first language is not English. The easy and straightforward description in English was needed.
				</p>
				<p>
					The app should be expandable for the future because the client wants to add more industries such as catering, security, labour, etc. within the app.
				</p>
				<p>
					Due to the target user's background,  understanding, and identifying between the client and end user’s context and needs was a key to design this app.
				</p>
				<h2>Approach</h2>
				<p>
					MVP was only for the commercial cleaning industry. Through design workshops with the client, clarifying main user tasks and flows and make sure two apps to interact with each other seamlessly.
				</p>

				<h3>Sign up journey:</h3>
				<p>
					Each screen delivers one task so that users can only focus on one task at once without any distractions.
				</p>
			</main>
		</div>

		<div className="content-fullwidth bg-lightgrey">
			<main>
				<img src={Wireframe} alt="wireframe" />
			</main>
		</div>
		<div className="content">
			<main>

				<h3>Availability:</h3>
				<img className="bg-lightgrey" src={Availability} alt="Availability" />
				<p>
					It was the most complicated and critical screen of the app. So, the stack holder has a strong opinion on it. He wanted to place the work rate and scheduler on the same page. As a designer point of view, I thought that it might confuse the users and the screen will be very crowded. Because the mobile screen is insufficient to put a lot of tasks at once, I think it's better to structure one main task at once. He has been in the industry so long and knows the candidates more than me, so I respect him and listened to his opinion.
				</p>
				<p>
					Here are my solutions to design the availability screen, along with two main tasks.
				</p>
				<p>
					Firstly, I located the wage set-up on the top as it's an easy task.
				</p>
				<p>
					Secondly, I tried to reinforce the connection between the slider and the text through icon consistency. The meaning of icons enables users to easily understand even if the majority of users' mother tongue is not English. Besides, it gets more attention than text.
				</p>
				<p>
					Notably, using icons was very important to save valuable screen estate as well as corresponding tasks in the weekly schedule.
				</p>
				<p>
					Unlike my concerns, the users are using it without any problems. I learn listening to clients is very important through this screen, and designers are not always right. Collaboration with the client and team is the key to create a successful product.

				</p>

				<h2>Visual Designs</h2>
				<p>
					After wireframing, I set the visual concept and started developing a visual language to keep UI design consistent across all the elements in the product.
				</p>
				<p>
					I think the product needs to look something felt friendly, energising and modern while retaining a welcoming and encouraging tone and manner. I also take advantage of using icons as much as possible. It enables to catch users eyes and helps to deliver the user's tasks in an easy way in the product.

				</p>
				<img className="bg-lightgrey" src={PatternLibrary} alt="Pattern Library" />
			</main>
		</div>

		<div className="content-fullwidth short-height">
			<main>
				<img src={Composition} alt="App screens" />
			</main>
		</div>
		<div className="content">
			<main>
				<h2>Results</h2>
				<p>
					The client is satisfied with the final product, and it’s successfully launched. Over 1000 candidates signed up the app and over 2400 transactions have been made since Sep 2019.
	The client is looking forward to expanding the next industry.
				</p>
				<p>
					Ultimately, I am happy with the product I have created. And I learned about the importance of seamless user flow and consistence design visual. Of course, there’s also a lot that could be improved. There was a miscommunication between design and development and lack of user testing sessions during the design process.

				</p>
				<p>
					I think sharing the design work early on in the process might have helped me to avoid spending a long time creating whole icon sets and allowed me to focus on enhancing user flows more.
				</p>
			</main>
		</div>

		<footer>
			<div className="grid-item-6">				
				<div className="grid-item">
					<Link to="/" className="c-btn">← Back</Link>		
				</div>
				<div className="grid-item align-right">
					<Link to="/grow-manager/" className="c-btn">Next →</Link>
				</div>
			</div>		
		</footer>

	</Layout>
)

export default ProjectPage
