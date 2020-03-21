import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"



export default ({ children }) => (
  <div class="">
     <div class="content">
      <Nav></Nav>
     </div>
    
    {children}
  </div>
)