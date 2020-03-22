import React from "react"
import Nav from "../components/nav"



export default ({ children }) => (
  <div class="">
     <div class="content">
      <Nav></Nav>
     </div>
    
    {children}
  </div>
)