import React from "react"
import Layout from "../components/layout"
import Pic from "../components/myPic"


const AboutPage = () => (
	<Layout>  
		<div class="content-about">
			<div className="grid-item-6">				
				<div className="grid-item">
					<div className="img-circle">
						<Pic></Pic>
					</div>
					
				</div>
				<div className="grid-item">
					<h2>Hi there!</h2>
			
					<p>I am a product designer with a front-end developer background. My passion is to elevate strategy and design to create products that are more user-centric and viable. I love to solve abstract problems into easy and simple solutions through empathy with users perspective.</p>
					<p>In my spare time, I go for a walk, meditation and watch movies. Photography is one of my favourites. </p>
					<p>You can follow me here — <a href="https://www.linkedin.com/in/heathersong/" target="_blank" rel="noreferrer">LinkedIn</a> and reach out by <a href="mailto:heathersong.com@gmail.com">email</a>.</p>
				</div>
			</div>
		</div>
		
	</Layout>
)

export default AboutPage