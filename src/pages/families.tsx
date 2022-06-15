import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { SiteDataProps } from '../types/siteDataProps'

import { getNamesList } from '../utils/getNamesList'
import { LayoutOne } from '../components/LayoutOne'
import { Search } from '../components/Search'
import { FamiliesList } from '../components/FamiliesList'

const Families: React.FC<PageProps<SiteDataProps>> = ({ data }) => {
  const families = data.dragonflies.taxonomy.families.sort((a, b) => {
    if (a.family_name < b.family_name) return -1
    if (a.family_name > b.family_name) return 1
    return 0
  })
  return (
    <LayoutOne
      head={
        <>
          <Search names={getNamesList(data.dragonflies.species)} />
        </>
      }
    >
      <h2>Families of Odonata</h2>
      <p>These are the families of Odonata covered on this site.</p>
      <FamiliesList families={families} />
    </LayoutOne>
  )
}

export const query = graphql`
  query {
    dragonflies {
      taxonomy {
        families {
          family_name
        }
      }
      species {
        items_id
        scientific_name
        local_names
      }
    }
  }
`
export default Families
