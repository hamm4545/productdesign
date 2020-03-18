import React from "react"
import { Link } from "gatsby"
import HeroImg01 from "../images/grow@-candidates.jpg"
import HeroImg02 from "../images/grow@-Group2.jpg"
import HeroImg03 from "../images/project-Group3.jpg"

export default ({ children }, props) => (
	<section>
		<article >
		  	<div>
		  		<h3>Heading comes here</h3>
		  		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
		  	</div>
		  	
		  	<Link to="/project-01/"><img src={HeroImg01} alt="test" />
		  	</Link>
		    
		</article>
		<article>
		  	<div>
		  		<h3>Heading comes here</h3>
		  		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
		  	</div>
		  	
		  	<Link to="/"><img src={HeroImg02} alt="test" /></Link>
		    
		</article>
		<article>
		  	<div>
		  		<h3>Heading comes here</h3>
		  		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
		  	</div>
		  	
		  	<Link to="/"><img src={HeroImg03} alt="test" /></Link>
		    
		</article>

		{children}
	</section>
 

  )