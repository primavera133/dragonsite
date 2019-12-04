import React from 'react'
import { graphql } from 'gatsby'
import { getNamesList } from '../utils/getNamesList'
import Layout from '../components/Layout'
import ListLink from '../components/ListLink'
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
      <ul>
        {data.dragonflies.species.map(
          ({ items_id, scientific_name }, index) => (
            <ListLink to={`/species/${scientific_name}`} key={items_id}>
              {scientific_name}
            </ListLink>
          )
        )}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    dragonflies {
      species {
        items_id
        scientific_name
        local_names
      }
    }
  }
`
