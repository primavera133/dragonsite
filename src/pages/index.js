import React from 'react'
import { graphql } from 'gatsby'
import { getNamesList } from '../utils/getNamesList'
import Layout from '../components/Layout'
import Search from '../components/Search'

export default ({ data }) => {
  return (
    <Layout
      head={
        <>
          <Search names={getNamesList(data.dragonflies.species)} />
        </>
      }
    >
      <h1>Hello visitor!</h1>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    dragonflies {
      species {
        items_id
        scientific_name
        local_names
      }
    }
  }
`
