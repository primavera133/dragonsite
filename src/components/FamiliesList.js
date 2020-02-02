import React from 'react'
// import styled from '@emotion/styled'
import ListLink from './ListLink'

export default ({ families }) => (
  <ul>
    {families.map((fam, idx) => (
      <ListLink to={`/families/${fam.family_name}`} key={`fam_${idx}`}>
        {fam.family_name}
      </ListLink>
    ))}
  </ul>
)
