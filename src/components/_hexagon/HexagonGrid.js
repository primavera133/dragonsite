import React from 'react'
import styled from '@emotion/styled'
import SpecieHex from './SpecieHex'

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: 0 auto;
  padding: 0;
  list-style: none;

  @media (min-width: 1920px) {
    width: 1600px;
  }
  @media (max-width: 1919px) and (min-width: 1280px) {
    width: 1100px;
  }
  @media (max-width: 1279px) and (min-width: 1024px) {
    width: 940px;
  }
  @media (max-width: 1023px) and (min-width: 781px) {
    width: 780px;
  }
  @media (max-width: 780px) and (min-width: 640px) {
    width: 578px;
  }
  @media (max-width: 639px) and (min-width: 425px) {
    width: 360px;
  }
  @media (max-width: 424px) {
    width: 290px;
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
