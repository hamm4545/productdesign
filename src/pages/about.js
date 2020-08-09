import React from "react"
import Layout from "../components/layout"
import Pic from "../components/myPic"
import Drawing01 from "../components/drawing-01"
import Drawing02 from "../components/drawing-02"

import Photo01 from "../components/photo-01"
import Photo02 from "../components/photo-02"
import Photo03 from "../components/photo-03"
import Photo04 from "../components/photo-04"
import Photo05 from "../components/photo-05"
import Photo06 from "../components/photo-06"

import "../styles/styles.scss"


const AboutPage = () => (
	<Layout>  
		<div className="content-about">
			<div className="grid-item-6">				
				<div className="grid-item">
					<div className="img-circle">
						<Pic></Pic>
					</div>					
				</div>
				<div className="grid-item">
					<h2>Hi there!</h2>
			
					<p>I am a product designer with a front-end developer background. My passion is to elevate strategy and design to create products that are more user-centric and viable. I love to solve abstract problems into easy and simple solutions through empathy with users perspective.</p>
					<p>In my spare time, I like going for a walk, drawings and watching movies. Especially I love exploring, taking photos or experiencing new things.</p>
					<p>You can follow me here — <a href="https://www.linkedin.com/in/heathersong/" target="_blank" rel="noreferrer">LinkedIn</a> and reach out by <a href="mailto:heathersong.com@gmail.com">email</a>.</p>
				</div>
			</div>
		</div>	
		<div className="content">				
			<div className="container-gallery">
				<figure className="gallery__item ">
					<Photo04></Photo04>
				</figure>
				<figure className="gallery__item ">
					<Photo05></Photo05>
				</figure>
				<figure className="gallery__item ">
					<Photo02></Photo02>
				</figure>
				<figure className="gallery__item ">
					<Photo06></Photo06>
				</figure>

				<figure className="gallery__item ">
					<Photo01></Photo01>
				</figure>
				
				<figure className="gallery__item ">
					<Photo03></Photo03>
				</figure>				
				
				<figure className="gallery__item horizontal">
					<Drawing01></Drawing01>
				</figure>
				<figure className="gallery__item ">
					<Drawing02></Drawing02>
				</figure>
			</div>				
		</div>
		
	</Layout>
)

export default AboutPage