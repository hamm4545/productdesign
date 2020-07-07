import React from "react"
import Nav from "../components/nav"



export default ({ children }) => (
  <div class="o-body">
     <div class="c-header__wrapper">
      <Nav></Nav>
     </div>

    {children}
  </div>
)
