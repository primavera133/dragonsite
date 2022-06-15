import React from 'react'
import { Specie } from '../types/gql-types'
import { ListLink } from './ListLink'

type GenusSpecieListProps = {
  species: Specie[]
}

export const GenusSpecieList: React.FC<GenusSpecieListProps> = ({
  species,
}) => (
  <ul>
    {species.map((specie, idx) => (
      <ListLink to={`/species/${specie.scientific_name}`} key={`specie_${idx}`}>
        {specie.scientific_name}
      </ListLink>
    ))}
  </ul>
)
