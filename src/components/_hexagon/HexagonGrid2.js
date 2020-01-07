import React from 'react'
import styled from '@emotion/styled'
import SpecieHex from './SpecieHex2'

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  font-family: sans-serif;
  list-style-type: none;

  @media (min-width: 1201px) {
    /* <- 5-4  hexagons per row */
    padding-bottom: 4.4%;
  }

  @media (max-width: 1200px) and (min-width: 901px) {
    /* <- 4-3  hexagons per row */
    padding-bottom: 5.5%;
    font-size: 13px;
  }

  @media (max-width: 900px) and (min-width: 601px) {
    /* <- 4-3  hexagons per row */
    padding-bottom: 5.5%;
    font-size: 13px;
  }

  @media (max-width: 600px) {
    /* <- 3-2  hexagons per row */
    padding-bottom: 7.4%;
    font-size: 14px;
  }

  @media (max-width: 400px) {
    /* <- 2-1  hexagons per row */
    padding-bottom: 11.2%;
    // font-size: 12px;
    font-size: 8px;
  }
`

const HexagonGrid = ({ families }) => (
  <Grid>
    {families.map(fam =>
      fam.generas.map(gen =>
        gen.species.map(sp => (
          <SpecieHex
            scientific_name={sp.scientific_name}
            family={fam.family_name}
            genera={gen.genera_name}
            localNames={sp.local_names[0]}
            images={sp.images}
            key={`hex_${sp.items_id}`}
          />
        ))
      )
    )}
  </Grid>
)

export default HexagonGrid
