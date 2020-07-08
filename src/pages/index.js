import React from "react"
import Layout from "../components/layout"
import Article from "../components/article"
import "../styles/styles.scss"

const Page = () => (

  <Layout> 
  	<div className="content">
  		<div className="site-title">
		 	<h1><b>Hi! I am Heather</b>, a product designer at <b><a href="https://www.experieco.com/" target="_blank">Experieco</a></b> in New Zealand.</h1>
		    
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