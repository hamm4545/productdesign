import React from "react"
import { Link } from "gatsby"
import LogoImg from "../images/logo.svg"


export default ({ children }) => (
  <div class="content">
  
      <header>
         <Link to="/"><img src={LogoImg} alt="test" /></Link>
        <ul class="nav">
          <Link to="/">Work</Link>
          <Link to="/about/">About</Link>       
        </ul>      
      </header>   
    
    
    {children}
  </div>
)