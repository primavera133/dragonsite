import React from 'react'
import styled from '@emotion/styled'

const DD = styled.dd`
  flex: 0 1 auto;
  margin: 0;
  order: 3;
  text-align: right;
  display: flex;
  align-items: center;
`

export const Definition = ({ children }) => <DD>{children}</DD>
