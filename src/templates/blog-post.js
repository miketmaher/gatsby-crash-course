import React from 'react'
import { Link, graphql } from 'gatsby'

const Template = ({ data }) => {
  const post = data.markdownRemark

  return (
    <div>
      <Link to="/blog">Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted on {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`

export default Template
