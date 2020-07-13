import React from "react"
import Nav from "../components/nav"
import Helmet from "react-helmet"


export default ({ children }) => (
  <div class="o-body">
  	<Helmet>
        <title>About - Heather Song</title>
        <link rel="canonical" href="http://heather-song.com/" />
    </Helmet>
     <div class="c-header__wrapper">
      <Nav></Nav>
     </div>

    {children}
  </div>
)
