import React from "react"
import { graphql } from "gatsby"
import { getNamesList } from "../utils/getNamesList"
import LayoutOne from "../components/LayoutOne"
import Search from "../components/Search"
import HexagonGrid from "../components/_hexagon/HexagonGrid2"

export default ({ data }) => {
  return (
    <LayoutOne
      head={
        <>
          <Search names={getNamesList(data.dragonflies.species)} />
        </>
      }
    >
      <HexagonGrid families={data.dragonflies.taxonomy.families} />
    </LayoutOne>
  )
}

export const query = graphql`
  query {
    dragonflies {
      taxonomy {
        families {
          family_name
          generas {
            genera_name
            species {
              items_id
              scientific_name
              local_names
              images {
                cloud_name
                all {
                  public_id
                }
              }
            }
          }
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
