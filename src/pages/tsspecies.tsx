import React from 'react'
import { PageProps, Link, graphql } from "gatsby"
import { Dragonflies } from '../types/dragonflies'

type DataProps = {
  dragonflies: Dragonflies
}

const Species : React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <>
      <h1>Species</h1>
      <ul>
        {data.dragonflies.species.map(({ scientific_name }) => (
          <li key={scientific_name}>
            <p>{scientific_name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Species;

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
