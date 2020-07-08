import React from "react"
import { Link } from "gatsby"
import LogoImg from "../images/logo.svg"

const isWorkPage = ({ location }) => {
  return location.pathname === '/' ? { className: "selected" } : {}
}

const isAboutPage = ({ location }) => {
  return location.pathname === '/about/' ? { className: "selected" } : {}
}

export default ({ children }) => (

  <header className="content">
	<Link to="/"><img src={LogoImg} alt="Heather Song" /></Link>
	<ul class="nav">
		<Link to="/" getProps={isWorkPage}>Work</Link>
		<Link to="/about/" getProps={isAboutPage}>About</Link>
	</ul>

    {children}
  </header>
)
