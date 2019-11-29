import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ListLink from '../components/ListLink'

export default ({ data }) => {
  return (
    <Layout>
      <ul>
        {data.dragonflies.species.map(
          ({ items_id, scientific_name }, index) => (
            <ListLink to={`/species/${items_id}`} key={items_id}>
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
      }
    }
  }
`
