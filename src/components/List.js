import React from 'react'
import styled from '@emotion/styled'

const Ul = styled.ul`
  // margin: 0;
  // padding: 0;
`

export default ({ children }) => {
  return <Ul>{children}</Ul>
}
