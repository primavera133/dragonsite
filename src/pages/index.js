import React from 'react'
import Layout from '../components/Layout'

export default ({ data }) => (
  <Layout>
    <h1>Hello visitor!</h1>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
