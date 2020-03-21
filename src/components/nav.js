import React from "react"
import { Link } from "gatsby"
import LogoImg from "../images/logo.svg"

export default ({ children }) => (
  <header>
	<Link to="/"><img src={LogoImg} alt="Heather Song" /></Link>
	<ul class="nav">
		<Link to="/" class="selected">Work</Link>
		<Link to="/about/">About</Link>       
	</ul> 
    
    {children}
  </header>
)
