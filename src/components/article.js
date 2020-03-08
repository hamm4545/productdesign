import React from "react"
import { graphql } from "gatsby"

export default ({ children }) => (
  <article>
  	<h3>Heading comes here</h3>
  	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
    {children}
  </article>
  )