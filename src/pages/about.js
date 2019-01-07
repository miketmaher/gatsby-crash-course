import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`gatsby`, `application`, `react`]}
        description="Crash course in gatsbyJS"
      />
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
        minus accusamus numquam laboriosam rem cupiditate culpa dicta natus eos,
        itaque consequuntur, tempore assumenda deserunt mollitia iusto harum. In
        numquam impedit natus, hic ab nesciunt voluptate aliquid deleniti itaque
        dolores? Tenetur.
      </p>
    </Layout>
  )
}

export default AboutPage
