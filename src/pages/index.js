import React from "react"

import Layout from "../components/layout"
import Article from "../components/article"
import { Link } from "gatsby"
import "../styles/styles.scss"


const Page = () => (

  <Layout> 
    
  	<div className="content">
  		<div className="site-title">
		 	<h1><b>Hi! I am Heather</b>, a product designer at <b><Link to="https://www.experieco.com/">Experieco</Link></b> in New Zealand.</h1>
		    
	 	</div>
	   
	    <Article></Article>
  	</div>
  	<footer>
  		<div class="content-fullwidth">
  			<span>Heather Song © 2020</span>
  		</div>  
  	</footer>
 	
  </Layout>
);

export default Page;