import React from 'react'

type DefinitionListProps = {
  children: JSX.Element | JSX.Element[]
}

import styled from '@emotion/styled'

const DL = styled.dl``

export const DefinitionList: React.FC<DefinitionListProps> = ({ children }) => (
  <DL>{children}</DL>
)
