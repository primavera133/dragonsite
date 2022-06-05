import * as React from 'react'

import { Seo } from '../components/Seo'

import { graphql } from 'gatsby'
import { getNamesList } from '../utils/getNamesList'
import { LayoutOne } from '../components/LayoutOne'
import { Search } from '../components/Search'
import { StartpageHexagons } from '../components/StartpageHexagons'

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title="Home" />
      <LayoutOne
        head={
          <>
            <Search names={getNamesList(data.dragonflies.species)} />
          </>
        }
      >
        <StartpageHexagons></StartpageHexagons>
      </LayoutOne>
    </>
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

export default IndexPage
