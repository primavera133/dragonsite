import React from 'react'
import { graphql } from 'gatsby'
import { getNamesList } from '../utils/getNamesList'
import LayoutOne from '../components/LayoutOne'
import Search from '../components/Search'
import FamiliesList from '../components/FamiliesList'

export default ({ data }) => {
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
      <FamiliesList families={data.dragonflies.taxonomy.families} />
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
