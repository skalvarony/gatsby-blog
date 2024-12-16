import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

// Container to wrap the entire blog list
const Container = styled.div`
  max-width: 900px;
  margin: 4rem auto;
  padding: 2rem;
  font-family: "Helvetica Neue", Arial, sans-serif;
  background: #ffffff;
  color: #333;
  border-radius: 8px;
  //box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);

  @media (max-width: 600px) {
    margin: 2rem;
    padding: 1rem;
  }
`

// Main blog title
const Title = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  letter-spacing: 1px;
  color: black; /* React brand color */

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`

// Subheader for showing total posts
const SubTitle = styled.h4`
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 400;
  color: #666;
`

// Single blog entry container
const BlogBody = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eaeaea;
`

// Link styling for entire post entry
const BlogLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;

  &:hover {
    color: #61dafb;
  }
`

// Post title styling
const BlogTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.2;

  & span {
    display: inline-block;
    font-size: 0.9rem;
    color: #999;
    margin-left: 1rem;
  }
`

// Excerpt or description text
const BlogExcerpt = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
`

export default ({ data }) => {
  return (
    <Layout>
      <Container>
        <Title>REACT BLOG</Title>
        <SubTitle>{data.allMarkdownRemark.totalCount} Posts</SubTitle>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogBody key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title}
                <span>— {node.frontmatter.date}</span>
              </BlogTitle>
            </BlogLink>
            <BlogExcerpt>
              {node.frontmatter.description || node.excerpt}
            </BlogExcerpt>
          </BlogBody>
        ))}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
          }
          fields {
            slug
          }
          excerpt(truncate: true)
        }
      }
    }
  }
`
