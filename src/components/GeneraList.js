import React from 'react'
// import styled from '@emotion/styled'
import ListLink from './ListLink'

export default ({ genera }) => (
  <ul>
    {genera.map((genus, idx) => (
      <ListLink to={`/genus/${genus.genus_name}`} key={`gen_${idx}`}>
        {genus.genus_name}
      </ListLink>
    ))}
  </ul>
)
