import React from "react"
import { Link } from "gatsby"
import HeroImg01 from "../images/grow@-candidates.jpg"

export default ({ children }, props) => (
	<section>
		<article>
		  	<div>
		  		<h3>Heading comes here</h3>
		  		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
		  	</div>
		  	
		  	<Link to="/"><img src={HeroImg01} alt="test" />
		  	</Link>
		    
		</article>
		<article>
		  	<div>
		  		<h3>Heading comes here</h3>
		  		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
		  	</div>
		  	
		  	<Link to="/"><img src={HeroImg01} alt="test" /></Link>
		    
		</article>
		<article>
		  	<div>
		  		<h3>Heading comes here</h3>
		  		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
		  	</div>
		  	
		  	<Link to="/"><img src={HeroImg01} alt="test" /></Link>
		    
		</article>

		{children}
	</section>
 

  )