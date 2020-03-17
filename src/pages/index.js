import React from "react"
import Layout from "../components/layout"
import Article from "../components/article"
import "../styles/styles.scss"


const Page = () => (

  <Layout> 
 	<div class="site-title">
	 	<h1>Heading comes here</h1>
	    <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
 	</div>
   
    <Article test="testing"></Article>
  </Layout>
);

export default Page;