import React from 'react'
import styled from '@emotion/styled'
import { ListLink } from './ListLink'
import { Genus } from '../types/gql-types'

type GeneraListProps = {
  genera: Genus[]
}

const UL = styled.ul`
  text-transform: capitalize;
`

export const GeneraList: React.FC<GeneraListProps> = ({ genera }) => (
  <UL>
    {genera.map((genus, idx) => (
      <ListLink to={`/genera/${genus.genus_name}`} key={`gen_${idx}`}>
        {genus.genus_name}
      </ListLink>
    ))}
  </UL>
)
