import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Blog"
        keywords={[`gatsby`, `application`, `react`]}
        description="Crash course in gatsbyJS"
      />
      <h1>Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(post => {
        return (
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>
              Posted by {post.node.frontmatter.author} on{' '}
              {post.node.frontmatter.date}
            </small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <br />
            <hr />
          </div>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            author
            date
          }
        }
      }
    }
  }
`

export default BlogPage
