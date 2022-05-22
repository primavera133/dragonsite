import React from 'react'
import { ListLink } from './ListLink'
// import styled from "@emotion/styled"

export const GenusSpecieList = ({ species }) => (
  <ul>
    {species.map((specie, idx) => (
      <ListLink to={`/species/${specie.scientific_name}`} key={`specie_${idx}`}>
        {specie.scientific_name}
      </ListLink>
    ))}
  </ul>
)
