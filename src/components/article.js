import React from "react"
import { Link } from "gatsby"
import HeroImg01 from "../images/grow@-candidates.jpg"
import HeroImg02 from "../images/grow@-Group2.jpg"
import HeroImg03 from "../images/project-Group3.jpg"

export default ({ children }, props) => (
	<section>
		<article>
		  	<div>
		  		<h2>Grow@for workers</h2>
		  		<p>Lead UX and UI design</p>
		  	</div>
		  	
		  	<Link to="/grow-workers/"><img src={HeroImg01} alt="test" />
		  	</Link>
		    
		</article>
		<article>
		  	<div>
		  		<h2>Grow@ for managers</h2>
		  		<p>Lead UX and UI design</p>
		  	</div>
		  	
		  	<Link to="/grow-manager/"><img src={HeroImg02} alt="test" /></Link>
		    
		</article>
		<article>
		  	<div>
		  		<h2>Tether IAQ</h2>
		  		<p>Lead UI design</p>
		  	</div>
		  	
		  	<Link to="/tether/"><img src={HeroImg03} alt="test" /></Link>
		    
		</article>

		{children}
	</section>
 

  )