import * as React from 'react'

import { Seo } from '../components/Seo'

import { PageProps, graphql } from 'gatsby'
import { SiteDataProps } from '../types/siteDataProps'
import { getNamesList } from '../utils/getNamesList'
import { LayoutOne } from '../components/LayoutOne'
import { Search } from '../components/Search'
import { StartpageHexagons } from '../components/StartpageHexagons'

const IndexPage: React.FC<PageProps<SiteDataProps>> = ({ data }) => {
  return (
    <>
      <Seo title="Home" />
      <LayoutOne
        head={<Search names={getNamesList(data.dragonflies.species)} />}
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
