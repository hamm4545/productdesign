import React from "react"
import { Link } from "gatsby"

import CandidatesImg from "../components/img-h-candidates"
import ManagersImg from "../components/img-h-managers"
import TetherImg from "../components/img-h-tether"


export default ({ children }, props) => (
	<section>
		
		<article>
		  	<div>
		  		<h2>Grow@for workers</h2>
		  		<p>Lead UX and UI design</p>
		  	</div>		  	
		  
		  	<Link to="/grow-workers/" className="hover">
		  	<CandidatesImg></CandidatesImg>		  	
		  	</Link>
		    
		</article>
		<article>
		  	<div>
		  		<h2>Grow@ for managers</h2>
		  		<p>Lead UX and UI design</p>
		  	</div>
		  	
		  	<Link to="/grow-manager/" className="hover">
		  	<ManagersImg></ManagersImg>
		  	</Link>
		    
		</article>
		<article>
		  	<div>
		  		<h2>Tether IAQ</h2>
		  		<p>Lead UI design</p>
		  	</div>
		  	
		  	<Link to="/tether/" className="hover">
		  		<TetherImg></TetherImg>
		  	</Link>
		    
		</article>

		{children}
	</section>
 

  )