import React from 'react'
import { graphql } from 'gatsby'
import { getNamesList } from '../utils/getNamesList'
import Layout from '../components/LayoutOne'
import Search from '../components/Search'
import StartpageHexagons from '../components/StartpageHexagons'

export default ({ data }) => {
  return (
    <Layout
      head={
        <>
          <Search names={getNamesList(data.dragonflies.species)} />
        </>
      }
    >
      <StartpageHexagons></StartpageHexagons>
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
