import React from 'react'
import { Family } from '../types/gql-types'
import { ListLink } from './ListLink'

type FamiliesListProps = {
  families: Family[]
}

export const FamiliesList: React.FC<FamiliesListProps> = ({ families }) => (
  <ul>
    {families.map((fam, idx) => (
      <ListLink to={`/families/${fam.family_name}`} key={`fam_${idx}`}>
        {fam.family_name}
      </ListLink>
    ))}
  </ul>
)
