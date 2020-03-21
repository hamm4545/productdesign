import React from "react"
import Layout from "../components/layout"
import Article from "../components/article"
import "../styles/styles.scss"


const Page = () => (

  <Layout> 
  	<div class="content">
  		<div class="site-title">
		 	<h1>Hi! I am Heather, a product designer based in New Zealand.</h1>
		    <p>My passion is to elevate strategy and design to create products that are more user-centric and viable. I love to solve abstract problems into easy and simple solutions through empathy with users perspective.
</p>
	 	</div>
	   
	    <Article test="testing"></Article>
  	</div>
 	
  </Layout>
);

export default Page;