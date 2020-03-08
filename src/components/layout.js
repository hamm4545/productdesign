import React from "react"
import { Link } from "gatsby"


export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header >
      <Link to="/">
        <h3 >MySweetSite</h3>
      </Link>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/work/">Work</Link>
        
      </ul>
    </header>
    {children}
  </div>
)