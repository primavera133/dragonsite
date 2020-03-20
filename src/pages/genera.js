import React from 'react'
import { graphql } from 'gatsby'
import { getNamesList } from '../utils/getNamesList'
import LayoutOne from '../components/LayoutOne'
import Search from '../components/Search'
import GeneraList from '../components/GeneraList'

export default ({ data }) => {
  const genera = data.dragonflies.genera.sort((a, b) => {
    if (a.genus_name < b.genus_name) return -1
    if (a.genus_name > b.genus_name) return 1
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
      <h2>Genera of Odonata</h2>
      <p>These are the genera of Odonata covered on this site.</p>
      <GeneraList genera={genera} />
    </LayoutOne>
  )
}

export const query = graphql`
  query {
    dragonflies {
      genera {
        genus_name
      }
      species {
        items_id
        scientific_name
        local_names
      }
    }
  }
`
