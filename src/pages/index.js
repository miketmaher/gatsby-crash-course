import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`]}
      description="Crash course in gatsbyJS"
    />
    <h1>Weclome to the site</h1>
    <p>This is a sample site for the gatsby crash course</p>
  </Layout>
)

export default IndexPage
