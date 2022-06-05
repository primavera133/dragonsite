import React from 'react'
import { ListLink } from './ListLink'

export const FamiliesList = ({ families }) => (
  <ul>
    {families.map((fam, idx) => (
      <ListLink to={`/families/${fam.family_name}`} key={`fam_${idx}`}>
        {fam.family_name}
      </ListLink>
    ))}
  </ul>
)
