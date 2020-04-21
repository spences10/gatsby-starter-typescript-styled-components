import { Link } from "gatsby"
import React from "react"
import SEO from "react-seo-component"

export default () => (
  <>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)
