import React from 'react'
import styled from '@emotion/styled'

const Definition = styled.dd`
  flex: 0 1 auto;
  margin: 0;
  order: 3;
  text-align: right;
  display: flex;
  align-items: center;
`

export default ({ children }) => <Definition>{children}</Definition>
